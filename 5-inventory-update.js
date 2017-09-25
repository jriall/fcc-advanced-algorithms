// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

// SOLUTION

function updateInventory(arr1, arr2) {
    let final = Array.from(arr1);
    for (let i=0; i<arr2.length; i++) {
      let found = false;
      for (let j=0; j<arr1.length; j++) {
        if (arr1[j][1] === arr2[i][1]) {
          found = true;
          final[j][0]+= arr2[i][0];
        }
      }
      if (!found) {
        final.push(arr2[i]);
      }
    }
    return final.sort((a,b)=>{
      return a[1] > b[1];
    });
}