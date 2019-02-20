import NextHead from 'next/head'
import {string} from 'prop-types'
import NProgress from 'nprogress'
import Router from 'next/router'
import StoryblokService from '../../utils/StoryblokService'

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8"/>
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description || defaultDescription}/>
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png"/>
    <link rel="apple-touch-icon" href="/static/touch-icon.png"/>
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882"/>
    <link rel="icon" href="/static/favicon.ico"/>
    <meta property="og:url" content={props.url || defaultOGURL}/>
    <meta property="og:title" content={props.title || ''}/>
    <meta property="og:description" content={props.description || defaultDescription}/>
    <meta name="twitter:site" content={props.url || defaultOGURL}/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:image" content={props.ogImage || defaultOGImage}/>
    <meta property="og:image" content={props.ogImage || defaultOGImage}/>
    <meta property="og:image:width" content="1200"/>
    <meta property="og:image:height" content="630"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:300,400"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>

    {StoryblokService.bridge()}
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
