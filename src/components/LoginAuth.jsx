import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import StatusBar from "./StatusBar";
import axios from "axios";

const LoginAuth = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const location = useLocation();
  const mobileNumber = location.state?.mobileNumber;

  const navigate = useNavigate();

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const verifyOtp = () => {
    const paramValue = new URLSearchParams();
    paramValue.append("phone", mobileNumber);
    paramValue.append("dial_code", "+91");
    paramValue.append("otp", otp.join(""));
    axios
      .post("https://staging.fastor.ai/v1/pwa/user/login", paramValue, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        if (res.data?.status_code === 200) {
          localStorage.setItem("token", res.data.data.token);

          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <StatusBar />
      <div className="mb-6">
        <button
          onClick={() => navigate("/")}
          className="w-10 h-10 rounded-full border border-[#E8ECF4]
              flex items-center justify-center"
        >
          ←
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-83">
          <h1 className="text-[24px] font-semibold text-[#1E232E]">
            OTP Verification
          </h1>

          <p className="mt-2 text-[16px] text-[#8391A1]">
            Enter the verification code we just sent on your Mobile Number.
          </p>

          <div className="mt-6 flex justify-between">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-12 h-14 border border-[#E8ECF4] rounded-lg
                text-center text-[18px] font-medium text-[#1E232E]
                focus:outline-none focus:border-[#FF6B6B]"
              />
            ))}
          </div>

          <button
            onClick={verifyOtp}
            className="mt-8 w-full h-14 bg-[#FF6B6B] rounded-lg text-white text-[16px] font-semibold"
          >
            Verify
          </button>

          <p className="mt-4 text-center text-[14px] text-[#8391A1]">
            Didn’t receive code?{" "}
            <span className="text-[#FF6B6B] font-medium cursor-pointer">
              Resend
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginAuth;
