const common = {}

common.delayedGet = async (getCall, expected, logger) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const res = await getCall()
      if (res === expected) { resolve(res) }
      else {
        if (logger) { logger.error(`Expected ${res} to equal ${expected}`) }
        reject(res, expected) }
    }, 1000)
  })
}

common.syncify = (asyncFunc, done) => {
  asyncFunc().then(() => { done() } )
}

module.exports = common
