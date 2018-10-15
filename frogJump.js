// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    let minimumJump = parseInt((Y - X) / D)

    if ((minimumJump * D + X) < Y) {
        minimumJump += 1
    }

    return minimumJump
}

console.log(solution(10, 85, 30))