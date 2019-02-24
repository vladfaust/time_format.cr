crystal_doc_search_index_callback({"repository_name":"github.com/vladfaust/time_format.cr","body":"# TimeFormat\n\n[![Built with Crystal](https://img.shields.io/badge/built%20with-crystal-000000.svg?style=flat-square)](https://crystal-lang.org/)\n[![Build status](https://img.shields.io/travis/vladfaust/time_format.cr/master.svg?style=flat-square)](https://travis-ci.org/vladfaust/time_format.cr)\n[![API Docs](https://img.shields.io/badge/api_docs-online-brightgreen.svg?style=flat-square)](https://github.vladfaust.com/time_format.cr)\n[![Releases](https://img.shields.io/github/release/vladfaust/time_format.cr.svg?style=flat-square)](https://github.com/vladfaust/time_format.cr/releases)\n[![Awesome](https://awesome.re/badge-flat2.svg)](https://github.com/veelenga/awesome-crystal)\n[![vladfaust.com](https://img.shields.io/badge/style-.com-lightgrey.svg?longCache=true&style=flat-square&label=vladfaust&colorB=0a83d8)](https://vladfaust.com)\n[![Patrons count](https://img.shields.io/badge/dynamic/json.svg?label=patrons&url=https://www.patreon.com/api/user/11296360&query=$.included[0].attributes.patron_count&style=flat-square&colorB=red&maxAge=86400)](https://www.patreon.com/vladfaust)\n[![Gitter chat](https://img.shields.io/badge/chat%20on-gitter-green.svg?colorB=ED1965&logo=gitter&style=flat-square)](https://gitter.im/vladfaust/Lobby)\n\nTime spans humanizing module for [Crystal](https://crystal-lang.org/).\n\n## Supporters\n\nThanks to all my patrons, I can continue working on beautiful Open Source Software! 🙏\n\n[Lauri Jutila](https://github.com/ljuti), [Alexander Maslov](https://seendex.ru), Dainel Vera\n\n*You can become a patron too in exchange of prioritized support and other perks*\n\n[![Become Patron](https://vladfaust.com/img/patreon-small.svg)](https://www.patreon.com/vladfaust)\n\n## Installation\n\nAdd this to your application's `shard.yml`:\n\n```yaml\ndependencies:\n  time_format:\n    github: vladfaust/time_format.cr\n    version: ~> 0.1.1\n```\n\nThis shard follows [Semantic Versioning 2.0.0](https://semver.org/), so see [releases](https://github.com/vladfaust/i18n.cr/releases) and change the `version` accordingly.\n\n## Usage\n\n```crystal\nrequire \"time_format\"\n\nTimeFormat.auto(0.minutes + 42.seconds) # => 42s\nTimeFormat.μs(1.0.milliseconds / 5.0) # => 200μs\n```\n\n## Contributing\n\n1. Fork it ( https://github.com/vladfaust/time_format.cr/fork )\n2. Create your feature branch (git checkout -b my-new-feature)\n3. Commit your changes (git commit -am 'Add some feature')\n4. Push to the branch (git push origin my-new-feature)\n5. Create a new Pull Request\n\n## Contributors\n\n- [@vladfaust](https://github.com/vladfaust) Vlad Faust - creator, maintainer\n","program":{"html_id":"github.com/vladfaust/time_format.cr/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"github.com/vladfaust/time_format.cr","program":true,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/vladfaust/time_format.cr/TimeFormat","path":"TimeFormat.html","kind":"module","full_name":"TimeFormat","name":"TimeFormat","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"time_format.cr","line_number":13,"url":"https://github.com/vladfaust/time_format.cr/blob/8306801534f5f8fff4a5061ffeb4abecca51fe92/src/time_format.cr"}],"repository_name":"github.com/vladfaust/time_format.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[{"html_id":"github.com/vladfaust/time_format.cr/TimeFormat","kind":"module","full_name":"TimeFormat","name":"TimeFormat"}],"subclasses":[],"including_types":[],"namespace":null,"doc":"Available methods (for convenience):\n\n- `#auto`\n- `#minutes`\n- `#m`\n- `#seconds`\n- `#s`\n- `#milliseconds`\n- `#ms`\n- `#microseconds`\n- `#μs`\n- `#mcs` (alias of `#μs`)","summary":"<p>Available methods (for convenience):</p>","class_methods":[],"constructors":[],"instance_methods":[{"id":"auto(time:Float|Time::Span,short=true):String-instance-method","html_id":"auto(time:Float|Time::Span,short=true):String-instance-method","name":"auto","doc":"Returns time in human readable format based on how big it is\n\n```\nTimeFormat.auto(1.minute, false)    # => 1 minute\nTimeFormat.auto(1.milliseconds / 2) # => 500μs\n```","summary":"<p>Returns time in human readable format based on how big it is</p>","abstract":false,"args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":"Float | Time::Span"},{"name":"short","doc":null,"default_value":"true","external_name":"short","restriction":""}],"args_string":"(time : Float | Time::Span, short = <span class=\"n\">true</span>) : String","source_link":"https://github.com/vladfaust/time_format.cr/blob/8306801534f5f8fff4a5061ffeb4abecca51fe92/src/time_format.cr#L31","def":{"name":"auto","args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":"Float | Time::Span"},{"name":"short","doc":null,"default_value":"true","external_name":"short","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String","visibility":"Public","body":"if (time.to_f / 60.0) >= 1\n  return (  short ? m(time) : minutes(time))\nend\nif time.to_f >= 1\n  return (  short ? s(time) : seconds(time))\nend\nif (time.to_f * 1000.0) >= 1\n  return (  short ? ms(time) : milliseconds(time))\nend\nreturn (short ? μs(time) : microseconds(time))\n"}},{"id":"m(time,round=2)-instance-method","html_id":"m(time,round=2)-instance-method","name":"m","doc":"Returns time in minutes in **short** human readable format\n\n```\nTimeFormat.m(5.minutes + 36.seconds + 175.milliseconds) # => 5.6m\n```","summary":"<p>Returns time in minutes in <strong>short</strong> human readable format</p>","abstract":false,"args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":""},{"name":"round","doc":null,"default_value":"2","external_name":"round","restriction":""}],"args_string":"(time, round = <span class=\"n\">2</span>)","source_link":"https://github.com/vladfaust/time_format.cr/blob/8306801534f5f8fff4a5061ffeb4abecca51fe92/src/time_format.cr#L53","def":{"name":"m","args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":""},{"name":"round","doc":null,"default_value":"2","external_name":"round","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"((time.to_f * MINUTES_IN_SECOND).round(round)).to_s + \"m\""}},{"id":"mcs(time:Float|Time::Span)-instance-method","html_id":"mcs(time:Float|Time::Span)-instance-method","name":"mcs","doc":"Returns *time* in microseconds in **short** human readable format\n\n```\nTimeFormat.μs(5.minutes + 36.seconds + 175.milliseconds) # => 336175000μs\n```","summary":"<p>Returns <em>time</em> in microseconds in <strong>short</strong> human readable format</p>","abstract":false,"args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":"Float | Time::Span"}],"args_string":"(time : Float | Time::Span)","source_link":"https://github.com/vladfaust/time_format.cr/blob/8306801534f5f8fff4a5061ffeb4abecca51fe92/src/time_format.cr#L115","def":{"name":"mcs","args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":"Float | Time::Span"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"μs(time)"}},{"id":"microseconds(time:Float|Time::Span):String-instance-method","html_id":"microseconds(time:Float|Time::Span):String-instance-method","name":"microseconds","doc":"Returns *time* in microseconds in human readable format\n\n```\nTimeFormat.microseconds(5.minutes + 36.seconds + 175.milliseconds) # => 336175000 microseconds\n```","summary":"<p>Returns <em>time</em> in microseconds in human readable format</p>","abstract":false,"args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":"Float | Time::Span"}],"args_string":"(time : Float | Time::Span) : String","source_link":"https://github.com/vladfaust/time_format.cr/blob/8306801534f5f8fff4a5061ffeb4abecca51fe92/src/time_format.cr#L100","def":{"name":"microseconds","args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":"Float | Time::Span"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String","visibility":"Public","body":"μs = (time.to_f * MICROSECONDS_IN_SECOND).to_i\nμs == 1 ? \"1 microsecond\" : μs.to_s + \" microseconds\"\n"}},{"id":"milliseconds(time:Float|Time::Span,round:Int32=3):String-instance-method","html_id":"milliseconds(time:Float|Time::Span,round:Int32=3):String-instance-method","name":"milliseconds","doc":"Returns *time* in milliseconds in human readable format\n\n```\nTimeFormat.milliseconds(5.minutes + 36.seconds + 175.milliseconds) # => 336175.0 milliseconds\n```","summary":"<p>Returns <em>time</em> in milliseconds in human readable format</p>","abstract":false,"args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":"Float | Time::Span"},{"name":"round","doc":null,"default_value":"3","external_name":"round","restriction":"Int32"}],"args_string":"(time : Float | Time::Span, round : Int32 = <span class=\"n\">3</span>) : String","source_link":"https://github.com/vladfaust/time_format.cr/blob/8306801534f5f8fff4a5061ffeb4abecca51fe92/src/time_format.cr#L81","def":{"name":"milliseconds","args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":"Float | Time::Span"},{"name":"round","doc":null,"default_value":"3","external_name":"round","restriction":"Int32"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String","visibility":"Public","body":"ms = (time.to_f * MILLISECONDS_IN_SECOND).round(round)\nms == 1.0 ? \"1 millisecond\" : ms.to_s + \" milliseconds\"\n"}},{"id":"minutes(time:Float|Time::Span,round:Int32=2):String-instance-method","html_id":"minutes(time:Float|Time::Span,round:Int32=2):String-instance-method","name":"minutes","doc":"Returns time in minutes in human readable format\n\n```\nTimeFormat.minutes(5.minutes + 36.seconds + 175.milliseconds) # => 5.6 minutes\n```","summary":"<p>Returns time in minutes in human readable format</p>","abstract":false,"args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":"Float | Time::Span"},{"name":"round","doc":null,"default_value":"2","external_name":"round","restriction":"Int32"}],"args_string":"(time : Float | Time::Span, round : Int32 = <span class=\"n\">2</span>) : String","source_link":"https://github.com/vladfaust/time_format.cr/blob/8306801534f5f8fff4a5061ffeb4abecca51fe92/src/time_format.cr#L43","def":{"name":"minutes","args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":"Float | Time::Span"},{"name":"round","doc":null,"default_value":"2","external_name":"round","restriction":"Int32"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String","visibility":"Public","body":"m = (time.to_f * MINUTES_IN_SECOND).round(round)\nm == 1.0 ? \"1 minute\" : m.to_s + \" minutes\"\n"}},{"id":"ms(time:Float|Time::Span,round:Int32=3)-instance-method","html_id":"ms(time:Float|Time::Span,round:Int32=3)-instance-method","name":"ms","doc":"Returns *time* in milliseconds in **short** human readable format\n\n```\nTimeFormat.ms(5.minutes + 36.seconds + 175.milliseconds) # => 336175.0ms\n```","summary":"<p>Returns <em>time</em> in milliseconds in <strong>short</strong> human readable format</p>","abstract":false,"args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":"Float | Time::Span"},{"name":"round","doc":null,"default_value":"3","external_name":"round","restriction":"Int32"}],"args_string":"(time : Float | Time::Span, round : Int32 = <span class=\"n\">3</span>)","source_link":"https://github.com/vladfaust/time_format.cr/blob/8306801534f5f8fff4a5061ffeb4abecca51fe92/src/time_format.cr#L91","def":{"name":"ms","args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":"Float | Time::Span"},{"name":"round","doc":null,"default_value":"3","external_name":"round","restriction":"Int32"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"((time.to_f * MILLISECONDS_IN_SECOND).round(round)).to_s + \"ms\""}},{"id":"s(time,round=3)-instance-method","html_id":"s(time,round=3)-instance-method","name":"s","doc":"Returns *time* in seconds in **short** human readable format\n\n```\nTimeFormat.s(5.minutes + 36.seconds + 175.milliseconds) # => 336.175s\n```","summary":"<p>Returns <em>time</em> in seconds in <strong>short</strong> human readable format</p>","abstract":false,"args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":""},{"name":"round","doc":null,"default_value":"3","external_name":"round","restriction":""}],"args_string":"(time, round = <span class=\"n\">3</span>)","source_link":"https://github.com/vladfaust/time_format.cr/blob/8306801534f5f8fff4a5061ffeb4abecca51fe92/src/time_format.cr#L72","def":{"name":"s","args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":""},{"name":"round","doc":null,"default_value":"3","external_name":"round","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"((time.to_f).round(round)).to_s + \"s\""}},{"id":"seconds(time,round=3):String-instance-method","html_id":"seconds(time,round=3):String-instance-method","name":"seconds","doc":"Returns time in seconds in human readable format\n\n```\nTimeFormat.seconds(5.minutes + 36.seconds + 175.milliseconds) # => 336.175 seconds\n```","summary":"<p>Returns time in seconds in human readable format</p>","abstract":false,"args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":""},{"name":"round","doc":null,"default_value":"3","external_name":"round","restriction":""}],"args_string":"(time, round = <span class=\"n\">3</span>) : String","source_link":"https://github.com/vladfaust/time_format.cr/blob/8306801534f5f8fff4a5061ffeb4abecca51fe92/src/time_format.cr#L62","def":{"name":"seconds","args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":""},{"name":"round","doc":null,"default_value":"3","external_name":"round","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String","visibility":"Public","body":"s = (time.to_f).round(round)\ns == 1.0 ? \"1 second\" : s.to_s + \" seconds\"\n"}},{"id":"μs(time:Float|Time::Span)-instance-method","html_id":"μs(time:Float|Time::Span)-instance-method","name":"μs","doc":"Returns *time* in microseconds in **short** human readable format\n\n```\nTimeFormat.μs(5.minutes + 36.seconds + 175.milliseconds) # => 336175000μs\n```","summary":"<p>Returns <em>time</em> in microseconds in <strong>short</strong> human readable format</p>","abstract":false,"args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":"Float | Time::Span"}],"args_string":"(time : Float | Time::Span)","source_link":"https://github.com/vladfaust/time_format.cr/blob/8306801534f5f8fff4a5061ffeb4abecca51fe92/src/time_format.cr#L110","def":{"name":"μs","args":[{"name":"time","doc":null,"default_value":"","external_name":"time","restriction":"Float | Time::Span"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"(time.to_f * MICROSECONDS_IN_SECOND).to_i.to_s + \"μs\""}}],"macros":[],"types":[]}]}})