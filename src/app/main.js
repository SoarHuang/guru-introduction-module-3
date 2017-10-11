// Here we are telling webpack to import our Sass. How cool is that!
// NOTE: This is using an alias configured in webpack.config.js
import "styles/app";

// Tell webpack to import our Clock class, and bundle it into the package.
import Clock from './clock';
const clock = new Clock();

// When the window is loaded, setup the clock
window.onload = () => clock.init();
