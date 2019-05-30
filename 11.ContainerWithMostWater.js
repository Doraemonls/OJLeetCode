/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var i= 0, j = height.length -1;
    var area = 0; max = -1;

    while(i!=j) {
    	area = Math.abs((j-i) * Math.min(height[i], height[j]));
    	max = Math.max(area, max);

    	if(height[i]>height[j]) {
    		j--;
    	}else {
    		i++
    	}
    }

    return max;
};