import { useState } from "react";
import { MajorKeysMap, KEYS } from "../constants/constants";
import { getRandomInt, getRandomNonZeroInt } from "../Utilities/utilities";
import './scalardegrees.css';
import Flashcard from "./components/Flashcard";
import NoteButtons from "./components/NoteButtons";

function ScalarDegreesPage() {

  const [currentKey, setCurrentKey] = useState(KEYS[getRandomInt(11)]);
  const [currentScale, setCurrentScale] = useState(MajorKeysMap[currentKey]);
  const [scaleDegree, setScaleDegree] = useState(getRandomNonZeroInt(7) + getRandomInt(2)*7);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const submitAnswer = (e) => {
    let submittedAnswer = e.target.value;
    setTotalQuestions(totalQuestions+1);
    if (submittedAnswer === currentScale[(scaleDegree % 7) - 1]) {
      setCorrectAnswers(correctAnswers+1);
      // change color of target button to success
    }
    else {
      // change color of target button to failure 
    }
    setRevealAnswer(true);
  }

  const generateNewQuestion = () => {
    // wonder if there is a way to promisify setCurrentKey.then -> setCurrentScale
    let nextKey = KEYS[getRandomInt(11)];
    setCurrentKey(nextKey);
    setCurrentScale(MajorKeysMap[nextKey]);
    setScaleDegree(getRandomNonZeroInt(7) + getRandomInt(2)*7);
    setRevealAnswer(false);
  }

  return (
    <div className='scalar-degrees'>
      <div className="hud">
        <p>Score: {`${correctAnswers} / ${totalQuestions}`}</p>
      </div>
      <Flashcard 
        currentKey={currentKey}
        scaleDegree={scaleDegree}
        currentScale={currentScale}
        revealAnswer={revealAnswer}
      />
      <NoteButtons
        submitAnswer={submitAnswer}
        disabled={revealAnswer}
      /> 
      <button 
        className={revealAnswer ? "visibility" : "hidden"}
        onClick={generateNewQuestion}>
        Next Question
      </button>
    </div>
  )
}

export default ScalarDegreesPage;