import SbEditable from 'storyblok-react'
import Typography from '@material-ui/core/Typography';
import React from 'react'



const Headline = (props) => {
  const content = props.content
  let text = content.text
  let typography = content.typography
   return (
    <SbEditable content={props.content}>
      <Typography component={props.tag} variant={typography} className={content.style}>{text}</Typography>
    </SbEditable>
  )
}

export default Headline
