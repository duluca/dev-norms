import { describe, it } from 'node:test'
import asssert from 'node:assert'

import program from '../lib/program.js'

describe('program', () => {
  it('should initialize', () => {
    const expected = 'dev-norms'
    const actual = program.name()
    asssert.strictEqual(actual, expected)
  })
})
