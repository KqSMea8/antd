'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lv_LV = require('rc-pagination/lib/locale/lv_LV');

var _lv_LV2 = _interopRequireDefault(_lv_LV);

var _lv_LV3 = require('../date-picker/locale/lv_LV');

var _lv_LV4 = _interopRequireDefault(_lv_LV3);

var _lv_LV5 = require('../time-picker/locale/lv_LV');

var _lv_LV6 = _interopRequireDefault(_lv_LV5);

var _lv_LV7 = require('../calendar/locale/lv_LV');

var _lv_LV8 = _interopRequireDefault(_lv_LV7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    locale: 'lv',
    Pagination: _lv_LV2['default'],
    DatePicker: _lv_LV4['default'],
    TimePicker: _lv_LV6['default'],
    Calendar: _lv_LV8['default'],
    Table: {
        filterTitle: 'Filtrs',
        filterConfirm: 'OK',
        filterReset: 'Attīrīt',
        emptyText: 'Nav datu',
        selectAll: 'Izvēlēties visus',
        selectInvert: 'Apgrieztā izvēle'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Atcelt',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Atcelt'
    },
    Transfer: {
        notFoundContent: 'Nekas netika atrasts',
        searchPlaceholder: 'Ievadiet meklējamo atslēgas vārdu',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Select: {
        notFoundContent: 'Nekas netika atrasts'
    },
    Upload: {
        uploading: 'Augšupielādē...',
        removeFile: 'Dzēst failu',
        uploadError: 'Augšupielādes kļūda',
        previewFile: 'Priekšskatīt failu'
    }
};