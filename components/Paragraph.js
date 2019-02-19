import SbEditable from 'storyblok-react'
import Markdown from './Markdown'
import clsx from 'clsx'

const Paragraph = (props) => {

  const styleClasses = clsx({
    'mdc-typography': true,
    ['mdc-typography--' + props.content.typography || 'body1']: true
  }, props.content.style)
  return (
    <SbEditable content={props.content}>
      <div className={styleClasses}>
        <Markdown content={props.content.text}/>
      </div>
    </SbEditable>
  )
}

export default Paragraph
