package colecciones;

import java.util.Arrays;

public class Arreglos {

	public static void main(String[] args) {
		//Arrays- Arreglos -Matrices
		
		String [] miArreglo = new String[5];
		
		miArreglo[0] = "Raul";
		miArreglo[1] = "Felipe";
		miArreglo[2] = "Alonso";
		miArreglo[3] = "Fernanda";
		miArreglo[4] = "Victor";
		
		System.out.println(miArreglo[0]);
		
		//for
		
		for(int i=0; i<miArreglo.length; i++) {
			System.out.println("ciclo for: " + miArreglo[i]);
		}
		System.out.println("------------");
		
		//for each
		for(String nombre : miArreglo) {
			System.out.println("For Each: " + nombre);
		}
		
		//Math.pow (2, 2);
		//Arrays
		
		System.out.println(Arrays.toString(miArreglo));
		
		//Tipos de valores
		int numeros [] = new int[5];
		
		numeros[0] = 3;
		numeros[1] = -20;
		numeros[2] = (int) 3.5; //casteo == cambiar el tipo de valor
		numeros[3] = Integer.parseInt("2");//parseo == cambiar la clase del valor
		
		for(int numero : numeros) {
			System.out.println("Valores del arreglo números: " + numero);
		}
		
		//Arreglos de objetos
		
		Persona persona1 = new Persona("Pancho", 30);
		Persona persona2 = new Persona("Paty", 58);
		
		//
		Persona [] arrPersona = new Persona[3];
		
		arrPersona[0] = persona1;
		arrPersona[1] = persona2;
		arrPersona[2] = new Persona("Luis", 18);
		
		System.out.println(arrPersona[0].nombre);
		System.out.println(arrPersona[1].nombre);
		System.out.println(arrPersona[2].nombre);
		
		for(Persona persona : arrPersona) {
			System.out.println("Nombre: " + persona.nombre + " edad: " + persona.edad);
		}
		
		//Arreglos literales
		String[] arrString = {"Manzana", "Pera", "12", "Hola"};
		System.out.println(Arrays.toString(arrString));
		
	}
}
