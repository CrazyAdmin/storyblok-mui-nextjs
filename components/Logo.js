import imageService from '../utils/ImageService'
import {Link} from '../routes'
import SbEditable from 'storyblok-react'

const Logo = (props) => {
  const src = props.content.source
  const height = Number(props.content.height || '56')
  const proxySrc = imageService(src, `0x${2 * height}`)
  const alt = props.content.alt || 'image logo'
  return (
    <SbEditable content={props.content}>
      <Link route={'/'}>
        <a className={`navbar-brand`}>
          <img src={proxySrc} height={height} alt={alt}/>
        </a>
      </Link>
    </SbEditable>
  )
}

export default Logo
