// Generated by BUCKLESCRIPT VERSION 1.4.3 , PLEASE EDIT WITH CARE
'use strict';

var History = require("../../src/dom/history");

document.history.length;

History.scrollRestoration(document.history);

History.setScrollRestoration(document.history, /* true */1);

document.history.state;

document.history.back();

document.history.forward();

document.history.go(-2);

document.history.pushState(document.history.state, "My title", "http://...");

document.history.replaceState(document.history.state, "My title", "http://...");

/*  Not a pure module */
