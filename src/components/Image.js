import SbEditable from 'storyblok-react'
import imageService from '../../utils/ImageService'
import clsx from 'clsx'
import ContainerDimensions from 'react-container-dimensions'

const Image = (props) => {
  const componentProps = props
  let property = componentProps.content.property || []
  const widthProp = componentProps.content.width
  const heightProp = componentProps.content.height
  const getSource = (ctx = {}) => {
    const availableWidth = widthProp || (ctx.width)
    const availableHeight = heightProp || 0
    let path = `${availableWidth || 0}x${availableHeight || 0}`
    if (property.includes('rounded-circle') || property.includes('square')) {
      // overwrite if square
      const iconSize = availableHeight || availableWidth || '64'
      path = `${iconSize}x${iconSize}`
    }
    const src = imageService(componentProps.content.source, path)
    return src
  }
  const imgClasses = clsx(property.join(' '))

  const Img = ({...props}) => <img src={getSource(props.context)} alt={componentProps.content.alt || 'image'}
                                   className={imgClasses}/>

  const Child = () => {
    if (widthProp || heightProp) {
      return <Img/>
    }
    return (
      <ContainerDimensions>
        {(context) => <Img context={context}/>}
      </ContainerDimensions>
    )
  }

  return (
    <SbEditable content={componentProps.content}>
      <div className={`w-100`}>
        <Child/>
      </div>
    </SbEditable>
  )
}

export default Image
