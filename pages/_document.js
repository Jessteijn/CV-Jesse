import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
 
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Questrial&display=optional" rel="stylesheet" />
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