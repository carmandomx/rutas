import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

const LoginPage = () => {
  const history = useHistory();
  console.log(history);
  const { signIn } = useAuth();
  return (
    <button
      onClick={() =>
        signIn(() => {
          history.push("/protected");
        })
      }
    >
      Login
    </button>
  );
};

export default LoginPage;
