interface Contact {
  id: number;
  name: string;
  status: string;
}

enum ContactStatus {
  Active = "active",
  Inactive = "inactive",
  New = "new",
}

let testContact = {
  id: 0,
  name: "John",
  status: ContactStatus.Active,
};

function clone<T>(source: T): T {
  //return source;
  return Object.assign({}, source);
}

let a: Contact = clone(testContact);

const dateRange = { startDate: Date.now(), endDate: Date.now() };
const dateRangeClone = clone(dateRange);

const TypesTest = () => {};

export default TypesTest;
