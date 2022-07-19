import React from "react";
import { TableComponent } from "./table.component";

import { head } from "../../mock-data/faxtion.mock";

export const TableContainer = () => {
  let leftSideLength = head.getLeftSideLength();
  let rightSideLength = head.getRightSideLength();

  console.log("Left Length:", leftSideLength);
  console.log("Right Length:", rightSideLength);
  console.log("Up Length:", head.getUpSideHight());
  console.log("Down Length:", head.getDownSideHight());
  console.log("Width is: ", head.getWidth());
  console.log("Height is: ", head.getHight());
  console.log("find is: ", head.find(2));
  console.log("findBFS is: ", head.findBFS(2));
  console.log(head.getMap());
  return (
    <TableComponent
      height={head.getHight()}
      width={head.getWidth()}
      map={head.getMap()}
    />
  );
};
