import Components from './index'
import SbEditable from 'storyblok-react'
import {Grid, Row} from '@material/react-layout-grid';
// import '@material/react-layout-grid/index.scss';
import '@material/react-layout-grid/dist/layout-grid.min.css';

const MatRow = (props) => (
  <SbEditable content={props.content}>
    <Grid className={`${props.content.style}`} align={props.content.grid_align}>
      <Row>
      {props.content.body.map((blok) =>
        Components(blok)
      )}
      </Row>
    </Grid>
  </SbEditable>
)

export default MatRow
