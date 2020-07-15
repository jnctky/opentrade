
"use strict";

var fs = require('fs');
var rm = require('rimraf');

module.exports = exports;

var versionArray = process.version
	.substr(1)
	.replace(/-.*$/, '')
	.split('.')
	.map(function(item) {
		return +item;
	});

var napi_multiple_commands = [
	'build',
	'clean',
	'configure',
	'package',
	'publish',
	'reveal',
	'testbinary',
	'testpackage',
	'unpublish'
];

var napi_build_version_tag = 'napi_build_version=';

module.exports.get_napi_version = function() {
	// returns the non-zero numeric napi version or undefined if napi is not supported.
	var version = process.versions.napi; // can be undefined
	if (!version) { // this code should never need to be updated
		if (versionArray[0] === 9 && versionArray[1] >= 3) version = 2; // 9.3.0+
		else if (versionArray[0] === 8) version = 1; // 8.0.0+
	}
	return version;
};

console.log(process.versions);
console.log(module.exports.get_napi_version(opts ? opts.target : undefined));
