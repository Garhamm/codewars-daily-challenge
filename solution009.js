// 8 kyu Get the mean of an array
function getAverage(marks){
    let total = (marks.reduce((prevVal, c)=> prevVal + c, 0)/marks.length);
    return Math.floor(total);
  }