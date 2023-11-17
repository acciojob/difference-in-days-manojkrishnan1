var dateDiffInDays = function (date1, date2) {
  //   write your code here
	let a = Date.parse(date1)
  let b = Date.parse(date2);
  let result = (a-b)/(60*60*24*1000)
  return result;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
