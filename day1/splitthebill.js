var group = {
    Amy: 20,
    Bill: 15,
    Chris: 10
}

function splitTheBill(group) {
  //Object.values(obj); returns the objects values
 //first sum total of bill.  need variable to hold total. for (var price in group) ..average total/length.  then create new object,
var totalBill = 0;
var talliedBill = {};

for (var name in group) {
  totalBill += group[name];
} //close for loop for total bill
  //console.log(totalBill);
  for (var name in group) {
  var avgCost = totalBill / (Object.keys(group).length);
  //console.log(avgCost);
//  console.log("price",group[name]);

talliedBill[name]= (avgCost - group[name]);
} //ends for loop
return talliedBill;
} //ends function
console.log(JSON.stringify(splitTheBill(group),null, 2));
