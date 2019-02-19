import SbEditable from 'storyblok-react'
import {Link} from '../routes'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import React from 'react'
import SimpleMenu from './SimpleMenu'
class MtMenu extends React.Component {
  render () {

    const content = this.props.content
    const menuItems = content.body || []
    const Child = (nestedProps) => {
      if (nestedProps.link.linktype === 'story') {
        return (
          <Link route={`/${nestedProps.link.cached_url}`} prefetch>
            <a>
              {nestedProps.name}
            </a>
          </Link>
        )
      }
      return <a href={nestedProps.link.cached_url}>{nestedProps.name}</a>
    }
    return (
      <SbEditable content={content}>
        <SimpleMenu label={content.title}>
          {menuItems.map(nestedProps => (
              <MenuItem key={nestedProps._uid}>{Child(nestedProps)}</MenuItem>
            )
          )}
        </SimpleMenu>
      </SbEditable>
    )
  }
}

export default MtMenu
