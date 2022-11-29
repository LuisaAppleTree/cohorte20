package multiple;

public class TestMultiple {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Suma suma = new Suma(5,5);
		OperacionesAritmetica oa = new Suma(10,5);
		Operaciones o = new Suma(3,2);
		
		Resta resta = new Resta(10,5);
		OperacionesAritmetica oar = new Resta(8,3);
		Operaciones or = new Resta(7,2);
		
		o.mensaje();
		System.out.println("Obj oa: " + oa.sumar());
		System.out.println("La suma es: " + suma.sumar());
		suma.mensaje();
		
		or.mensaje();
		System.out.println("Obj oar: " + oar.restar());
		System.out.println("La resta es: " + resta.restar());
		resta.mensaje();
	}

}
