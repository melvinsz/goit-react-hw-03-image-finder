const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <li className="gallery-item">
      <img src={src} alt={alt} onClick={onClick} />
    </li>
  );
};
export default ImageGalleryItem;
