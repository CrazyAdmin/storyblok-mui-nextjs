import SbEditable from 'storyblok-react'
import clsx from 'clsx'
import {Link} from '../../routes'
import Button from '@material-ui/core/Button'
import React from 'react'
import Icon from '@material-ui/core/Icon';
const MtButton = (props) => {
  const content = props.content
  const link = content.link
  const property = content.property || []
  const buttonClasses = clsx(property)
  const RawButton = () => {
    if(content.icon && content.icon.icon){
      return (<Button className={buttonClasses}
                      size={content.size}
                      variant={content.variant}
                      color={content.color}>
        <Icon className={`fa ${content.icon.icon}`}/>&nbsp;
        {content.text}
      </Button>)
    }
    return (<Button className={buttonClasses}
                    size={content.size}
                    variant={content.variant}
                    color={content.color || 'default'}>
      {content.text}
    </Button>)
  }

  const ButtonChild = () => {
    if (link.linktype === 'story') {
      return (
        <Link route={`/${link.cached_url}`}>
          <RawButton/>
        </Link>
      )
    }
    return <RawButton/>
  }
  return (
    <SbEditable content={props.content}>
      <ButtonChild/>
    </SbEditable>
  )
}

export default MtButton
