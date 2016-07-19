/**
 * @param {string} s
 * @return {string}
 */
'use strict';

function str2Ary(s){
	var arr = new Array(s.length);
	for(var i=0;i<s.length; i++){
		arr[i]=s[i];
	}
	return arr;
}

function reviseEvenStr(s){
	var i= 0, len = s.length;
	var temp;
	for(;i<len/2;i++) {
		temp = s[i];
		s[i]=s[len-1-i];
		s[len-1-i] = temp;
	}
	return s;
}

function reviseOddStr(s){
	var i= 0, len = s.length;
	var temp;
	for(;i<(len-1)/2;i++) {
		temp = s[i];
		s[i]=s[len-1-i];
		s[len-1-i] = temp;
	}
	return s;
}

var reverseString = function(s) {
    if (s === null || s === undefined || s.length === 0) {
    	return s;
    }
    var res , len = s.length;  
	var arr = str2Ary(s);
	if(len%2 === 0) {
		res = reviseEvenStr(arr);
	}else {
		res = reviseOddStr(arr);
	}
	return res.join('');
};