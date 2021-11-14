'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _vueTypes = require('../_util/vue-types');

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _configProvider = require('../config-provider');

var _BaseMixin = require('../_util/BaseMixin');

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _pickrEs = require('@simonwep/pickr/dist/pickr.es5.min');

var _pickrEs2 = _interopRequireDefault(_pickrEs);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _LocaleReceiver = require('../locale-provider/LocaleReceiver');

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _en_US = require('./locale/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _propsUtil = require('../_util/props-util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var colors = '#194d33';
exports['default'] = {
  name: 'AColorPicker',
  mixins: [_BaseMixin2['default']],
  model: {
    prop: 'value',
    event: 'change.value' //为了支持v-model直接返回颜色字符串 所以用了自定义的事件,与pickr自带change事件进行区分
  },
  props: {
    prefixCls: _vueTypes2['default'].string,
    defaultValue: _vueTypes2['default'].string, //默认值
    config: _vueTypes2['default'].object, //pickr配置
    value: _vueTypes2['default'].string, //颜色值
    locale: _vueTypes2['default'].object, //双语包
    colorRounded: _vueTypes2['default'].number, //颜色数值保留几位小数
    size: _vueTypes2['default'].oneOf(['default', 'small', 'large']).def('default'), //尺寸
    getPopupContainer: _vueTypes2['default'].func, //指定渲染容器
    disabled: _vueTypes2['default'].bool.def(false), //是否禁用
    format: _vueTypes2['default'].string, //颜色格式设置
    alpha: _vueTypes2['default'].bool.def(false), //是否开启透明通道
    hue: _vueTypes2['default'].bool.def(true) //是否开启色彩预选
  },
  inject: {
    configProvider: { 'default': function _default() {
        return _configProvider.ConfigConsumerProps;
      } }
  },
  data: function data() {
    return {
      colors: colors,
      myOpen: false,
      pickr: null,
      i18n: _en_US2['default']
    };
  },

  watch: {
    'configProvider.locale.ColorPicker': {
      handler: function handler(val) {
        if (this.locale) return;
        this.i18n = val;
        this.reInitialize();
      }
    },
    locale: function locale(val) {
      this.i18n = val.ColorPicker || val.lang;
      this.reInitialize();
    },
    value: function value(val) {
      this.setColor(val);
    },
    disabled: function disabled(val) {
      this.pickr[val ? 'disable' : 'enable']();
    },

    config: {
      handler: function handler() {
        this.reInitialize();
      },

      deep: true
    },
    format: function format(val) {
      var type = val.toLocaleUpperCase();
      var res = this.pickr.setColorRepresentation(type);
      if (res) {
        this.pickr.applyColor();
      } else {
        throw new TypeError('format was invalid');
      }
    }
  },
  mounted: function mounted() {
    if (this.locale) {
      this.i18n = this.locale.ColorPicker || this.locale.lang;
    }
    this.createPickr();
    this.eventsBinding();
  },
  destroyed: function destroyed() {
    this.pickr.destroyAndRemove();
  },

  methods: {
    reInitialize: function reInitialize() {
      this.pickr.destroyAndRemove();
      var dom = document.createElement('div');
      dom.id = 'color-picker' + this._uid;
      var box = this.$el.querySelector('#color-picker-box' + this._uid);
      box.appendChild(dom);
      this.createPickr();
      this.eventsBinding();
    },

    setColor: (0, _debounce2['default'])(function (val) {
      this.pickr.setColor(val);
    }, 1000),
    eventsBinding: function eventsBinding() {
      var _this = this;

      var pickrEvents = ['init', 'hide', 'show', 'save', 'clear', 'change', 'changestop', 'cancel', 'swatchselect'];
      Object.keys(this.$listeners).forEach(function (event) {
        pickrEvents.includes(event) && _this.pickr.on(event, _this.$listeners[event]);
      });
    },
    createPickr: function createPickr() {
      var _this2 = this;

      var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
          getPopupContainer = _getOptionProps.getPopupContainer;

      var getContextPopupContainer = this.configProvider.getPopupContainer;

      var container = getPopupContainer || getContextPopupContainer;
      this.pickr = _pickrEs2['default'].create((0, _extends3['default'])({
        el: '#color-picker' + this._uid,
        container: container && container(this.$el) || document.body,
        theme: 'monolith', // or 'monolith', or 'nano'
        'default': this.value || this.defaultValue || null, // 有默认颜色pickr才可以获取到_representation
        components: {
          // Main components
          preview: true,
          opacity: this.alpha,
          hue: this.hue,
          // Input / output Options
          interaction: {
            hex: true,
            rgba: true,
            input: true,
            clear: true,
            save: true
          }
        }
      }, this.config, { i18n: this.i18n })).on('save', function (color, instance) {
        if (color) {
          var _representation = instance._representation || 'HEXA';
          color = color['to' + _representation]().toString(_this2.colorRounded || 0);
        }
        _this2.$emit('change.value', color || '');
      }).on('hide', function () {
        _this2.setState({ myOpen: false });
      });
    },
    handleOpenChange: function handleOpenChange() {
      var open = !this.myOpen;
      this.setState({ myOpen: open });
      this.pickr[open ? 'show' : 'hide']();
      this.$emit('openChange', open);
    },
    getDefaultLocale: function getDefaultLocale() {
      var result = (0, _extends3['default'])({}, _en_US2['default'], this.$props.locale);
      result.lang = (0, _extends3['default'])({}, result.lang, (this.$props.locale || {}).lang);
      return result;
    },
    renderColorPicker: function renderColorPicker() {
      var _classString;

      var h = this.$createElement;
      var customizePrefixCls = this.$props.prefixCls;
      var getPrefixCls = this.configProvider.getPrefixCls;

      var prefixCls = getPrefixCls('color-picker', customizePrefixCls);

      var _getOptionProps2 = (0, _propsUtil.getOptionProps)(this),
          disabled = _getOptionProps2.disabled;

      var classString = (_classString = {}, (0, _defineProperty3['default'])(_classString, prefixCls, true), (0, _defineProperty3['default'])(_classString, prefixCls + '-open', this.myOpen), (0, _defineProperty3['default'])(_classString, prefixCls + '-lg', this.size === 'large'), (0, _defineProperty3['default'])(_classString, prefixCls + '-sm', this.size === 'small'), (0, _defineProperty3['default'])(_classString, prefixCls + '-disabled', this.disabled), _classString);
      return h(
        'div',
        { 'class': classString, attrs: { tabIndex: disabled ? -1 : 0 },
          on: {
            'click': this.handleOpenChange
          }
        },
        [h(
          'div',
          { 'class': prefixCls + '-selection' },
          [h(
            'div',
            {
              attrs: { id: 'color-picker-box' + this._uid }
            },
            [h('div', {
              attrs: { id: 'color-picker' + this._uid }
            })]
          ), h(_icon2['default'], {
            attrs: { type: 'down' },
            'class': prefixCls + '-icon' })]
        )]
      );
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(_LocaleReceiver2['default'], {
      attrs: {
        componentName: 'ColorPicker',
        defaultLocale: this.getDefaultLocale
      },
      scopedSlots: { 'default': this.renderColorPicker }
    });
  }
};