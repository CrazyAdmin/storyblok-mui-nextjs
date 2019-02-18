import Components from './index'
import SbEditable from 'storyblok-react'

const Page = (props) => {
  const body = props.content.body || []
  return (
    <SbEditable content={props.content}>
      {body.map((blok) =>
        Components(blok)
      )}
    </SbEditable>
  )
}

export default Page
