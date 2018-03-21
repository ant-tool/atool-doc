webpackJsonp([3,0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _isomorphicFetch = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"isomorphic-fetch\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	document.getElementById('__exampleDom').innerHTML = 'loading...';

	(0, _isomorphicFetch2.default)('/something').then(function (res) {
	  if (res.status >= 400) {
	    throw new Error("Bad response from server");
	  }

	  res.json().then(function (json) {
	    document.getElementById('__exampleDom').innerHTML = json.result;
	  });
	});

/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvbG9hZERhdGFGcm9tTW9jay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9sb2FkRGF0YUZyb21Nb2NrLm1kIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19leGFtcGxlRG9tJykuaW5uZXJIVE1MID0gJ2xvYWRpbmcuLi4nO1xuXG5mZXRjaCgnL3NvbWV0aGluZycpXG4gIC50aGVuKHJlcyA9PiB7XG4gICAgaWYgKHJlcy5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCYWQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXJcIik7XG4gICAgfVxuXG4gICAgcmVzLmpzb24oKS50aGVuKGpzb24gPT4ge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fZXhhbXBsZURvbScpLmlubmVySFRNTCA9IGpzb24ucmVzdWx0O1xuICAgIH0pO1xuICB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBleGFtcGxlcy9sb2FkRGF0YUZyb21Nb2NrLm1kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==