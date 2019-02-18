import StoryblokService from './StoryblokService'

class SettingsService {
  constructor () {
    this.settings = null
  }

  setSettings (values) {
    this.settings = values
  }

  async getSettings () {
    if (!this.settings) {
      return this.loadSettings()
    }
    return this.settings
  }

  async loadSettings () {
    const settings = await StoryblokService.get(`cdn/stories/settings`)
    this.setSettings(settings)
    return settings
  }
}

const settingsInstance = new SettingsService()

export default settingsInstance
