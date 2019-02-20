import Components from './index'
import SbEditable from 'storyblok-react'
import {GridInner} from '@rmwc/grid'

const MatRow = (props) => (
  <SbEditable content={props.content}>
    <GridInner>
      {props.content.body.map((blok) =>
        Components(blok)
      )}
    </GridInner>
  </SbEditable>
)

export default MatRow
