import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import styles from './PageStructure.styles'

export default class PageStructure extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    let { children } = this.props

    return (
      <div style={styles.root}>
        <header style={styles.header}>
          <Link to="/">HOME</Link>
          <Link to="/index-as-key">Index as Key</Link>
          <Link to="/unique-key">Unique Value key</Link>
          <Link to="/inputs">Inputs</Link>
        </header>
        <main style={styles.main}>{children}</main>
      </div>
    )
  }
}
