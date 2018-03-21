webpackJsonp([2,0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _isomorphicFetch = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"isomorphic-fetch\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	document.getElementById('__exampleDom').innerHTML = 'loading...';

	(0, _isomorphicFetch2.default)('/statics/result.json').then(function (res) {
	  if (res.status >= 400) {
	    throw new Error("Bad response from server");
	  }

	  res.json().then(function (json) {
	    document.getElementById('__exampleDom').innerHTML = json.name;
	  });
	});

/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvbG9hZEZyb21TdGF0aWMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvbG9hZEZyb21TdGF0aWMubWQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX2V4YW1wbGVEb20nKS5pbm5lckhUTUwgPSAnbG9hZGluZy4uLic7XG5cbmZldGNoKCcvc3RhdGljcy9yZXN1bHQuanNvbicpXG4gIC50aGVuKHJlcyA9PiB7XG4gICAgaWYgKHJlcy5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCYWQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXJcIik7XG4gICAgfVxuXG4gICAgcmVzLmpzb24oKS50aGVuKGpzb24gPT4ge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fZXhhbXBsZURvbScpLmlubmVySFRNTCA9IGpzb24ubmFtZTtcbiAgICB9KTtcbiAgfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZXhhbXBsZXMvbG9hZEZyb21TdGF0aWMubWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9