package com.generation.mlmm.myappdb.models;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table (name="orden")
public class OrdenModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Long id;
	private String nombreOrden;
	
	@ManyToOne //muchas ordenes a un usuario
	private UsuarioModel usuario;
	@OneToOne (mappedBy = "orden")  //una orden, un detalle de orden
	private DetalleOrdenModel detalle;
	
	public OrdenModel() {
	}

	public OrdenModel(Long id, String nombreOrden) {
		this.id = id;
		this.nombreOrden = nombreOrden;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombreOrden() {
		return nombreOrden;
	}

	public void setNombreOrden(String nombreOrden) {
		this.nombreOrden = nombreOrden;
	}

	public UsuarioModel getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioModel usuario) {
		this.usuario = usuario;
	}

	public DetalleOrdenModel getDetalle() {
		return detalle;
	}

	public void setDetalle(DetalleOrdenModel detalle) {
		this.detalle = detalle;
	}

}
