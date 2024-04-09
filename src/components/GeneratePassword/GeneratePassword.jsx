import React, { useState } from "react";
import "./GeneratePassword.css";

const GeneratePassword = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const [useSymbols, setUseSymbols] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  const generatePassword = () => {
    let charset = "";
    let newPassword = "";

    if (useSymbols) charset += "!@#$%^&*()";
    if (useNumbers) charset += "0123456789";
    if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < passwordLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = password;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setSuccessMessage("Password copied to clipboard!");
    setTimeout(() => setSuccessMessage(""), 2000);
  };
  return (
    <div className="containerStyle">
      <div className="container-title">
        <h3>Password Generator</h3>
      </div>
      <div className="inputContainerStyle">
        <input
          type="text"
          value={password}
          readOnly
          className="inputStyle password-input"
          placeholder="#@#C#C$C#3fd"
        />
        <button
          className="buttonStyle copyButtonStyle"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>
      {successMessage && (
        <p
          style={{
            color: "green",
            textAlign: "center",
          }}
        >
          {successMessage}
        </p>
      )}
      <div className="inputContainerStyle pwdlengthStyle">
        <label className="labelStyle">Password Length:</label>
        <input
          type="number"
          min="8"
          max="32"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
          className="inputStyle lengthStyle"
        />
      </div>
      <div>
        <label style={{ display: "inline-block", marginBottom: "10px" }}>
          <input
            type="checkbox"
            checked={useSymbols}
            onChange={() => setUseSymbols(!useSymbols)}
            style={{ marginRight: "10px" }}
          />
          Symbols
        </label>
        <br />
        <label style={{ display: "inline-block", marginBottom: "10px" }}>
          <input
            type="checkbox"
            checked={useNumbers}
            onChange={() => setUseNumbers(!useNumbers)}
            style={{ marginRight: "10px" }}
          />
          Numbers
        </label>
        <br />
        <label style={{ display: "inline-block", marginBottom: "10px" }}>
          <input
            type="checkbox"
            checked={useLowerCase}
            onChange={() => setUseLowerCase(!useLowerCase)}
            style={{ marginRight: "10px" }}
          />
          LowerCase
        </label>
        <br />
        <label style={{ display: "inline-block", marginBottom: "10px" }}>
          <input
            type="checkbox"
            checked={useUpperCase}
            onChange={() => setUseUpperCase(!useUpperCase)}
            style={{ marginRight: "10px" }}
          />
          UpperCase
        </label>
      </div>
      <button className="buttonStyle" onClick={generatePassword}>
        Generate Password
      </button>
    </div>
  );
};

export default GeneratePassword;
