/*
 * @Author: your name
 * @Date: 2021-10-25 11:40:29
 * @LastEditTime: 2021-10-25 11:42:55
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /js/算法/剑指offer/栈与队列/简单/20包含min函数的栈/index.js
 */
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.Stack = []
  this.MinStack = [Infinity]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.Stack.push(x)
  this.MinStack.push(Math.min(this.MinStack[this.MinStack.length - 1], x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.Stack.pop()
  this.MinStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.Stack[this.Stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.MinStack[this.MinStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();
minStack.pop();
minStack.top();
minStack.min();
