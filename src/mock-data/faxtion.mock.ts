import { StringFaxtion } from "../classes/string-faction.class";

const head = new StringFaxtion({ value: "First input" });

head
  .insertAndGoToRight("Second Iput")
  .insertAndGoToRight("Third input")
  .insertUp("Fourth input")
  .insertDown("Fifth input");

head
  .insertAndGoToLeft("Sixth input")
  .insertDown("Seventh input")
  .insertAndGoToUp("Eighth Input")
  .insertAndGoToUp("12 input")
  .insertAndGoToUp("13 input")
  .insertAndGoToUp("14 input");

head
  .insertAndGoToUp("Nineth input")
  .insertAndGoToUp("Tenth input")
  .insertAndGoToUp("Eleventh input");

head.upFaxtion?.upFaxtion
  ?.insertAndGoToRight("17 input")
  .insertAndGoToDown("18 input")
  .insertAndGoToDown("19 input");

head.upFaxtion?.insertAndGoToRight("15 input").insertAndGoToDown("16 input");

export { head };
