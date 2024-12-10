select * from avioes;
select a.NomeAviao, m.Descricao from Avioes as a inner join Modelos as m
on a.CodModelo = m.CodModelo;