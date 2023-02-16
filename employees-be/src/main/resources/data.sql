create TABLE Employees(
id INT PRIMARY KEY,
name VARCHAR (255),
email VARCHAR (255) NOT NULL,
phone VARCHAR (255)
)

INSERT INTO EMPLOYEES (NAME, EMAIL, PHONE) VALUES ('Petras petraitis', 'petras@mail.com', '8645123456');
INSERT INTO EMPLOYEES (NAME, EMAIL, PHONE) VALUES ('Jonas Jonaitis', 'jonas@mail.com', '86451987654');