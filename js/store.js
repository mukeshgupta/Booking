//----------------------------------------------------------------
// store (contains the products)
//
// NOTE: nutritional info from http://www.cspinet.org/images/fruitcha.jpg
// score legend:
// 0: below 5% of daily value (DV)
// 1: 5-10% DV
// 2: 10-20% DV
// 3: 20-40% DV
// 4: above 40% DV
//
function store() {
  //tickets and packages
  this.products = [
    new product('120', 'Adult', 0, '1900.00', '10150021', 'Above 12 Years', undefined, 1, 'TICKET'),
    new product('101038', 'Senior Citizen', 0, '1399.00', '10450751', '5 - 12 Years', undefined, 2, 'TICKET'),
    new product('477', 'College', 0, '1499.00', '10150303', 'Above 60 Years', undefined, 3, 'TICKET'),
    new product('101183', 'Jr. Child', 0, '1499.00', '101503020', 'College Students', undefined, 4, 'TICKET'),
    new product('101027', 'Family of 6', 0, '14999.00', undefined, 
      'Money saver package - Save over ? 2800! Get Regular Tickets for 6, Chauffeur driven A/C car travel for 6 from Mumbai/Pune to Imagica & back and All-day meal (lunch+snacks+dinner) at Imagica.',
       undefined, 1, 'PACKAGE')
  ]
  this.products_old = [
    new product("Adult", "Apple", "Eat one every day to keep the doctor away!", 12, 90, 0, 2, 0, 1, 2),
    new product("APL", "Apple", "Eat one every day to keep the doctor away!", 12, 90, 0, 2, 0, 1, 2),
    new product("AVC", "Avocado", "Guacamole anyone?", 16, 90, 0, 1, 1, 1, 2),
    new product("BAN", "Banana", "These are rich in Potassium and easy to peel.", 4, 120, 0, 2, 1, 2, 2),
    new product("CTP", "Cantaloupe", "Delicious and refreshing.", 3, 50, 4, 4, 1, 2, 0),
    new product("FIG", "Fig", "OK, not that nutritious, but sooo good!", 10, 100, 0, 0, 0, 1, 2),
    new product("GRF", "Grapefruit", "Pink or red, always healthy and delicious.", 11, 50, 4, 4, 1, 1, 1),
    new product("GRP", "Grape", "Wine is great, but grapes are even better.", 8, 100, 0, 3, 0, 1, 1),
    new product("GUA", "Guava", "Exotic, fragrant, tasty!", 8, 50, 4, 4, 0, 1, 2),
    new product("KIW", "Kiwi", "These come from New Zealand.", 14, 90, 1, 4, 0, 2, 2),
    new product("LYC", "Lychee", "Unusual and highly addictive!", 18, 125, 1, 4, 0, 2, 2),
    new product("MAN", "Mango", "Messy to eat, but well worth it.", 8, 70, 3, 4, 0, 1, 1),
    new product("ORG", "Orange", "Vitamin C anyone? Go ahead, make some juice.", 9, 70, 1, 4, 2, 1, 2),
    new product("PAP", "Papaya", "Super-popular for breakfast.", 5, 60, 3, 4, 2, 2, 2),
    new product("PCH", "Peach", "Add some cream and enjoy.", 19, 70, 1, 2, 0, 1, 2),
    new product("PER", "Pear", "Delicious fresh, or cooked in red wine, or distilled.", 8, 100, 0, 2, 0, 1, 2),
    new product("PMG", "Pomegranate", "Delicious, healthy, beautiful, and sophisticated!", 19, 110, 0, 2, 0, 2, 0),
    new product("PNP", "Pineapple", "Enjoy it (but don't forget to peel first).", 4, 60, 0, 3, 0, 0, 1),
    new product("PSM", "Persimmon", "Believe it or not, they are berries!", 6, 120, 4, 3, 0, 1, 3),
    new product("STR", "Strawberry", "Beautiful, healthy, and delicious.", 7, 40, 0, 4, 1, 1, 2),
    new product("TNG", "Tangerine", "Easier to peel than oranges!", 8, 50, 3, 4, 1, 1, 2),
    new product("WML", "Watermelon", "Nothing comes close on those hot summer days.", 4, 90, 4, 4, 0, 1, 1)
  ];
  this.dvaCaption = [
    "Negligible",
    "Low",
    "Average",
    "Good",
    "Great"
  ];
  this.dvaRange = [
    "below 5%",
    "between 5 and 10%",
    "between 10 and 20%",
    "between 20 and 40%",
    "above 40%"
  ];
}
store.prototype.getProduct_old = function(sku) {
  for (var i = 0; i < this.products.length; i++) {
    if (this.products[i].sku == sku)
      return this.products[i];
  }
  return null;
}

store.prototype.getProduct = function(product_id) {
  for (var i = 0; i < this.products.length; i++) {
    if (this.products[i].product_id == product_id)
      return this.products[i];
  }
  return null;
}

store.prototype.changeQty = function(product_id, newQty, op, product) {
  newQty = this.toNumber(newQty);

  //for (var i = 0; i < this.products.length; i++) {
   // if (product.product_id == product_id) {
      switch(op.toUpperCase()) {
        case 'ADD':
          product.quantity += 1;
        break;
        case 'EQ':
          product.quantity = newQty;
        break;
        case 'SUB':
          product.quantity -= 1;
        break;
        default:
          product.quantity = newQty;
      }
      //break;
   // }
  //}// end of for loop
}
store.prototype.toNumber = function (value) {
    value = value * 1;
    return isNaN(value) ? 0 : value;
}