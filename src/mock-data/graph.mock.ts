import { Graph } from "../classes/graph.class";

const head = new Graph({
  value: "head of graph",
});

head.insert("Andrian").insert("Ben").insert("Caroline");

head
  .insertAndReturn("Dayzzy")
  ?.insert("Eren")
  .insert("Freddy")
  .insertAndReturn("Garry")
  ?.insert("Harry")
  .insert("Ivor");
head
  .insertAndReturn("Jim")
  ?.insert("Kilian")
  .insert("Liam")
  .insertAndReturn("Marry")
  ?.insert("Nick")
  .insert("Olivia");
head
  .insertAndReturn("Paul")
  ?.insert("Quand")
  .insert("Rick")
  .insertAndReturn("Sarra")
  ?.insert("Tonny")
  .insert("Uliana");
head
  .insertAndReturn("Vivaldi")
  ?.insert("Wally")
  .insert("Xrant")
  .insertAndReturn("Yan")
  ?.insert("Zilly");

export { head };
