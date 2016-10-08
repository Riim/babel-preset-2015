var transformES2015ArrowFunctions = require('babel-plugin-transform-es2015-arrow-functions');
var transformES2015BlockScopedFunctions = require('babel-plugin-transform-es2015-block-scoped-functions');
var transformES2015BlockScoping = require('babel-plugin-transform-es2015-block-scoping');
var transformES2015Classes = require('babel-plugin-transform-es2015-classes');
var transformES2015ComputedProperties = require('babel-plugin-transform-es2015-computed-properties');
var transformES2015Destructuring = require('babel-plugin-transform-es2015-destructuring');
var transformES2015ForOf = require('babel-plugin-transform-es2015-for-of');
var transformES2015FunctionName = require('babel-plugin-transform-es2015-function-name');
var transformES2015ModulesCommonJS = require('babel-plugin-transform-es2015-modules-commonjs');
var transformES2015ObjectSuper = require('babel-plugin-transform-es2015-object-super');
var transformES2015Parameters = require('babel-plugin-transform-es2015-parameters');
var transformES2015ShorthandProperties = require('babel-plugin-transform-es2015-shorthand-properties');
var transformES2015Spread = require('babel-plugin-transform-es2015-spread');
var transformES2015TemplateLiterals = require('babel-plugin-transform-es2015-template-literals');

function preset(context, opts) {
	var loose = true;
	var spec = false;
	var modules = true;

	if (opts !== void 0) {
		if (opts.loose !== void 0) { loose = opts.loose; }
		if (opts.spec !== void 0) { spec = opts.spec; }
		if (opts.modules !== void 0) { modules = opts.modules; }
	}

	var optsLoose = { loose: loose };

	return {
		plugins: [
			[transformES2015ArrowFunctions, { spec: spec }],
			transformES2015BlockScopedFunctions,
			transformES2015BlockScoping,
			[transformES2015Classes, optsLoose],
			[transformES2015ComputedProperties, optsLoose],
			[transformES2015Destructuring, optsLoose],
			[transformES2015ForOf, optsLoose],
			transformES2015FunctionName,
			modules && [transformES2015ModulesCommonJS, optsLoose],
			transformES2015ObjectSuper,
			transformES2015Parameters,
			transformES2015ShorthandProperties,
			[transformES2015Spread, optsLoose],
			[transformES2015TemplateLiterals, { loose: loose, spec: spec }]
		].filter(Boolean)
	};
}

var oldConfig = preset({});

Object.defineProperty(oldConfig, 'buildPreset', {
	configurable: true,
	enumerable: false,
	writable: true,
	value: preset,
});

module.exports = oldConfig;
