import axios from "axios";
import { useReducer } from "react";

type State = {
  resolved: boolean;
  loading: boolean;
  error: string | null;
};

function Login() {
  const [state, setState] = useReducer(
    (s: State, a: State) => ({ ...s, ...a }),
    {
      resolved: false,
      loading: false,
      error: null,
    },
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // @ts-expect-error bad type for event
    const { usernameInput, passwordInput } = event.target.elements;

    setState({ loading: true, resolved: false, error: null });

    axios
      .post("/api/login", {
        username: usernameInput.value,
        password: passwordInput.value,
      })
      .then(
        ({ data }) => {
          setState({ loading: false, resolved: true, error: null });
          window.localStorage.setItem("token", data.token);
        },
        (error) => {
          setState({ loading: false, resolved: false, error: error.message });
        },
      );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username</label>
          <input id="usernameInput" />
        </div>
        <div>
          <label htmlFor="passwordInput">Password</label>
          <input id="passwordInput" type="password" />
        </div>
        <button type="submit">Submit{state.loading ? "..." : null}</button>
      </form>
      {state.error ? <div role="alert">{state.error}</div> : null}
      {state.resolved ? (
        <div role="alert">Congrats! You're signed in!</div>
      ) : null}
    </div>
  );
}

export default Login;
