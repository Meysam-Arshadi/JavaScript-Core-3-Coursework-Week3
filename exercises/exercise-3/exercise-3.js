let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let totalCost = 0;
console.log("QYT\tITEM\t\t\tTOTAL");
order.forEach((item) => {
  let itemCost = item.quantity * item.unitPrice;
  totalCost += itemCost;
  console.log(`${item.quantity}\t${item.itemName}\t\t\t${itemCost.toFixed(2)}`);
});

console.log(`TOTAL:\t${totalCost.toFixed(2)}`);
