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

const TypesTest = () => {};

export default TypesTest;
