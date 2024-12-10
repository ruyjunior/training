describe  Chegadas;
INSERT INTO Chegadas (CodChegada, DataChegada, CodAviao) VALUES ('1', '2024-01-02 18:30:05', '1' );
INSERT INTO Chegadas (CodChegada, DataChegada, CodAviao) VALUES ('2', '2024-01-03 14:30:05', '1' );
INSERT INTO Chegadas (CodChegada, DataChegada, CodAviao) VALUES ('3', '2024-01-04 21:30:05', '1' );
INSERT INTO Chegadas (CodChegada, DataChegada, CodAviao) VALUES ('4', '2024-01-05 22:30:05', '1' );
INSERT INTO Chegadas (CodChegada, DataChegada, CodAviao) VALUES ('5', '2024-01-06 03:30:05', '1' );
INSERT INTO Chegadas (CodChegada, DataChegada, CodAviao) VALUES ('6', '2024-01-07 11:30:05', '1' );
INSERT INTO Chegadas (CodChegada, DataChegada, CodAviao) VALUES ('7', '2024-01-02 17:30:05', '2' );
INSERT INTO Chegadas (CodChegada, DataChegada, CodAviao) VALUES ('8', '2024-01-02 18:30:05', '3' );
INSERT INTO Chegadas (CodChegada, DataChegada, CodAviao) VALUES ('9', '2024-01-02 15:30:05', '5' );
INSERT INTO Chegadas (CodChegada, DataChegada, CodAviao) VALUES ('10', '2024-01-02 22:30:05', '4' );

select * from Chegadas
order by DataChegada desc;