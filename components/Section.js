import Components from './index'
import SbEditable from 'storyblok-react'
import classNames from 'classnames'
import ContainerDimensions from 'react-container-dimensions'
import imageService from '../utils/ImageService'

const Section = (props) => {
  const backgroundImage = props.content.background_image
  const backgroundImageProperty = props.content.background_image_property || []
  let property = props.content.property || []
  const containerClasses = classNames({
    'container-fluid': property.includes('full'),
    'container': !property.includes('full')
  })
  const getBackgroundImageSource = (context) => {
    let path = ''
    if (!backgroundImageProperty.includes('contain')) {
      path = `${context.width}x${context.height}`
      if (backgroundImageProperty.includes('crop')) {
        path += '/smart'
      }
    }
    const src = imageService(backgroundImage, path)
    return src
  }

  const WithBackgroundImage = () => {
    const backgroundImagePosition = props.content.background_image_position || 'center'
    const sectionClasses = classNames({
      'content-section': true,
      'background-section': true,
      'bg-section__repeat': backgroundImageProperty.includes('repeat'),
      'bg-section__contain': backgroundImageProperty.includes('contain'),
      [props.content.style]: true
    })
    return (
      <div className="content-section-wrap">
        <ContainerDimensions>
          {(context) => (
            <section className={sectionClasses}
                     style={{
                       'backgroundImage': `url('${getBackgroundImageSource(context)}')`,
                       'backgroundPosition': backgroundImagePosition,
                       'padding': props.content.padding || '7.5rem 0'
                     }}>
              <div className={containerClasses}>
                {props.content.body.map((blok) =>
                  Components(blok)
                )}
              </div>
              <style jsx global>{`
            .background-section{
              background-repeat: no-repeat;
              background-size: cover;
              background-position:center;
            }
            .background-section.bg-section__contain{
             background-size: contain;
            }
            .background-section.bg-section__repeat{
             background-repeat: repeat;
            }
            `}</style>
            </section>
          )}
        </ContainerDimensions>
      </div>
    )
  }

  const Child = () => {
    if (backgroundImage) {
      return <WithBackgroundImage/>
    }
    return (
      <section className={`content-section py-5 ${props.content.style}`}
               style={{'padding': props.content.padding || '7.5rem 0'}}>
        <div className={containerClasses}>
          {props.content.body.map((blok) =>
            Components(blok)
          )}
        </div>
      </section>
    )
  }

  return (
    <SbEditable content={props.content}>
      <Child/>
    </SbEditable>
  )

}

export default Section
