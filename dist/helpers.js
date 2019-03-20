"use strict";
/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/
Object.defineProperty(exports, "__esModule", { value: true });
// FS is a built in module to node that let's us read files from the system we're running on
var fs = require('fs');
// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = function (obj) { return JSON.stringify(obj, null, 2); };
// Making a static map is really long - this is a handy helper function to make one
exports.staticMap = function (_a) {
    var lng = _a[0], lat = _a[1];
    return "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lng + "&zoom=14&size=800x150&key=" + process.env.MAP_KEY + "&markers=" + lat + "," + lng + "&scale=2";
};
// inserting an SVG
exports.icon = function (name) { return fs.readFileSync("./public/images/icons/" + name + ".svg"); };
// Some details about the site
exports.siteName = "Damn Fine Coffee!";
exports.menu = [
    { slug: '/stores', title: 'Stores', icon: 'store', },
    { slug: '/tags', title: 'Tags', icon: 'tag', },
    { slug: '/top', title: 'Top', icon: 'top', },
    { slug: '/add', title: 'Add', icon: 'add', },
    { slug: '/map', title: 'Map', icon: 'map', },
];
