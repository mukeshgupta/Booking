//----------------------------------------------------------------
// product class
function product_old(sku, name, description, price, cal, carot, vitc, folate, potassium, fiber) {
    this.sku = sku; // product code (SKU = stock keeping unit)
    this.name = name;
    this.description = description;
    this.price = price;
    this.cal = cal;
    this.nutrients = {
        "Carotenoid": carot,
        "Vitamin C": vitc,
        "Folates": folate,
        "Potassium": potassium,
        "Fiber": fiber
    };
}

function product(product_id, type, quantity, cost_per, plu, description, tax_details, seq, category) {
  this.type= type;
  this.quantity= quantity;
  this.cost_per= cost_per;
  //this.total_cost= total_cost,
  this.product_id= product_id;
  this.plu= plu;
  this.tax_details=tax_details;
  this.seq = seq;
  this.description = description;
  this.category = category;
}
