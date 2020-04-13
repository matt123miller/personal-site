import sanityClient from "@sanity/client";
import blocksToHtml from "@sanity/block-content-to-html";

const dataset = 'blog-content';
const projectId = '14mnylm0'

const client = sanityClient({
  projectId,
  dataset,
  useCdn: false
});



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
  getPostWithId,
  getLatestPost,
  transformContentToHtml,
  serializers as defaultSerialiser
}

async function getAllPosts() {

  const query = "*[_type == 'post']";
  const params = {};
  const posts = await client.fetch(query, params);

  return posts;
}

async function getRecentPosts(numberOfPosts = 3) {
  
}

async function getLatestPost() {

}

async function getPostWithId() {

}