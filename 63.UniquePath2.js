/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
'use strict';

var getPathNode = function(i,j, pathMatris)
{
    var m = pathMatris.length;
    var n = pathMatris[0].length;
    if((i<0||j<0) ||(i>=m ||j>=n))
    {
        return 0;
    }

    return pathMatris[i][j];
}

var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    var pathMatris = new Array();
    var i =0, j=0;

    for(i=0;i<m;i++)
    {
        pathMatris[i] = new Array();
    	for(j=0; j<n;j++)
    	{
            if(obstacleGrid[i][j] == 1)
            {
                pathMatris[i][j] = 0;
            }
            else 
            {
                if(i==0 && j ==0)
                {
                    pathMatris[i][j] = 1;
                }
                else 
                {
                    pathMatris[i][j] = getPathNode(i,j-1,pathMatris) + getPathNode(i-1,j,pathMatris)
                }
            }
    	}
    }
    
    return pathMatris[m-1][n-1];
};

