## 0.8.2

`2017-06-06`

- fix: not load common.js if no webpack.optimize.CommonsChunkPlugin in loaders


## 0.8.1

`2017-04-28`

- refactor: not replace webpackConfig.plugins any more, all user to customize

## 0.7.3

`2017-03-28`

- fix: modify output.path only, revert output.publicPath

## 0.7.3

`2017-03-10`

- fix: correct display in mobile for viewport

## 0.7.2

`2017-03-06`

- fix: add output.publicPath of '/'

## 0.7.1

`2017-01-06`

- chore: remove peerDeps of webpack

## 0.7.0

`2016-09-18`

- refactor: inline loader and utils
- feat: support customize file title in *.md files
- refine: template style

## 0.6.0

`2016-08-31`

- feat: open doraPlugins to bin, using by --doraPlugins proxy?port=9999


## 0.5.2

`2016-08-15`

- fix: compatibility for npm@4

## 0.5.0

`2016-08-03`

- feat: refactor htmlPlugin with index-webpack-plugin
- feat: dynamic load `package.json` `README.md` `HISTORY.md`


## 0.4.0

`2016-06-06`

- feat: add watching for adding、unlinking files, restart automatically
- update: dep of atool-build, to ~0.7.0
- fix: webpackConfig.module.loaders[].loader is undefined
- fix: menu style problem in element.ejs


## 0.3.0

`2016-04-25`

- change inline-source-map to inline-cheap-module-source-map
- add atool-monitor
- support specify template name, default is github
- change webpackConfig.tplSource to webpackConfig.demoSource
- add resource to context of file
- refine element.ejs

## 0.2.0

`2016-04-13`

- change postLoader to preLoader, fix [#6](https://github.com/ant-tool/atool-doc/issues/6)
- support directory demo files, [#5](https://github.com/ant-tool/atool-doc/issues/5)
- suppoer customizing port of dora
- support customizing title of each demo file
- add catalog in each element demo file
- add meta to context of file
