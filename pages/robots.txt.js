import React from 'react'

const robots = ``

export default class Sitemap extends React.Component {

  static getInitialProps ({res}) {
    // res.setHeader('Content-Type', 'text/xml')
    res.setHeader('Content-Type', 'text/plain')
    res.write(robots)
    res.end()
  }

}
