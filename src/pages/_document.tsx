/* eslint-disable react/no-danger */
import * as React from 'react'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style key="emotion-css" data-emotion-css={styles.ids.join(' ')} dangerouslySetInnerHTML={{ __html: styles.css }} />
      ]
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
