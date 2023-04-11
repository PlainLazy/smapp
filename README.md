![Lint And Build Pass](https://github.com/spacemeshos/smapp/workflows/Lint%20And%20App%20Build/badge.svg)

<h1 align="center">
  <p align="center">Smapp - the Spacemesh App 🏦📊</p>
  <p align="center">Smesher UI + Wallet</p>
</h1>


<p align="center">
<a href="https://gitcoin.co/profile/spacemeshos" title="Push Open Source Forward">
    <img src="https://raw.githubusercontent.com/ryukiller/images/46c3fa9d16e08db414ab4b8c72efffaa3ae9c5ea/slice_02.png" width="267px" height="52px" alt="Browse Gitcoin Bounties"/>
</a>
</p>

This repo includes the source code for the `Spacemesh App`. A desktop application for Windows 10, OS X and Linux which includes a Smesher and a basic wallet. The main artifects of this repo are the app and an app installer for all supported platforms.

![](https://github.com/spacemeshos/smapp/blob/develop/resources/smapp_app_smesher.png)

![](https://github.com/spacemeshos/smapp/blob/develop/resources/smapp_app_wallet.png)


## Installation & Quick Start

Download the latest Smapp release from [Spacemesh Website](https://spacemesh.io/start/).

### Building from Source

Smapp is written in TypeScript and bundled within Electron. You need Node.js (v12) and Yarn to build from source. Make sure they are available on your system.

1. Clone the repository
2. Read `node/use-version` file: this is the version of `go-spacemesh` that should be used
3. Download the specified version from [Go-spacemesh Releases](https://github.com/spacemeshos/go-spacemesh/releases)
4. Put the binary in either `node/windows`, `node/mac`, or `node/linux` folder, depending on you platform
5. Run `yarn` to install dependencies
6. Run `yarn start` to start the application in development mode

To build and pack application:

1. Run `yarn build`
2. Run one of the commands depending on your platform:
   - `yarn package-win`
   - `yarn package-mac`
     set env variable `DONT_SIGN_APP=1` to skip notarizing the app,
   - `yarn package-linux`

### Arguments
Smapp can be started with additional arguments:
- `--discovery` (string)
  _e.g._ `./Spacemesh --discovery=http://localhost:8000/networks.json`
  Specifies custom url to a custom networks list. It makes it possible for Smesher to connect to custom networks.
  Env variable alias: `DISCOVERY_URL`
- `--pprof-server` (boolean)
  _e.g._ `./Spacemesh --pprof-server`
  It makes Smapp runs go-spacemesh with the `--pprof-server` flag.
  Env variable alias: `PPROF_SERVER`

To run application in dev mode with same behavior set env variables instead:
```
PPROF_SERVER=1 DISCOVERY_URL=http://localhost:8000/networks.json yarn start
```

### Environment Variables

#### Connect to custom networks:
```
DISCOVERY_URL=http://localhost:8000/networks.json yarn start
```
Alias for `--discovery` argument.

<details>
    <summary>Deprecated</summary>

  > To run the application against DevNet you have to set URL to config file to env variable `DEV_NET_URL`:
  > ```
  > DEV_NET_URL=https://.../config.json yarn start
  > ```
  >
  > To run the application against DevNet in the Wallet Only mode you have to also set URL (or list of URLs separated by commas) to GRPC API provider to env variable `DEV_NET_REMOTE_API`:
  > ```
  > export DEV_NET_REMOTE_API=https://192.168.0.1:31030
  > export DEV_NET_URL=https://.../config.json
  > yarn start
  > ```

</details>

#### Profiling Node
```
PPROF_SERVER=1 yarn start
```
Alias for `--pprof-server` argument.

#### Sentry
```
SENTRY_DSN='collection errors/logs url taken from sentry'
SENTRY_LOG_LEVEL=boolean # enables debug information
SENTRY_AUTH_TOKEN='special auth token for sentry cli integration'
```

### Building Artifacts in CI

Smapp uses two workflows. Both of them builds an application for all supported platforms: windows, macOS, linux.

- **PR builds**
  Triggered by open Pull Request and any further changes on the branch.
  For testing and development purposes only.
  Unsigned and can not be trusted.
  Artifacts and links a temporary.
  Links to artifacts posted by the bot in comments.
- **Release builds**
  Triggered by tag `v*`.
  Public releases of Smapp.
  Signed for macOS and Windows platforms.
  Artifacts and links should be permanent.
  CI prepares a draft release with links to the artifacts.

---
- [Roadmap & product details](https://product.spacemesh.io/)
- [Platform documentation](https://platform.spacemesh.io/)
- [Spacemesh improvement proposals](https://github.com/spacemeshos/SMIPS)


### Run Spacemesh app on Ubuntu
For Ubuntu plarform the Electron has an issue with set up , if u have a smapp version latter 2.0.5 and u want to run it on the Ubuntu > 22.04 platform , please provide ```--no-sandbox``` flag

**command:** 
```/opt/Spacemesh/spacemesh_app --no-sandbox```
