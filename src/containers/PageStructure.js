import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {getBasePath} from '../utils/routing'

import styles from './PageStructure.styles'

const BASE_PATH = getBasePath()

const _genPath = (subPath = '') => (
    BASE_PATH + subPath
)

export default class PageStructure extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render() {
        let {children} = this.props

        return (
            <div style={styles.root}>
                <header style={styles.header}>
                    <Link to={_genPath()}>HOME</Link>
                    <Link to={_genPath('index-as-key')}>Index as Key</Link>
                    <Link to={_genPath('unique-key')}>Unique Value key</Link>
                    <Link to={_genPath('inputs')}>Inputs</Link>
                </header>
                <main style={styles.main}>
                    {children}
                </main>
            </div>
        )
    }
}
