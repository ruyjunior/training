create table CompanhiasAereas (
CodCompanhia numeric(5, 0) primary key,
Nome varchar(50)
);
create table Modelos (
CodModelo numeric(5, 0) primary key,
Descricao varchar(50)
);
create table Avioes (
CodAviao numeric(5, 0) primary key,
NomeAviao varchar(30),
AltitudeMaxima numeric(10, 3),
DistanciaMaxima numeric(10, 3),
CodModelo numeric(5) references Modelos (CodModelo),
CodCompanhia numeric(5) references CompanhiasAereas (CodCompanhia)
);
create table Partidas (
CodPartida numeric(5, 0) primary key,
DataPartida datetime,
CodAviao numeric(5) references Avioes (CodAviao)
);
create table Chegadas (
CodChegada numeric(5, 0) primary key,
DataChegada datetime,
CodAviao numeric(5) references Avioes (CodAviao)
);
describe avioes;