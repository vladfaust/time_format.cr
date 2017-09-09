# TimeFormat [![Build Status](https://travis-ci.org/vladfaust/time_format.cr.svg?branch=master)](https://travis-ci.org/vladfaust/time_format.cr) [![Docs](https://img.shields.io/badge/docs-available-brightgreen.svg)](https://vladfaust.com/time_format.cr) [![GitHub release](https://img.shields.io/github/release/vladfaust/time_format.cr.svg)](https://github.com/vladfaust/time_format.cr/releases)

Tiny shard for humanizing time spans.

## Installation

Add this to your application's `shard.yml`:

```yaml
dependencies:
  time_format:
    github: vladfaust/time_format.cr
    version: ~> 0.1.0
```

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
