define('loginVaildate',[],function() {

	var target = '.login-form';
	
	var Login = function () {

		var handleLogin = function() {
			$(target).validate({
	            errorElement: 'span', //default input error message container
	            errorClass: 'help-block', // default input error message class
	            focusInvalid: false, // do not focus the last invalid input
	            rules: {
	            	loginName: {
	                    required: true
	                },
	                password: {
	                    required: true
	                }
	            },

	            messages: {
	                loginName: {
	                    required: "请输入用户名。"
	                },
	                password: {
	                    required: "密码不能为空。"
	                }
	            },

	            invalidHandler: function (event, validator) { //display error alert on form submit   
	                $('.alert-danger', $(target)).show();
	            },

	            highlight: function (element) { // hightlight error inputs
	                $(element)
	                    .closest('.form-group').addClass('has-error'); // set error class to the control group
	            },

	            success: function (label) {
	                label.closest('.form-group').removeClass('has-error');
	                label.remove();
	            },

	            errorPlacement: function (error, element) {
	                error.insertAfter(element.closest('.input-icon'));
	            },

	            submitHandler: function (form) {
	            	var postData = $(target).serializeArray();
		        	var url = "user/login";
		        	$.post(url,postData,function(json){
		        		console.log(json.result);
		        		if(json.result){
			        		if(window.location.pathname.indexOf('login.html')!=-1
			        				||window.location.pathname == '/pfm/'){
			        			window.location = 'index.html';
			        		}
		        		}else{
		        			$('.alert-danger', $(target)).show();
		        			$(target + ' .alert-danger span').html('用户名或密码不正确！');
		        		}
		        	});
	            }
	        });

	        $(target + ' input').keypress(function (e) {
	            if (e.which == 13) {
	                if ($(target).validate().form()) {
	                    $(target).submit();
	                }
	                return false;
	            }
	        });
		}
	    
	    return {
	        //main function to initiate the module
	        init: function () {
	        	
	            handleLogin();

	            // init background slide images
			    $.backstretch([
			        "../assets/pages/media/bg/1.jpg",
			        "../assets/pages/media/bg/2.jpg",
			        "../assets/pages/media/bg/3.jpg",
			        "../assets/pages/media/bg/4.jpg"
			        ], {
			          fade: 1000,
			          duration: 8000
			    	}
	        	);
	        }
	    };

	}();
	
	return Login;
	
});