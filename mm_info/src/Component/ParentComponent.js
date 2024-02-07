import { createContext, useContext, useState } from 'react';
import { passData1 } from '../app/counter/counterSlice';
import { useDispatch } from 'react-redux';

const ScoreContext = createContext();


export const ScoreProvider = ({ children }) => {
const dispatch = useDispatch(); 

  const [score, setScore] = useState(0);

  const [coin, setCoin] = useState(0);

  const updateScore = (newScore) => {
    setScore(newScore);
  };

    
  const coin1 = (newScore1) =>{
    if(newScore1 === 100){
      setCoin(1000);
      dispatch(passData1(1000))
    }
    else if(newScore1 === 80 || newScore1 === 90){
      setCoin(100);
      dispatch(passData1(100))
    }
    else if(newScore1 === 60 || newScore1 === 70){
      setCoin(50);
      dispatch(passData1(50))
    }
    else if(newScore1 === 40 || newScore1 === 50){
      setCoin(30);
      dispatch(passData1(30))
    }
    else if(newScore1 === 20 || newScore1 === 30){
      setCoin(30);
      dispatch(passData1(10))
    }
    else if(newScore1 === 10){
      setCoin(10);
      dispatch(passData1(5))
    }
    else if(newScore1<=0){
      setCoin(0);
      dispatch(passData1(0))
    }
  }
 

 

  return (
    <ScoreContext.Provider value={{ score, updateScore ,coin1 , coin}}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => {
  return useContext(ScoreContext);
};
