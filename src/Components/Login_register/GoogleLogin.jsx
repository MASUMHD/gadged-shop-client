import React from "react";
import useAuth from "../../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const navigate = useNavigate();
  const handelGoogleLogin = () => {
    googleLogin().then(() => {
        navigate("/");
    })
    
  };
  return (
    <div>
      <div className="divider -mt-5 w-1/2 mx-auto">OR</div>

      <div className="flex justify-center mb-10">
        <button
          className="btn w-1/2 btn-prima btn-outline"
          onClick={handelGoogleLogin}
          type="button"
        >
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
