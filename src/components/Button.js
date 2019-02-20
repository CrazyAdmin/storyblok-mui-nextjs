import SbEditable from 'storyblok-react'
import clsx from 'clsx'
import {Link} from '../../routes'
import Button from '@material-ui/core/Button'
import React from 'react'
import Icon from '@material-ui/core/Icon'

// function NextComposed(props) {
//   const { as, href, prefetch, ...other } = props;
//
//   return (
//     <NextLink href={href} prefetch={prefetch} as={as}>
//       <a {...other} />
//     </NextLink>
//   );
// }

function RawButton (props) {
  const {content = {}, className} = props

  return (<Button className={className}
                  size={content.size}
                  variant={content.variant || 'text'}
                  color={content.color || 'default'}>
    {content.icon && content.icon.icon && <Icon className={`fa ${content.icon.icon}`}/>}
    {content.text}
  </Button>)
}

const MtButton = (props) => {
  const content = props.content
  const link = content.link
  const property = content.property || []
  const buttonClasses = clsx(property)

  return (
    <SbEditable content={props.content}>
      {link.linktype === 'story'
        ? (<Link route={`/${link.cached_url}`} as="index">
          <a>
            <RawButton className="some" content={content}/>
          </a>
        </Link>)
        : <RawButton content={content}/>}
    </SbEditable>
  )
}

export default MtButton
