Babel is a JavaScript compiler.

配置文件:
  babel.config.js
内容:
  const presets = [
    [
      "@babel/env",
      {
        targets: {
          edge: "16",
          firefox: "60",
          chrome: "66",
          safari: "10",
        },
        useBuiltIns: "usage",
      },
    ],
  ];

  module.exports = { presets };

命令行:
  babel src --out-dir release

Polyfill:
  The @babel/polyfill module includes core-js and a custom regenerator runtime to emulate a full ES2015+ environment.

Presets:
  Official Presets
    @babel/preset-env
      @babel/preset-env接受您指定的任何目标环境，并根据其映射检查它们以编译插件列表并将其传递给Babel。
      recommend using a .browserslistrc file to specify targets.
      By default @babel/preset-env will use browserslist config sources unless either the targets or ignoreBrowserslistConfig options are set.
        Options:
          targets: This can either be a browserslist-compatible query:
          targets.node: If you want to compile against the current node version, you can specify "node": true or "node": "current",
                        which would be the same as "node": process.versions.node.
          useBuiltIns: "usage" | "entry" | false, defaults to false. This option configures how @babel/preset-env handles polyfills.
            useBuiltIns: 'entry' ----- Only use require("@babel/polyfill"); once in your whole app.
                                       In: import "@babel/polyfill"i
                                       Out (different based on environment)：import "core-js/modules/es7.string.pad-start";
                                                                             import "core-js/modules/es7.string.pad-end";
            useBuiltIns: 'usage' ----- Adds specific imports for polyfills when they are used in each file. We take advantage of the fact that a bundler will load the same polyfill                             only once.
                                       In：a.js
                                           var a = new Promise();
                                           b.ja
                                           var b = new Map();
                                        Out (if environment doesn't support it):
                                           import "core-js/modules/es6.promise";
                                           var a = new Promise();
                                           import "core-js/modules/es6.map";
                                           var b = new Map();
                                        Out (if environment supports it):
                                           var a = new Promise();
                                           var b = new Map();
            useBuiltIns: false   ----- Don't add polyfills automatically per file, or transform import "@babel/polyfill" to individual polyfills.
    @babel/preset-flow
    @babel/preset-react
    @babel/preset-typescript
