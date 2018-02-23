'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _lv_LV = require('rc-calendar/lib/locale/lv_LV');

var _lv_LV2 = _interopRequireDefault(_lv_LV);

var _lv_LV3 = require('../../time-picker/locale/lv_LV');

var _lv_LV4 = _interopRequireDefault(_lv_LV);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Created by Aleksandrs Zagorskis @Dhanvantari Solutions on 23/02/18.
 */
var locale = {
  lang: (0, _extends3['default'])({ placeholder: 'Izvēlieties datumu', rangePlaceholder: ['Sākuma datums', 'Beigu datums'] }, _lv_LV2['default']),
  timePickerLocale: (0, _extends3['default'])({}, _lv_LV4['default'])
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports['default'] = locale;