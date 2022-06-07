const CatchButton = ({ addElem }) => {
  return (
    <div className="catchButtonDiv">
      <button className="catchButton" onClick={addElem}>
        Catch
      </button>
    </div>
  );
};

export default CatchButton;
