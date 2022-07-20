import React from "react";
import { DragGraph } from "../../classes/drag-graph.class";
import { Graph } from "../../classes/graph.class";
import { DragElement } from "../drag-element/drag-elemet.container";
import s from "./graph-tree.module.scss";

export interface GraphTreeProps {
  graph: DragGraph;
  xDisplacement?: number;
  yDisplacement?: number;
  width: number;
  height: number;
}

export const GraphTree = (props: GraphTreeProps) => {
  const { graph } = props;
  const xDisplacement = props.xDisplacement || 0;
  const yDisplacement = props.yDisplacement || 0;
  let childs;

  // for render childs
  if (graph.relations) {
    childs = graph.relations.map((value, index) => {
      return (
        <GraphTree
          graph={value}
          height={props.height}
          width={props.width}
          xDisplacement={xDisplacement + props.width + 10}
          yDisplacement={yDisplacement + props.height * index + 10}
        />
      );
    });
  }

  return (
    <React.Fragment>
      <DragElement
        getPosition={() => {}}
        className={s.base}
        style={{
          top: props.yDisplacement + "px",
          left: props.xDisplacement + "px",
        }}
      >
        <p>{JSON.stringify(graph.value)}</p>
      </DragElement>
      {childs}
    </React.Fragment>
  );
};
