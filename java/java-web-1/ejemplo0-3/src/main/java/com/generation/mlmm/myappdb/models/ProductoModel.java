package com.generation.mlmm.myappdb.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "producto")
public class ProductoModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Long id;
	private String nombreProducto;
	
	@ManyToOne //muchos productos, un usuario
	private UsuarioModel usuario;
	
	//relación de visibilidad con detalle orden: se relaciona
	//con detalle orden, sin embargo productos no necesita ver
	//detalle de la orden (mientras que detalle orden si necesita
	//ver loa productos.
	
	public ProductoModel() {
		
	}


	public ProductoModel(Long id, String nombreProducto) {
		this.id = id;
		this.nombreProducto = nombreProducto;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNombreProducto() {
		return nombreProducto;
	}


	public void setNombreProducto(String nombreProducto) {
		this.nombreProducto = nombreProducto;
	}


	public UsuarioModel getUsuario() {
		return usuario;
	}


	public void setUsuario(UsuarioModel usuario) {
		this.usuario = usuario;
	}

}
