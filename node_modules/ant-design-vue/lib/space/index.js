'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpaceProps = exports.SpaceSizeType = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _vueTypes = require('../_util/vue-types');

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _propsUtil = require('../_util/props-util');

var _configProvider = require('../config-provider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SpaceSizeType = exports.SpaceSizeType = _vueTypes2['default'].oneOfType([_vueTypes2['default'].number, _vueTypes2['default'].oneOf(['small', 'middle', 'large'])]);

var spaceSize = {
  small: 8,
  middle: 16,
  large: 24
};

var SpaceProps = exports.SpaceProps = {
  prefixCls: _vueTypes2['default'].string,
  size: SpaceSizeType,
  direction: _vueTypes2['default'].oneOf(['horizontal', 'vertical']),
  align: _vueTypes2['default'].oneOf(['start', 'end', 'center', 'baseline'])
};

var Space = {
  functional: true,
  name: 'ASpace',
  props: (0, _propsUtil.initDefaultProps)(SpaceProps, {
    size: 'small',
    direction: 'horizontal'
  }),
  inject: {
    configProvider: { 'default': function _default() {
        return _configProvider.ConfigConsumerProps;
      } }
  },
  render: function render(h, content) {
    var _someSpaceClass;

    var customizePrefixCls = content.prefixCls,
        configProvider = content.injections.configProvider,
        children = content.children;
    var _content$props = content.props,
        align = _content$props.align,
        size = _content$props.size,
        direction = _content$props.direction;


    var getPrefixCls = configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('space', customizePrefixCls);
    var items = (0, _propsUtil.filterEmpty)(children);
    var len = items.length;

    if (len === 0) {
      return null;
    }

    var mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;

    var someSpaceClass = (_someSpaceClass = {}, (0, _defineProperty3['default'])(_someSpaceClass, prefixCls, true), (0, _defineProperty3['default'])(_someSpaceClass, prefixCls + '-' + direction, true), (0, _defineProperty3['default'])(_someSpaceClass, prefixCls + '-align-' + mergedAlign, mergedAlign), _someSpaceClass);

    var itemClassName = prefixCls + '-item';
    var marginDirection = 'marginRight'; // directionConfig === 'rtl' ? 'marginLeft' : 'marginRight';

    return h(
      'div',
      { 'class': someSpaceClass },
      [items.map(function (child, i) {
        return h(
          'div',
          {
            'class': itemClassName,
            key: itemClassName + '-' + i,
            style: i === len - 1 ? {} : (0, _defineProperty3['default'])({}, direction === 'vertical' ? 'marginBottom' : marginDirection, typeof size === 'string' ? spaceSize[size] + 'px' : size + 'px')
          },
          [child]
        );
      })]
    );
  }
};

/* istanbul ignore next */
Space.install = function (Vue) {
  Vue.component(Space.name, Space);
};
exports['default'] = Space;