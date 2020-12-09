import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />

          {/* <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/> */}
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600&display=swap" rel="stylesheet" />

        </Head>
        <body>
          <Main />
          <NextScript />
          
          {/* Formulário integrado RDSM */}
          <script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/9c2b69bb-fa44-4d5a-9e64-1c28f595697f-loader.js" ></script>
        </body>
      </Html>
    )
  }
}