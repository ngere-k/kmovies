import { useState } from "react";
import { useDispatch } from "react-redux";
import InputRow from "../inputRow/InputRow";
import { CgClose } from "react-icons/cg";
import { registerUser, signInUser } from "../../features/user/userSlice";
import { closeLoginModal } from "../../features/modal/modalSlice";

// styles
import "./Login.scss";

const initialState = {
  username: "",
  email: "",
  password: "",
  isAlreadyMember: true,
};

const Login = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, isAlreadyMember } = state;
    console.log(username, email, password);

    if (isAlreadyMember) {
      dispatch(signInUser({ email, password }));
      dispatch(closeLoginModal());
      setState(initialState);
      return;
    }

    dispatch(registerUser({ username, email, password }));
    setState({ ...initialState, isAlreadyMember: false });
    dispatch(closeLoginModal());
  };

  const toggleMember = () => {
    setState({ ...state, isAlreadyMember: !state.isAlreadyMember });
  };

  return (
    <article className="article-login">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__heading">
          <h2 className="heading-secondary">
            {state.isAlreadyMember ? "Welcome back!" : "Create an Account"}
          </h2>
        </div>

        <div className="form__content">
          {/* user name */}
          {!state.isAlreadyMember && (
            <InputRow
              type="text"
              name="username"
              value={state.username}
              handleChange={handleChange}
            />
          )}
          {/* email */}
          <InputRow
            type="email"
            name="email"
            value={state.email}
            handleChange={handleChange}
          />
          {/* password */}
          <InputRow
            type="password"
            name="password"
            value={state.password}
            handleChange={handleChange}
          />
        </div>

        <div className="form__btn-box">
          <button type="submit" className="btn btn--block">
            {state.isAlreadyMember ? "Login" : "Register"}
          </button>
        </div>

        <p className="form__paragraph">
          {!state.isAlreadyMember
            ? "Already have an account?"
            : "Don't have an account yet?"}
          <button type="button" onClick={toggleMember} className="form__toggle">
            {state.isAlreadyMember ? "Register" : "Login"}
          </button>
        </p>

        <button
          type="button"
          className="form__btn"
          onClick={() => dispatch(closeLoginModal())}
        >
          <CgClose className="form__close" />
        </button>
      </form>
    </article>
  );
};

export default Login;
