import React, { FunctionComponent } from 'react';
import styles from './Main.module.scss';
import { useHistory } from 'react-router-dom'
import Button, { ButtonType } from '../../UI/Button'

const Main: FunctionComponent  = ()  => {
    const history = useHistory()

  return (
    <div className={styles['main']}>
      <div className={styles['container']}>
        <h1>Take the quiz <br/> and try your first pair!</h1>
        <Button onClick={() => { history.push('/quiz')}} type={ButtonType.MAIN}>Try On Trial</Button>
        <div className={styles['sidenote']}>30 Days risk free</div>
      </div>
    </div>
  );
}

export default Main;