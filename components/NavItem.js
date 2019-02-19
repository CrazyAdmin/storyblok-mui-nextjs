import clsx from 'clsx'
import {Link} from '../routes'
import SbEditable from 'storyblok-react'

const NavItem = (props) => {
  const link = props.content.link
  const property = props.content.property || []
  const buttonClasses = clsx({
    'nav-link': true,
    [property.join(' ')]: true
  })

  const ButtonChild = () => {
    if (link.linktype === 'story') {
      return (
        <Link route={`/${link.cached_url}`} prefetch>
          <a className={buttonClasses}>{props.content.name}</a>
        </Link>
      )
    }
    return (
      <a className={buttonClasses} href={link.cached_url}>{props.content.name}</a>
    )
  }
  return (
    <SbEditable content={props.content}>
      <li className="nav-item">
        <ButtonChild/>
      </li>
    </SbEditable>
  )
}

export default NavItem
