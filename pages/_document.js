import Document, {Head, Main, NextScript} from 'next/document'
import StoryblokService from '../utils/StoryblokService'
import flush from 'styled-jsx/server'
import PropTypes from 'prop-types'

class MyDocument extends Document {
  render () {
    const {pageContext} = this.props

    return (
      <html>
      <Head>
        <meta
          name="theme-color"
          content={pageContext ? pageContext.theme.palette.primary.main : null}
        />
        <script
          dangerouslySetInnerHTML={{__html: `var StoryblokCacheVersion = '${StoryblokService.getCacheVersion()}';`}}></script>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </html>
    )
  }
}

MyDocument.getInitialProps = ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  let pageContext
  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
      pageContext = props.pageContext
      return <Component {...props} />
    }

    WrappedComponent.propTypes = {
      pageContext: PropTypes.object.isRequired
    }

    return WrappedComponent
  })

  let css
  // It might be undefined, e.g. after an error.
  if (pageContext) {
    css = pageContext.sheetsRegistry.toString()
  }

  return {
    ...page,
    pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: css}}
        />
        {flush() || null}
      </React.Fragment>
    )
  }
}

export default MyDocument
