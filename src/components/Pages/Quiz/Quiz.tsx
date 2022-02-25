import React, { FunctionComponent, useEffect, useState } from 'react';
import { requester } from '../../../utils/requester';
import { IQuizData, IQuestion, IAnswer, IShoe, TRatingIncrease } from '../../../utils/interfaces';
import styles from './Quiz.module.scss';
import Button, { ButtonType } from '../../UI/Button';
import { useHistory } from 'react-router-dom';

interface IQuiz {
  setShoesRating: (shoes: IShoe[]) => void;
  shoesRating: IShoe[];
}

const Quiz: FunctionComponent<IQuiz> = ({ setShoesRating, shoesRating }) => {

  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [quizProgress, setQuizProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const history = useHistory();


  useEffect(() => {
    requester<IQuizData>('/data.json').then(data => {
      setQuestions(data.questions);
      setShoesRating(data.shoes);
    })
  }, [setShoesRating])

  const updateShoesRatings = (ratingIncrease: TRatingIncrease) => {
    const newShoesRating = shoesRating.map(shoe => {
      return {
        ...shoe,
        rating: shoe.rating + (ratingIncrease as any)[shoe.id]
      }
    })

    setShoesRating(newShoesRating)
  }

  const handleChoice = (answer: IAnswer) => {
    updateShoesRatings(answer?.ratingIncrease)

    if (answer.nextQuestion) {
      setQuizProgress(answer.nextQuestion)
    } else {

      setShowLoader(true);
      setTimeout(() => {
        history.push('/result')
      }, 2500)
    }
  }

  const currentQuestion = questions[quizProgress]

  const quizBody = (
    <div className={styles['quiz-body']}>
      <div className={styles['top-text']}>
        <div>Try on quiz</div>
        <div>30 days risk free</div>
      </div>

      <div className={styles['container-outer']}>
        <div className={styles['container-inner']}>
          <span className={styles['question']}>{currentQuestion?.copy}</span>

          <div>
            {currentQuestion?.answers.map((ans, i) =>
              <Button key={i} onClick={() => handleChoice(ans)} type={ButtonType.QUIZ}>{ans.copy}</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  const loader = (
    <div className={styles['loader']}>
      We're running to get your results.
      <img src={`${process.env.PUBLIC_URL}/assets/loader.gif`} alt="" />
    </div>
  )

  return (
    <div className={styles['quiz']}>
      {!showLoader ? quizBody : loader}
    </div>
  );
}

export default Quiz;