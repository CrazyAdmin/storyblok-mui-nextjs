import SbEditable from 'storyblok-react'
import classNames from 'classnames'
import {Link} from '../routes'

const Button = (props) => {
  const link = props.content.link
  const property = props.content.property || []
  const buttonClasses = classNames({
    'btn': true,
    [property.join(' ')]: true
  })

  const ButtonChild = () => {
    if (link.linktype === 'story') {
      return (
        <Link route={`/${link.cached_url}`}>
          <a className={buttonClasses}>{props.content.text}</a>
        </Link>
      )
    }
    return (
      <a className={buttonClasses} href={link.cached_url}>{props.content.text}</a>
    )
  }
  return (
    <SbEditable content={props.content}>
      <ButtonChild/>
    </SbEditable>
  )
}

export default Button
