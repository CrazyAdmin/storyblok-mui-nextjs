import SbEditable from 'storyblok-react'
import Components from './index'
import clsx from 'clsx'

const NavList = (props) => {
  const body = props.content && props.content.body || []
  const ulClassNames = clsx({
    'navbar-nav': true,
    [props.content.style]: true
  })
  return (
    <SbEditable content={props.content}>
      <ul className={ulClassNames}>
        {body.map((blok) =>
          Components(blok)
        )}
      </ul>
    </SbEditable>
  )
}

export default NavList
