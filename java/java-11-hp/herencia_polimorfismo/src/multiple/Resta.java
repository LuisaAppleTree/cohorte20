package multiple;

public class Resta implements OperacionesAritmetica, Operaciones{
	
	private double c;
	private double d;
	
	public Resta(double c, double d) {
		this.c = c;
		this.d = d;
	}

	@Override
	public double sumar() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public double restar() {
		// TODO Auto-generated method stub
		return c-d;
	}

	@Override
	public void mensaje() {
		// TODO Auto-generated method stub
		System.out.println("Hola yo soy la resta: ");
	}

}

