interface MaxId {
  value: number;
}

export interface CreateGraph {
  id?: number;
  value: any;
}

export class Graph {
  id: number;
  value: any;
  private _maxId: MaxId;
  relations: Array<Graph>;

  public get maxId() {
    return this._maxId.value;
  }

  constructor(сreateGraph: CreateGraph) {
    this.value = сreateGraph.value;
    this.id = сreateGraph.id ? сreateGraph.id : 0;
    this._maxId = { value: сreateGraph.id ? сreateGraph.id : 0 };
    this.relations = [];
  }

  insert(сreateGraph: CreateGraph) {
    this._maxId.value++;
    this.relations.push(new Graph(сreateGraph));
    return this;
  }

  insertAndReturn(сreateGraph: CreateGraph) {
    this._maxId.value++;
    this.relations.push(new Graph(сreateGraph));
    return this.relations.at(-1);
  }

  // breadth first search
  find(id: number): Graph | null {
    let queue: Array<Graph> = [this];
    let node: Graph;
    while (queue.length) {
      node = queue.shift() as Graph;
      if (node?.id === id) {
        return node;
      }
      queue = [...queue, ...node.relations];
    }
    return null;
  }

  // depth first search first search
  findInDeep(id: number): Graph | null {
    let result: null | Graph = null;
    const callBack = (node: Graph, id: number) => {
      if (result) return;
      if (node.id === id) {
        result = node;
        return;
      }
      node.relations.forEach((value) => callBack(value, id));
    };
    callBack(this, id);
    return result;
  }

  findParent(id: number): Graph | null {
    let queue: Array<Graph> = [this];
    let node: Graph;
    while (queue.length) {
      node = queue.shift() as Graph;
      if (node.relations.find((value) => value.id === id)) {
        return node;
      }
      queue = [...queue, ...node.relations];
    }
    return null;
  }

  delete(id: number) {
    let parent = this.findParent(id) as Graph;
    let index = parent.relations.findIndex((value) => value.id === id);
    parent.relations.splice(index, 1);
    return this;
  }
}
