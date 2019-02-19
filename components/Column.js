import Components from './index'
import SbEditable from 'storyblok-react'
import clsx from 'clsx'
import {Cell} from '@material/react-layout-grid'

const Column = (props) => {
  // const width = props.content && props.content.width || {}
  const content = props.content
  const colClasses = clsx(props.content.style)
  return (
    <SbEditable content={props.content}>
      <Cell className={colClasses}
            columns={content.width_general}
            phoneColumns={content.width_mobile}
            tabletColumns={content.width_tablet}
            desktopColumns={content.width_desktop}
            order={content.order}
            align={content.align}>
        {props.content.body.map((blok) =>
          Components(blok)
        )}
      </Cell>
    </SbEditable>
  )
}

export default Column
