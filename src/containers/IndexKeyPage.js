import React, {Component} from 'react'
import range from 'lodash/range'

import styles from './IndexKeyPage.styles'

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
        let listItems = values.map(({display}, index) => (
            <li key={index}>{display}</li>
        ))

        return (
            <div>
                <h1>Index as Key</h1>

                <section style={styles.exampleSection}>
                    <ul>{listItems}</ul>
                    <button
                        style={styles.addButton}
                        onClick={this._handleAdd.bind(this)}
                    >
                        ADD
                    </button>
                </section>

                <aside>
                    <p>Because the code is using <code>index</code> as the <code>key</code>, when the ADD button is clicked all of the items update when the new item is added to the top of the list. This is making the virtual DOM diffing to do more work than is necessary!</p>

                    <p>Use your Web Inspector to look at the Elements Panel and see how the list items update.</p>
                </aside>
            </div>
        )
    }
}
