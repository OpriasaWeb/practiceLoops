// Practice nested loops

function multiplyAll(n){

  // Outer loop
  for(let i = 0; i < n.length; i++){
    // debug: console
    console.log(`Outer loop index: ${i}`);
    // console.log(`Outer loop ${i}: ${n[i]}`);

    // Inner loop
    for(let j = 0; j < n[i].length; j++){
      // debug: console
      console.log(`inner loop index (${j}): value(${n[i][j]})`);
    }
  }
}

// Function call
multiplyAll([
              [1, 2], 
              [3, 4, 5], 
              [6, 7]
            ])