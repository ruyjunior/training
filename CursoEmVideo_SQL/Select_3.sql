select * from Partidas;

select distinct DataPartida from Partidas
order by DataPartida;

select * from avioes;

select nomeAviao from avioes;

select count(*) from avioes;
select count(*) from companhiasaereas;

select count(*) from avioes 
where CodCompanhia = '2';

select Nomeaviao, AltitudeMaxima, min(AltitudeMaxima) from avioes;
select min(AltitudeMaxima) from avioes;

select max(DistanciaMaxima) from Avioes where CodAviao > 1;

select sum(CodCompanhia) from avioes;

