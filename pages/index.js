import '../src/bootstrap';
// --- Post bootstrap -----
import Components from '../components/index'
import StoryblokService from '../utils/StoryblokService'
import Layout from '../components/Layout'
import React from 'react'
import {withRouter} from 'next/router'
import SettingsService from '../utils/SettingsService'

export default withRouter(
  class extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        pageContent: props.page && props.page.data.story.content || [],
        settings: props.settings && props.settings.data.story.content || {}
      }
    }

    componentDidUpdate (prevProps) {
      if (this.props.router.asPath !== prevProps.router.asPath) {
        this.setState({
          pageContent: this.props.page.data.story.content
        })
      }
    }

    static async getInitialProps (context) {
      const query = context.query
      StoryblokService.setQuery(query)
      let slug = query.slug || 'home'
      if (slug.match(/^.*\.[^\\]+$/)) {
        return {}
      }
      try {
        let [page, settings] = await Promise.all([
          StoryblokService.get(`cdn/stories/${slug}`),
          SettingsService.getSettings()
        ])
        return {
          page,
          settings
        }
      } catch (e) {
        console.error(e)
      }
      return {}
    }

    componentDidMount () {
      StoryblokService.initEditor(this)
    }

    render () {
      return (
        <Layout settings={this.state.settings}>
          {Components(this.state.pageContent)}
        </Layout>
      )
    }
  }
)
