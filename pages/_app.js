import '../styles/reset.css'
import '../styles/globals.css'
import { NextSeo } from "next-seo";


function MyApp({ Component, pageProps }) {
  return (
  <>
    <NextSeo
        title="Krakoa"
        titleTemplate="Krakoa"
        defaultTitle="Krakoa"
        description="A Nation for the Mutant People of Earth."
        canonical="https://krakoa.io/"
        openGraph={{
          url: "https://krakoa.io/",
          title: "Krakoa",
          description: "A Nation for the Mutant People of Earth.",
          images: [
            {
              url: "http://localhost:3000/images/Krakoa-Small.png",
              width: 306,
              height: 320,
              alt: "Krakoa",
            },
          ],
        }}
        twitter={{
          handle: "@krakoa",
          site: "@krakoa",
          cardType: "summary_large_image",
        }} />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
