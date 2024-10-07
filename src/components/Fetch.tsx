import axios from "axios";
import { useState, useReducer } from "react";

type State = {
  error: string | null;
  greeting: string | null;
};

type Action = {
  type: "SUCCESS" | "ERROR";
  payload: string;
};

const initialState = {
  error: null,
  greeting: null,
};

function greetingReducer(state: State, action: Action) {
  switch (action.type) {
    case "SUCCESS": {
      return {
        error: null,
        greeting: action.payload,
      };
    }
    case "ERROR": {
      return {
        error: action.payload,
        greeting: null,
      };
    }
    default: {
      return state;
    }
  }
}

export default function Fetch({ url }: { url: string }) {
  const [{ error, greeting }, dispatch] = useReducer(
    greetingReducer,
    initialState
  );
  const [buttonClicked, setButtonClicked] = useState(false);

  const fetchGreeting = async (url: string) =>
    axios
      .get(url)
      .then((response) => {
        const { data } = response;
        const { greeting } = data;
        dispatch({ type: "SUCCESS", payload: greeting });
        setButtonClicked(true);
      })
      .catch((error) => {
        dispatch({ type: "ERROR", payload: error });
      });

  const buttonText = buttonClicked ? "Ok" : "Load Greeting";

  return (
    <div>
      <button onClick={() => fetchGreeting(url)} disabled={buttonClicked}>
        {buttonText}
      </button>
      {greeting && <h1>{greeting}</h1>}
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </div>
  );
}

