import SbEditable from 'storyblok-react'
import Markdown from './Markdown'
import classnames from 'classnames'

const Paragraph = (props) => {

  const styleClasses = classnames({
    'mdc-typography': true,
    ['mdc-typography--' + props.content.typography || 'body1']: true,
    [props.content.style]: true
  })
  return (
    <SbEditable content={props.content}>
      <div className={styleClasses}>
        <Markdown content={props.content.text}/>
      </div>
    </SbEditable>
  )
}

export default Paragraph
