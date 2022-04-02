import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <meta name="theme-color" content="#212121" />
                    <meta name="msapplication-navbutton-color" content="#212121" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&family=Rubik:wght@400;600&display=swap" rel="stylesheet" />

                    <link rel="preconnect" href="https://cdn.jsdelivr.net" />
                    <link href={`https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css`} rel="stylesheet" />
                    <script src={`https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js`}></script>
                </Head>
                <body className="bg-light">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}