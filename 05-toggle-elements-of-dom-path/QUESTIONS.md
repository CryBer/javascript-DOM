# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

To find the <ul> element with the second_five class and all the <li> elements under it I used querySelectorAll() which returned all the needed <li> in a list, which I iterated over using ForEach() and changed its style.