import { describe, it } from 'node:test'
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
})
