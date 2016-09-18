package com.pfm.common.model;

import java.util.List;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

public class UserModel {

	public Record login(String loginName, String password){
		String sql = "select * from admin where [用户名] = '" + loginName + "' and [密码] = '" + password + "'";
		Record user = null;
		List<Record> users = Db.find(sql);
		if(users!=null&&users.size()>0){
			user = users.get(0);
		}
		return user;
	}
	
}
