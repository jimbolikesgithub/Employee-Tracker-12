-- RUN 'SOURCE seed.sql' to RUN/RERUN file --
-- RUN 'SHOW TABLES' to see ALL tables --

DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;


-- DEPARTMENT TABLE --
CREATE TABLE department (
-- id --
  id INT NOT NULL AUTO_INCREMENT,
-- name --
  name VARCHAR(30), 
-- department id --
  PRIMARY KEY (id)
);


-- ROLE TABLE --
CREATE TABLE role (
-- NOT NULL (MUST CONTAIN A VALUE) --
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
-- role id --
  PRIMARY KEY (id),
-- 'department_id' REFERENCES the value of... --
  FOREIGN KEY (department_id)
-- ...department id --
  REFERENCES department(id)
  ON DELETE SET NULL
);


-- EMPLOYEE TABLE --
CREATE TABLE employee (
-- REMOVE NOT NULL (id must be NULLABLE for manager_id)
  id INT AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id),
-- 'role_id' REFERENCES the value of... --
  FOREIGN KEY (role_id)
-- ...role id --
  REFERENCES role(id)
-- ON DELETE CASCADE Specifies whether you want rows deleted in a child table... --
-- ...WHEN corresponding rows are deleted in the parent table --
  ON DELETE CASCADE,
-- 'manager_id' REFERENCES the value of... --
  FOREIGN KEY (manager_id)
-- '...employee id --
  REFERENCES employee(id)
  ON DELETE SET NULL
);

-- ^^ WORKS ^^ -- 

-- SOURCE FOR AUTO INCREMENT (FIXED): https://stackoverflow.com/questions/14628269/error-code-1062-duplicate-entry-1-for-key-primary
-- note: Was having issues with implementing the IDs into 'seed.sql', and found this gem ^
-- SOURCE FOR ON DELETE CASCADE (FIXED): https://www.ibm.com/docs/en/informix-servers/14.10?topic=clause-using-delete-cascade-option
-- SOURCE FOR ERROR 1452 (NOT FIXED): https://stackoverflow.com/questions/14063652/integrity-constraint-violation-1452-cannot-add-or-update-a-child-row