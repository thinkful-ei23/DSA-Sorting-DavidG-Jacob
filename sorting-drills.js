'use strict';

const data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

// let quickSortCount = 0;
// let mergeSortCount = 0;

function swap(array, i, j){
  // quickSortCount++;
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

// function quickSort(array, start = 0, end =array.length){
//   quickSortCount++;
//   if(start >= end){
//     return array;
//   }
//   const middle = partition(array, start, end);
//   array = quickSort(array, start, middle);
//   array = quickSort(array, middle + 1, end);
//   return array;
// }

// function partition(array, start, end){
//   const pivot = array[end - 1];
//   let j = start;
//   for(let i = start; i < end -1; i++){
//     quickSortCount++;
//     if(array[i] <= pivot){
//       swap(array, i, j);
//       j++;
//     }
//   }
//   swap(array, end - 1, j);
//   return j;
// }

// quickSort(data);
// console.log(`Quicksort took ${quickSortCount}`);

// function mergeSort(array) {
//   mergeSortCount++
//   if (array.length <= 1) {
//     return array;
//   }
//   const middle = Math.floor(array.length / 2);
//   let left = array.slice(0, middle);
//   let right = array.slice(middle, array.length);

//   left = mergeSort(left);
//   right = mergeSort(right);
//   return merge(left, right, array);
// };

// function merge(left, right, array) {
//   let leftIndex = 0;
//   let rightIndex = 0;
//   let outputIndex = 0;
//   while (leftIndex < left.length && rightIndex < right.length) {
//     mergeSortCount++;
//     if (left[leftIndex] < right[rightIndex]) {
//       array[outputIndex++] = left[leftIndex++];
//     }
//     else {
//       array[outputIndex++] = right[rightIndex++];
//     }
//   }
//   for (let i = leftIndex; i < left.length; i++) {
//     mergeSortCount++;
//     array[outputIndex++] = left[i];
//   }
//   for (let i = rightIndex; i < right.length; i++) {
//     mergeSortCount++;
//     array[outputIndex++] = right[i];
//   } 
//   return array;
// };
// mergeSort(data);
// console.log(`MergeSort took ${mergeSortCount}`);

function bucketSort(array, min, max){
  const buckets = (max - min) + 2;
  let sortedArray = [];
  let bucketArray = new Array(buckets);

  for(let i = 0; i < bucketArray.length; i++){
    bucketArray[i] = [];
  }

  for(let i = 0; i < array.length; i++){
    bucketArray[array[i]-min].push(array[i]);
  }

  for(let i = 0; i < bucketArray.length; i++){
    if(bucketArray[i].length > 0){
      let k = 0;
      while (k < bucketArray[i].length){
        sortedArray.push(bucketArray[i][k]);
        k++;
      }
    }
  }
  console.log(sortedArray);
}

const data2 = [55, 50, 56, 45, 11, 99, 77];
bucketSort(data2, 11, 99);

function randomSort(array){
  for(let i = 0; i < array.length; i++){
    swap(array, i, Math.floor(Math.random() * array.length));
  }
  return array;
}

console.log(randomSort(data2));

const bookArray = ['Scarlet Letter', 'Frankenstein', 'Adventures of Huckleberry Fin','Sense and Sensibility', 'War and Peace', 'Moby Dick', 'Walden', 'Clean Code', 'Pragmatic Programmer', 'How to Win Friends and Influence People', 'Odyssey', 'Crime and Punishment','Killing the SS', 'The Wonky Donkey', 'Next Person You Meet in Heaven', 'War', 'Animal Farm', 'Clock Makers Daughter', 'Trust', 'Underworld' ]

let bookSortCount = 0;

function bookSort(array) {
  bookSortCount++;
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = bookSort(left);
  right = bookSort(right);
  return merge(left, right, array);
};

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    bookSortCount++;
    if (left[leftIndex].toLowerCase() < right[rightIndex].toLowerCase()) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }
  for (let i = leftIndex; i < left.length; i++) {
    bookSortCount++;
    array[outputIndex++] = left[i];
  }
  for (let i = rightIndex; i < right.length; i++) {
    bookSortCount++;
    array[outputIndex++] = right[i];
  } 
  return array;
};

console.log(bookSort(bookArray));
console.log(bookSortCount)

