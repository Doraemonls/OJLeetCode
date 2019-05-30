

'use strict';

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function buildTree(preOrder, midOrder)
{
	var res = null;

	if(preOrder != null && preOrder.length == 1) 
	{
		return new TreeNode(preOrder[0]);
	}

	if(preOrder != null && preOrder.length > 0){
		var roots = preOrder[0];
		res = new TreeNode(roots);

		var childMidIdx = midOrder.indexOf(roots);

		var leftChildPreStr = preOrder.substring(1, 1+childMidIdx);
		var rightChildPreStr = preOrder.substring(1+childMidIdx, preOrder.length);

		var leftChildMidStr = midOrder.substring(0, childMidIdx);
		var rightChildMidStr = midOrder.substring(childMidIdx+1, midOrder.length-1);

		res.left = buildTree(leftChildPreStr, leftChildMidStr);

		res.right = buildTree(rightChildPreStr, rightChildMidStr);
	}

	return res;
}

