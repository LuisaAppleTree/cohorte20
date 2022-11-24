package variables;

public class TipoVariables {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//byte
		byte numeroB = 127;
		System.out.println("--------byte---------");
		System.out.println("tamaño de un byte " + Byte.SIZE);
		System.out.println("valor máximo " + Byte.MAX_VALUE);
		System.out.println("valor mínimo " + Byte.MIN_VALUE);
		
		//int
		int entero = 5;
		System.out.println("--------int---------");
		System.out.println("tamaño de un entero " + Integer.BYTES);
		System.out.println("tamaño " + Integer.SIZE);
		System.out.println("valor max " + Integer.MAX_VALUE);
		System.out.println("valor min" + Integer.MIN_VALUE);
		
		var sistemaNum = 0xA;
		System.out.println("---> " + sistemaNum);
		
		
		
	}

}
