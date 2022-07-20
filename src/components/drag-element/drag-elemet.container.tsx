import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

export interface Position {
  x: number;
  y: number;
}

export interface DragElementProps {
  getPosition: (position: Position) => void;
  children?: React.ReactNode;
  className?: string;
  style?: any;
}

export const DragElement = (props: DragElementProps) => {
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [sizes, setSizes] = useState({ width: 0, height: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const getStartPosition = () => {
    const x = ref.current?.offsetLeft || 0;
    const y = ref.current?.offsetTop || 0;
    const width = ref.current?.clientWidth || 0;
    const height = ref.current?.clientHeight || 0;

    setSizes({ width, height });
    setStartPosition({ x, y });
    props.getPosition({ x: width / 2 + x, y: height / 2 });
    setPosition({ x: width / 2 + x, y: height / 2 + y });
  };

  const HandleDrag = (e: any, newPosition: Position) => {
    const tempPosition = {
      x: newPosition.x + startPosition.x + sizes.width / 2,
      y: newPosition.y + sizes.height / 2,
    };

    props.getPosition(tempPosition);
    setPosition(tempPosition);
  };

  useEffect(() => {
    getStartPosition();
  }, []);

  const nodeRef = React.useRef(null);

  return (
    <Draggable nodeRef={ref} onDrag={HandleDrag}>
      <div ref={ref} className={props.className} style={props.style}>
        {position.x} {position.y}
        {props.children}
      </div>
    </Draggable>
  );
};
