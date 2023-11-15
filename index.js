// Tuesday : Selection Sort
// how does it works: This is very simple. Go through the array, find the index
// of the lowest element swap the lowest element with the first element.
// Hence first element is the lowest element in the array.

// Now go through the rest of the array (excluding the first element) and
// find the index of the lowest and swap it with the second element.

// thats how it continues to select (find out) the lowest element of the array
// and putting it on the left until it hits the last element.

//Pseudocode
// 1. Create a function with array as a paramether;
// 2. Create variables for min index, temporary value and length of the array;
// 3. Use for loop and set min index to the first element in array;
// 4.  Select the lowest element of the array and putting it on the left until it hits
//  the last element;
// 5. Use another for loop and compare each element in array to the value of
// the element in the array with the min index (index stored in min index variable)
// 6. Set new min index value to the min index variable inside the for loop;
// 6. Return array from the function;
// 7. Call the function with the necessary argument inside console.log.

function selectionSort(arr) {
  let minIdx,
    temp,
    len = arr.length;
  for (let i = 0; i < len; i++) {
    minIdx = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}

console.log(selectionSort([5, 12, 3, 1, 9]));
console.log(selectionSort([0, 5, 3 - 6, -1]));
