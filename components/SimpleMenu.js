import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({anchorEl: event.currentTarget})
  }

  handleClose = () => {
    this.setState({anchorEl: null})
  }

  render () {
    const {anchorEl} = this.state
    const props = this.props
    return (
      <div>
        <Button aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
        >
          {props.label}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {this.props.children}
        </Menu>
      </div>
    )
  }
}

export default SimpleMenu
