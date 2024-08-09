// styles
import "./InputRow.scss";

const InputRow = ({ type, placeholder, name, handleChange, value }) => {
  return (
    <label className="input__box">
      <span className="input__name">{name}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="input__field"
        required
      />
    </label>
  );
};

export default InputRow;
