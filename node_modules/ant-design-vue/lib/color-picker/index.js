'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ColorPicker = require('./ColorPicker');

var _ColorPicker2 = _interopRequireDefault(_ColorPicker);

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* istanbul ignore next */
_ColorPicker2['default'].install = function (Vue) {
  Vue.use(_base2['default']);
  Vue.component(_ColorPicker2['default'].name, _ColorPicker2['default']);
};

exports['default'] = _ColorPicker2['default'];