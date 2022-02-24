import React, { useState } from 'react';
import styles from './App.module.scss';
import { Route } from 'react-router-dom';
import Main from "../Pages/Main/Main";
import Quiz from "../Pages/Quiz/Quiz";
import Result from "../Pages/Result/Result";
import { IShoe } from '../../utils/interfaces'

function App() {
  const [shoesRating, setShoesRating ] = useState<IShoe[]>([])

  return (
    <div className={styles["app"]}>
      <Route exact path='/'>
        <Main/>
      </Route>
      <Route exact path='/quiz'>
        <Quiz shoesRating={shoesRating} setShoesRating={setShoesRating}/>
      </Route>
      <Route exact path='/result'>
        <Result shoeRating={shoesRating}/>
      </Route>
      <div className={styles['viewport-info']}>
        Applications supports mobile devices only!
      </div>
    </div>
  );
}

export default App;
