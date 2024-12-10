select * from avioes;
select avioes.NomeAviao, modelos.Descricao from Avioes join Modelos
on avioes.CodModelo = modelos.CodModelo;