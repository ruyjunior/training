select * from Chegadas
order by DataChegada desc;

select * from Chegadas
order by DataChegada asc;

select DataChegada, CodAViao from Chegadas
order by DataChegada asc, CodAviao;

select * from Chegadas
where CodAviao = 2;