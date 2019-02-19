import React from 'react'
import Page from './Page'
import Section from './Section'
import Paragraph from './Paragraph'
import Headline from './Headline'
import Row from './Row'
import Column from './Column'
import Image from './Image'
import Button from './Button'
import NavList from './NavList'
import NavItem from './NavItem'
import Logo from './Logo'
import RowNav from './RowNav'
import RowNested from './RowNested'

const Components = {
  'page': Page,
  'section': Section,
  'headline': Headline,
  'paragraph': Paragraph,
  'row': Row,
  'row_nav': RowNav,
  'column': Column,
  'column_nav': Column, // different set of components
  'image': Image,
  'button': Button,
  'nav_list': NavList,
  'nav_item': NavItem,
  'logo': Logo,
  'row_nested': RowNested
}

export default (blok) => {
  if (typeof Components[blok.component] !== 'undefined') {
    return React.createElement(Components[blok.component], {key: blok._uid, content: blok})
  }
  return React.createElement(() => (
    <div>The component {blok.component} has not been created yet.</div>
  ), {key: blok._uid})
}
