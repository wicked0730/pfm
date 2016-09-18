package com.pfm.controller;

import java.util.List;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Record;
import com.pfm.common.model.CodeModel;

/**
 * 编码表控制器
 * @author wicked
 *
 */
public class CodeController extends Controller {

	private CodeModel cm = new CodeModel();
	
	public CodeController(){
		
	}
	
	public void get4select(){
		String type = getPara("type"); 
		List<Record> list = cm.get4select(type);
		renderJson(list);
	}
	
}
