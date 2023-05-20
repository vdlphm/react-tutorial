function Popup({ name, onCancel, onDelete }) {
  return (
    <div className="popup">
      <p>Do you wnat to delete {name}?</p>
      <div>
        <button className="btn btn--alt" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn" onClick={onDelete}>
          Delete!
        </button>
      </div>
    </div>
  );
}

export default Popup;
