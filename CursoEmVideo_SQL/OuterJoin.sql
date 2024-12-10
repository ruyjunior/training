select * from avioes;
select a.NomeAviao, m.Descricao from Avioes as a left outer join Modelos as m
on a.CodModelo = m.CodModelo;