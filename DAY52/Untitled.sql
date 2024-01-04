--Them cot description
ALTER TABLE courses 
ADD COLUMN description text
--Đổi tên trường detail thành content và ràng buộc chuyển thành NOT NULL
ALTER TABLE courses
RENAME COLUMN detail TO content
ALTER TABLE courses
ALTER COLUMN content SET NOT NULL
--Tạo bảng teacher
--Thêm 3 giảng viên vào bảng teacher, mỗi giảng viên thêm 3 khóa học
insert into teachers(name,created_at, updated_at) 
values
('Giang vien 1', NOW(), NOW()),
('Giang vien 2', NOW(), NOW()),
('Giang vien 3', NOW(), NOW())
insert into courses(name, price, content, teacher_id, active) 
values
('Khoa hoc 1',1000,'chi tiet 1',1,1),
('Khoa hoc 2',2000,'chi tiet 2',1,1),
('Khoa hoc 3',3000,'chi tiet 3',1,1),
('Khoa hoc 4',4000,'chi tiet 4',2,1),
('Khoa hoc 5',5000,'chi tiet 5',2,1),
('Khoa hoc 6',6000,'chi tiet 6',2,1),
('Khoa hoc 7',7000,'chi tiet 7',3,1),
('Khoa hoc 8',8000,'chi tiet 8',3,1),
('Khoa hoc 9',9000,'chi tiet 9',3,1)
-- 5.Sửa tên và giá từng khóa học thành tên mới và giá mới (Tên khóa học, giá khóa học các khóa học không được giống nhau)
UPDATE courses 
SET 
	name = 'khoa hoc 1 new', price= 100 * id, updated_at = NOW()
WHERE 
	id = 1;
UPDATE courses 
SET 
	name = 'khoa hoc 2 new', price= 100 * id, updated_at = NOW()
WHERE 
	id = 2;
	UPDATE courses 
SET 
	name = 'khoa hoc 3 new', price= 100 * id, updated_at = NOW()
WHERE 
	id = 3;
	UPDATE courses 
SET 
	name = 'khoa hoc 4 new', price= 100 * id, updated_at = NOW()
WHERE 
	id = 4;
	UPDATE courses 
SET 
	name = 'khoa hoc 5 new', price= 100 * id, updated_at = NOW()
WHERE 
	id = 5;
	UPDATE courses 
SET 
	name = 'khoa hoc 6 new', price= 100 * id, updated_at = NOW()
WHERE 
	id = 6;
	UPDATE courses 
SET 
	name = 'khoa hoc 7 new', price= 100 * id, updated_at = NOW()
WHERE 
	id = 7;
	UPDATE courses 
SET 
	name = 'khoa hoc 8 new', price= 100 * id, updated_at = NOW()
WHERE 
	id = 8;
	UPDATE courses 
SET 
	name = 'khoa hoc 9 new', price= 100 * id, updated_at = NOW()
WHERE 
	id = 9;

UPDATE teachers
SET bio = 'bio 1', updated_at = NOW()
WHERE id =1;
UPDATE teachers
SET bio = 'bio 2', updated_at = NOW()
WHERE id =2;
UPDATE teachers
SET bio = 'bio 3', updated_at = NOW()
WHERE id =3;

SELECT teachers.*, courses.name 
FROM teachers
INNER JOIN courses ON teachers.id = courses.teacher_id