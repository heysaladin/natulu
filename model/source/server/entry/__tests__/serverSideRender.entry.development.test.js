/* @flow */

import React from 'react'
import renderer from 'react-test-renderer'
import http from 'http'

import { serverSideRender } from 'server/entry/serverSideRender.entry.development'

/* Require raw component */
jest.mock(
  'universal/pages/IndexPage',
  () => require('universal/pages/IndexPage/IndexPage').IndexPage,
)

/* Require raw component */
jest.mock(
  'universal/pages/LoadingPage',
  () => require('universal/pages/LoadingPage/LoadingPage').LoadingPage,
)

/* Require raw component */
jest.mock(
  'universal/pages/NotFoundPage',
  () => require('universal/pages/NotFoundPage/NotFoundPage').NotFoundPage,
)

test('serverSideRender - snapshot test', () => {
  const clientStats = {}

  const req = null

  const res = null

  const element = serverSideRender({ clientStats })(req, res)

  const tree = renderer.create(element).toJSON()

  expect(tree).toMatchSnapshot()
})
