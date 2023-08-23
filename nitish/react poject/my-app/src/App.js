import React from "react";
import "./index.css"

let time = new Date().getHours();
let greet = "";
let cssStyle = {};
if ((time >= 0) & (time <12)) {
  greet = "Good Morning";
  cssStyle.color = "red";
}else if ((time >=12) & (time <= 18)) {
  greet = "Good Afternoon";

  cssStyle.color = "yellow";
}else {
  greet = "Good Evening";
  cssStyle.color = "green";
}
const App = () => {
  return(
    <>
    <div>
      <h2>
         <span style={cssStyle}>{greet}</span>
      </h2>
    </div>
    </>
  );
};


export default App;