import { Position } from "../drag-element/drag-elemet.container";
import s from "./line-styles.module.scss";

export const Line = (props: { start: Position; end: Position }) => {
  const { start, end } = props;
  return (
    <svg
      className={s.line}
      width={"100%"}
      height={"100%"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="red" />
    </svg>
  );
};
