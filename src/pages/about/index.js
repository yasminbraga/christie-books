import React, { Component, Fragment } from 'react'

import './styles.css'

import Header from '../../components/Header'

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="content">
          <h1>Sobre</h1>
        </div>
    </Fragment>
    )
  }
}