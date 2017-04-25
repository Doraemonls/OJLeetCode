/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (l1 === null) {
    return l2;
  }

  if (l2 === null) {
    return l1;
  }

  var x = l1,
    y = l2,
    dig = 0,
    total = 0;
  var res = new ListNode(0),
    temp = res;

  while (temp !== null) {
    total = (x !== null ? x.val : 0) + (y !== null ? y.val : 0) + dig;
    dig = total >= 10 ? 1 : 0;
    temp.val = total % 10;

    if (dig > 0 || (x !== null && x.next !== null) || (y !== null && y.next !== null)) {
      temp.next = new ListNode(0);
    }

    if (x !== null) {
      x = x.next;
    }

    if (y !== null) {
      y = y.next;
    }

    temp = temp.next;
  }
  return res;
}
