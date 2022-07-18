import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TableContainer } from "./components/table/TableContainer";
import { HeaderComponent } from "./components/header/HeaderComponent";
import {
  DragElement,
  Position,
} from "./components/drag-element/drag-elemet.container";
import { Line } from "./components/line/line.container";

function App() {
  const [position1, setPosition1] = useState({ x: 0, y: 0 });
  const [position2, setPosition2] = useState({ x: 0, y: 0 });

  const getPosition1 = (position: Position) => {
    setPosition1(position);
  };

  const getPosition2 = (position: Position) => {
    setPosition2(position);
  };

  return (
    <div className="App">
      <HeaderComponent />
      {/* <TableContainer /> */}
      <div className="table-wrapper">
        <DragElement getPosition={getPosition1} className="table-element">
          <div>
            <h1>Text</h1>
          </div>
        </DragElement>
        <DragElement getPosition={getPosition2} className="table-element">
          <div>
            <h1>Text</h1>
          </div>
        </DragElement>
        <Line start={position1} end={position2} />
      </div>
    </div>
  );
}

export default App;
