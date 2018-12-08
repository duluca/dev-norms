# Manifesto

Sensible defaults are a great way to smoothly kick start a new project. They make life easier in the beginning, but you can always tweak things later on as your needs change.
This is true for new packages/libraries/frameworks you download and this is also true for new teams you start or join.
Code is written for human consumption, the fact that they can be compiled is a great side effect. Clean code leads to less bugs, less frustration and overall better developer happiness.

## Why Do You Need This?

Developer norms are a necessary way to set some ground rules, so your code base can retain some consistency, remain maintainable over the next days, months and years and all developers are on the same page.

Why keep your norms elsewhere, when you can keep them as a living piece of documentation right in your repo.

## Contribute New Norms

Feel free to suggest new sensible defaults, by submitting a PR on https://github.com/duluca/dev-norms to update base `dev-norms.md`.

## Install

`npm install --save-dev dev-norms -g`

[Npm Link](https://www.npmjs.com/package/dev-norms)

## Usage

Run `dev-norms create` to create a starter list of norms in the root of your project, called `dev-norms.md`. Keep it relevant and update it to suit your needs.

Run `dev-norms update --path=.` command to overwrite your norms with the latest norms.
