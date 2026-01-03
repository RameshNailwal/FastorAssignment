import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import StatusBar from "./StatusBar";

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate();

  const sendCode = () => {
    const paramValue = new URLSearchParams();
    paramValue.append("phone", mobileNumber);
    paramValue.append("dial_code", "+91");

    axios
      .post("https://staging.fastor.ai/v1/pwa/user/register", paramValue, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        if (res.data?.status_code === 200) {
          navigate("/loginauth", {
            state: { mobileNumber },
          });
        }
      })
      .catch(console.log);
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      <StatusBar />

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-sm px-6">
          <h1 className="text-2xl font-urbanist font-bold text-[#1E232C]">
            Enter Your Mobile Number
          </h1>

          <p className="text-[16px] text-[#8391A1] mt-2 font-urbanist">
            We will send you the 4 digit verification code
          </p>

          <input
            type="text"
            placeholder="Enter your Mobile Number"
            className="w-full mt-6 px-4 py-3 border border-gray-200 rounded-lg
              text-sm placeholder-gray-400 focus:outline-none
              focus:ring-2 focus:ring-blue-400"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            maxLength={10}
          />

          <button
            className="w-full mt-6 py-3 rounded-lg bg-[#ff6f6f]
              text-white font-medium text-sm hover:bg-[#ff6f6f]"
            onClick={sendCode}
          >
            Send Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
