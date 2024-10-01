import { CgClose } from "react-icons/cg";

// styles
import "./CloseBtn.scss";

const CloseBtn = ({ handleClose }) => {
  return <CgClose className="close-icon" onClick={handleClose} />;
};

export default CloseBtn;
