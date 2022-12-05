package mcd;

import java.util.Scanner;

public class MCD {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
		//1 pedir los datos y asignarlos a variables
		System.out.println("Introduce el primer número: ");
		int num1 = sc.nextInt();
		
		//1 pedir los datos y asignarlos a variables
		System.out.println("Introduce el segundo número: ");
		int num2 = sc.nextInt();
		
		int res = MCD(num1, num2);
		System.out.println("El MCD " + res);
	}
		
		//Función que nos permita calcular el máximo común divisor a partir de los dos datos guardados
		public static int MCD(int num1, int num2) {
			
			int a = Math.max(num1, num2);
			int b = Math.min(num1, num2);
			
			int resultado = 0;
			do {	
				resultado = b;
				b = a % b;
				a = resultado;
				
			} while (b!=0);
			
			return resultado;
	}
	
}


/*
 * 1.Pedir dos números ( valor a y el valor b).Para eso usamos un scanner
 * 2.Guardar estos datos en variables independientes, con el tipo de dato esperado.
 * 3.Vamos a compararlos para saber cual es el maximo común divisor de ambos números
 */
