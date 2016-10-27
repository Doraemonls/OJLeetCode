/**
 * @param {number[]} A
 * @return {number}
 */
'use strict';

var maxRotateFunction = function(A) {
    if(A===null || A===undefined || A.length ===0) {
    	return 0;
    }
   	
    var count =A.length, sum =0, i=0, j=0;
    var res = 0, ite = 0;
    //Calculate first round, for iteration,
    for(i=0;i<count;i++) {
    	sum += A[i];
    	ite += i* A[i];
    }
    res = ite;
    //Calculate rest f(n) based on f(n-1)
    for(j=1 ; j<count; j++) {
    	ite = ite - sum + A[j-1]*count;
    	res = ite > res ? ite : res;
    }

    return res;
};