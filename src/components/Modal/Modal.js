const Modal = ({ showModal, onClose, src, alt }) => {
  return (
    showModal && (
      <div className="overlay" onClick={onClose}>
        <div className="modal">
          <img src={src} alt={alt} />
        </div>
      </div>
    )
  );
};
export default Modal;
