let courses = [
	{
		id: 1,
		title: "ReactJS Tutorial",
		rating: 4.2,
	},
	{
		id: 2,
		title: "Angular Tutorial",
		rating: 2.5,
	},
	{
		id: 3,
		title: "VueJS Tutorial",
		rating: 3.8,
	},
	{
		id: 4,
		title: "Java Tutorial",
		rating: 4,
	},
	{
		id: 5,
		title: "JavaScript Tutorial",
		rating: 3.5,
	},
];

//yêu cầu 1: Sử dụng cú pháp ES6 để xuất ra màn hình danh sách các bài đăng có rating >= 4
const filterCourse = courses.filter((courses) => courses.rating >= 4);
filterCourse.forEach((courses) => `${courses.rating}`);
console.log(filterCourse);

//yêu cầu 2: Hiện các bài đăng có rating <4
const filterCourse2 = courses.filter((courses) => courses.rating < 4);
filterCourse2.forEach((course) => `${courses.id} - ${courses.title} - ${courses.rating}`);
console.log(filterCourse2);

//yêu cầu 3: Viết hàm trả về một mảng mới gồm 2 mảng courses và addedCourses
let addedCourses = [
	{
		id: 6,
		title: "PHP Tutorial",
		rating: 3,
	},
	{
		id: 7,
		title: "C# Tutorial",
		rating: 2,
	},
	{
		id: 8,
		title: "Docker Tutorial",
		rating: 3.8,
	},
];
const spreadCourse = [...courses, ...addedCourses];
console.log(spreadCourse);
