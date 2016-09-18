require.config({
    paths : {
        'vue' : 'js/vue',
        'header' : 'js/vueComponent/headerComponent',
        'fileList' : 'js/vueComponent/fileListComponent',
        'commonInfo' : 'js/vueComponent/commonInfoComponent',
        'maritalStatus' : 'js/vueComponent/maritalStatusComponent',
        'nationality' : 'js/vueComponent/nationalityComponent'
    }
});
require(['vue'
         ,'header'
         ,'fileList'
         ,'commonInfo'
         ,'maritalStatus'
         ,'nationality'],function(Vue
		,headerComponent
		,fileListComponent
		,commonInfoComponent
		,maritalStatusComponent
		,nationalityComponent){
	
	//页面头部组件
	var HeaderComponent = headerComponent.component;
	Vue.component('header-component', HeaderComponent);
	new Vue({
		el: '#vueHeader'
	});
	
	//档案管理列表组件
	var FileListComponent = fileListComponent.component;
	Vue.component('filelist-component', FileListComponent);
	new Vue({
		el: '#vueFileList'
	});
	
	//TAB头部基础信息组件
	var CommonInfoComponent = commonInfoComponent.component;
	Vue.component('commoninfo-component', CommonInfoComponent);
	fileDetail = new Vue({
		el: '#fileDetail',
		data: {
			info: {}
		}
	});
	
	//婚姻状况组件
	var MaritalStatusComponent = maritalStatusComponent.component;
	Vue.component('maritalstatus-component', MaritalStatusComponent);
	var NationalityComponent = nationalityComponent.component;
	Vue.component('nationality-component', NationalityComponent);
	new Vue({
		el: '#body'
	});
});