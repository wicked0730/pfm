//TAB头部基础信息组件
require.config({
    paths : {
        'vue' : '../vue'
    }
});
define('commonInfo',['vue'],function(Vue) {
	//模板
	var template = '<table class="table table-bordered table-striped">' + 
						'<tbody>' + 
							'<tr>' + 
								'<td style="width:130px">姓名：</td>' + 
								'<td>李思露</td>' + 
								'<td style="width:130px">身份证名号：</td>' + 
								'<td>0</td>' + 
								'<td style="width:130px">办事袋编号：</td>' + 
								'<td>37277</td>' + 
							'</tr>' + 
						'</tbody>' + 
					'</table>';
	
	
	//定义组件
	var CommonInfoComponent = Vue.extend({
	    //调用模板
	    template: template,
	    data: function(){
	    	return {list:[]};
	    },
	    created: function(){
	    	var self = this;
	    	var url = '../XXDJ-Admin/api/service/carAlarm/getAlarmByYear';
	    	
	    },
	    methods: {
	        
	    }
	});
	
	return {
        component : CommonInfoComponent
    }

	
});