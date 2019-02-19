import Components from './index'
import SbEditable from 'storyblok-react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const Header = (props) => {
  const content = props.settings && props.settings.toolbar || []
  return (
    <SbEditable content={props.settings}>
      <header className="">
        <AppBar position="static">
          <Toolbar>
            {content.map((blok) =>
              Components(blok)
            )}
          </Toolbar>
        </AppBar>
        <style jsx>{``}</style>
      </header>
    </SbEditable>
  )
}

export default Header
