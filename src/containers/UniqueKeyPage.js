import React, {Component} from 'react'
import range from 'lodash/range'
import uniqueId from 'lodash/uniqueId'
import {ITEM_NAMES} from './constants'

import styles from './UniqueKeyPage.styles'

const INITIAL_VALUES = range(6)
    .map((index) => ({value: uniqueId('value'), display: `${ITEM_NAMES[index]}`}))

export default class IndexKeyPage extends Component {
    state = {
        values: INITIAL_VALUES
    }

    _handleAdd() {
        let {values: currentValues} = this.state

        this.setState({
            values: [
                {
                    value: uniqueId('value'),
                    display: `${ITEM_NAMES[currentValues.length]}`
                },
                ...currentValues
            ]
        })
    }

    render() {
        let {values} = this.state
        let listItems = values.map(({display, value}) => (
            <li key={value}>{`${display} (${value})`}</li>
        ))

        return (
            <div>
                <h1>
                    Unique Value as Key
                    (<a href="https://github.com/benmvp/react-exposed/blob/master/src/containers/UniqueKeyPage.js">source</a>)
                </h1>

                <div style={styles.exampleSection}>
                    <ul>{listItems}</ul>
                    <button
                        style={styles.addButton}
                        onClick={this._handleAdd.bind(this)}
                    >
                        ADD
                    </button>
                </div>

                <aside>
                    <p>Because the code is using a unique value as the <code>key</code>, when the ADD button is clicked only the new item is inserted, which properly leverages the virtual DOM optimizations!</p>

                    <p>Use your Web Inspector to look at the Elements Panel and see how the list items update.</p>
                </aside>
            </div>
        )
    }
}
