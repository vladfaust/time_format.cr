> ⚠️ This shard is deprecated in favour of <https://github.com/vladfaust/time-span-humanize>.

# TimeFormat

[![Built with Crystal](https://img.shields.io/badge/built%20with-crystal-000000.svg?style=flat-square)](https://crystal-lang.org/)
[![Build status](https://img.shields.io/travis/vladfaust/time_format.cr/master.svg?style=flat-square)](https://travis-ci.org/vladfaust/time_format.cr)
[![API Docs](https://img.shields.io/badge/api_docs-online-brightgreen.svg?style=flat-square)](https://github.vladfaust.com/time_format.cr)
[![Releases](https://img.shields.io/github/release/vladfaust/time_format.cr.svg?style=flat-square)](https://github.com/vladfaust/time_format.cr/releases)
[![Awesome](https://awesome.re/badge-flat2.svg)](https://github.com/veelenga/awesome-crystal)
[![vladfaust.com](https://img.shields.io/badge/style-.com-lightgrey.svg?longCache=true&style=flat-square&label=vladfaust&colorB=0a83d8)](https://vladfaust.com)
[![Patrons count](https://img.shields.io/badge/dynamic/json.svg?label=patrons&url=https://www.patreon.com/api/user/11296360&query=$.included[0].attributes.patron_count&style=flat-square&colorB=red&maxAge=86400)](https://www.patreon.com/vladfaust)
[![Gitter chat](https://img.shields.io/badge/chat%20on-gitter-green.svg?colorB=ED1965&logo=gitter&style=flat-square)](https://gitter.im/vladfaust/Lobby)

Time spans humanizing module for [Crystal](https://crystal-lang.org/).

## Supporters

Thanks to all my patrons, I can continue working on beautiful Open Source Software! 🙏

[Lauri Jutila](https://github.com/ljuti), [Alexander Maslov](https://seendex.ru), Dainel Vera

*You can become a patron too in exchange of prioritized support and other perks*

[![Become Patron](https://vladfaust.com/img/patreon-small.svg)](https://www.patreon.com/vladfaust)

## Installation

Add this to your application's `shard.yml`:

```yaml
dependencies:
  time_format:
    github: vladfaust/time_format.cr
    version: ~> 0.1.1
```

This shard follows [Semantic Versioning 2.0.0](https://semver.org/), so see [releases](https://github.com/vladfaust/i18n.cr/releases) and change the `version` accordingly.

## Usage

```crystal
require "time_format"

TimeFormat.auto(0.minutes + 42.seconds) # => 42s
TimeFormat.μs(1.0.milliseconds / 5.0) # => 200μs
```

## Contributing

1. Fork it ( https://github.com/vladfaust/time_format.cr/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

## Contributors

- [@vladfaust](https://github.com/vladfaust) Vlad Faust - creator, maintainer
