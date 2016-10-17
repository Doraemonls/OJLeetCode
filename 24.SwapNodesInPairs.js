/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
'use strict';

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head === null || head === undefined || 
  	head.next === null || head.next === undefined) {
    return head;
  }

  var start = new ListNode(-1), t1;  //keynote to add a fake element to store the previous actions;
  start.next = head;
  
  t1 = start;

  while( t1.next !==null && t1.next.next !== null) {
    var last = t1.next.next.next; //Mark rest items
    t1.next.next.next = t1.next; //Connect back;
    t1.next = t1.next.next;  // revert items
    t1.next.next.next = last;
    t1 = t1.next.next;
  }

  return start.next;
};
