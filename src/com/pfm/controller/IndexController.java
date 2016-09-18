package com.pfm.controller;

import com.jfinal.core.Controller;

public class IndexController extends Controller {

	public void index(){
		render("login.html");
	}
	
	public void list(){
		renderJson("{\"name\":\"list\"}");
	}
	
}
