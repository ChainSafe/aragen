# AraGen [![Build Status](https://travis-ci.org/aragon/aragen.svg?branch=master)](https://travis-ci.org/aragon/aragen) [![npm](https://img.shields.io/npm/v/@aragon/aragen.svg?style=for-the-badge)](https://www.npmjs.com/package/@aragon/aragen)

Generate an Aragon environment

### Requirements

- `npm`
- `git`

### How to

```
npm i
npm start
```

Yes, you are done. Happy hacking 🔥🦅!

If you happen to stop ganache, just:

```
npm run start-ganache
```

### Using snapshots

The Aragen package published to NPM contains a ganache snapshot that can be used to quickly start a chain with the entire Aragon system ready.

By default it has set up:

- ENS: `0xfe9ee358b328663c22a2350b02c8ebacee5ab555`
- APM: `ens.addr('aragonpm.eth')`
- AragonID: `ens.owner('aragonid.eth')`
- Aragon apps: As APM repos, e.g. `apm.getLatest('voting.aragonpm.eth')`
- Beta templates: As APM repos, e.g. `apm.getLatest('democracy-template.aragonpm.eth')`

To use directly with ganache-cli:

```
npm install @aragon/aragen
npx aragen start
```

If you wish to access from code, for example to run ganache-core directly:

```js
const aragonSnapshot = path.resolve(
  require.resolve('@aragon/aragen'),
  '../aragon-ganache'
)
```

### CI

If you need to trigger the CI so a new snapshot is generated and publish to NPM, you need to tag the release by bumping the NPM version and commit to master.

```
npm version [major, minor, patch]
```
