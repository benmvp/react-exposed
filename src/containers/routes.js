import React from 'react'
import { Route, IndexRoute } from 'react-router'

import PageStructure from './PageStructure'
import HomePage from './HomePage'
import IndexKeyPage from './IndexKeyPage'
import UniqueKeyPage from './UniqueKeyPage'
import InputsPage from './InputsPage'

export default (
  <Route path="/" component={PageStructure}>
    <IndexRoute component={HomePage} />
    <Route path="index-as-key" component={IndexKeyPage} />
    <Route path="unique-key" component={UniqueKeyPage} />
    <Route path="inputs" component={InputsPage} />
  </Route>
)
