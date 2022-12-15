package com.generation.mlmm.myappdb.models;

import java.util.ArrayList;

import jakarta.persistence.*;

@Entity
@Table(name = "usuario")
public class UsuarioModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Long id;
	private String nombre;
	private String email;
	private Integer prioridad;
	
	@OneToMany (mappedBy = "usuario") //un usuario, muchos productos
	private ArrayList<ProductoModel> productos;
	@OneToMany (mappedBy = "usuario") //un usuario, muchas ordenes
	private ArrayList<OrdenModel> ordenes;
	
	public UsuarioModel() {

	}

	public UsuarioModel(Long id, String nombre, String email, Integer prioridad) {
		this.id = id;
		this.nombre = nombre;
		this.email = email;
		this.prioridad = prioridad;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getPrioridad() {
		return prioridad;
	}

	public void setPrioridad(Integer prioridad) {
		this.prioridad = prioridad;
	}

	public ArrayList<ProductoModel> getProductos() {
		return productos;
	}

	public void setProductos(ArrayList<ProductoModel> productos) {
		this.productos = productos;
	}

	public ArrayList<OrdenModel> getOrdenes() {
		return ordenes;
	}

	public void setOrdenes(ArrayList<OrdenModel> ordenes) {
		this.ordenes = ordenes;
	}

}
