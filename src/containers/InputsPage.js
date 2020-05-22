import React, { Component } from 'react'

import styles from './InputsPage.styles'

export default class InputsPage extends Component {
  state = {
    value: 'correct',
  }

  _handleOnChangeFake(e) {
    console.log(e.target.value)
  }

  _handleOnChange(e) {
    console.log(e.target.value)
    this.setState({ value: e.target.value })
  }

  render() {
    let { value } = this.state

    return (
      <div>
        <h1>
          Inputs (
          <a
            href="https://github.com/benmvp/react-exposed/blob/master/src/containers/InputsPage.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            source
          </a>
          )
        </h1>

        <label htmlFor="uncontrolled" style={styles.label}>
          <h3>
            Uncontrolled input with <code>defaultValue</code>
          </h3>
        </label>
        <input
          id="uncontrolled"
          type="text"
          style={styles.input}
          defaultValue="defaultValue"
        />
        <aside style={styles.info}>
          When using <code>defaultValue</code> we get a "normal" input where the
          browser is in control of the input's value. You would need to use{' '}
          <code>ref</code> to ge the value out of the input.
        </aside>

        <label htmlFor="wrongControlled" style={styles.label}>
          <h3>
            Incorrect controlled input with <code>value</code> without{' '}
            <code>onChange</code>
          </h3>
        </label>
        <input
          id="wrongControlled"
          type="text"
          style={styles.input}
          value="incorrect"
        />
        <aside style={styles.info}>
          If we specify <code>value</code> prop of the input without{' '}
          <code>onChange</code> prop we will get a warning (see console). We
          also cannot type within the input.
        </aside>

        <label htmlFor="fakeControlled" style={styles.label}>
          <h3>
            Fake controlled input with <code>value</code> & dummy{' '}
            <code>onChange</code>
          </h3>
        </label>
        <input
          id="fakeControlled"
          type="text"
          style={styles.input}
          value="fake"
          onChange={this._handleOnChangeFake.bind(this)}
        />
        <aside style={styles.info}>
          Tricking React by providing a fake <code>onChange</code> still does
          not make typing in the input field possible. However, it illuminates
          the fact that React uses a "fake" <code>onChange</code> event because
          the input field never contains the typed content (see console).
        </aside>

        <label htmlFor="controlled" style={styles.label}>
          <h3>
            Correct controlled input with <code>value</code> & state-changing{' '}
            <code>onChange</code>
          </h3>
        </label>
        <input
          id="controlled"
          type="text"
          style={styles.input}
          value={value}
          onChange={this._handleOnChange.bind(this)}
        />
        <aside style={styles.info}>
          The proper way to create a controlled component, is to update React{' '}
          <code>state</code> when <code>onChange</code> is fired. This will
          cause a re-render of the component, which will then update the input's{' '}
          <code>value</code>.
        </aside>
      </div>
    )
  }
}
