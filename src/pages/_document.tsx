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
        <Html lang="pt-br">
          <Head>
            <link rel="shortcut icon" href="favicon.png" type="image/png"/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@400;500;600&display=swap" rel="stylesheet" /> 
          </Head>
          <body className="bg-gray-100 dark:bg-trueGray-800">
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument