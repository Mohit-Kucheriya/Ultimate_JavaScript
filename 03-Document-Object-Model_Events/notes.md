DOM - Document Object Model

1. Structure Representation of HTML Document. Allows JavaScript to access HTML elements and style to manipulte them.

2. Change text, HTML attributes, and even CSS styles.

3. DOM is automatically created by the browser as soon as the HTML page loads. And it's stored in a tree-like structure.

4. In these tree, each HTML element is one object.

5. Each object has a reference to its parent, siblings, children, and so on.

6. DOM always starts with the document object, right at the very top.

7. First child element of document is the <html> element.

8. <html> element has usually two children, the <head> and <body> elements.

9. Rule: whatever is in the HTML document also has to be in the DOM.

10. DOM and DOM methods are actually parts of something called the Web APIs. So the Web APIs are like libraries that browser implement and that we can access from our JavaScript code.

11. APIs - Application Programming Interfaces.

12. addEventListener - Adds an event listener to an element. Takes two arguments - the event name and the function to executes what to do when the event is triggered.

13. Event - An event is something that happens in the browser. For example, when you click on a button, a click event is triggered.

14. EventListener - An event listener is a function that is executed when an event is triggered.

15. We don't need to call the function directly, it's the JavaScript engine who call this function as soon as the event happens.

16. querySelector - Selects the first element that matches the specified selector even if there are more than one only the first one is returned.

17. querySelectorAll - Selects all elements that match the specified selector and returns a NodeList which is an array-like object.

18. Three types of key events: keydown, keyup, and keypress.

19. Whenever an listener is added, JavaScript does in fact generate an object and that object contains all the information about the event, including the key that was pressed. Simply called the event object.

20. We can access that object by using the event parameter in the function that we pass to addEventListener.