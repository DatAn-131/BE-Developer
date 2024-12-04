//Bài 1: Tính tổng các số trong mảng
// Viết một hàm nhận vào một mảng số và trả về tổng các phần tử trong mảng. Gợi ý: Sử dụng vòng lặp for hoặc phương thức reduce().
// const temp = [1, 2, 3, 4];
// const sumArray = temp.reduce((pre, next) => {
//   return (sum = pre + next);
// }, 0);
// console.log(sumArray);

// Bài 2: Tìm số lớn nhất trong mảng
// Viết một hàm để tìm giá trị lớn nhất trong mảng số. Gợi ý: Sử dụng vòng lặp hoặc phương thức Math.max().

const findMax = (arr) => {
  return Math.max(...arr);
};
console.log(findMax([10, 20, 30, 5]));

const findMax2 = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(findMax([10, 20, 30, 5]));
// Bài 3: Lọc số chẵn Viết một hàm để trả về một mảng mới chỉ chứa các số chẵn từ mảng đầu vào. Gợi ý: Sử dụng phương thức filter().
const EvenNumbers = [1, 2, 3, 4, 5, 6];
const filterEvenNumbers = EvenNumbers.filter((array) => array % 2 === 0);
console.log(filterEvenNumbers);
// Bài 4: Đếm số lần xuất hiện của một phần tử
// Viết một hàm đếm số lần xuất hiện của một phần tử cụ thể trong mảng. Gợi ý: Sử dụng vòng lặp hoặc phương thức reduce().
const countOccurrences = (arr, value) => {
  return arr.reduce((count, item) => {
    return item === value ? count + 1 : count;
  }, 0);
};
console.log(countOccurrences([1, 2, 3, 2, 4, 2, 5], 2));
// Bài 5: Đảo ngược mảng
// Viết một hàm để đảo ngược thứ tự các phần tử trong mảng. Gợi ý: Sử dụng vòng lặp hoặc phương thức reverse().
// đảo Không thay đổi mảng gốc
// const reverseArray = (arr) => {
//   const reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// };
// console.log(reverseArray([1, 2, 3, 4]));
// Đảo Thay đổi mảng gốc.
const reverseArray2 = (arr) => {
  return arr.reverse();
};
console.log(reverseArray2([1, 2, 3, 4]));
// Bài 6: Loại bỏ phần tử trùng lặp
// Viết một hàm để loại bỏ các phần tử trùng lặp trong mảng. Gợi ý: Sử dụng Set hoặc vòng lặp.
// const removeDuplicates = (arr) => {
//   const unique = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!unique.includes(arr[i])) {
//       unique.push(arr[i]);
//     }
//   }
//   return unique;
// };
// console.log(removeDuplicates([1, 2, 3, 2, 4, 3, 5]));
const removeDuplicates2 = (arr) => {
  return [...new Set(arr)];
};
console.log(removeDuplicates2([1, 2, 3, 2, 4, 3, 5]));
// Bài 7: Sắp xếp mảng tăng dần
// Viết một hàm để sắp xếp mảng số theo thứ tự tăng dần. Gợi ý: Sử dụng phương thức sort().
const sortArrayAscending = [5, 2, 9, 1];
const sort = sortArrayAscending.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
});
console.log(sort);
// Bài 8: Tìm phần tử xuất hiện nhiều nhất
// Viết một hàm để tìm phần tử xuất hiện nhiều nhất trong mảng. Gợi ý: Sử dụng đối tượng (object) để lưu tần suất.
const mergeAndRemoveDuplicates = (arr) => {
  const frequency = {};
  let maxFreq = 0;
  let mostFrequent = null;
  for (const item of arr) {
    frequency[item] = (frequency[item] || 0) + 1;
    if (frequency[item] > maxFreq) {
      maxFreq = frequency[item];
      mostFrequent = item;
    }
  }
  return mostFrequent;
};
console.log(mergeAndRemoveDuplicates([1, 3, 2, 3, 4, 3, 2, 1, 2, 2]));
console.log(mergeAndRemoveDuplicates(["a", "b", "a", "c", "b", "a"]));
// Bài 9: Gộp hai mảng và loại bỏ trùng lặp
// Viết một hàm để gộp hai mảng thành một mảng mới và loại bỏ các phần tử trùng lặp. Gợi ý: Sử dụng Set hoặc vòng lặp.
const mergeAndRemoveDuplicates2 = (arr1, arr2) => {};
