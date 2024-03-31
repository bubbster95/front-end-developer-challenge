import { useState } from "react";
import "./welcome-modal.scss";

function WelcomeModal() {
    const [modalVisible, setModalVisible] = useState(true)

    setInterval(() => {
       
    }, 100)


  return (
    <div className={`welcome-modal-wrapper ${modalVisible && 'visible'}`}>
        <h1 className="modal-title modal-title-left">Titan</h1>
        <h1 className="modal-title modal-title-right">Star</h1>
    </div>
  );
}

export default WelcomeModal;
