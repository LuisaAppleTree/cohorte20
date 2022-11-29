package ejecutar_abs;

import polimorfismo.FigurasGeometricas;
import polimorfismo.Triangulo;
import polimorfismo.Cuadrado;
import polimorfismo.Circulo;
import polimorfismo.Rectangulo;

public class EjecutarAbs {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		FigurasGeometricas t = new Triangulo();
		FigurasGeometricas c = new Cuadrado();
		FigurasGeometricas cir = new Circulo();
		FigurasGeometricas rec = new Rectangulo();
		
		t.pedirDatos();
		t.area();
		t.visualizar();
		
		c.pedirDatos();
		c.area();
		c.visualizar();
		
		cir.pedirDatos();
		cir.area();
		cir.visualizar();
		
		rec.pedirDatos();
		rec.area();
		rec.visualizar();
		
	}
	
}

