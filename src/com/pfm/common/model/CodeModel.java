package com.pfm.common.model;

import java.util.List;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

public class CodeModel {

	public List<Record> get4select(String type){
		String sql = "select [编码编号],[编码解析] from [编码表] where [编码分类] = '" + type + "' order by [显示顺序] asc";
		List<Record> list = Db.find(sql);
		return list;
	}
	
}
