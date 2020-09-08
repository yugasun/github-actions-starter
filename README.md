# Github Actions Starter

[![Build Status](https://github.com/yugasun/github-actions-starter/workflows/Publish/badge.svg?branch=master)](https://github.com/yugasun/github-actions-starter/actions?query=workflow:Publish+branch:master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Github Actions Project Template.

## Usage

```bash
$ git clone https://github.com/yugasun/github-actions-starter.git
```

## Environment

For auto `release` action, you should setup `GH_TOKEN` and `NPM_TOKEN` secrets.

## Development

All `git commit` mesage must follow below syntax:

```bash
type(scope?): subject  #scope is optional
```

support type：

- **feat**: add new feature
- **fix**: fix bug or patch feature
- **ci**: CI
- **chore**: modify config, nothing to do with production code
- **docs**: create or modifiy documents
- **refactor**: refactor project
- **revert**: revert
- **test**: test

Most of time, we just use `feat` and `fix`.

## License

Copyright (c) 2020 Serverless Plus
