/*
global expect
global jest
*/

import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Router, Route, withRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { createMemoryHistory } from 'history'
import { createCodingQuestions } from '.'
import { LOGIN_PATH } from '../../../AuthModule/constants/RouteConstants/Navigation'

describe('createCodingQuestions Tests', () => {})
