//登录组件
require.config({
    paths : {
        'vue' : '../vue',
        'loginVaildate' : 'js/validate/login'
    }
});
define('login',['vue','loginVaildate'],function(Vue,Login) {
	
	//模板
	var template = '<form class="login-form" action="" method="post">' +
			        	'<h3 class="form-title">登录</h3>' +
				        '<div class="alert alert-danger display-hide">' +
					        '<button class="close" data-close="alert"></button>' +
					        '<span> 请输入用户名和密码 </span>' +
				        '</div>' +
				        '<div class="form-group">' +
				        	'<label class="control-label visible-ie8 visible-ie9">用户名</label>' +
					        '<div class="input-icon">' +
						        '<i class="fa fa-user"></i>' +
						        '<input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="用户名" name="用户名" />' +
					        '</div>' +
				        '</div>' +
				        '<div class="form-group">' +
				        	'<label class="control-label visible-ie8 visible-ie9">密码</label>' +
					        '<div class="input-icon">' +
						        '<i class="fa fa-lock"></i>' +
						        '<input class="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="密码" name="密码" />' +
					        '</div>' +
				        '</div>' +
				        '<div class="form-actions">' +
				        	'<label class="rememberme mt-checkbox mt-checkbox-outline" style="opacity: 0">' +
						        '<input type="checkbox" name="remember" value="1" /> 记住我' +
						        '<span></span>' +
					        '</label>' +
					        '<button type="submit" class="btn green pull-right"> 登录 </button>' +
				        '</div>' +
			        '</form>';
	
	
	//定义组件
	var LoginComponent = Vue.extend({
	    //调用模板
	    template: template,
	    data: function(){
	    	return {list:[]};
	    },
	    created: function(){
	    	
	    },
	    methods: {
	        
	    }
	});
	
	Vue.nextTick(function(){
		Login.init();
    });
	
	return {
        component : LoginComponent
    }
	
});