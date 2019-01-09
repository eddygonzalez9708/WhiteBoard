function spiralCopy(inputMatrix) {

    let output = [];
    let position = 'right';
    let index = 0;

    while (inputMatrix.length > 0) {
        switch (position) {
            case 'right': 
                if (inputMatrix[index].length > 0) {
                    output.push(inputMatrix[index].shift())
                } else {
                    inputMatrix.shift()
                    position = 'bottom'
                }
                break;
            case 'bottom': 
                if (index === inputMatrix.length - 1) {
                    output.push(inputMatrix[index].pop())
                    position = 'left'
                } else {
                    output.push(inputMatrix[index].pop())
                    index += 1
                }
                break;
            case 'left': 
                if (inputMatrix[index].length === 0) {
                    inputMatrix.pop()  
                    index = inputMatrix.length - 1
                    position = 'top'
                } else {
                    output.push(inputMatrix[index].pop())
                }
                break;
            case 'top': 
                if (index === 0) {
                    output.push(inputMatrix[index].shift())
                    position = 'right'
                } else {
                    output.push(inputMatrix[index].shift())
                    index -= 1
                }
        }
    }

    return output;
}

inputMatrix  = [[1, 2, 3, 4, 5],
               [6, 7, 8, 9, 10],
               [11, 12, 13, 14, 15],
               [16, 17, 18, 19, 20]]

console.log(spiralCopy(inputMatrix)); // expected output -> [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]