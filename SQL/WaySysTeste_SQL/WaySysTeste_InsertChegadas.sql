describe  Chegadas;
INSERT INTO Chegadas (CodChegada, DataChegada, CodAviao) VALUES ('1', '2024-01-01 00:00:00', '1' );
INSERT INTO Chegadas (CodChegada, DataChegada, CodAviao) VALUES ('2', '2024-01-02 00:00:00', '2' );
INSERT INTO Chegadas (CodChegada, DataChegada, CodAviao) VALUES ('3', '2024-01-03 00:00:00', '3' );
INSERT INTO Chegadas (CodChegada, DataChegada, CodAviao) VALUES ('4', '2024-01-04 00:00:00', '4' );
INSERT INTO Chegadas (CodChegada, DataChegada, CodAviao) VALUES ('5', '2024-01-05 00:00:00', '5' );

select * from Chegadas
order by DataChegada desc;