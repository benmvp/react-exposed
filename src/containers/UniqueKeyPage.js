import React, {Component} from 'react'
import range from 'lodash/range'

import styles from './UniqueKeyPage.styles'

const INITIAL_VALUES = range(6)
    .map((index) => ({value: `value${index}`, display: `Item #${index + 1}`}))

export default class IndexKeyPage extends Component {
    state = {
        values: INITIAL_VALUES
    }

    _handleAdd() {
        let {values: currentValues} = this.state

        this.setState({
            values: [
                {
                    value: `value${Date.now()}`,
                    display: `Item #${currentValues.length + 1}`
                },
                ...currentValues
            ]
        })
    }

    render() {
        let {values} = this.state
        let listItems = values.map(({display, value}) => (
            <li key={value}>{display}</li>
        ))

        return (
            <div>
                <h1>Unique Value as Key</h1>

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
