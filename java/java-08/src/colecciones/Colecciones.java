package colecciones;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.HashMap;

public class Colecciones {

	public static void main(String[] args) {
		//List - Array List
	
		System.out.println("-----Array List------");
		
		List<String> miArray = new ArrayList<String>();
		
		miArray.add("GDL");
		miArray.add("CDMX");
		miArray.add("MTY");
		miArray.add(1, "Manzanillo");
		
		String valorQuitado = miArray.remove(0);
//		boolean valorQuitado = miArray.remove("GDL");
		
		System.out.println(miArray);
		System.out.println(valorQuitado);
		System.out.println(miArray.size());
		
		
		imprimir(miArray);
		
		System.out.println("-----HashSet-----");
		
		Set<String> miSet = new HashSet<String>();
		
		miSet.add("Panchito");
		miSet.add("Paco");
		miSet.add("Juan");
		miSet.add("Juan");
		miSet.add("Martín");
		
		System.out.println(miSet);
		miSet.remove("Martín");
		imprimir(miSet);
		
		System.out.println(miSet.contains("Martín"));;
		
		
		System.out.println("------HashMap-------");
		Map<String, Integer> miMap = new HashMap<String, Integer>();
		
		miMap.put("valor1", 56);
		miMap.put("valor2", 5);
		miMap.put("valor3", 56);
		
		System.out.println(miMap);
		System.out.println(miMap.get("valor2"));
		System.out.println(miMap.keySet());
		
		for(String llave : miMap.keySet()) {
			System.out.println(llave + " : " + miMap.get(llave));
		}
	}
	
	public static void imprimir(Collection coleccion) {
		for(Object elemento : coleccion ) {
			System.out.println("Elemento = " + elemento);
		}
	}


}

