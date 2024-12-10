package Teste;
/*Dado um array de inteiros “nums” e um inteiro “target”, retorne os índices dos
números que somados resultamo no valor do “target”. A solução deve ter apenas 1
resposta exata e o mesmo índice não pode ser usado mais de 1 vez.
 * */
class t6{
	int numeros[];
	int target;
	boolean encontrado;
	
	public void encontrar(int[] numeros, int target ) {
		this.numeros = numeros;
		this.target = target;
		for (int i=0; i < numeros.length; i++) {
			if (encontrado) {
				break;
			}
			for (int j = 0; j < numeros.length; j++) {
				if (numeros[i] + numeros[j] == target && i != j) {
					System.out.println("A soma dos indices " + i + " e " + j + " resultam no alvo :" + target);
					encontrado = true;
					break;
				}
			}
		}
	}
	
}

public class Teste6 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		t6 teste = new t6();
		int numeros[] = {1, 2, 3, 4, 5, 5, 7, 8};
		int target = 7;
		teste.encontrar(numeros, target);
		
	}

}
