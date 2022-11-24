package operadores;

import java.util.Scanner;

public class Operadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		Scanner scanner = new Scanner (System.in);
//		System.out.println("-----Da un dato: -----" );
//		String dato = scanner.nextLine();
//		System.out.println("El dato es: " + dato);
		
		System.out.println("Introduce el primer valor" );
		int valor1 = scanner.nextInt();
		
		System.out.println("Introduce el valor 2" );
		int valor2 = scanner.nextInt();
		
		//suma
		System.out.println("-----suma------");
		int suma = valor1 + valor2;
		System.out.println("Suma: " + suma);
		
		//resta
		System.out.println("-----resta------");
		int resta = valor1 - valor2;
		System.out.println("Resta: " + resta);
				
		//Multiplicacion
		System.out.println("-----multiplicacion------");
		int multiplicacion = valor1 * valor2;
		System.out.println("Multiplicacion: " + multiplicacion);
		
		//Division
		System.out.println("-----division------");
		int division = valor1 / valor2;
		System.out.println("Division: " + division);
		
		//Modulo
		System.out.println("-----Modulo------");
		int modulo = valor1 % valor2;
		System.out.println("Modulo: " + modulo);
		
		
		int numero = 1;
		String msj = "  ";
		switch(numero) {
		case 1:
			System.out.println("uno");
			break;
		case 2:
			System.out.println("dos");
			break;
		case 3: 
			System.out.println("tres");
			break;
		case 4: 
			System.out.println("tres");
			break;
		case 5: 
			System.out.println("tres");
			break;
		default: 
			break;
		
		}
	}

}
