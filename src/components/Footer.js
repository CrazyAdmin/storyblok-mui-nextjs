import Components from './index'
import SbEditable from 'storyblok-react'

const Footer = (props) => {
  const content = props.settings && props.settings.footer || []
  return (
    <SbEditable content={props.settings}>
      <footer className="">
        <div className="container">
          {content.map((blok) =>
            Components(blok)
          )}
        </div>
        <style jsx>{``}</style>
      </footer>
    </SbEditable>
  )
}

export default Footer
