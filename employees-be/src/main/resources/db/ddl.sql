--DDL
create DATABASE EmployeesDB;
use EmployeesDB;

create TABLE Employees(
id INT PRIMARY KEY,
name VARCHAR (255),
email VARCHAR (255) NOT NULL,
phone VARCHAR (255)
)