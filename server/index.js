const express = require("express"); //using package - express.
const app = express();
const port = 8080 //port for server.
const cors = require("cors");  //using package - cors.
const JSONdb = require('simple-json-db'); //using data_base json.
const DB = new JSONdb("DB.json"); //define new DB.

app.use(cors());
app.use(express.static('client'))
app.use(express.json())

//Login Queries:

app.post('/get_user/', (req, res) => {
    const { user_logged_in } = req.body
    if (!user_logged_in)
        return res.status(400).send({ status: 'failed' })
    res.status(200).send({ status: 'recieved' })
})

app.get('/db_request', (req, res) => {
    const arrUsers = DB.get("user")
    res.json(arrUsers) //send the array as a json file to client.
})

//Lecturer Queries:

app.get('/db_request_for_grades1/', (req, res) => {
    const course = req.query.a
    const arrCourses = DB.get(course)
    const retArr = []

    for (i = 0; i < arrCourses.length; i++) {
        if (arrCourses[i].hw1_grade[1] != "") //preset only student that submit there solution (by default: hw1.grade[0]!="")
            retArr.push(arrCourses[i])

    }
    res.json(retArr) //send the array as a json file to client.
})

app.get('/db_request_for_grades2/', (req, res) => {
    const course = req.query.a
    const arrCourses = DB.get(course)
    const retArr = []

    for (i = 0; i < arrCourses.length; i++) {
        if (arrCourses[i].hw2_grade[1] != "") //preset only student thatsubmit there solution (by default: hw1.grade[0]!="")
            retArr.push(arrCourses[i])

    }
    res.json(retArr) //send the array as a json file to client.
})

app.get('/db_request_for_grades3/', (req, res) => {
    const course = req.query.a
    const arrCourses = DB.get(course)
    const retArr = []

    for (i = 0; i < arrCourses.length; i++) {
        if (arrCourses[i].hw3_grade[1] != "") //preset only student that submit there solution (by default: hw1.grade[0]!="")
            retArr.push(arrCourses[i])

    }
    res.json(retArr) //send the array as a json file to client.
})

app.get('/db_request_for_grades4/', (req, res) => {
    const course = req.query.a
    const arrCourses = DB.get(course)
    const retArr = []

    for (i = 0; i < arrCourses.length; i++) {
        if (arrCourses[i].hw4_grade[1] != "") //preset only student that submit there solution (by default: hw1.grade[0]!="")
            retArr.push(arrCourses[i])

    }
    res.json(retArr) //send the array as a json file to client.
})

app.get('/db_request_for_final_grades/', (req, res) => {
    const course = req.query.a
    const arrCourses = DB.get(course)
    res.json(arrCourses) //send the array as a json file to client.
})

app.get('/db_request_for_h1_4/', (req, res) => {
    const course = req.query.a
    const arrCourses = DB.get(course)
    const retArr = []
    res.json(arrCourses[0]) //send the array as a json file to client.
})

app.post('/db_add_new_hw1/', (req, res) => {

    const { new_ex1 } = req.body //extract parameters.
    const { course } = req.body //extract parameters.
    const { date } = req.body
    let feedback = "Homework 1 has been added succesfuly"
    let tamplateDate = date[2] + '/' + date[1] + '/' + date[0]

    if (!new_ex1) { //if not exist
        feedback = "Bad input"
        return res.status(400).send({ status: 'failed', feedback: feedback })
    }
    const arrCourses = DB.get(course) //get data from db.
    for (i = 0; i < arrCourses.length; i++) {
        arrCourses[i].hw1_grade[0] = new_ex1
        arrCourses[i].hw1_grade[3] = tamplateDate //submission date
    }

    DB.set(course, arrCourses) //set the new array on db
    res.status(200).send({ status: 'recieved', feedback: feedback })

})

