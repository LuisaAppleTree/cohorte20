package polimorfismo;

import java.util.Scanner;

public class Rectangulo extends FigurasGeometricas {
	
	Scanner s = new Scanner(System.in);
	private double baseRec;
	private double alturaRec;
	
	@Override
	public void pedirDatos() {
		// TODO Auto-generated method stub
		System.out.println("Area del Rectangulo: ");
		System.out.println("Introduzca la base del rectangulo: ");
		baseRec = s.nextDouble();
		System.out.print("Introduzca la altura del rectangulo: ");
		alturaRec = s.nextDouble();
	}
	@Override
	public void area() {
		// TODO Auto-generated method stub
		resultado = baseRec * alturaRec;
	}
	

}


