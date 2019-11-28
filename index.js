module.exports = {
  // ENS is deterministically deployed to this address
  ens: '0xfe9ee358b328663c22a2350b02c8ebacee5ab555',
  commands: {
    start: require('./src/commands/start'),
    status: require('./src/commands/status'),
  },
}
