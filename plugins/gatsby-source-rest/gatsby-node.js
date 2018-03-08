const uuid = require('uuid')
const crypto = require('crypto')
const fetch = require('node-fetch')

exports.sourceNodes = ({ boundActionCreators }, pluginOptions, done) => {
  const { createNode } = boundActionCreators
  const { type = 'Todo' } = pluginOptions

  fetch(`https://loopback3-boilerplate.herokuapp.com/api/todos`).then((res) => res.json()).then((json) => {
    json.map((item) => {
      const contentDigest = crypto.createHash(`md5`).update(JSON.stringify(item)).digest(`hex`)
      const nodeBase = {
        id: uuid(),
        parent: null,
        children: [],
        internal: {
          contentDigest,
          type
        }
      }
      item.id = String(item.id)
      createNode(Object.assign({}, nodeBase, item))
    })

    done()
  })
}
