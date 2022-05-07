// 7 kyu Vowel Count
function getCount(str) {
    var vowelsCount = 0;
    
    // enter your majic here
    for(let i = 0; i <= str.length - 1; i++){
      if('aeiou'.includes(str[i].toLowerCase())){
        vowelsCount += 1
      }
    } 
    
    return vowelsCount;
  }