// question link -> https://www.hackerrank.com/challenges/plus-minus/problem
﻿'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
     var countP=0,countN=0,count=0,l=arr.length;
     for(var i=0;i<arr.length;i++){
         if(arr[i]==0)
         {
             count++;
         }
         else if(arr[i]>0){
             countP++;
         }
         else{
             countN++;
         }
        
     }
    console.log(countP/l);
    console.log(countN/l);
    console.log(count/l);
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

