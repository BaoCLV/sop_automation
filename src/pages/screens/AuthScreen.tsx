
import { useState } from "react";
import Login from "../views/Auth/Login";
import Signup from "../views/Auth/SignUp";
import Verification from "../views/Auth/Verification";
import ForgotPassword from "../views/Auth/ForgetPassword";

const AuthScreen = ({ setOpen }: { setOpen: (e: boolean) => void }) => {
  const [activeState, setActiveState] = useState("Login");

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement && e.target.id === "screen") {
      setOpen(false);
    }
  };

  return (
    <div
      className="w-full fixed top-0 left-0 h-screen z-[9999] flex items-center justify-center bg-opacity-50"
      id="screen"
      onClick={handleClose}
    >
      <div className="w-[1000px] bg-white z-[9999] rounded shadow-sm p-3 ">
        {activeState === "Login" && (
          <Login setActiveState={setActiveState} setOpen={setOpen} />
        )}
        {activeState === "Signup" && <Signup setActiveState={setActiveState} />}
        {activeState === "Verification" && (
          <Verification setActiveState={setActiveState} />
        )}
        {activeState === "Forgot-Password" && (
          <ForgotPassword setActiveState={setActiveState} />
        )}
      </div>
    </div>
  );
};

export default AuthScreen;
