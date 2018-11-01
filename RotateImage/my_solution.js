function rotateImage(arr) {
    const newArr = []

    const length = arr.length

    for (let x = 0; x < length; x++) {
        newArr.push([])
        for (let y = 0; y < length; y++) {
            newArr[x].push(arr[y].pop())
        }
    }

    return newArr
}

console.log(rotateImage([
    [1, 2],
    [3, 4]  
])) 

/* should return 
    [
        [2, 4]
        [1, 3]
    ]
*/ 

console.log(rotateImage([
    [1, 1, 5, 9, 9],
    [2, 2, 6, 0, 0],
    [3, 3, 7, 1, 1],
    [4, 4, 8, 2, 2],
    [5, 5, 9, 3, 3] 
]))

/* should return 
    [ 
        [9, 0, 1, 2, 3],
        [9, 0, 1, 2, 3],
        [5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5 ]
    ]
*/ 
