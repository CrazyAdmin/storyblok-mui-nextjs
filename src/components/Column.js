import Components from './index'
import SbEditable from 'storyblok-react'
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'


const Column = (props) => {
  // const width = props.content && props.content.width || {}
  const content = props.content
  const colClasses = clsx(props.content.style)
  return (
    <SbEditable content={props.content}>
      <Grid item
            className={colClasses}
            columns={content.width_general}
            xs={content.width_mobile}
            sm={content.width_tablet}
            md={content.width_desktop}
            lg={content.width_lg}
            order={content.order}
            align={content.align}>
        {props.content.body.map((blok) =>
          Components(blok)
        )}
      </Grid>
    </SbEditable>
  )
}

export default Column
