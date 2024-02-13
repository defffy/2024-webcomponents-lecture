import "./elements/nma-elements-row.js";
import "./elements/nma-burger.js";

window.addEventListener(
  "togglenav",
  () => {
    console.log("A web component has dispatched a 'togglenav' event");
  },
  false
);
