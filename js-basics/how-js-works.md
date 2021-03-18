# Basics
* JS is single threaded and synchronous, but can be made async
* synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing
* synchronous code does not have to wait – your program can continue to run. You do this to keep your site or app
  responsive, reducing waiting time for the user.
* PROBLEM: long-running functions will block code

# RUNTIME CONCEPT

* Stack: where the code is executed one by one: e.g. 1) getMoney() is called 2) money is decreased by 500 3) updated
  deposit is displayed
* Heap: is for memory allocation
* Web APIS: responsible for executing async codes (e.g. DOM, AJAX, Timeout)
    * they have a callback function that executes when the code is done
    * are added to a queue (e.g. onClick, onLoad, timeout) because JS is single-threaded -> only executable one after
      another
    * event loop checks the queue, and the stack -> if a function finished executing,
    * the callback function will be executed (the return value is passed to the stack)

# Example: setTimeout(cb, 5000)
1) Stack: setTimeout() is triggered in the Stack
2) Web APIs: a timer with an callback function is started using a Web API
3) Stack is empty, because the rest of the function is executed using the Web API
4) The timer with the callback function will be removed from the Web API and added to the queue
5) When the queue is checked the next time by the event loop, the callback function is fetched by the event loop if the
   stack is currently empty
