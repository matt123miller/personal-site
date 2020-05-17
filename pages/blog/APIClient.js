import sanityClient from "@sanity/client";
import blocksToHtml from "@sanity/block-content-to-html";
import imageUrlBuilder from '@sanity/image-url'

// Types

/** @typedef Post
 * @property {String} _type
 * @property {Object} slug
 * @property {String} slug.current
 */


const dataset = 'blog-content';
const projectId = '14mnylm0'

const client = sanityClient({
  projectId,
  dataset,
  useCdn: false
});  

const builder = imageUrlBuilder(client);

const serializers = {
  types: {
    code: props =>
      h("pre", { className: props.node.language }, h("code", props.node.code))
  }    
};  

const transformContentToHtml = (blocks) => {
  return blocksToHtml({
    blocks,
    serializers,
    projectId,
    dataset
  });  
}  

export default client;
export {
  getAllPosts,
  getRecentPosts,
  getPostWithSlug,
  getLatestPost,
  transformContentToHtml,
  imageFromSource,
  serializers as defaultSerialiser
}  


/**
 * 
 * @param {import('@sanity/image-url/lib/types/types').SanityImageSource} source - A sanity image source matching the format defined in https://www.sanity.io/docs/image-type
 */ 
function imageFromSource(source) {
  return builder.image(source);
}  

// Also have a direct to image url function?
// It just appends .url() on the end but means I don't have to think about it
// But then I don't get to apply other alterations to it like sizing etc.

// GROQ cheatsheet
// https://www.sanity.io/docs/query-cheat-sheet

/**
 * 
 * @param {Boolean} fullPosts 
 * @returns {Post[]}
 */
async function getAllPosts(fullPosts = false) {

  
  const additionalQuery = fullPosts ? '' : '';
  const query = `*[_type == 'post']`;
  const params = {};
  const posts = await client.fetch(query, params);

  return posts;
}
/**
 * 
 * @param {Number} numberOfPosts 
 * @returns {Post[]}
 */
async function getRecentPosts(numberOfPosts = 3) {

  // Get the {numberOfPosts} most recent queries,
  const query = `*[_type == 'post'] | order(publishedAt asc) [0...${numberOfPosts}]`;
  const params = {};
  const posts = await client.fetch(query, params);

  return posts;
}
/**
 * 
 * @returns {Post}
 */
async function getLatestPost() {
  const query = `*[_type == 'post'] | order(publishedAt asc)`;
  const params = {};
  const posts = await client.fetch(query, params);

  return posts;
}

/**
 * 
 * @param {String} slug 
 * @returns {Post}
 */
async function getPostWithSlug(slug) {

  const query = `*[slug.current == '${slug}'][0]`;
  const params = {  };
  const post = await client.fetch(query, params);
  
  return post;
}
