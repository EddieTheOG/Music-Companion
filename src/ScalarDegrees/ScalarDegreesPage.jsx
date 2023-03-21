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

  const submitAnswer = (e) => {
    let submittedAnswer = e.target.value;
    if (submittedAnswer === currentScale[(scaleDegree % 7) - 1]) {
      // change color of target button to success
    }
    else {
      // change color of target button to failure 
    }
    setRevealAnswer(true);
  }

  const generateNewQuestion = () => {
    setCurrentKey(KEYS[getRandomInt(11)]);
    setCurrentScale(MajorKeysMap[currentKey]);
    setScaleDegree(getRandomNonZeroInt(7) + getRandomInt(2)*7);
    setRevealAnswer(false);
  }

  return (
    <div className='scalar-degrees'>
      <Flashcard 
        currentKey={currentKey}
        scaleDegree={scaleDegree}
        currentScale={currentScale}
        revealAnswer={revealAnswer}
      />
      <NoteButtons
        submitAnswer={submitAnswer}
      />
      { revealAnswer && 
        <button onClick={generateNewQuestion}>
          Next Question
        </button>
      }
    </div>
  )
}

export default ScalarDegreesPage;