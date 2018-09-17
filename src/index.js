"use strict";

import niceMessage from './say-hello';

const $ = require('jquery');

let sayHello = () => console.log("hello");

sayHello();

console.log(niceMessage());

$(document).ready(() => {
    $('body').html("<h1>Hello from jQuery</h1>");
});
