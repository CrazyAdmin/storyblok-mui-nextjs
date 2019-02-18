import Components from './index'
import SbEditable from 'storyblok-react'

const Header = (props) => {
  const content = props.settings && props.settings.toolbar || []
  return (
    <SbEditable content={props.settings}>
      <header className="">
        <div className="container">
          {content.map((blok) =>
            Components(blok)
          )}
        </div>
        <style jsx>{``}</style>
      </header>
    </SbEditable>
  )
}

export default Header
