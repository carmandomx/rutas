import React from "react";
import { useAuth } from "../provider/AuthProvider";
const AuthButton = () => {
  const { user, signOut } = useAuth();
  return (
    <div>
      {user ? (
        <button onClick={() => signOut(() => {})}>Logout</button>
      ) : (
        "You are not logged in"
      )}
    </div>
  );
};
export default AuthButton;
