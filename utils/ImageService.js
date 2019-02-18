function imageService (image, option = '') {
  const imageService = '//img2.storyblok.com/'
  const path = image.replace('//a.storyblok.com', '')
  return imageService + option + path
}

export default imageService
