create database sqlpracties;
USE sqlpracties;
CREATE  TABLE students (
id int primary key ,
stuentname varchar(200),
marks int(50),
grade varchar(100),
city varchar(200)
);

id,name ,marks ,grade ,city

SELECT * FROM sqlpracties.students;

insert into students values
(1,'anuraag',76,'B','navi mumbai'),
(2,'sahil',46,'B','mumbai'),
(3,'pragati',86,'B','pune'),
(4,'gavrav',67,'B','delhi'),
(5,'prapti',58,'A','jaipur');

select count(marks) from sqlpracties.students;
 
set  sql_safe_updates = 0;
  use  sqlpracties.students ;
 
update students 
set marks =59
where marks= 58;

update students 
set grade = 'B+'
where grade ='C';
SELECT * FROM sqlpracties.students;

SELECT * FROM sqlpracties.students;

update students
set city ='mumbai'
where id=4;
use sqlpracties;
update students
set grade = "C"
where marks between 50 and 60;

create  table dept (
id int primary key ,
name varchar(50)
);
create table teacher(
id int primary key ,
teachername varchar(100),
dept_id int,
foreign key (dept_id) references dept(id)

);

