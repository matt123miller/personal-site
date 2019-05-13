/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// FS is a built in module to node that let's us read files from the system we're running on
const fs = require('fs');

// Dump is a handy debugging function we can use to sort of "console.log" our data
export const dump = (obj: Object) => JSON.stringify(obj, null, 2);

// Making a static map is really long - this is a handy helper function to make one
export const staticMap = ([lng, lat]: [String, String]) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`;

// inserting an SVG
export const icon = (name: String) => fs.readFileSync(`./public/images/icons/${name}.svg`);

// Some details about the site
export const siteName = `Damn Fine Coffee!`;

export const githubURL = 'https://github.com/matt123miller';

export const twitterURL = 'https://twitter.com/matt123miller';

export const linkedinURL = 'https://www.linkedin.com/in/matt123miller/';

// export const 

export const menu = [
    { slug: '/stores', title: 'Stores', icon: 'store', },
    { slug: '/tags', title: 'Tags', icon: 'tag', },
    { slug: '/top', title: 'Top', icon: 'top', },
    { slug: '/add', title: 'Add', icon: 'add', },
    { slug: '/map', title: 'Map', icon: 'map', },
];