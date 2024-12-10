package Teste;
/*Escreva um método em Java que recebe por parâmetro um array de inteiros e verifica
se existe algum valor duplicado (repetido - qualquer valor). Caso exista, retorna true,
caso contrário, retorna false. O retorno deve ocorrer assim que o primeiro caso seja
encontrado.*/

class t5 {
	int numeros[];
	boolean encontrado = false;
	
	public boolean duplicado (int[] n) {
		this.numeros = n;
		boolean encontrado = false;
		
		System.out.println("Procurando...");
		
		for( int i = 0; i < numeros.length; i++) {
			if (encontrado) {
				break;
			}
			for(int j = 0 ; j < numeros.length; j++) {

				if ((numeros[i] == numeros[j]) && i != j) {
					encontrado = true;
					System.out.println("Duplicado nos indices: " + i + " e " + j);
				}
			}
		}
	return encontrado;
	}
}


public class Teste5 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		t5 teste = new t5();
		int entrada[] = {1, 1, 3, 4, 5, 6, 7, 8};
		boolean result = teste.duplicado(entrada);
		System.out.print(result);
	}
}
