import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
 
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Questrial&display=optional" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css" />
        </Head>
        <body>
            {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}