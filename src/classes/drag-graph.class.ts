import { CreateGraph, Graph } from "./graph.class";

interface DragData {
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
}

interface DragGraphData extends CreateGraph {
  value: DragData;
}

class DragGraph extends Graph {
  constructor(DragGraphData: DragGraphData) {
    super(DragGraphData);
  }
}

export { DragGraph };
