/*teste 1
Realize uma consulta para mostrar o número de aviões que cada
companhia aérea possui, por descrição do modelo. Apresente o
resultado da seguinte forma: 
Total de aviões, a descrição do modelo e o nome da companhia aérea.
*/
select * from Avioes;

select count(modelos.Descricao), modelos.Descricao,  companhiasaereas.Nome from Avioes left join companhiasaereas
on companhiasaereas.CodCompanhia = avioes.CodCompanhia
join modelos
on modelos.CodModelo = avioes.CodModelo
group by modelos.Descricao, companhiasaereas.Nome;

/* Teste 2
Realize uma consulta para mostrar o avião com maior altitude de voo. 
Apresente o resultado:
Nome da companhia, o nome do avião e a altitude máxima. */

select companhiasaereas.nome, avioes.nomeaviao, avioes.altitudemaxima from Avioes join companhiasaereas
on companhiasaereas.CodCompanhia = avioes.CodCompanhia
group by companhiasaereas.nome, avioes.CodAviao
order  by avioes.AltitudeMaxima desc;

/* Teste 3
Realize uma consulta para mostrar:
Descrição do avião, o nome do avião, seu código e se ele ainda está em voo. */

select modelos.Descricao, avioes.NomeAviao, avioes.CodAviao, 
		( NOW() < chegadas.DataChegada and NOW() > partidas.DataPartida) as EmVoo from avioes 
join modelos
on avioes.CodModelo = Modelos.CodModelo
join chegadas
on chegadas.CodAviao = avioes.CodAviao
join partidas
on partidas.CodAviao = avioes.CodAviao
group by avioes.CodAviao, chegadas.DataChegada, partidas.DataPartida;
