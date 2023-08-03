import { describe, test } from 'node:test'
import assert from 'node:assert'

import program from '../lib/program.js'

describe('program', () => {
  test('should initialize', () => {
    const expected = 'dev-norms'
    const actual = program.name()
    assert.strictEqual(actual, expected)
  })
})
