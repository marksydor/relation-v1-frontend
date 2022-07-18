interface MaxId {
  value: number;
}

export interface FaxtionData {
  id?: number;
  maxId?: MaxId;
  value: any;
}

export class Faxtion {
  id: number;
  value: any;

  private _maxId: MaxId;

  public get maxId() {
    return this._maxId.value;
  }

  leftFaxtion?: Faxtion | null;
  rightFaxtion?: Faxtion | null;
  upFaxtion?: Faxtion | null;
  downFaxtion?: Faxtion | null;

  constructor(faxtionData: FaxtionData) {
    this.value = faxtionData.value;
    this.id = faxtionData.id ? faxtionData.id : 0;

    if (faxtionData.maxId) {
      this._maxId = faxtionData.maxId;
    } else {
      this._maxId = { value: faxtionData.id ? faxtionData.id : 0 };
    }
  }

  delete(id: number) {
    let parent = this.findParent(id) as Faxtion;
    if (parent?.leftFaxtion?.id === id) parent.leftFaxtion = null;
    if (parent?.rightFaxtion?.id === id) parent.rightFaxtion = null;
    if (parent?.upFaxtion?.id === id) parent.upFaxtion = null;
    if (parent?.downFaxtion?.id === id) parent.downFaxtion = null;
    return this;
  }

  getWidth(): number {
    return this.getLeftSideLength() + this.getRightSideLength() + 1;
  }

  getHight(): number {
    return this.getUpSideHight() + this.getDownSideHight() + 1;
  }

  getUpSideHight() {
    let results: number[] = [];
    const callBack = (head: Faxtion, sum: number) => {
      if (
        !head.leftFaxtion &&
        !head.rightFaxtion &&
        !head.downFaxtion &&
        !head.upFaxtion
      ) {
        results.push(sum);
        return;
      }
      if (head.leftFaxtion) callBack(head.leftFaxtion, sum);
      if (head.rightFaxtion) callBack(head.rightFaxtion, sum);
      if (head.upFaxtion) callBack(head.upFaxtion, sum + 1);
      if (head.downFaxtion) callBack(head.downFaxtion, sum - 1);
    };
    callBack(this, 0);
    return Math.max(...results);
  }

  getDownSideHight() {
    let results: number[] = [];
    const callBack = (head: Faxtion, sum: number) => {
      if (
        !head.leftFaxtion &&
        !head.rightFaxtion &&
        !head.downFaxtion &&
        !head.upFaxtion
      ) {
        results.push(sum);
        return;
      }
      if (head.leftFaxtion) callBack(head.leftFaxtion, sum);
      if (head.rightFaxtion) callBack(head.rightFaxtion, sum);
      if (head.upFaxtion) callBack(head.upFaxtion, sum - 1);
      if (head.downFaxtion) callBack(head.downFaxtion, sum + 1);
    };
    callBack(this, 0);
    return Math.max(...results);
  }

  getLeftSideLength() {
    let results: number[] = [];
    const callBack = (head: Faxtion, sum: number) => {
      if (
        !head.leftFaxtion &&
        !head.rightFaxtion &&
        !head.downFaxtion &&
        !head.upFaxtion
      ) {
        results.push(sum);
        return;
      }
      if (head.leftFaxtion) callBack(head.leftFaxtion, sum + 1);
      if (head.rightFaxtion) callBack(head.rightFaxtion, sum - 1);
      if (head.upFaxtion) callBack(head.upFaxtion, sum);
      if (head.downFaxtion) callBack(head.downFaxtion, sum);
    };
    callBack(this, 0);
    return Math.max(...results);
  }

  getRightSideLength() {
    let results: number[] = [];
    const callBack = (head: Faxtion, sum: number) => {
      if (
        !head.leftFaxtion &&
        !head.rightFaxtion &&
        !head.downFaxtion &&
        !head.upFaxtion
      ) {
        results.push(sum);
        return;
      }
      if (head.leftFaxtion) callBack(head.leftFaxtion, sum - 1);
      if (head.rightFaxtion) callBack(head.rightFaxtion, sum + 1);
      if (head.upFaxtion) callBack(head.upFaxtion, sum);
      if (head.downFaxtion) callBack(head.downFaxtion, sum);
    };
    callBack(this, 0);
    return Math.max(...results);
  }

