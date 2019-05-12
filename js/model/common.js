var path="http://localhost:63342/OKAir_Web/js/bower_components";
require.config({
    baseUrl:path,
    paths:{
        "jquery":"jquery/dist/jquery.min",
        "bootstrap": "bootstrap/dist/js/bootstrap.min",
        "bootstrapTable": "bootstrap-table/dist/bootstrap-table.min",
        "bootstrapTableZhCN": "bootstrap-table/dist/locale/bootstrap-table-zh-CN",
        "bootstrapSelect": "bootstrap-select/dist/js/bootstrap-select.min",
        "bootstrapTreeview": "bootstrap-treeview/dist/bootstrap-treeview.min",
        "moment": "moment/min/moment-with-locales",
        "bootbox":"bootbox/bootbox.min",
        "bootstrapSwitch":"bootstrap-switch/dist/js/bootstrap-switch.min"
    },
    map:{
        '*': {
            'css': 'require-css/css.min'
        }
    },
    shim:{
        bootstrap: {
            deps:[
                'jquery',
                'css!'+path+'/bootstrap/dist/css/bootstrap.min'
            ]
        },
        bootstrapTable: {
            deps:[
                'bootstrap',
                'css!'+path+'/bootstrap-table/dist/bootstrap-table.min'
            ]
        },
        bootstrapTableZhCN: {
            deps:[
                'jquery',
                'bootstrapTable'
            ]
        },
        bootstrapSwitch:{
            deps:[
                'jquery',
                'css!'+path+'/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min'
            ]
        },
        bootstrapSelect: {
            deps:[
                'jquery',
                'css!'+path+'/bootstrap-select/dist/css/bootstrap-select.min'
            ]
        },
        bootstrapTreeview: {
            deps:[
                'jquery',
                'css!'+path+'/bootstrap-treeview/dist/bootstrap-treeview.min'
            ]
        }
    }
});