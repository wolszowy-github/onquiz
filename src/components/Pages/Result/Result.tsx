import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './Result.module.scss';
import { IShoe } from '../../../utils/interfaces';
import { useHistory } from 'react-router-dom';

interface IResult {
  shoeRating: IShoe[]
}

const Result: FunctionComponent<IResult> = ({ shoeRating }) => {
  const [sortedResults, setSortedResults] = useState<IShoe[]>([]);
  const history = useHistory()

  useEffect(() => {
    if (!shoeRating.length) {
      history.push('/')
      return
    }
    const results = shoeRating.sort((a, b) => b.rating - a.rating);
    setSortedResults(results);

  }, [shoeRating, history])

  return (
    <div className={styles['result']}>
      <div className={styles['container']}>
        <h2>Congratulations!</h2>
        <p>Based on on selections we've decided on the {sortedResults[0]?.name} and {sortedResults[1]?.name}! <br /> Enjoy the 30 day trial!</p>
      </div>

      <h4>Here is the list of all of our shoes:</h4>
      {sortedResults.map(shoe => (
        <ul key={shoe.id}>
          <li>{shoe.name}</li>
        </ul>
      ))}
    </div>
  );
}

export default Result;