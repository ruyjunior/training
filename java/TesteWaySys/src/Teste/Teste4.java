package Teste;

import java.util.ArrayList;

/*Escreva um método em Java que recebe por parâmetro um número usando a forma
numeral romana e o converte para a forma numeral decimal. Considere a numeração
romana até o limite de 3999.*/
/*Anotações:
 * Númreros Romanos: I=1, V=5, X=10, L=50, C=100, D=500, M=1000 
 * 3999 = MMMCMXCIX*
 * 3333 = MMMCCCXXXIII*/

class t4 {
	String romanos = "IVXLCDM";
	int	valorRomano[]	= {1, 5, 10, 50, 100, 500, 1000};
	char entrada[];
	int soma = 0;
	ArrayList<Integer> valorEntrada = new ArrayList<>();
	public void convert (String entrada) {
		this.entrada = entrada.toCharArray();
		//System.out.println(this.entrada);
		for (int i = 0; i < this.entrada.length; i++) {
			char letra = this.entrada[i];
			//System.out.println(letra);
			int index = romanos.indexOf(letra);
			//System.out.println(index);
			valorEntrada.add(valorRomano[index]);
		}
		for (int i = valorEntrada.size() - 1 ; i > -1; i--){
			if (i > 0) {
				if (valorEntrada.get(i) > valorEntrada.get(i - 1)) {
					soma = soma + (valorEntrada.get(i) - valorEntrada.get(i-1));
					i--; // Salta mais um indice para ignorar o que já foi somado
				}else {
					soma = soma + (valorEntrada.get(i));
				}
			}else {
				if (valorEntrada.get(i) >= valorEntrada.get(i + 1)) {
					soma = soma + (valorEntrada.get(i));
				}
			}
		}
		System.out.println(soma);
	}
}

public class Teste4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		t4 teste = new t4();
		teste.convert("MMMCCCXXXIII");
	}

}