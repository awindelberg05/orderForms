/*
    This tiny library was only meant to help me
    start building some basic functionalities to be
    carried over later.
*/


var render = function(template, selector) {
    var node = document.querySelector(selector);
    if (!node) return;
    node.innerHTML = template;
};