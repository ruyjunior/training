package Teste;

import java.util.Arrays;

/*Escreva um metodo que recebe dois arrays A e B de inteiros e devolve como resultado
um array C de booleanos, onde o booleano Ci indica se os elementos de Ai e Bi são
iguais. Considere que os arrays A e B podem ter tamanhos diferentes, neste caso, você
deverá ir até o limite do array de menor tamanho.*/

class t2 {
	int A[];
	int B[];
	
	public void calc (int[] a, int[] b) {
		this.A = a;
		this.B = b;
		
		if (A.length < B.length) {
			Boolean[] C1 = new Boolean[A.length];
			for (int i = 0; i < A.length; i++) {
				if (A[i] == b[i]) {
					C1[i] = true;
				}else {
					C1[i] = false;
				}
			}
			for (int i = 0; i < C1.length; i++) {
				System.out.println("Resultado :");
				System.out.println(Arrays.toString(C1));
			}
		}else {
			Boolean[] C2 = new Boolean[B.length];
			for (int i = 0; i < B.length; i++) {
				if (A[i] == b[i]) {
					C2[i] = true;
				}else {
					C2[i] = false;
				}
			}
			
			System.out.println("Resultado :");
			System.out.println(Arrays.toString(C2));
			
		}
		System.out.println("Array A usada :");
		System.out.println(Arrays.toString(A));
		System.out.println("Array B usada :");
		System.out.println(Arrays.toString(B));
		
	}
}

public class Teste2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int a[] = {3, 4, 5, 2, 4, 7};
		int b[] = {0, 4, 1, 2, 1, 7};
		t2 teste = new t2();
		teste.calc(a, b);
	}

}
