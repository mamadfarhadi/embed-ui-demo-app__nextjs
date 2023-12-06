## Installation

- Please first make sure that you have installed [Node.js](https://nodejs.org/)
  and `npm` on your machine. (We recommend using the `LTS` version of Node.js)
- If you are a macOS or linux user, you can use this command to install node.js
  and npm:

```bash
nvm use
```

- Then, you can install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

- Since this project uses `pnpm`, you can use
  [pnpm](https://pnpm.io/installation) to install the dependencies. (We
  recommend using `pnpm`)
- If you didn't want to use `pnpm`, you can remove the `pnpm-lock.yaml` file and
  use `npm` or `yarn` instead.

## Prerequisites

To use this project, you need to sign up for a developer account in
[Developer Site](https://developer.bimobject.com/) and use the `Client ID` and
`Client Secret` to create a `.env.local` file in the root directory of this
project. The `.env` file should look like this:

```dotenv
VITE_CLIENT_ID=YOUR_CLIENT_ID
VITE_CLIENT_SECRET=YOUR_CLIENT_SECRET
```

- You can find more information about how to create a developer account in
  [Developer Site Document](https://github.com/bimobject/api-documentation/blob/wip/01-getting-started/README.md).

## Getting Started

Use the following command to start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:5173](http://localhost:3000) with your browser to see the
result.
