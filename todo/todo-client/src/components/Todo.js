import { useState } from "react";
import Popup from "./Popup";
import Backdrop from "./Backdrop";

function Todo({ name, onTodoDelete }) {
  const [openPopup, setOpenPopup] = useState(false);

  function onClickDelete() {
    setOpenPopup(true);
  }

  function onPopupCancel() {
    setOpenPopup(false);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <div className="actions">
        <button className="btn" onClick={onClickDelete}>
          Delete
        </button>
        {openPopup ? (
          <Popup name={name} onCancel={onPopupCancel} onDelete={onTodoDelete} />
        ) : null}
        {openPopup && <Backdrop onCancel={onPopupCancel} />}
      </div>
    </div>
  );
}

export default Todo;
