export default class Task {
  constructor(
    id = "",
    sku = "",
    title = "",
    description = "",
    availableSizes = [],
    style = "",
    price = "",
    installments = "",
    currencyId = "",
    currencyFormat = "",
    isFreeShipping = ""
  ) {
    this.id = id;
    this.sku = sku;
    this.title = title;
    this.description = description;
    this.availableSizes = availableSizes;
    this.style = style;
    this.price = price;
    this.installments = installments;
    this.currencyId = currencyId;
    this.currencyFormat = currencyFormat;
    this.isFreeShipping = isFreeShipping;
  }
}
