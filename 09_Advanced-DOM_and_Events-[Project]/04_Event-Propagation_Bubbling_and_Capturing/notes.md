1. JavaScript event has a very important property called event bubbling and capturing.

2. What happens when someone clicks on a link?
   A: As click happens on that link, the DOM then generates a click right away. 

   However, this event is actually not generated at the target element but at the parent element of the target element. Actually the event is generated at the root element of the DOM tree. 

   And from there, the so-called capturing phase starts, where the event then travels all the way down from the document root to the target element.

   It will pass through every single parent element and then finally reach the target element.
   As soon as the event reaches the target, the target phase begins, where the event is then handled by the target element.

   After reaching the target, the event then actually travels all the way up to the document root again, in the so-called bubbling phase.



