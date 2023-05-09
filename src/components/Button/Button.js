const Button = ({ onClick }) => {
  return (
    <button type="button" className="load-button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
