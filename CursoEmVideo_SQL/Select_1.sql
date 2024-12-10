select * from Chegadas
order by DataChegada desc;

select * from Chegadas
order by DataChegada asc;

select DataChegada, CodAViao from Chegadas
order by DataChegada asc, CodAviao;

select * from Chegadas
where CodAviao = 2;

select * from Chegadas
where DataChegada > '2024-01-03';

select  * from Chegadas
where CodAviao between '2' and '4'
order by DataChegada asc, CodAviao;

select * from Avioes;
select * from Avioes
where CodCompanhia in ('1', '2');

select * from companhiasaereas;

select * from avioes
where AltitudeMaxima > '2000.000' and DistanciaMaxima < 50000;

select * from avioes
where AltitudeMaxima > '2000.000' or DistanciaMaxima < 50000;