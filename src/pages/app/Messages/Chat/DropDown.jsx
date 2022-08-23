import "./DropDown.scss";
const DropDown = ({ onClose }) => {
  return (
    <div className="modalBackground" onClick={onClose}>
      <div className="user-block">
        <p>Block Babatunde Raji</p>
      </div>
    </div>
  );
};

export default DropDown;
