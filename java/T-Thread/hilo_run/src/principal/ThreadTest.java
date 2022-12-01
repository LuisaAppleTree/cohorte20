package principal;

import threads.*;

public class ThreadTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Thread1 hilo1 = new Thread1();
		Thread2 hilo2 = new Thread2();
		
		hilo1.start();
		hilo2.start();
		try {
			
			hilo1.join();
			hilo2.join();
			
		} catch (InterruptedException e) {
			
		}
		System.out.println("se han ejecutado los dos thread");

	}

}