app.post('/db_add_new_Hw2/', (req, res) => {

    const { new_ex2 } = req.body //extract parameters.
    const { course } = req.body //extract parameters.
    const { date } = req.body
    let feedback = "Homework 2 has been added succesfuly"

    let tamplateDate = date[2] + '/' + date[1] + '/' + date[0]

    if (!new_ex2) { //if not exist
        feedback = "Bad input"
        return res.status(400).send({ status: 'failed', feedback: feedback })
    }
    const arrCourses = DB.get(course) //get data from db.
    for (i = 0; i < arrCourses.length; i++) {
        arrCourses[i].hw2_grade[0] = new_ex2
        arrCourses[i].hw2_grade[3] = tamplateDate//submission date
    }

    DB.set(course, arrCourses) //set the new array on db.
    res.status(200).send({ status: 'recieved', feedback: feedback })
})

app.post('/db_add_new_Hw3/', (req, res) => {
    
    const { new_ex3 } = req.body //extract parameters.
    const { course } = req.body //extract parameters.
    const { date } = req.body
    let feedback = "Homework 3 has been added succesfuly"
    let tamplateDate = date[2] + '/' + date[1] + '/' + date[0]

    if (!new_ex3) { //if not exist
        feedback = "Bad input"
        return res.status(400).send({ status: 'failed', feedback: feedback })
    }
    const arrCourses = DB.get(course) //get data from db.
    for (i = 0; i < arrCourses.length; i++) {
        arrCourses[i].hw3_grade[0] = new_ex3
        arrCourses[i].hw3_grade[3] = tamplateDate//submission date
    }

    DB.set(course, arrCourses) //set the new array on db.
    res.status(200).send({ status: 'recieved', feedback: feedback })

})

app.post('/db_add_new_Hw4/', (req, res) => {

    const { new_ex4 } = req.body //extract parameters.
    const { course } = req.body //extract parameters.
    const { date } = req.body

    let feedback = "Homework 4 has been added succesfuly"
    let tamplateDate = date[2] + '/' + date[1] + '/' + date[0]

    if (!new_ex4) { //if not exist
        feedback = "Bad input"
        return res.status(400).send({ status: 'failed', feedback: feedback })
    }
    const arrCourses = DB.get(course) //get data from db.
    for (i = 0; i < arrCourses.length; i++) {
        arrCourses[i].hw4_grade[0] = new_ex4
        arrCourses[i].hw4_grade[3] = tamplateDate//submission date
    }

    DB.set(course, arrCourses) //set the new array on db.
    res.status(200).send({ status: 'recieved', feedback: feedback })

})

app.post('/db_add_new_grade_ex1/', (req, res) => {

    const { new_grades_ex1 } = req.body //extract parameters.
    const { course } = req.body //extract parameters.
    let feedback = "Grades for Homework 1 has been added succesfuly ✅"
    if (new_grades_ex1.length == 0) { //if not exist
        feedback = "Bad input ❌"
        return res.status(400).send({ status: 'failed', feedback: feedback })
    }

    const arrCourses = DB.get(course) //get data from db.

    for (j = 0; j < new_grades_ex1.length; j++) {
        for (i = 0; i < arrCourses.length; i++) {
            if (arrCourses[i].user_id == new_grades_ex1[j].user_id) {
                arrCourses[i].hw1_grade[2] = (parseInt(new_grades_ex1[j].grade1, 10))
            }
        }
    }

    DB.set(course, arrCourses) //set the new array on db.
    res.status(200).send({ status: 'recieved', feedback: feedback })

})

app.post('/db_add_new_grade_ex2/', (req, res) => {

    const { new_grades_ex2 } = req.body //extract parameters.
    const { course } = req.body //extract parameters.
    let feedback = "Grades for Homework 2 has been added succesfuly ✅"

    if (new_grades_ex2.length == 0) { //if not exist
        feedback = "Bad input ❌"
        return res.status(400).send({ status: 'failed', feedback: feedback })
    }
    const arrCourses = DB.get(course) //get data from db.

    for (j = 0; j < new_grades_ex2.length; j++) {
        for (i = 0; i < arrCourses.length; i++) {
            if (arrCourses[i].user_id == new_grades_ex2[j].user_id)
                arrCourses[i].hw2_grade[2] = (parseInt(new_grades_ex2[j].grade2, 10))
        }
    }
    DB.set(course, arrCourses) //set the new array on db.
    res.status(200).send({ status: 'recieved', feedback: feedback })
})


