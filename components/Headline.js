import SbEditable from 'storyblok-react'
import * as ReactTypography from '@material/react-typography'
import React from 'react'

// import '@material/react-typography/index.scss'
import '@material/react-typography/dist/typography.min.css'

const Headline = (props) => {
  let text = props.content.text
  let typography = props.content.typography
   return (
    <SbEditable content={props.content}>
      {React.createElement(ReactTypography[typography || 'Headline4'], {
        className: props.content.style,
        tag: props.content.tag
      }, text)}
    </SbEditable>
  )
}

export default Headline
