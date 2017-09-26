// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

// Otherwise, return change in coin and bills, sorted in highest to lowest order.

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let final = [["ONE HUNDRED", 0.00], ["TWENTY", 0.00], ["TEN", 0.00], ["FIVE", 0.00], ["ONE", 0.00], ["QUARTER", 0.00], ["DIME", 0.00], ["NICKEL", 0.00], ["PENNY", 0.00]];
  let totalCID = 0;
  for (var i=0;i<cid.length; i++) {
    totalCID+=cid[i][1];
  }
  if (totalCID < change) {
    return "Insufficient Funds";
  } else if (change === totalCID) {
    return "Closed";
  } else {
    let toLoop = Array.from(arguments[2]);
    for (let j=0; j<toLoop.length; j++) {
      while (change>=toLoop[j][1]) {
        if (change >= 100) {
          final[0][1]+=100.00;
          change-=100;
        } else if (change >= 20.00) {
          final[1][1]+=20.00;
          change-=20;
        } else if (change >= 10.00) {
          final[2][1]+=10.00;
          change-=10;
        } else if (change >= 50) {
          final[3][1]+=50.00;
          change-=5;
        } else if (change >= 1.00) {
          final[4][1]+=0.10;
          change-=1;
        } else if (change >= 0.25) {
          final[5][1]+=0.25;
          change-=0.25;
        } else if (change >= 0.10) {
          final[6][1]+=0.10;
          change-=0.10;
        } else if (change >= 0.05) {
          final[7][1]+=0.05;
          change-=0.05;
        } else if (change >= 0.01) {
          final[8][1]+=0.01;
          change-=0.01;
        } else if (change === 0) {
          break;
        }
      }
    }
  }
  return final.filter(a=>a[1]!==0);
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);