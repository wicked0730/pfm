package com.pfm.common.model;


import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.Record;

public class PeopleModel {

	public Page<Record> getList(Integer page, Integer pageSize, String where, String order){
		String sql = "from [档案基本状况表] where 1 = 1 ";
		page = page == null ? 1 : page;
		pageSize = pageSize == null ? 10 : pageSize;
		if(where != null){
			sql += where;
		}
		if(order != null){
			sql += order;
		}
		Page<Record> peoples = Db.paginate(page, pageSize, "select * ", sql);
		return peoples;
	}
	
}
