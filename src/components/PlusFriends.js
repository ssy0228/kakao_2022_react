import React from "react";

function PlusFriends({ icon, text }) {
  return (
    <>
      <a href="#">
        <i className={icon}></i>
        {text}
      </a>
    </>
  );
}

export default PlusFriends;
