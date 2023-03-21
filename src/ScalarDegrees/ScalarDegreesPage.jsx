import { useState } from "react";
import { MajorKeysMap, KEYS } from "../constants/constants";
import { getRandomInt, getRandomNonZeroInt } from "../Utilities/utilities";

function ScalarDegreesPage() {

  const [currentKey, setCurrentKey] = useState(KEYS[getRandomInt(11)]);
  const [currentScale, setCurrentScale] = useState(MajorKeysMap[currentKey]);
  const [scaleDegree, setScaleDegree] = useState(getRandomNonZeroInt(7) + getRandomInt(2)*7);
  return (
    <div className='scalar-degrees'>
      {/* Card component will go here */}
      <p> What is the {scaleDegree} degree of {currentKey}</p>
    </div>
  )
}

export default ScalarDegreesPage;