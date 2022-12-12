package com.generation.mlmm.app;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Saludos {
	
//	@RequestMapping("/")
//	public void saludar() {
//		System.out.println("Hola mundo desde spring");
//	}
	
	@RequestMapping("/")
	public String saludos() {
		return "Hola Mundo desde Spring";
	}


}