import "nextra-theme-docs/style.css"
import "../styles/app.css"
import { useEffect } from "react"
import Head from "next/head"

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const newcss = document.createElement("style")
    newcss.innerText ='* { scroll-behavior: smooth; }'
    document.head.appendChild(newcss)
  })
  return (
    <>
      <Head>
        <meta property="description" content="Dokumentasi Aplikasi !"/>
        <meta property="og:description" content="Dokumentasi Aplikasi !"/>
        <meta name="apple-mobile-web-app-title" content="Spesana24BAPI"/>
        <meta name="twitter:site" content="@spesana24b"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