app.post('/db_add_new_grade_ex3/', (req, res) => {

    const { new_grades_ex3 } = req.body //extract parameters.
    const { course } = req.body //extract parameters.
    let feedback = "Grades for Homework 3 has been added succesfuly ✅"
    if (new_grades_ex3.length == 0) { //if not exist
        feedback = "Bad input ❌"
        return res.status(400).send({ status: 'failed', feedback: feedback })
    }
    const arrCourses = DB.get(course) //get data from db.

    for (j = 0; j < new_grades_ex3.length; j++) {
        for (i = 0; i < arrCourses.length; i++) {
            if (arrCourses[i].user_id == new_grades_ex3[j].user_id)
                arrCourses[i].hw3_grade[2] = (parseInt(new_grades_ex3[j].grade3, 10))
        }
    }
    DB.set(course, arrCourses) //set the new array on db.
    res.status(200).send({ status: 'recieved', feedback: feedback })
})

app.post('/db_add_new_grade_ex4/', (req, res) => {

    const { new_grades_ex4 } = req.body //extract parameters.
    const { course } = req.body //extract parameters.
    let feedback = "Grades for Homework 4 has been added succesfuly ✅"
    if (new_grades_ex4.length == 0) { //if not exist
        feedback = "Bad input ❌"
        return res.status(400).send({ status: 'failed', feedback: feedback })
    }
    const arrCourses = DB.get(course) //get data from db.

    for (j = 0; j < new_grades_ex4.length; j++) {
        for (i = 0; i < arrCourses.length; i++) {
            if (arrCourses[i].user_id == new_grades_ex4[j].user_id)
                arrCourses[i].hw4_grade[2] = (parseInt(new_grades_ex4[j].grade4, 10))
        }
    }
    DB.set(course, arrCourses) //set the new array on db.
    res.status(200).send({ status: 'recieved', feedback: feedback })
})

app.post('/db_add_new_final_grade/', (req, res) => {

    const { new_final_grades } = req.body //extract parameters.
    const { course } = req.body //extract parameters.
    let feedback = "Final grades has been added succesfuly ✅"
    if (new_final_grades.length == 0) { //if not exist
        feedback = "Bad input ❌"
        return res.status(400).send({ status: 'failed', feedback: feedback })
    }
    const arrCourses = DB.get(course) //get data from db.

    for (j = 0; j < new_final_grades.length; j++) {
        for (i = 0; i < arrCourses.length; i++) {
            if (arrCourses[i].user_id == new_final_grades[j].user_id)
                arrCourses[i].final_exam_grade = (parseInt(new_final_grades[j].final_grade, 10))
        }
    }
    DB.set(course, arrCourses) //set the new array on db.
    res.status(200).send({ status: 'recieved', feedback: feedback })
})

//Student Queries:

function checkValidDate(hw_deadline) {
    hw_deadline = hw_deadline.split('/')
    hw_deadline = new Date(Number(hw_deadline[2]), Number(hw_deadline[1]) - 1, Number(hw_deadline[0]) + 1)
    submit_date = new Date();
    return hw_deadline > submit_date ? true : false //return true if deadline not passed.
}

function getAllCoursesPerStudent(id) {
    let users = DB.get("user")
    let student = users.filter(d => d.user_id == id)
    let student_courses_list = student[0].course_names;
    return student_courses_list //return list of all courses that belong to student.
}

function getAllFinalGradesPerStudent(id) {
    let student_courses_list = getAllCoursesPerStudent(id)
    let student_courses_grades = student_courses_list.map(d => DB.get(d).filter(v => v.user_id == id))
    let student_final_grades = Object.values(student_courses_grades.map(d => d.map(v =>
        [v.hw1_grade[2], v.hw2_grade[2], v.hw3_grade[2], v.hw4_grade[2], v.final_exam_grade])))
    return student_final_grades //return the final grades of student.
}

