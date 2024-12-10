package Teste;

/* Escreva um método em Java que recebe por parâmetro uma matriz quadrada m por n
	na forma de array [] [], onde m = 10. Este método deve ainda calcular o somatório dos
	elementos da diagonal principal e da diagonal secundária e imprimir no console
	“principal” caso o somatório dos elementos desta diagonal seja maior que o somatório
	dos elementos da secundária, “secundária” caso o somatório dos elementos desta
	diagonal seja maior que o somatório dos elementos da principal e “igual” caso os dois
	somatórios seja o mesmo.*/

class t1{
	int matriz[][];
	int m = 10;
	int n = 10;
	int somaPrinc;
	int somaSec;
	String res;
	public void calc(int[][] matriz) {
		this.matriz = matriz;				// Salva o valor para a matriz interna
		for (int i = 0; i < 10; i++) {    // A matriz pode ser de qulaquer tamanho, a lógica para no 10
			somaPrinc = somaPrinc + matriz[i][i];
		}
		System.out.println("Soma Principal: " + somaPrinc);
		for(int i = 0; i < 10; i++) {			// normalmente usa-se o tamanho da matriz, mas o teste pede para travar em 10
			for (int j = 0; j < 10; j++) {
				if ((i+j) == 9){ 			// Elementos conde i+j = n-1 onde n é o tamanho da matriz (10)
					somaSec = somaSec + matriz[i][j];
				}
			}
		}
		System.out.println("Soma Secundária: " + somaSec);
		if (somaPrinc > somaSec) {
			System.out.println("Principal");
		}
		if (somaSec > somaPrinc) {
			System.out.println("Secundária");
		}
		if (somaSec == somaPrinc) {
			System.out.println("Igual");
		}
	}
}

public class Teste1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		t1 teste = new t1();
		int [][] matrizTeste = {
				{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9},
				{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9},
				{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9},
				{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9},
				{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9},
				{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9},
				{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9},
				{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9},
				{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9},
				{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
		};
		teste.calc(matrizTeste);
	}

}
