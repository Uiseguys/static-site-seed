import React from 'react'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)

    console.log(stylesStr)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render () {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = <style id='gatsby-inlined-css' dangerouslySetInnerHTML={{ __html: stylesStr }} />
    }

    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />

          {css}
          {this.props.headComponents}

          <title>this is my title</title>

          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' crossOrigin='anonymous' />

          <script src='https://unpkg.com/@ui-guys/stencil-bs-ui-lib@latest/dist/index.js' />
          <script src='https://code.jquery.com/jquery-3.2.1.slim.min.js' crossOrigin='anonymous' />
          <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' crossOrigin='anonymous' />
          <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' crossOrigin='anonymous' />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id='___gatsby' dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
