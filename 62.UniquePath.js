/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
'use strict';

var uniquePaths = function(m, n) {
    
    var pathMatris = new Array();
    var i =0, j=0;
    for(i=0;i<m;i++)
    {
    	pathMatris[i] = new Array();
    	for(j =0; j<n;j++)
    	{
			if(i==0 ||j==0)
    		{
    			pathMatris[i][j] = 1;
    		}
    		else
    		{
    			pathMatris[i][j] = pathMatris[i][j-1] + pathMatris[i-1][j];
    		}    	
    	}
    }
    
    return pathMatris[m-1][n-1];
};