  findParent(id: number): null | Faxtion {
    let result: null | Faxtion = null;
    const callBack = (head: Faxtion, id: number) => {
      if (result) return;
      if (
        head.leftFaxtion?.id === id ||
        head.rightFaxtion?.id === id ||
        head.upFaxtion?.id === id ||
        head.downFaxtion?.id === id
      )
        result = head;
      if (head.leftFaxtion) callBack(head.leftFaxtion, id);
      if (head.rightFaxtion) callBack(head.rightFaxtion, id);
      if (head.upFaxtion) callBack(head.upFaxtion, id);
      if (head.downFaxtion) callBack(head.downFaxtion, id);
    };
    callBack(this, id);
    return result;
  }

  // Deep-first search
  find(id: number) {
    let result: null | Faxtion = null;
    const callBack = (head: Faxtion, id: number) => {
      if (result) return;
      if (head.id === id) result = head;
      if (head.leftFaxtion) callBack(head.leftFaxtion, id);
      if (head.rightFaxtion) callBack(head.rightFaxtion, id);
      if (head.upFaxtion) callBack(head.upFaxtion, id);
      if (head.downFaxtion) callBack(head.downFaxtion, id);
    };
    callBack(this, id);
    return result;
  }

  // Breadth-first search
  findBFS(id: number) {
    let queue: Array<Faxtion> = [];
    let node: Faxtion;

    queue.push(this);

    while (queue.length) {
      node = queue.shift() as Faxtion;
      if (node?.id === id) {
        return node;
      }
      if (node?.leftFaxtion) queue.push(node.leftFaxtion);
      if (node?.rightFaxtion) queue.push(node.rightFaxtion);
      if (node?.downFaxtion) queue.push(node.downFaxtion);
      if (node?.upFaxtion) queue.push(node.upFaxtion);
    }
    return null;
  }

  insertLeft(value: any) {
    this._maxId.value++;
    this.leftFaxtion = new Faxtion({
      value: value,
      id: this.maxId,
      maxId: this._maxId,
    });
    return this;
  }

  insertRight(value: any) {
    this._maxId.value++;
    this.rightFaxtion = new Faxtion({
      value: value,
      id: this.maxId,
      maxId: this._maxId,
    });
    return this;
  }

  insertDown(value: any) {
    this._maxId.value++;
    this.downFaxtion = new Faxtion({
      value: value,
      id: this.maxId,
      maxId: this._maxId,
    });
    return this;
  }

  insertUp(value: any) {
    this._maxId.value++;
    this.upFaxtion = new Faxtion({
      value: value,
      id: this.maxId,
      maxId: this._maxId,
    });
    return this;
  }

  insertAndGoToLeft(value: any) {
    this._maxId.value++;
    this.leftFaxtion = new Faxtion({
      value: value,
      id: this.maxId,
      maxId: this._maxId,
    });
    return this.leftFaxtion;
  }

  insertAndGoToRight(value: any) {
    this._maxId.value++;
    this.rightFaxtion = new Faxtion({
      value: value,
      id: this.maxId,
      maxId: this._maxId,
    });
    return this.rightFaxtion;
  }

  insertAndGoToDown(value: any) {
    this._maxId.value++;
    this.downFaxtion = new Faxtion({
      value: value,
      id: this.maxId,
      maxId: this._maxId,
    });
    return this.downFaxtion;
  }

  insertAndGoToUp(value: any) {
    this._maxId.value++;
    this.upFaxtion = new Faxtion({
      value: value,
      id: this.maxId,
      maxId: this._maxId,
    });
    return this.upFaxtion;
  }

  // get 2d array from this map
  getMap() {
    const map: Array<Array<Array<Faxtion>>> = [];
    const height = this.getHight();
    const width = this.getWidth();
    for (let i = 0; i < height; i++) {
      map.push([]);
      for (let j = 0; j < width; j++) {
        map[i].push([]);
      }
    }

    const fillMap = (faction: Faxtion, x: number, y: number) => {
      map[y][x].push(faction);
      if (map[y][x]?.length > 0) map[y][x].sort((a, b) => a.id - b.id);
      if (faction.leftFaxtion) fillMap(faction.leftFaxtion, x - 1, y);
      if (faction.rightFaxtion) fillMap(faction.rightFaxtion, x + 1, y);
      if (faction.upFaxtion) fillMap(faction.upFaxtion, x, y - 1);
      if (faction.downFaxtion) fillMap(faction.downFaxtion, x, y + 1);
    };
    fillMap(this, this.getLeftSideLength(), this.getUpSideHight());
    return map;
  }
}
