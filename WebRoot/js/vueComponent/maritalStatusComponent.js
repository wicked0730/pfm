//婚姻状况组件
require.config({
    paths : {
        'vue' : '../vue'
    }
});
define('maritalStatus',['vue'],function(Vue) {
	
	//模板
	var template = '<select class="form-control" name="婚姻状况">' +
				        '<option value="">请选择</option>' +
				        '<option v-for="op in list" value={{op["编码编号"]}}>{{op["编码解析"]}}</option>' +
				    '</select>';
	
	//定义组件
	var MaritalStatusComponent = Vue.extend({
	    //调用模板
	    template: template,
	    data: function(){
	    	return {list:[]};
	    },
	    created: function(){
	    	var self = this;
	    	var url = 'code/get4select';
	    	var type = '婚姻状况';
	    	$.post(url,{type:type},function(json){
	    		self.$set('list', json)
	    	});
	    },
	    methods: {
	        
	    }
	});
	
	return {
        component : MaritalStatusComponent
    }
	
});