//档案管理列表组件
require.config({
    paths : {
        'vue' : '../vue'
    }
});
define('fileList',['vue'],function(Vue) {
	//模板
	var template = //'<ul class="scroller">' + 
						'<li class="mt-list-item done" v-for="file in list" @click="showDetail($index)" style="padding: 10px 15px">' + 
							'<div class="list-icon-container">' + 
								'<i v-if="file[\'人员性别\'].indexOf(\'1\')!=-1" class="fa fa-user"></i>' + 
								'<i v-if="file[\'人员性别\'].indexOf(\'2\')!=-1" class="fa fa-user" style="color: red"></i>' + 
							'</div>' + 
							'<div class="list-datetime" style="font-size: 18px"> {{file["档案编号"]}} </div>' + 
							'<div class="list-item-content">' + 
								'<h3 class="uppercase">' + 
									'<a href="javascript:;">{{file["姓名"]}}</a>' + 
								'</h3>' + 
							'</div>' + 
						'</li>';
					//'</ul>';
	
	
	//定义组件
	var FileListComponent = Vue.extend({
	    //调用模板
	    template: template,
	    data: function(){
	    	return {list:[]};
	    },
	    created: function(){
	    	var self = this;
	    	var url = 'people/getList';
	    	var order = ' order by 录入时间 desc';
	    	$.post(url,{order:order},function(data){
	    		self.$set('list', data.list);
	    	});
	    	/*var list = [
	  			{'姓名': '李思露', num: 37277, sex: 1}
	  		]
	    	self.$set('list', list);*/
	    },
	    methods: {
	        showDetail: function(index){
	        	var self = this;
	        	self.$dispatch('fileDetail',self.$data.list[index]);
	        	if(fileDetail){
	        		$('.dashboard').hide();
	        		$('#fileDetail').show();
	        		fileDetail.$set('info',self.$data.list[index]);
	        	}
	        }
	    }
	});
	
	return {
        component : FileListComponent
    }
	
});