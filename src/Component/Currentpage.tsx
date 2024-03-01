import React, { useState } from "react";

const MyFirstTypeScript: React.FC = () => {
  const [date, setDate] = useState<string | null>(null);

  const displayDate = () => {
    setDate(new Date().toString());
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <div
        className="main-div"
        style={{ padding: "20px", width: "480px", height: "200px" }}
      >
        <div>
          <h1 style={{ fontFamily: "Ga Maamli",textDecorationLine:"underline" }}>Current Date and Time</h1>
          <button
            type="button"
            onClick={displayDate}
            style={{
              padding: "5px",
              paddingLeft: "15px",
              paddingRight: "15px",
              backgroundColor: "#0099ff",
              color: "white",
              fontFamily: "Ga Maamli",
              borderRadius: "50px",
              cursor:"pointer"
            }}
          >
            Click me
          </button>
          <div
            style={{
              color: "#0099ff",
              padding: "2px",
              borderRadius: "10px",
              fontWeight: "bold",
              marginTop:"20px"
            }}
          >
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyFirstTypeScript;