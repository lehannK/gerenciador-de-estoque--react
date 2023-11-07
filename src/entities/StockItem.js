export const CATEGORIES = ["BMS", "SDAI", "SCA", "CFTV"];

export default class StockItem {
  constructor({ name, description, quantity, contract, category }) {
    this.id = Math.floor(Math.random() * 10000000);
    this.name = name;
    this.description = description;
    this.quantity = +quantity;
    this.contract = contract;
    this.category = category;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.#validate();
  }

  #validate() {
    const validName = typeof this.name === "string";
    const validDescription = typeof this.description === "string";
    const validQuantity =
      typeof this.quantity === "number" && Number.isInteger(this.quantity);
    const validContract = typeof this.contract === "string";
    const validCategory = CATEGORIES.includes(this.category);
    if (
      !(
        validName &&
        validDescription &&
        validQuantity &&
        validContract &&
        validCategory
      )
    ) {
      throw new Error("Invalid item!");
    }
  }
}
