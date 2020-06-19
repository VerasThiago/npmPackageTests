clitest
=======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/clitest.svg)](https://npmjs.org/package/clitest)
[![Downloads/week](https://img.shields.io/npm/dw/clitest.svg)](https://npmjs.org/package/clitest)
[![License](https://img.shields.io/npm/l/clitest.svg)](https://github.com/VerasThiago/clitest/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g clitest
$ clitest COMMAND
running command...
$ clitest (-v|--version|version)
clitest/0.0.0 linux-x64 node-v10.19.0
$ clitest --help [COMMAND]
USAGE
  $ clitest COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`clitest helloB [FILE]`](#clitest-hellob-file)
* [`clitest help [COMMAND]`](#clitest-help-command)
* [`clitest plugins`](#clitest-plugins)
* [`clitest plugins:install PLUGIN...`](#clitest-pluginsinstall-plugin)
* [`clitest plugins:link PLUGIN`](#clitest-pluginslink-plugin)
* [`clitest plugins:uninstall PLUGIN...`](#clitest-pluginsuninstall-plugin)
* [`clitest plugins:update`](#clitest-pluginsupdate)

## `clitest helloB [FILE]`

Single Command from Plugin B

```
USAGE
  $ clitest helloB [FILE]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ clitest helloB
```

_See code: [@thiagoveras/plugin-b](https://github.com/VerasThiago/npmPackageTests/blob/v0.2.4/build/commands/helloB.ts)_

## `clitest help [COMMAND]`

display help for clitest

```
USAGE
  $ clitest help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_

## `clitest plugins`

list installed plugins

```
USAGE
  $ clitest plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ clitest plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.10/src/commands/plugins/index.ts)_

## `clitest plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ clitest plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

OPTIONS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command 
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in 
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ clitest plugins:add

EXAMPLES
  $ clitest plugins:install myplugin 
  $ clitest plugins:install https://github.com/someuser/someplugin
  $ clitest plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.10/src/commands/plugins/install.ts)_

## `clitest plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ clitest plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' 
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLE
  $ clitest plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.10/src/commands/plugins/link.ts)_

## `clitest plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ clitest plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

ALIASES
  $ clitest plugins:unlink
  $ clitest plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.10/src/commands/plugins/uninstall.ts)_

## `clitest plugins:update`

update installed plugins

```
USAGE
  $ clitest plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.10/src/commands/plugins/update.ts)_
<!-- commandsstop -->