function getAllHomeWorkAvailablePerStudent(id, course) {
    let day = new Date().getDate()
    let month = new Date().getMonth() + 1;
    let selected_course = DB.get(course)
    let selected_course_per_student = selected_course.filter(d => d.user_id == id)
    let hw1 = selected_course_per_student.map(d => d.hw1_grade.filter(v =>
        d.hw1_grade[0] != "" && d.hw1_grade[2] == "" && checkValidDate(d.hw1_grade[3])))
    let hw2 = selected_course_per_student.map(d => d.hw2_grade.filter(v =>
        d.hw2_grade[0] != "" && d.hw2_grade[2] == "" && checkValidDate(d.hw2_grade[3])))
    let hw3 = selected_course_per_student.map(d => d.hw3_grade.filter(v =>
        d.hw3_grade[0] != "" && d.hw3_grade[2] == "" && checkValidDate(d.hw3_grade[3])))
    let hw4 = selected_course_per_student.map(d => d.hw4_grade.filter(v =>
        d.hw4_grade[0] != "" && d.hw4_grade[2] == "" && checkValidDate(d.hw4_grade[3])))
    let hw_total = []
    if (hw1[0].length) { hw1[0].unshift("1"); hw_total.push(hw1[0]) }
    if (hw2[0].length) { hw2[0].unshift("2"); hw_total.push(hw2[0]) }
    if (hw3[0].length) { hw3[0].unshift("3"); hw_total.push(hw3[0]) }
    if (hw4[0].length) { hw4[0].unshift("4"); hw_total.push(hw4[0]) }
    return hw_total //return the home works in specific course that available to submmition per student.
}

app.get('/student-average/:id', (req, res) => {
    const { id } = req.params
    let count = 0;
    let student_final_grades = getAllFinalGradesPerStudent(id)
    student_final_grades = student_final_grades.map(d => d.map(v => v.reduce((sum, grade) => {
        if(Number(grade) != 0){
            sum += Number(grade)
            count++;
        }
        return sum
    }, 0)))
    let student_final_grades_in_subject = student_final_grades.map(d => d / count)
    let sum_of_grades = student_final_grades_in_subject.reduce((sum, grade) => {
        sum += Number(grade)
        return sum
    }, 0)
    res.json(sum_of_grades) //get the average of student (calc from all courses). 
})

app.get('/student-grades/:id', (req, res) => {
    const { id } = req.params
    let student_courses_list = getAllCoursesPerStudent(id)
    let student_final_grades = getAllFinalGradesPerStudent(id)
    student_courses_list.map((d, i) => student_final_grades[i].unshift(d))
    res.json(student_final_grades) // get the final grades of student. 
})

app.get('/student-submission/:id', (req, res) => {
    const { id } = req.params
    let student_courses_list = getAllCoursesPerStudent(id)
    res.json(student_courses_list) // get courses list per student.
})

app.get('/first-last/:id', (req, res) => {
    const { id } = req.params
    let users = DB.get("user")
    let student = users.filter(d => d.user_id == id)
    res.json(student) //get the first name and last name of user.
})

app.get('/student-submission-course/:id/:course', (req, res) => {
    const { id, course } = req.params
    let hw_total = getAllHomeWorkAvailablePerStudent(id, course)
    res.json(hw_total) //get the list of submmition per student.
})

app.post('/student-submission-send/', (req, res) => {
    const { course, id, hw_number, new_link } = req.body
    if (!new_link)
        return
    let selected_course = DB.get(course)
    let selected_course_per_student = selected_course.filter(d => d.user_id == id)
    selected_course_per_student = selected_course_per_student[0]
    Object.values(selected_course_per_student)[hw_number][1] = new_link
    DB.sync(); //store the home works links in Data Base.
})

//Student

//the server is listening on port:8080.
app.listen(port, () => console.log("Listening on port 8080"));  