import React, {Component} from 'react'

import styles from './InputsPage.styles'

export default class InputsPage extends Component {
    state = {
        value: 'correct'
    }

    _handleOnChangeFake(e) {
        console.log(e.target.value)
    }

    _handleOnChange(e) {
        this.setState({value: e.target.value})
    }

    render() {
        let {value} = this.state

        return (
            <div>
                <h1>Inputs</h1>

                <label htmlFor="uncontrolled" style={styles.label}>
                    <h3>Uncontrolled input with <code>defaultValue</code></h3>
                </label>
                <input
                    id="uncontrolled"
                    type="text"
                    style={styles.input}
                    defaultValue="defaultValue"
                />

                <label htmlFor="wrongControlled" style={styles.label}>
                    <h3>Incorrect controlled input with <code>value</code> w/o <code>onChange</code></h3>
                </label>
                <input
                    id="wrongControlled"
                    type="text"
                    style={styles.input}
                    value="incorrect"
                />

                <label htmlFor="fakeControlled" style={styles.label}>
                    <h3>Fake controlled input with <code>value</code> & dummy <code>onChange</code></h3>
                </label>
                <input
                    id="fakeControlled"
                    type="text"
                    style={styles.input}
                    value="fake"
                    onChange={this._handleOnChangeFake.bind(this)}
                />

                <label htmlFor="controlled" style={styles.label}>
                    <h3>Correct controlled input with <code>value</code> & state-changing <code>onChange</code></h3>
                </label>
                <input
                    id="controlled"
                    type="text"
                    style={styles.input}
                    value={value}
                    onChange={this._handleOnChange.bind(this)}
                />

                <aside>
                    <p>Because the code is using <code>index</code> as the <code>key</code>, when the ADD button is clicked all of the items update when the new item is added to the top of the list. This is making the virtual DOM diffing to do more work than is necessary!</p>

                    <p>Use your Web Inspector to look at the Elements Panel and see how the list items update.</p>
                </aside>
            </div>
        )
    }
}
