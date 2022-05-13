
// 8 kyuTo square(root) or not to square(root)


function squareOrSquareRoot(array) {
    array.forEach(element => {
        let eleSquareRoot = Math.sqrt(element)
        let newArray = []
        if (Number.isInteger(eleSquareRoot)){
            newArray.push = Math.sqrt(element);
        }else{
            newArray.push = element**2
        }
        return newArray;
    }); 
  }

  console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]))