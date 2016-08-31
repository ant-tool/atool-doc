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
