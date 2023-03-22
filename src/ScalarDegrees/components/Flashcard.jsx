function Flashcard({scaleDegree, currentScale, currentKey, revealAnswer}) {
  return (
    <>
      <div className="flashcard">
        <p> What is the {scaleDegree} degree of {currentKey}?</p> 
        <p className={revealAnswer ? "visibility" : "hidden"} > Answer: {currentScale[(scaleDegree % 7) - 1]}</p> 
      </div>   
    </>
  ); 
}

export default Flashcard;