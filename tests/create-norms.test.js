import { describe, it, beforeEach } from 'node:test'
import { existsSync, unlinkSync } from 'node:fs'
import assert from 'node:assert'

import create from '../lib/create-norms.js'

describe('create-norms command', () => {
  it('should create dev-norms.test.md', async () => {
    const expected = true
    const actual = await create(
      'dev-norms.test.md',
      'https://raw.githubusercontent.com/duluca/dev-norms/main/dev-norms.md',
      '.',
      false
    )
    assert.strictEqual(actual, expected)
  })

  beforeEach(() => {
    if (existsSync('dev-norms.test.md')) {
      unlinkSync('dev-norms.test.md')
    }
  })
})
