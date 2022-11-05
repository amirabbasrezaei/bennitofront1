import Head from 'next/head'
import { useRouter } from 'next/router';
import React from 'react'

type Props = {
  page?: string;
  title?: string;
  description?: string;
  noindex?: boolean;
}


export default function HeadComponent({ page, title, description, noindex }: Props) {
  const router = useRouter()
  const baseUrl = 'https://bennito.ir'
  console.log(router.route)
  return (

      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='' />
        <meta property="og:site_name" content="طراحی سایت بنیتو" />
        <meta property='og:title' content={`${page} | ${title}`} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content='/og.png' />
        <meta property='og:image:alt' content='' />
        <meta property='og:type' content='website' />
        {noindex && <meta name="robots" content="noindex" />}
        <meta property='og:url' content={baseUrl + router.route} />
        <meta name='twitter:card' content='og.png' />
        <meta name='theme-color' content='#0984E3' />
        <link rel='canonical' href={baseUrl + router.route} />
        <link rel='icon' href='/icons/icon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/icons/touch.svg' />
        <meta name="geo.placename" content="Tehran"></meta>
        <meta name="geo.region" content="IR-07" />
        <meta name="copyright" content="Bennito.ir" />
        <meta name="DC.Subject" content="طراحی سایت | طراحی وب سایت | طراحی سایت فروشگاهی | مدیریت فروشگاه" />
        {/* <link
       rel='manifest'
      crossOrigin='use-credentials'
      href='/manifest.json'
    /> */}
        <title>
          {page} | {title}
        </title>
        <meta name='description' content={description} />
      </Head>
  )
}