var myTotals =[];
localStorage.setItem('totalPrices',totals);

function water() {
  var qty2 = document.getElementById('classWork').value;
  var price2 = qty2 * 10;
  myTotals.push(price2);
document.getElementById('water').innerHTML = price2 + "$";
localStorage.setItem("finalSubTotal",myTotals);
document.getElementById('button1').style.visibility="hidden";
  document.getElementById('classWork').style.visibility="hidden";
}


function juice() {
  var qty1 = document.getElementById('classWork2').value;
  var price = qty1 * 15;
document.getElementById('drink').innerHTML = "$" + price ;
myTotals.push(price);
localStorage.setItem("finalSubTotal",myTotals);
  document.getElementById('button2').style.visibility="hidden";
  document.getElementById('classWork2').style.visibility="hidden";
}


function gatorade() {
  var qty3 = document.getElementById('classWork3').value;
  var price3 = qty3 * 2;
document.getElementById('gatorade').innerHTML = price3 + "$";
myTotals.push(price3);
localStorage.setItem("finalSubTotal",myTotals);
document.getElementById('button3').style.visibility="hidden";
document.getElementById('classWork3').style.visibility="hidden";
}


function getTotal() {
  location.href="two.html";
}
 function showTotal(){
var totals = 0;
 var subTotal = localStorage.getItem('finalSubTotal');
myTotals.push(subTotal);
 for(i=0; i < myTotals.length; i++) {
   total += myTotals[i];
 }
     localStorage.setItem("totalPls");
 }
