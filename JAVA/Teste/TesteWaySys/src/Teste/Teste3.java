package Teste;
/*Escreva um método em Java que recebe por parâmetro um ArrayList de inteiros e
imprime “par” se o elemento do índice “i” é divisível por 2, “ímpar” caso não seja e
ainda “negativo” caso o elemento seja menor que zero.*/

import java.util.ArrayList;

//Anotações
/* List.add() - Adiciona iten na lista
 * List.get(i) - Verifica iten na posição
 * List.set(i) - Modifica iten na posição
 * List.remove(i) - Apaga iten na posição
 * List.clear() - Limpa toda a lista
 * List.size() - retorna o tamanho da lista
 * */
class t3 {
	ArrayList<Integer> lista;
	int numero;
	public void indentifique (ArrayList<Integer> lista) {
		this.lista = lista;
		for (int i = 0; i < lista.size(); i++) {
			this.numero = lista.get(i);
			if (numero < 0) {
				System.out.println("Número na posição " + i + " é negativo");
			}else {
				if (numero % 2 == 0) {
					System.out.println("Número na posição " + i + " é par");
				} else {
					System.out.println("Número na posição " + i + " é ímpar");
				}
			}
		}
	}
}
public class Teste3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<Integer> lista = new ArrayList<>();
		lista.add(2);
		lista.add(3);
		lista.add(-1);
		
		t3 teste = new t3();
		teste.indentifique(lista);
	}

}
