-- RUN 'SOURCE seed.sql' to RUN/RERUN file --
-- RUN 'SELECT * FROM [table name]' to run --

USE tracker_db;

-- REMOVE IDs thanks to AUTO_INCREMENT --
INSERT INTO department (name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');

-- REMOVE IDs thanks to AUTO_INCREMENT --
-- EACH corresponding title ALSO has a corresponding numerical value
INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
       ('Salesperson', 80000, 1),
       ('Lead Engineer', 150000, 2),
       ('Software Engineer', 120000, 2),
       ('Account Manager', 160000, 3),
       ('Accountant', 125000, 3),
       ('Legal Team Lead', 250000, 4),
       ('Lawyer', 190000, 4);

-- ^^ WORKS ^^ --

-- REMOVE IDs thanks to AUTO_INCREMENT --
-- Each manager_id (that isn't NULL) links to an employee's id... --
-- ...ex. Luke Skywalker is the manager of Arthur Morgan --
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Arthur', 'Morgan', 1, 6),
       ('Kratos', 'God of War', 2, NULL),
       ('Satoru', 'Gojo', 3, 4),
       ('Son', 'Goku', 4, 7),
       ('Jimbo', 'Edwards', 5, 8),
       ('Luke', 'Skywalker', 6, NULL),
       ('Maki', 'Zenin', 7, NULL),
       ('Big', 'Mom', 8, NULL);


-- note: My work was based off of the assets folder images (changed names to fit my own agenda) --