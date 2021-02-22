import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
  } from 'next/document'
  
  class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx)
  
      return initialProps
    }
  
    render() {
      return (
        <Html>
          <Head>
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="true"
            />
            <link
              rel="preload"
              as="style"
              href="https://fonts.googleapis.com/css2?family=Inter&family=Rajdhani:wght@600&display=swap"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Inter&family=Rajdhani:wght@600&display=swap"
              media="print"
              onLoad="this.media='all'"
            />
            <noscript>
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Inter&family=Rajdhani:wght@600&display=swap"
              />
            </noscript>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument