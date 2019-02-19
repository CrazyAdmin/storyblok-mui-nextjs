import SbEditable from 'storyblok-react'
import Components from './index'
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'

const NavList = (props) => {
  const content = props.content
  const body = content && content.body || []
  const ulClassNames = clsx({
    [content.style]: true
  })
  return (
    <SbEditable content={content}>
      <Grid container direction="row" justify={content.justify} alignItems={'center'}>
        {body.map((blok) =>
          Components(blok)
        )}
      </Grid>
    </SbEditable>
  )
}

export default NavList
