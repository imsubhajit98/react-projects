import { useState } from "react";
import Model from "./model";
import './model.css'

export default function ModelTest() {
  const [showModelPopup, setShowModelPopup] = useState(false);
  function handleTogglePopup() {
    setShowModelPopup(!showModelPopup);
  }

  function onClose(){
    setShowModelPopup(false)
  }

  return (
    <div>
      <button  onClick={handleTogglePopup}>Open Model Popup</button>
      {showModelPopup && <Model onClose={onClose} body={<div>Customize Body</div>} />}
    </div>
  );
}
