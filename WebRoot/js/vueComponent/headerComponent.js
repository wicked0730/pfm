//页面头部组件
require.config({
    paths : {
        'vue' : '../vue'
    }
});
define('header',['vue'],function(Vue) {
	//模板
	var template = '<div class="page-header navbar navbar-fixed-top">' +
						'<div class="page-header-inner ">' +
							'<div class="page-logo" style="width: auto">' +
								'<a href="index.html" class="title_">人事档案管理系统 </a>' +
							'</div>' +
							'<div class="page-actions">' +
								'<div class="btn-group">' + 
									//'<button type="button" class="btn red-haze btn-sm"><span class="hidden-sm hidden-xs">档案管理</span></button>' +
									//'<a href="index.html" class="btn green"> 档案管理 </a>' +
									//'<a href="#demographicDialog" class="btn yellow" data-toggle="modal"> 人数统计 </a>' +
									//'<a href="#serviceStatisticsDialog" class="btn blue" data-toggle="modal"> 办事统计 </a>' +
								'</div>' +
							'</div>' + 
							'<div class="page-top">' + 
								'<div class="top-menu">' + 
									'<ul class="nav navbar-nav pull-right">' + 
										'<li class="dropdown dropdown-user dropdown-dark">' + 
											'<a href="index.html" class="dropdown-toggle">' + 
												'<i class="fa fa-clipboard"></i>' +
												'<span class="username username-hide-on-mobile"> 档案管理 </span>' + 
											'</a>' + 
											/*'<ul class="dropdown-menu dropdown-menu-default">' + 
												'<li>' + 
													'<a href="javascript:;"><i class="icon-users"></i> 人数统计 </a>' + 
												'</li>' +
												'<li>' + 
													'<a href="javascript:;"><i class="fa fa-newspaper-o"></i> 办理统计 </a>' + 
												'</li>' + 
											'</ul>' +*/
										'</li>' + 
										'<li class="dropdown dropdown-user dropdown-dark">' + 
											'<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">' + 
												'<i class="fa fa-line-chart"></i>' +
												'<span class="username username-hide-on-mobile"> 统计 </span>' + 
											'</a>' + 
											'<ul class="dropdown-menu dropdown-menu-default">' + 
												'<li>' + 
													'<a href="#demographicDialog" data-toggle="modal"><i class="icon-users"></i> 人数统计 </a>' + 
												'</li>' +
												'<li>' + 
													'<a href="#serviceStatisticsDialog" data-toggle="modal"><i class="fa fa-newspaper-o"></i> 办理统计 </a>' + 
												'</li>' + 
											'</ul>' +
										'</li>' + 
										'<li class="dropdown dropdown-user dropdown-dark">' + 
											'<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">' + 
												'<i class="icon-user"></i>' +
												'<span class="username username-hide-on-mobile"> 管理员 </span>' + 
												//'<img alt="" class="img-circle" src="/assets/layouts/layout4/img/avatar9.jpg" />' + 
											'</a>' + 
											'<ul class="dropdown-menu dropdown-menu-default">' + 
												'<li>' + 
													'<a href="javascript:;"><i class="fa fa-exchange"></i> 密码修改 </a>' + 
												'</li>' +
												'<li>' + 
													'<a href="/"><i class="fa fa-sign-out"></i> 退出 </a>' + 
												'</li>' + 
											'</ul>' +
										'</li>' + 
									'</ul>' +
								'</div>' +
							'</div>' +
						'</div>' +
					 '</div>';
	
	
	//定义组件
	var HeaderComponent = Vue.extend({
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
        component : HeaderComponent
    }

	
});