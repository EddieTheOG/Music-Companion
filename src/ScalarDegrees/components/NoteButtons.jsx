function NoteButtons({submitAnswer}) {

  return (
    <>
    
      <div className="note-button-group">
        <button className="note-button" onClick={submitAnswer} value={'Ab'}>
          A&#x266d;
        </button>
        <button className="note-button" onClick={submitAnswer} value={'A'}>
          A        
        </button>
        <button className="note-button" onClick={submitAnswer} value={'A#'}>
          A&#x266f;
        </button>
        <button className="note-button" onClick={submitAnswer} value={'Bb'}>
          B&#x266d;        
        </button>
        <button className="note-button" onClick={submitAnswer} value={'B'}>
          B
        </button>
        <button className="note-button" onClick={submitAnswer} value={'C#'}>
          C&#x266f; 
        </button>
        <button className="note-button" onClick={submitAnswer} value={'C'}>
          C
        </button>
        <button className="note-button" onClick={submitAnswer} value={'Db'}>
          D&#x266d;   
        </button>
        <button className="note-button" onClick={submitAnswer} value={'D'}>
          D
        </button>
        <button className="note-button" onClick={submitAnswer} value={'D#'}>
          D&#x266f;
        </button>
        <button className="note-button" onClick={submitAnswer} value={'Eb'}>
          E&#x266d;
        </button>
        <button className="note-button" onClick={submitAnswer} value={'E'}>
          E
        </button>
        <button className="note-button" onClick={submitAnswer} value={'F'}>
          F       
        </button>
        <button className="note-button" onClick={submitAnswer} value={'F#'}>
          F&#x266f;
        </button>
        <button className="note-button" onClick={submitAnswer} value={'Gb'}>
          G&#x266d;
        </button>
        <button className="note-button" onClick={submitAnswer} value={'G'}>
          G        
        </button>
        <button className="note-button" onClick={submitAnswer} value={'G#'}>
          G&#x266f;
        </button>
      </div>
    </>
  );
};

export default NoteButtons;