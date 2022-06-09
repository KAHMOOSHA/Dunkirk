import React from "react";
import "./text&desc.css";
import oscar from "../media/oscarIcon.png";
const TextDesc = () => {
  return (
    <div className="text__Desc__containter">
      <section className="text__left halfs  fade-in-from-left">
        <h1>WON 3 OSCARS</h1>
        the enemy have driven the british and freanch armies to the sea. <br />
        trapped at dunkirk, they await their fate.
        <br />
        hoping for deliverance.
        <br />
        for a miracle.
      </section>
      <section className="text__right halfs fade-in-from-right ">
        <h1>SUMMARY</h1>
        In May 1940, Germany advanced into France, trapping Allied troops on the
        beaches of Dunkirk. Under air and ground cover from British and French
        forces, troops were slowly and methodically evacuated from the beach
        using every serviceable naval and civilian vessel that could be found.
        At the end of this heroic mission, 330,000 French, British, Belgian and
        Dutch soldiers were safely evacuated.
      </section>
    </div>
  );
};

export default TextDesc;
