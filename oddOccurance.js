// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    const matchedIndex = []
    for (let i = 0, len = A.length; i < len; i++) {
        for(let j = i + 1; j < (len - i); j++) {
            console.log(i)
            if (matchedIndex.includes(i))
                break
            } else if (A[i] == A[j]) {
                matchedIndex.push(i)
                matchedIndex.push(j)
                break
            }
        }

        console.log(matchedIndex)
    }
}

solution([9, 3, 9, 3, 9, 7, 9])

