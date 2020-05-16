import React from 'react';

function Heading () {

const d = new Date();
const time = d.getHours()
const strMsg = "";
const customStyle = {
  color: "red"
}
time = 18;
if (time>0 && time < 12) {
  strMsg = "Good Morning";
  customStyle.color = "red";
} else if (time >12 && time < 18) {
  strMsg = "Good Afternoon";
  customStyle.color = "green";
} else {
  strMsg = "Good Evening";
  customStyle.color = "blue";
};


return <h1 style={customStyle}>{strMsg}</h1>
}

export default Heading;

