import Components from './index'
import SbEditable from 'storyblok-react'
import {Row} from '@material/react-layout-grid'
// import '@material/react-layout-grid/index.scss';

const MatRow = (props) => (
  <SbEditable content={props.content}>
    <Row>
      {props.content.body.map((blok) =>
        Components(blok)
      )}
    </Row>
  </SbEditable>
)

export default MatRow
