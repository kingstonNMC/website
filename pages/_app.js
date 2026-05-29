import { useState } from 'react'
import '../styles/output.css'
import '../styles/scrollbar.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import { Open_Sans } from 'next/font/google'
import AOSProvider from '../components/aos'
import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps }) {
  let pageMetaTitle = pageProps?.metaTitle || 'Futureproof'
  let pageMetaDescription = pageProps?.metaDescription || 'Futureproof'

  const pageLabel = pageProps?.condition?.[0]?.fields?.label
  /*
  if(pageProps?.type == 'conditions') {
    pageMetaTitle = `Relief for ${pageProps?.condition?.[0]?.fields?.label} in Toronto | Danforth Pain Clinic`
    pageMetaDescription = `Struggling with ${pageProps?.condition?.[0]?.fields?.label}? Danforth Pain Clinic provides personalized pain management solutions to help you feel your best. Book now.`
  }*/
  /*
  if(pageProps?.type == 'treatment') {
    pageMetaTitle = `${pageProps?.location?.[0]?.fields?.label} in Toronto | Advanced Pain Relief at Danforth Pain Clinic`
    pageMetaDescription = `Looking for effective ${pageProps?.location?.[0]?.fields?.label} in Toronto? Danforth Pain Clinic offers advanced pain relief solutions tailored to your needs. `
  }*/
  /*
  if(pageProps?.type == 'location') {
    pageMetaTitle = `Pain Management Clinic in ${pageProps?.location?.[0]?.fields?.label} | Danforth Pain Clinic`
    pageMetaDescription = `Danforth Pain Clinic proudly serves ${pageProps?.location?.[0]?.fields?.label} with expert pain management treatments. Book a consultation today and start your journey to pain relief.`
  }
  */
  console.log(pageProps)

  return (
    <div>
      <meta property="og:site_name" content="Futureproof" />
      <title>{pageMetaTitle}</title>
      <meta name="description" content={pageMetaDescription} />
      <link href="https://api.fontshare.com/v2/css?f[]=clash-display@300,400,500,600,700&display=swap" rel="stylesheet" />

      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@200;300;400;500;600;700;800&family=DM+Sans:wght@300;400;700;900&display=swap" rel="stylesheet"></link>
      <link rel="icon" href="https://images.ctfassets.net/p1oy5wf7zkyi/3dKXCFfEBm8ORTbiG46uuE/498ac210b9782c92decd2d26947bb950/Logo_All_Black.avif" />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageProps?.schema) }}
      />
      <GoogleAnalytics gaId="G-FTCRFWLMX1" />
      
      <Header hero={pageProps?.project?.fields?.hero}  />
      <AOSProvider>
        <Component {...pageProps} />
        <SpeedInsights/>
      </AOSProvider>
      <Footer globals={pageProps?.global?.items?.[0]} content={pageProps?.global?.items?.[0]?.fields} />
    </div>
  )
  
}

export default MyApp