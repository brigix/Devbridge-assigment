--DDL
create DATABASE EmployeesDB;
use EmployeesDB;

create TABLE Employees(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR (255) NOT NULL,
email VARCHAR (255) NOT NULL,
phone VARCHAR (255) NOT NULL
)