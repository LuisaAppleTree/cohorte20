package polimorfismo;

public abstract class FigurasGeometricas {
	
	protected double pValor;
	protected double sValor;
	protected double resultado;

	public abstract void pedirDatos();

	public abstract void area();
	
	public void visualizar() {
		System.out.println("El resultado es :" + resultado);
	}
}

//Scanner s;

//{
//s = new Scanner (System.in);
//System.out.println("Introduzca el primer valor: ");
//pValor = s.nextDouble();
//System.out.println("Introduzca el segundo valor: ");
//sValor = s.nextDouble();
//}

