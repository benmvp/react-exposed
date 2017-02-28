import React from 'react'
import {Route, IndexRoute} from 'react-router'
import {getBasePath} from '../utils/routing'

import PageStructure from './PageStructure'
import HomePage from './HomePage'
import IndexKeyPage from './IndexKeyPage'
import UniqueKeyPage from './UniqueKeyPage'
import InputsPage from './InputsPage'

const BASE_PATH = getBasePath()

export default (
    <Route path={BASE_PATH} component={PageStructure}>
        <IndexRoute component={HomePage} />
        <Route path="index-as-key" component={IndexKeyPage} />
        <Route path="unique-key" component={UniqueKeyPage} />
        <Route path="inputs" component={InputsPage} />
    </Route>
)
