import SbEditable from 'storyblok-react'
import clsx from 'clsx'
import {Link} from '../routes'
import {Button, ButtonIcon} from '@rmwc/button'

import '@material/button/dist/mdc.button.min.css';

const MtButton = (props) => {
  const link = props.content.link
  const property = props.content.property || []
  const buttonClasses = clsx(property)

  const RawButton = () => (<Button className={buttonClasses}
                                   label={props.content.text}
                                   dense={property.includes('dense')}
                                   outlined={property.includes('outlined')}
                                   raised={property.includes('raised')}
                                   ripple={property.includes('ripple')}
                                   unelevated={property.includes('unelevated')}
                                   theme={['primary', 'onSecondary']}/>)

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
