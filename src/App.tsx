import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TableContainer } from "./components/table/table.container";
import { HeaderComponent } from "./components/header/header.component";
import {
  DragElement,
  Position,
} from "./components/drag-element/drag-elemet.container";
import { Line } from "./components/line/line.component";
import { GraphTree } from "./components/graph-tree/graph-tree.component";
import { head } from "./mock-data/graph.mock";

function App() {
  const [test, setTest] = useState({ text: "test text" });
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
        <GraphTree graph={head} height={80} width={240} />
      </div>
    </div>
  );
}

export default App;
