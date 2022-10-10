import { useEffect, useState } from "react";
import "./styles.css";

const Modal = ({ show = {}, children, title, showLarge = false, footer }) => {
  const [showModal, setShowModal] = useState(show);

  useEffect(() => {
    setShowModal(true);
  }, [show]);

  return (
    <>
      <div>
        {showModal && (
          <div className="modal">
            <div className={`modal-dialog ${showLarge ? "modal-xl" : ""}`}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">{children}</div>
                {footer && <div className="modal-footer">{footer}</div>}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
