import React from "react";

let time = new Date().getHours();
let greet = "";
let cssStyle = {};
if ((time >= 0) & (time <12)) {
  greet = "Good Morning";
  cssStyle.color = "yellow";
}else if ((time >=12) & (time <= 17)) {
  greet = "Good Afternoon";

  cssStyle.color = "green";
}else {
  greet = "Good Evening";
  cssStyle.color = "red";
}
const App = () => {
  return(
    <>
    <div>
      <h2>
        Hello, <span style={cssStyle}>{greet}</span>
      </h2>
    </div>
    </>
  );
};


export default App;
