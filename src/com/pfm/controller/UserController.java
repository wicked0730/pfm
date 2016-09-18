package com.pfm.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Record;
import com.pfm.common.model.UserModel;

import freemarker.ext.servlet.HttpSessionHashModel;

public class UserController extends Controller {

	private UserModel um = new UserModel();
	
	public UserController(){
		
	}
	
	public void login(){
		String loginName = getPara("用户名"); 
		String password = getPara("密码"); 
		Record user = um.login(loginName, password);
		if(user!=null) {
			String keys [] = user.getColumnNames();
			for(String key : keys){
				Object obj = user.get(key);
				String value = String.valueOf(obj);
				setCookie("pfm_" + encode(key), encode(value), 60);
			}
			renderJson("{\"result\":true}");
		}else{
			renderJson("{\"result\":false}");
		}
	}
	
	/**
	 * 中文转码
	 * @param str
	 * @return
	 */
	private String encode(String str){
		String result = null;
		try {
			result = URLEncoder.encode(str, "utf-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return result;
	}
	
}
