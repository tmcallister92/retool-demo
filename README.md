# Corso Ritual 🔮

Hello, fellow _wizard_ or _witch_ of bits and bytes.
Coding is our _ritual_, is it yours?

With this, we'll dive into an exploration of your critical thinking process.
Hopefully learning more on how you collaborate, and work through adding into an existing codebase.
So, it'll be a peer development session with one of our engineers, and your more than welcome to search the internet.

In preparation, you may want to review this document entirely, especially the [_core tools and technologies_](#core-tools-and-technologies) of our stack.
Reference links exist at the end of this document.

## Prompt

You're creating your own successful local shop conjuring and crafting spells, potions, and other things from your _grimoire_.
After a bit of time, you're specialized products have started to grow a cult-like following with growing requests for a newsletter of your new creations.
So, with that in mind, you've decided to create an API to manage your followers, and maybe someday send them the newsletter they desire.

A Koa server has been bootstrapped for you, with a sample `GET` request, and associated tests.
Given that sample, create all of the other <abbr title="Create, Read, Update, Delete, List">CRUDL</abbr> routes with associated tests and appropriate [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

- Start with a `POST` request, and make sure to validate the `ctx.request.body`.
- Add tests for the happy-path, `OK: 200`, requests.
- Add tests for any `BAD_REQUEST: 400` requests.
- Add tests for any `INTERNAL_SERVER_ERROR: 500` requests.

Only after completing the `POST` request, move onto the other remaining CRUDL requests.

Time permitting, an additional bonus step would be to add another entity with a relationship to the original, and generate the associated migration.
This additional entity is the wizard's choice, but could be something like: _newsletters_, _addresses_, etc.

### Getting Started

To succeed with this challenge you'll need the latest major LTS version of [Node.js](https://nodejs.org/en/), currently Node 18.
Everything else should be available after you install the dependencies using `yarn`.

`yarn` should come with the most of the recent versions of Node.js through [Corepack](https://nodejs.org/api/corepack.html#supported-package-managers).

A tip on getting started, make sure you've run `yarn install` and `yarn reset` to apply the DB schema to your local sqlite.

### Getting to Done

At the end, you should be able to run the `lint` and `coverage` scripts without them erroring.
Meaning that you have no lint warnings, and test coverage up to at least 80% for statements, branches, functions, and lines.
An no you can't just add `eslint-disable` comments, or modify the coverage thresholds.

## Available Scripts

- `dev`: Run the API for development.
- `build`: Create distributable artifacts.
- `start`: Run the built API.
- `test`: Run all tests, or run individual tests with `test <glob>`
- `coverage`: Run tests and evaluate the test coverage.
- `lint`: Run linting for opinionated code styling.
- `reset`: Reset your database to clean slate without any data.
- `migrate`: Create a migration based on changes to `schema.prisma`.
- `studio`: Run a local webpage to inspect data, or use your favorite SQLite-compatible client.

## Core Tools and Technologies

As reference, this core of this project uses a variety of tools and technologies:

- [Koa](https://koajs.com/); async first web framework for Node.js
- [Prisma](https://www.prisma.io/docs); next-generation Node.js and TypeScript ORM.
  - [Comparing Prisma to other ORMs and ODMs](https://www.prisma.io/docs/concepts/more/comparisons).
- [Vitest](https://vitest.dev/guide/); a Vite-native unit test framework.
- [Zod](https://zod.dev/?id=basic-usage); TypeScript-first schema validation with static type inference.

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/tryretool/retool-onpremise/ssop/deploy-retool)
