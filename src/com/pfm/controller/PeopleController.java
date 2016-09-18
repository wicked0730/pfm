package com.pfm.controller;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.Record;
import com.pfm.common.model.PeopleModel;

public class PeopleController extends Controller {

	private PeopleModel pm = new PeopleModel();
	
	public PeopleController(){
		
	}
	
	public void getList(){ 
		String order = getPara("order"); 
		String where = getPara("where"); 
		Page<Record> peoples = pm.getList(1,100,where,order);
		renderJson(peoples);
	}
	
}
