/* eslint-disable @next/next/no-sync-scripts */
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
            crossOrigin="anonymous"
          />

          <link rel="shortcut icon" href="assets/images/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,500;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap"
            rel="stylesheet"
          />

          <link rel="stylesheet" href="assets/css/all.min.css" />
          <link rel="stylesheet" href="assets/css/animate.min.css" />
          <link rel="stylesheet" href="assets/webfonts/flaticon/flaticon.css" />
          <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="assets/css/jquery.fancybox.min.css" />
          <link rel="stylesheet" href="assets/css/layerslider.css" />
          <link rel="stylesheet" href="assets/css/template.css" />
          <link rel="stylesheet" href="assets/css/style.css" />
          <link
            rel="stylesheet"
            href="assets/css/category/digital-agency.css"
          />
        </Head>
        <body className="home">
          <Main />
          <NextScript />

          <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
            integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
            crossOrigin="anonymous"
          />

          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
            integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz"
            crossOrigin="anonymous"
          ></script>
          <script src="assets/js/jquery.min.js"></script>
          <script src="assets/js/greensock.js"></script>
          <script src="assets/js/layerslider.transitions.js"></script>
          <script src="assets/js/layerslider.kreaturamedia.jquery.js"></script>
          <script src="assets/js/jquery.fancybox.min.js"></script>
          <script src="assets/js/wow.js"></script>
          <script src="assets/js/owl.carousel.min.js"></script>
          <script src="assets/js/paraxify.js"></script>
          <script src="assets/js/mixitup.min.js"></script>
          <script src="assets/js/custom.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
