import Components from './index'
import SbEditable from 'storyblok-react'
// import {Grid, GridInner} from '@rmwc/grid';
// import '@material/layout-grid/dist/mdc.layout-grid.min.css'

import Grid from '@material-ui/core/Grid'

const MatRow = (props) => {
  const content = props.content
  return (
    <SbEditable content={content}>
      <Grid container
            className={`${content.style}`}
            spacing={content.spacing || 2}
            alignItems={content.alignItems}
            direction={content.direction || 'row'}
            justify={content.justify || 'flex-start'}>
        {content.body.map((blok) =>
          Components(blok)
        )}
      </Grid>
    </SbEditable>
  )
}

export default MatRow
