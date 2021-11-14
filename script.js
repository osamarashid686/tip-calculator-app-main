
if (people.value <= "0") {
   people.value = 1;
}

function bill_val() {
   var bill = Number( document.getElementById("bill").value);
   if (bill <= "0") {
      alert("can't be zero");
   }
   return bill;
}

function people_val() {
   var people = Number(document.getElementById("people").value);
   if (people <= "0") {
      alert("can't be zero");
   }
   return people; 
}

function tip_btn(x) {
   
   let tip_amt = bill_val() * (x/100);
   document.getElementById("tip-amount").innerHTML = "$"+tip_amt.toFixed(2);

   var final_bill =  (bill_val() + tip_amt) / people_val();
   document.getElementById("tip-total").innerHTML = "$"+final_bill.toFixed(2);

}


function cus_tip_btn() {
   let cus_tip_val = Number(document.getElementById("custome").value);

   let cus_amt =  bill_val() * (cus_tip_val/100);
   document.getElementById("tip-amount").innerHTML = "$"+cus_amt.toFixed(2);

   let cus_final_bill =  (bill_val() + cus_amt) / people_val();
   document.getElementById("tip-total").innerHTML = "$"+cus_final_bill.toFixed(2);
}

function reset() {
   document.getElementById("tip-amount").innerHTML = "$0.00";
   document.getElementById("tip-total").innerHTML = "$0.00";
}
