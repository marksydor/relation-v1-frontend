import { Faxtion, FaxtionData } from "./faction.class";

interface StringFaxtionData extends FaxtionData {
  value: string;
}

class StringFaxtion extends Faxtion {
  constructor(stringFaxtionData: StringFaxtionData) {
    super(stringFaxtionData);
  }
}

export { StringFaxtion };
