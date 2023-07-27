import { describe, it, afterEach } from 'node:test'
import { existsSync, unlinkSync } from 'node:fs'
import { strictEqual } from 'node:assert'

import create from '../lib/create-norms.js'

describe('synchronous passing test', () => {
  it('should pass', async () => {
    const expected = true
    const actual = await create(
      'dev-norms.test.md',
      'https://raw.githubusercontent.com/duluca/dev-norms/main/dev-norms.md',
      '.',
      false
    )
    strictEqual(actual, expected)
  })

  afterEach(() => {
    if (existsSync('dev-norms.test.md')) {
      unlinkSync('dev-norms.test.md')
    }
  })
})
