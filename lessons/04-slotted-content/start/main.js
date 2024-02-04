/*
 * Slots allow you to create a placeholder
 * that you can fill with your own markup.
 *
 * Read more: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot
 * */

/*------ Excercise 1 -------*/

/*
 * Create slots within the `NMACard` that allows
 * you to create placeholder for the heading and
 * main content of the card.
 *
 *
 * Steps:
 * 1. Create a method called 'createSlot' that accepts a 'name'
 * parameter
 * 2. Within the 'createSlot' method, create a variable called 'slotElement'
 * and use 'document.createElement' to create a 'slot' tag
 * 3. Use 'setAttribute' to set the 'name' attribute to the 'name' parameter
 * passed to the method
 * 4. Return the 'slotElement' variable from the 'createSlot' method.
 * 5. In the constructor create a variable named 'headingSlot'.
 * Use the 'createSlot' method  and pass it the value 'heading'
 * 6. Below the 'headingSlot' variable create another called 'contentSlot'.
 * Repeat the same step but pass the `createSlot` method the value 'content'
 * 7. Append the 'headingSlot' and 'contentSlot' to the shadowRoot
 * 8. Go the `index.html` file and follow the instruction above the 'nma-card'
 * element
 */

class NMACard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }


}

customElements.define("nma-card", NMACard);
