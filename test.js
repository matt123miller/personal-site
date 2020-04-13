const sanityClient = require("@sanity/client");
const blocksToHtml = require('@sanity/block-content-to-html')

const client = new sanityClient({
  "projectId": "14mnylm0",
  "dataset": "blog-content",
  // token: 'sanity-auth-token', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
});

const h = blocksToHtml.h

const serializers = {
  types: {
    code: props => (
      h('pre', { className: props.node.language },
        h('code', props.node.code)
      )
    )
  }
}

client.fetch("*[_type == 'post'][0]").then(r => {
  const el = blocksToHtml({
    blocks: r.body,
    serializers: serializers,
    projectId: '14mnylm0',
    dataset: 'blog-content'
  })

  console.log(el);
})
