import "./style.css";
import Typewriter from "./Typewriter";
const typewriter = new Typewriter(
  document.querySelector(".white-spaces") as HTMLElement,
  { loop: true }
);
typewriter
  .typeString(" Where do i start?")
  .pauseFor(1000)
  .typeString("\n\nfunctio")
  .deleteChars(7)
  .typeString(" const temp")
  .pauseFor(150)
  .deleteAll(10)
  .typeString(" why is this so easy?")
  .pauseFor(1000)
  .typeString("\n\nit was a nice experience though")
  .pauseFor(1000)
  .typeString("\n\nfinally i did this man")
  .pauseFor(1000)
  .deleteAll(10)
  .start();
