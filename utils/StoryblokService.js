import StoryblokClient from 'storyblok-js-client'

const StoryblokToken = {
  preview: 'ppyQ6CA4ej7Sbr9SDDYZQQtt',
  public: 'DL3cjFjz5ZRyKFp7TdqqDQtt'
}

class StoryblokService {
  constructor () {
    this.devMode = false // If true it always loads draft
    this.token = StoryblokToken.public
    this.client = new StoryblokClient({
      accessToken: this.token,
      cache: {
        clear: 'auto',
        type: 'memory'
      }
    })

    this.query = {}
  }

  getCacheVersion () {
    return this.client.cacheVersion
  }

  get (slug, params) {
    params = params || {}

    if (this.getQuery('_storyblok') || this.devMode || (typeof window !== 'undefined' && window.storyblok)) {
      this.token = StoryblokToken.preview
      this.client.setToken(StoryblokToken.preview)
      params.version = 'draft'
    } else {
      this.token = StoryblokToken.public
      this.client.setToken(StoryblokToken.public)
    }

    if (typeof window !== 'undefined' && typeof window.StoryblokCacheVersion !== 'undefined') {
      params.cv = window.StoryblokCacheVersion
    }

    return this.client.get(slug, params)
  }

  initEditor (reactComponent) {
    if (window.storyblok) {
      window.storyblok.init({accessToken: this.token})
      window.storyblok.on(['change', 'published'], () => location.reload(true))
      window.storyblok.on('input', (event) => {
        if (event.story.content._uid === reactComponent.state.pageContent._uid) {
          reactComponent.setState({pageContent: event.story.content})
        }
      })
    }
  }

  setQuery (query) {
    this.query = query
  }

  getQuery (param) {
    return this.query[param]
  }

  bridge () {
    if (!this.getQuery('_storyblok')) {
      return ''
    }
    return (<script src='//app.storyblok.com/f/storyblok-latest.js'></script>)
  }
}

const storyblokInstance = new StoryblokService()

export default storyblokInstance
