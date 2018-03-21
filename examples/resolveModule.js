webpackJsonp([1,0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(4);

	var _data = __webpack_require__(2);

	var _data2 = _interopRequireDefault(_data);

	var _data3 = __webpack_require__(3);

	var _data4 = _interopRequireDefault(_data3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// this is a normal text file

	/*
	#__exampleDom {
	  color: red;
	}
	*/
	document.getElementById('__exampleDom').innerHTML = '\n  <h4>Load by import</h4>\n  <pre><code>' + JSON.stringify(_data2.default) + '</code></pre>\n  <pre><code>' + _data4.default + '</code></pre>\n';
	/*
	{
	  "name": "atool-doc",
	  "desc": "static demo generator"
	}
	*/

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(true);
	// imports


	// module
	exports.push([module.id, "#__exampleDom {\n  color: red;\n}\n", "", {"version":3,"sources":["/Users/Jared/alipay/atool-doc/examples/resolveModule.less","/Users/Jared/alipay/atool-doc/examples/resolveModule.less"],"names":[],"mappings":"AAAA;EACE,WAAA;CCCD","file":"resolveModule.less","sourcesContent":["#__exampleDom {\n  color: red;\n}\n","#__exampleDom {\n  color: red;\n}\n"],"sourceRoot":""}]);

	// exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = {"name":"atool-doc","desc":"static demo generator"}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "this is a normal text file"

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!../node_modules/_style-loader@0.13.2@style-loader/addStyles.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap&-autoprefixer!../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!../node_modules/_less-loader@2.2.3@less-loader/index.js?{\"sourceMap\":true,\"modifyVars\":{}}!./resolveModule.less", function() {
				var newContent = require("!!../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap&-autoprefixer!../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!../node_modules/_less-loader@2.2.3@less-loader/index.js?{\"sourceMap\":true,\"modifyVars\":{}}!./resolveModule.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvcmVzb2x2ZU1vZHVsZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9yZXNvbHZlTW9kdWxlLm1kIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3Jlc29sdmVNb2R1bGUubGVzcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kYXRhLmpzb24iLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvZGF0YS50eHQiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvcmVzb2x2ZU1vZHVsZS5sZXNzP2Y4YzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3Jlc29sdmVNb2R1bGUubGVzcyc7XG4vKlxuI19fZXhhbXBsZURvbSB7XG4gIGNvbG9yOiByZWQ7XG59XG4qL1xuaW1wb3J0IG51bSBmcm9tICcuL2RhdGEuanNvbic7XG4vKlxue1xuICBcIm5hbWVcIjogXCJhdG9vbC1kb2NcIixcbiAgXCJkZXNjXCI6IFwic3RhdGljIGRlbW8gZ2VuZXJhdG9yXCJcbn1cbiovXG5pbXBvcnQgZGF0YSBmcm9tICchcmF3IS4vZGF0YS50eHQnO1xuLy8gdGhpcyBpcyBhIG5vcm1hbCB0ZXh0IGZpbGVcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fZXhhbXBsZURvbScpLmlubmVySFRNTCA9IGBcbiAgPGg0PkxvYWQgYnkgaW1wb3J0PC9oND5cbiAgPHByZT48Y29kZT4ke0pTT04uc3RyaW5naWZ5KG51bSl9PC9jb2RlPjwvcHJlPlxuICA8cHJlPjxjb2RlPiR7ZGF0YX08L2NvZGU+PC9wcmU+XG5gO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBleGFtcGxlcy9yZXNvbHZlTW9kdWxlLm1kIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI19fZXhhbXBsZURvbSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL0phcmVkL2FsaXBheS9hdG9vbC1kb2MvZXhhbXBsZXMvcmVzb2x2ZU1vZHVsZS5sZXNzXCIsXCIvVXNlcnMvSmFyZWQvYWxpcGF5L2F0b29sLWRvYy9leGFtcGxlcy9yZXNvbHZlTW9kdWxlLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFBO0NDQ0RcIixcImZpbGVcIjpcInJlc29sdmVNb2R1bGUubGVzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjX19leGFtcGxlRG9tIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblwiLFwiI19fZXhhbXBsZURvbSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlcj9zb3VyY2VNYXAmLWF1dG9wcmVmaXhlciEuL34vX3Bvc3Rjc3MtbG9hZGVyQDEuMy4zQHBvc3Rjc3MtbG9hZGVyIS4vfi9fbGVzcy1sb2FkZXJAMi4yLjNAbGVzcy1sb2FkZXI/e1wic291cmNlTWFwXCI6dHJ1ZSxcIm1vZGlmeVZhcnNcIjp7fX0hLi9leGFtcGxlcy9yZXNvbHZlTW9kdWxlLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJuYW1lXCI6XCJhdG9vbC1kb2NcIixcImRlc2NcIjpcInN0YXRpYyBkZW1vIGdlbmVyYXRvclwifVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZXhhbXBsZXMvZGF0YS5qc29uXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gXCJ0aGlzIGlzIGEgbm9ybWFsIHRleHQgZmlsZVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L19yYXctbG9hZGVyQDAuNS4xQHJhdy1sb2FkZXIhLi9leGFtcGxlcy9kYXRhLnR4dFxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmLWF1dG9wcmVmaXhlciEuLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDEuMy4zQHBvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9fbGVzcy1sb2FkZXJAMi4yLjNAbGVzcy1sb2FkZXIvaW5kZXguanM/e1xcXCJzb3VyY2VNYXBcXFwiOnRydWUsXFxcIm1vZGlmeVZhcnNcXFwiOnt9fSEuL3Jlc29sdmVNb2R1bGUubGVzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xMy4yQHN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCYtYXV0b3ByZWZpeGVyIS4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMS4zLjNAcG9zdGNzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL19sZXNzLWxvYWRlckAyLjIuM0BsZXNzLWxvYWRlci9pbmRleC5qcz97XFxcInNvdXJjZU1hcFxcXCI6dHJ1ZSxcXFwibW9kaWZ5VmFyc1xcXCI6e319IS4vcmVzb2x2ZU1vZHVsZS5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCYtYXV0b3ByZWZpeGVyIS4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMS4zLjNAcG9zdGNzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL19sZXNzLWxvYWRlckAyLjIuM0BsZXNzLWxvYWRlci9pbmRleC5qcz97XFxcInNvdXJjZU1hcFxcXCI6dHJ1ZSxcXFwibW9kaWZ5VmFyc1xcXCI6e319IS4vcmVzb2x2ZU1vZHVsZS5sZXNzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2V4YW1wbGVzL3Jlc29sdmVNb2R1bGUubGVzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFLQTtBQUNBOzs7QUFNQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFkQTs7Ozs7QUFlQTtBQVRBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNQQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==