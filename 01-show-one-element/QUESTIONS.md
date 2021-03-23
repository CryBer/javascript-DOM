# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

It doesn't remain revealed because the index.html file tells the browser to load the extra text as hidden, and it's only revealed when the more button is clicked. Therefore the text doesn't stay visible when the page reloads.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

if the window load event listener is removed then the link doesn't appear once the link is clicked. I believe that that listener makes sure the page is fully loaded, and only it lets the other event listeners be added and used to make sure the script doesn't look for a HTML element before it is loaded in to prevent errors.

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

To hide each element I used ForEach() which allowed me to preform a function on each of the elements in the list which was returned by querySelectorAll()