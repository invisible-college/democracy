'use strict'

import { assert } from 'chai'
import { TYPES } from '../src/types'

describe('Democracy types', () => {

  const prefixedKeccakHash
    = '0x09a33449c7526a56e658aff99a93a4dd8bf0788aeba88ba65cd94f35e1b4af19'
  const keccakHash = prefixedKeccakHash.slice(2)

  it('checks floatString type', async () => {

    const result = TYPES.floatString('0.1')
    assert.notOk( result['error'],
      `A float string doesn't pass with error ${result}`
    )

    const result2 = TYPES.floatString('0.x')
    assert.ok( result2['error'],
      `An invalid float string was not detected`
    )

  })

  it('check hex string correctly', async () => {

    const result = TYPES.keccak256Hash(prefixedKeccakHash)
    assert.notOk( result['error'],
      `A prefixed keccak hash doesn't pass with error ${result}`
    )

  })

  it('finds optional BN type', async () => {
    const result = TYPES.bn.opt(undefined)
    assert.notOk( result['error'],
      `Undefined was not accepted as an optional BN type`
    )
  })

})