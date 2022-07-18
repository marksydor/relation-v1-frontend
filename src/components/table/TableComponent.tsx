import React, { useState } from "react";
import { Faxtion } from "../../classes/faction.class";
import s from "./TableComponent.module.scss";
import { CardInfo } from "../modals/card-info/CardInfo.modal";
import Draggable from "react-draggable";

export interface TableComponentProps {
  height: number;
  width: number;
  map: Array<Array<Array<Faxtion>>>;
}

export const TableComponent = (props: TableComponentProps) => {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  const trackPos = (data: { x: number; y: number }, i: number) => {
    position[i] = { x: data.x, y: data.y };
    setPosition([...position]);
  };

  let tableContainer = [];
  let tempK = 280;

  for (let i = 0; i < 2; i++) {
    tableContainer.push(
      <Draggable
        onDrag={(e, data) => trackPos(data, i)}
        onStart={(e, data) => console.log(data)}
        defaultPosition={position[i]}
      >
        <div className={s.tableItem} style={{ left: tempK * i + "px" }}>
          <div>
            x: {position[i].x.toFixed(0)}, y: {position[i].y.toFixed(0)}
          </div>
          <div className={s.cardHeader}>
            <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/DF19/production/_103531175_emilia2_rex.jpg.webp" />
          </div>
          <div className={s.cardBody}>
            <div className={s.nameBlock}>
              <h5>Dragon mother</h5>
              <h3>Daineris</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              aliquid illo. In eveniet repellendus consequatur neque quia
              asperiores adipisci aliquam ducimus iusto voluptas? Culpa ad error
              pariatur iure? Amet, ipsam.
            </p>
          </div>
          <CardInfo show={show} setShow={setShow} />
          <div className={s.cardFooter}>
            <div
              className="btn-group w-100"
              role="group"
              aria-label="Basic example"
            >
              <button type="button" className="btn btn-dark">
                Left
              </button>
              <button type="button" className="btn btn-dark">
                Middle
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => {
                  setShow(!show);
                }}
              >
                Info
              </button>
            </div>
          </div>
        </div>
      </Draggable>
    );
  }

  return (
    <div className={s.tableWrapper}>
      <svg width={"100%"} height="100%" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="100" y2="720" stroke="black" />
      </svg>
      {tableContainer.slice(0, 2)}
    </div>
  );
};
