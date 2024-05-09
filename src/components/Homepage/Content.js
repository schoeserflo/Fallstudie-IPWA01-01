import React from 'react';
import Tabelle from "./Tabelle";

function Content() {
  return (
    <div className="centered-content">
    <div className="content">
    <main>
      <h1>Klartext Co2</h1>
      <p>Wir sind die Green-Hand Stiftung und unser Ziel ist es die Co2 Emmissionen der Größten Industrieländer und der größten Indrustieunternhemen unserer Erde unverfälscht zu erfassen.</p>
      <p></p>
      <Tabelle/>
    </main>
    </div>
  </div>
  );
}

export default Content;