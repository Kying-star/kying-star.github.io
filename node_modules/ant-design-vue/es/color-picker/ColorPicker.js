import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _extends from 'babel-runtime/helpers/extends';
import PropTypes from '../_util/vue-types';
import { ConfigConsumerProps } from '../config-provider';
import BaseMixin from '../_util/BaseMixin';
import Pickr from '@simonwep/pickr/dist/pickr.es5.min';
import Icon from '../icon';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import enUS from './locale/en_US';
import debounce from 'lodash/debounce';

import { getOptionProps } from '../_util/props-util';
var colors = '#194d33';
export default {
  name: 'AColorPicker',
  mixins: [BaseMixin],
  model: {
    prop: 'value',
    event: 'change.value' //为了支持v-model直接返回颜色字符串 所以用了自定义的事件,与pickr自带change事件进行区分
  },
  props: {
    prefixCls: PropTypes.string,
    defaultValue: PropTypes.string, //默认值
    config: PropTypes.object, //pickr配置
    value: PropTypes.string, //颜色值
    locale: PropTypes.object, //双语包
    colorRounded: PropTypes.number, //颜色数值保留几位小数
    size: PropTypes.oneOf(['default', 'small', 'large']).def('default'), //尺寸
    getPopupContainer: PropTypes.func, //指定渲染容器
    disabled: PropTypes.bool.def(false), //是否禁用
    format: PropTypes.string, //颜色格式设置
    alpha: PropTypes.bool.def(false), //是否开启透明通道
    hue: PropTypes.bool.def(true) //是否开启色彩预选
  },
  inject: {
    configProvider: { 'default': function _default() {
        return ConfigConsumerProps;
      } }
  },
  data: function data() {
    return {
      colors: colors,
      myOpen: false,
      pickr: null,
      i18n: enUS
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

    setColor: debounce(function (val) {
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

      var _getOptionProps = getOptionProps(this),
          getPopupContainer = _getOptionProps.getPopupContainer;

      var getContextPopupContainer = this.configProvider.getPopupContainer;

      var container = getPopupContainer || getContextPopupContainer;
      this.pickr = Pickr.create(_extends({
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
      var result = _extends({}, enUS, this.$props.locale);
      result.lang = _extends({}, result.lang, (this.$props.locale || {}).lang);
      return result;
    },
    renderColorPicker: function renderColorPicker() {
      var _classString;

      var h = this.$createElement;
      var customizePrefixCls = this.$props.prefixCls;
      var getPrefixCls = this.configProvider.getPrefixCls;

      var prefixCls = getPrefixCls('color-picker', customizePrefixCls);

      var _getOptionProps2 = getOptionProps(this),
          disabled = _getOptionProps2.disabled;

      var classString = (_classString = {}, _defineProperty(_classString, prefixCls, true), _defineProperty(_classString, prefixCls + '-open', this.myOpen), _defineProperty(_classString, prefixCls + '-lg', this.size === 'large'), _defineProperty(_classString, prefixCls + '-sm', this.size === 'small'), _defineProperty(_classString, prefixCls + '-disabled', this.disabled), _classString);
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
          ), h(Icon, {
            attrs: { type: 'down' },
            'class': prefixCls + '-icon' })]
        )]
      );
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(LocaleReceiver, {
      attrs: {
        componentName: 'ColorPicker',
        defaultLocale: this.getDefaultLocale
      },
      scopedSlots: { 'default': this.renderColorPicker }
    });
  }
};