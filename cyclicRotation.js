// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    const shiftedArray = []
    
    for(let i = 0, len = A.length; i < len; i++) {
        // calculate new position of the element after shift
        const newPos = (i + K) % len
        
        // construct new array with new element
        shiftedArray[newPos] = A[i]
    }

    return shiftedArray
}

solution([3, 8, 9, 7, 6], 3)