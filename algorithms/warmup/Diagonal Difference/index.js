﻿// Question link https://www.hackerrank.com/challenges/diagonal-difference/problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    const length = arr.length;
    let diagonal1 = 0, diagonal2 = 0;
  
    // Looping through the array and summing the diagonals.
    for(let i = 0; i < length; i++){
      // Calculating the primary diagonal.
        diagonal1 += arr[i][i];
      // Reversing the second dimension of array to calculate secondary diagonal.
        diagonal2 += arr[length -1 - i][i]
    }
    // return absolute difference value.
    return Math.abs(diagonal1 - diagonal2);  
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}

