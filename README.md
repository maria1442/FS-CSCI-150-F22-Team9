# Classparency | Classroom Management System

## Group Members 
| Team Member | Role |
---|---
| Emma Escandon | Project Manager & Backend Developer|
| Aakash Sharma | Frontend Developer |
| Kalvin Xiong | Frontend Developer |
| Maria Gonzalez | UI/UX Designer |

## Important Links:
> Youtube Video: https://youtu.be/CL9oDdQxLK0

> Final Presentation Slides: https://docs.google.com/presentation/d/1lezd8HXx9kY7jBeLGO2BUPahNTtuT_e4Z4h0s-47QsI/edit?usp=sharing

> Google Drive: https://drive.google.com/drive/folders/1vSWOdl_Q_iaN_tUKBwIvEINLRslTWwLa?usp=sharing

> Trello Board: https://trello.com/invite/b/SKY4NC43/ATTI492db622396fe4e26af028e6a2e90d82FFCB11B1/classparency

> Figma: https://www.figma.com/file/WSXZb6NYWiWQAXmbpaBxSh/Untitled?node-id=0%3A1

# Software Requirement Specification
>By: Emma Escandon

>Template Used for section 1: https://asana.com/resources/software-requirement-document-template

>Template Used for sections 2 and onwards: https://github.com/rick4470/IEEE-SRS-Tempate#21-product-perspective

## 1. **Introduction**
>The purpose of this document is to specify the Software Requirements of the Classparency protoype. This document will also lay out an overview of the system processes that will allow the SDD to specify more throughly. 

### 1.1  **Product Scope**
>The goal of this system is to create a more equitable classroom by identifying student needs. By providing classroom statistics, Classparency can lead to fewer misunderstandings between teachers and students and help teachers identify students who need more resources. By allowing parents to request their students data, Classparency also keeps parents involved in student success.

### 1.2 **Product Value**
>The intended audience will find value in the product because it will relieve the stress that teachers deal with regarding classroom management and curriculum. It will also help parents can hold their students accountable and be more notified and on track with the classroom. Classparency is also a better solution to find the root cause of any problem in the classroom and make data driven decisions.

### 1.3  **Intended Audience**
>This document will serve as a guide for Clients and Developers in understanding what this prototype offers to users. The main audience of Classparency are K-12 teachers and parents. It is a transparent bridge between parents and teachers, in order to benefit the student to the greatest extent and serve the students in their best interest for the long term.

### 1.4 **Intended Use**
>The intended use of Classparency is during class time for teachers. During class time, teachers would log student behavior, attendance, and grades. At any time, parents can use the form provided from the landing page to enter their student's ID number and access their student's information.

### 1.5 **General Description**
>Classparency is a web application prototype that provides dashboard, announcement, event, student information, attendance, behavior, and gradebook pages. Upon logging in the teacher is redirected to the dashboard page, where they can see the classroom statistics as a whole, events, and announcments. On the announcement page, the teacher can view, add, update, or delete announcements. On the event page, the teacher can view, add, update, or delete events. On the student page, the teacher can view, add, update, or delete students. On the behavior page, the teacher can add, update, or delete behavior incidents for a given student. On the attendance page, the teacher can add, update, or delete attendance for a given student. On the gradebook page, the teacher can add, update, or delete assignments for a given student. For a parent, they would be able to access a form from the landing page where they can request and view their students data by inputting their student ID. Student information includes: grades, attendance, behavior incidents, member of any specific group (i.e SPED, EL, internet access at home), student ID number, and gender. Within the class period is where student information and classroom statistics would be logged by the teacher.

## 2 **Overall Description**
### 2.1 **Product Perspective**
>Classparency is a replacement for teacher portal and is a web application for teachers to keep track of classroom data and inform parents. Here is a diagram of the prototype system as a whole:

### 2.2 **Product Functions**
>Since this product is currently a prototype, there is a single super user with prefilled class information.

>Teacher Functions:
- Login with username and password
- View Dashboard
- Add, Update, and Delete Announcements
- Add, Update, and Delete Events
- Add, Update, and Delete Students
- Add, Update, and Delete Student Attendance
- Add, Update, and Delete Student Behavior
- Add, Update, and Delete Student Assignments
>Parent:
- Access link on landing page
- Enter Student ID number to view that student's particular information

### 2.3 **User Classes and Characteristics**
>Client (Teacher) -  Main User
- Must be comfortable working with technology
- Access the their student information
- Teacher will have access to classroom statistics (academic, behavior, attendance)
- Able to perform the Teacher functions specified in section 2.2
> Parent - Secondary User
- Only able to access their student information with student ID
- Able to perform the Parent functions specified in section 2.2
> Admin - Developers
- Access to client credentials
- Access to student information, parent contact information, all data stored in database

### 2.4 **Operating Environment**
>Classparency is a web based responsive application, it will be running on any web browser. Currently, the web applicaton can only run on a device's local host. Therefore, the user must have the latest versions of MongoDB 6.0, Node JS 18.11, Pug JS 3.0.2, and Express JS 4.18.2 installed on their machine. In addition, the user must use their terminal to start up the server on their local host. The MongoDB cluster is not locally hosted which means it can be accessed from anywhere with the correct credentials. The web applications runs on localhost:3000 so that must go at the beginning of the URL. The machine must be connected to the interent in order for the web application to properly load. To run the web page the user must enter: localhost:3000/login.html. This is for them to access the landing page.

### 2.5 **Design and Implementation Constraints**
>MongoDB is used for the database for its No SQL design and it's ability to easily be connected to Node JS applications. The MongoDB cluster is not locally hosted which means it can be accessed from anywhere with the correct credentials. Node.js and Express.js are being used to handle requests and the backend framework. Pug JS and CSS are used for the front end design and displaying the data. 

### 2.6 **User Documentation**
>The SRS and SDD will act as a guide for the user to navigate the protoype web application. 

### 2.7 **Assumptions and Dependencies**
>Currently the prototype uses dummy data but the actual product would need to access student information which FERPA protects, so FERPA contraints could limit the grade and attendance logging capabilites of the product. An assumption that is made is that the user has access to internet and their machine has the latest versions of MongoDB, Node JS, Pug JS, and Express JS downloaded. Also, the user is capable of downloading the code from GitHub and run the server on their local host from their machine's terminal. 

## 3 **External Interface Requirements**
### 3.1 **User Interfaces**
>The link will take you to our wireframe that was made on Figma by Maria G. There you will see an overview of the user interface for both parents and teachers: https://www.figma.com/proto/1gC0JJpeMySEPR0bbnZmYz/Untitled?page-id=0%3A1&node-id=213%3A2&viewport=4027%2C2265%2C0.31&scaling=scale-down&starting-point-node-id=213%3A2

>There is a sidebar that has navigation features to the different tabs just by clicking. The tabs include: Dashboard, Students, Grades, Attendance, Events, Behavior, and Announcements.

> The uses cases of each page when adding, deleting, or updating will be further discussed in the system feature section as well as the SDD document. 

### 3.2 **Hardware Interfaces**
>The Web app should be able to run on all the web browsers for desktops and laptops that can run the server on their machine.
The web app will be responsive, in nature so that it can be viewed on different devices with their own respective views. The server is hosted on the machine's local host on port 3000. The Express JS software listens to requests from that port. Based on the requests, the MongoDB client is created and connected, performs the database operation, then is closed. The MongoDB cluster is not locally hosted which means it can be accessed from anywhere with the correct credentials.

### 3.3 **Software Interfaces**
>MongoDB 6.0, Node JS 18.11, and Express JS 4.18.2 are used for backend. Pug JS 3.0.2 and CSS are used for the frontend structure and design. 

- Node Download Link: https://nodejs.org/en/download/
- Express Download Link: https://expressjs.com/en/starter/installing.html
- Pug Download Link: https://www.npmjs.com/package/pug
- MongoDB Download Link: https://www.mongodb.com/try/download/shell

### 3.4 **Communication Interfaces**
>The web application runs on the machine's local host. All requests sending data to the database use POST requests. When a page is loaded, getting data from the database, GET requests are used. 

## 4 **System Features**
>With this being a protoype, the features are based on a single super user. There is a sidebar that has navigation features to the different tabs just by clicking. The tabs include: Dashboard, Students, Grades, Attendance, Events, Behavior, and Announcements. To get the server running, make sure you are in the directory where you have downloaded the code. From there go into the directory "backend" and enter "node index.js". To access the web page the user must enter: localhost:3000/login.html. This is for them to access the landing page.

### 4.1 **Login**
>Login will be through username and password. To access the prototype the username is "jDoe" and the password is "password". Once the login information is entered, the user will then press the "Login" button to login. If the login credentials are not correct the user will not be redirected. If the credentials are correct, the user will be redirected to the Dashboard page. 

### 4.2 **Dashboard**
>Overall view of the classroom including statistics. The top portion of the page shows the number of EL and SPED students and students with internet access at home. The attendance percentage is the average percentage of the student present attendance. The grade percentage is the average grade percentage of the class. The behavior incident card shows the avergae number of behavior incidents per day. The event card shows the events of the class, and can be scrolled down. The announcement card shows the class announcements and can also be scrolled down. 
### 4.3 **View Events**
>By clicking on the Events tab from any page, the user can view the classroom events. Shown in table format are the event name, date, description, and location. The user can also decide if they want to make the information in the table editable by toggling the "Allow Editing" or "No Editing" option and then applying the change. 
### 4.4 **Add Event**
>Scrolling below the Events table shows the area for the user to add an Event. The user must enter a unique event name, since currently that is how events are identified. They can type in a description, location, and enter a date. Then the user presses the "Add Event" button to add the event to the class. 
### 4.5 **Update Event**
>To update an existing event, the user can click the event table cell they would like to alter. Any of the table values can be adjusted except the event name. Once the user is finished making updates, they can press the "Update Event" button at the bottom of the table to save their changes. 
### 4.6 **Delete Event**
>Scrolling below the Events table and Add Event section shows the area for the user to delete an Event. Provided to the user is a dropdown list of the current Event Names. The user can select one of the options then click the "Delete Event" button to delete the event from the class. 
### 4.7 **View Announcements**
>By clicking on the Announcements tab from any page, the user can view the classroom announcements. Shown in table format are the announcement title, description, and date. The user can also decide if they want to make the information in the table editable by toggling the "Allow Editing" or "No Editing" option and then applying the change. 
### 4.8 **Add Announcement**
>Scrolling below the Announcements table shows the area for the user to add an Announcement. The user must enter a unique announcement title, since currently that is how announcements are identified. They can type in a description and enter a date. Then the user presses the "Add Announcement" button to add the announcement to the class.
### 4.9 **Update Announcement**
>To update an existing announcement, the user can click the announcement table cell they would like to alter. Any of the table values can be adjusted except the announcement title. Once the user is finished making updates, they can press the "Update Announcement" button at the bottom of the table to save their changes. 
### 4.10 **Delete Announcement**
>Scrolling below the Announcements table and Add Announcement section shows the area for the user to delete an announcement. Provided to the user is a dropdown list of the current Announcement titles. The user can select one of the options then click the "Delete Announcement" button to delete the announcement from the class. 
### 4.11 **View Students**
>By clicking on the Students tab from any page, the user can view the students. Shown in table format are the student photo, student ID number, student first name, student last name, student gender, date of birth, contact email, whether the student is identified as SPED, whether the student is identified as EL, whether the student has internet access at home, and the letter grade of the student. The user can also decide if they want to make the information in the table editable by toggling the "Allow Editing" or "No Editing" option and then applying the change. 
### 4.12 **Add Student**
>Scrolling below the Student table shows the area for the user to add a student. The user must enter a unique student ID number, since currently that is how students are identified. They can type in the student first name, last name, gender, and contact email. The user can select the student's date of birth. The user can use the radio button provided to identify if the student is SPED, EL, and has internet access at home. Then the user presses the "Add Student" button to add the student to the class
### 4.13 **Update Student**
>To update an existing student, the user can click the Student table cell they would like to alter. Any of the table values can be adjusted except the student ID number. Once the user is finished making updates, they can press the "Update Students" button at the bottom of the table to save their changes.
### 4.14 **Delete Student**
>Scrolling below the Students table and Add Student section shows the area for the user to delete a student. Provided to the user is a dropdown list of the current student ID numbers. The user can select one of the options then click the "Delete Student" button to delete the student from the class. 
### 4.15 **View Attendance**
>By clicking on the Attendance tab from any page, the user can view the student attendance for the class. Shown in table format are the student first and last name, student ID number, and whether they were "Present" or "Absent" on the specified day in the column header. The user can also decide if they want to make the information in the table editable by toggling the "Allow Editing" or "No Editing" option and then applying the change. 
### 4.16 **Add Attendance**
>Scrolling below the Attendance table shows the area for the user to add a attendance for a given day. The user must enter a unique date, since currently that is how attendance is identified. The user can use the radio button provided next to the student name and ID number to identify if the student was present or absent on the given day. Then the user presses the "Add Attendance" button to add the attendance. 
### 4.17 **Update Attendance**
>To update an attendance of a student, the user can click the Attendance table cell they would like to alter. Any of the table values can be adjusted except the student ID number, student name, and attendance date. Once the user is finished making updates, they can press the "Update Attendance" button at the bottom of the table to save their changes.
### 4.18 **Delete Attendance**
>Scrolling below the Attendance table and Add Attendance section shows the area for the user to delete an attendance date. Provided to the user is a dropdown list of the current attendance dates. The user can select one of the options then click the "Delete Attendance" button to delete the attendance for that date. 
### 4.19 **View Grades**
>By clicking on the Grades tab from any page, the user can view the student grades and assignments for the class. Shown in table format are the student first and last name, student ID number, grade percentage, grade letter, and their given score for each of the assignments in the column headers. The column headers show the assignment name, possible score, and date they were assigned. The user can also decide if they want to make the information in the table editable by toggling the "Allow Editing" or "No Editing" option and then applying the change. 
### 4.20 **Add Assignment**
>Scrolling below the Grades table shows the area for the user to add an assignment and each student's score. The user must enter a unique assignment name, since currently that is how assignments are identified. The user will then select the category of the assignment from the drop down list. The use can enter the possible score of the assignment and the date it is assigned. The user can enter the student's earned score provided next to the student name and ID number. Then the user presses the "Add Assignment" button to add the assignment. 
### 4.21 **Update Assignment**
>To update the given score of a student, the user can click the Grades table cell they would like to alter. Any of the table values can be adjusted except the student ID number, student name, and assignment details in the column headers. Once the user is finished making updates, they can press the "Update Assignments" button at the bottom of the table to save their changes.
### 4.22 **Delete Assignment**
>Scrolling below the Grades table and Add Assignment section shows the area for the user to delete an assignment. Provided to the user is a dropdown list of the current assignment names. The user can select one of the options then click the "Delete Assignment" button to delete the assignment from the class.
### 4.23 **View Behavior Incidents**
>By clicking on the Behavior tab from any page, the user can view the student behavior incidents. Shown in table format are the student first and last name, student ID number, total behavior incidents, and their behavior incidents with the date, type of incident, and description. The column headers show the behavior incident number. The user can also decide if they want to make the information in the table editable by toggling the "Allow Editing" or "No Editing" option and then applying the change. 
### 4.24 **Add Student Behavior**
>Scrolling below the Behavior table shows the area for the user to add a student behavior incident. The user selects the student ID number of the student from the dropdown list. The user will then select the date and behavior incident type from the drop down list. The use can enter a comment. Then the user presses the "Add Behavior" button to add the student behavior incident. 
### 4.25 **Update Student Behavior**
>To update the behavior incident of a student, the user can click the Behavior table cell they would like to alter. Any of the table values can be adjusted except the student ID number, student name, and behavior incident number. Once the user is finished making updates, they can press the "Update Behavior" button at the bottom of the table to save their changes.
### 4.26 **Delete Student Behavior**
>Scrolling below the Behavior table and Add Behavior section shows the area for the user to delete a behavior incident. Provided to the user is a dropdown list of the student ID numbers. The user can select one of the options then select the index of the behavior they would like to delete. The use can then click the "Delete Behavior" button to delete the behavior incident from the student.

### 4.27 **Parent Form**
>The form is accessed from the landing page by clicking the "Get Student" button. Upon clicking the link to redirect to the form, the user can enter the student's ID number then hit the "Submit" button. To get back to the main page the user can press the "Return" button. If the user enters a student ID number that does not exist they will be redirected to an error page. If the student ID number does exist, they will be redirected to a page with all of the student's information including their demographics, grades, attendance, and behavior incidents. 

## 5 **Other Nonfunctional Requirements**
### 5.1 **Performance Requirements**
>The server should handle GET and POST responses quickly for the pages that show data. The updating and deleting of students, behavior, attendance, and grades actions will take a few minutes for the server to process of the requests and update the database. Adding an assignment, behavior incident, and attendance will also take a few minutes for the same reason. The dashbaord will take a few seconds to open since the statistics must be calculated and displayed.

### 5.2 **Safety Requirements**
>Access to unauthorized data through parent information retrieval form, could be a possibility to exploit the application. However, since the student ID number is unique and not widely acessible it is a safer method. 

### 5.3 **Security Requirements**
>FERPA requirements (Product would need to access student information which FERPA protects) should be taken into consideration, since the information of minors are involved. However, since this is a prototype dummy data is currently in use. Authentication login process would be enforced in order to protect data and potential break vulnerability in the system.Parents must provide their child’s student ID  in order to gain access to their records

### 5.4 **Software Quality Attributes**
- Reliability: Student information is secure and the web application crashes will be limited so users are not without this resource during class time .
- Correctness: Data analysis is correctly implemented so as not to display incorrect information.
- Usability: Should be easy to use so as to limit the stress on users and can be used during class time. This is why drop down option lists are provided for the addition and deletion of data. 
- Portability: The web application can be accessed from a computer and laptopn. 
- Interoperabilitye: Several different subsystems will neeed to communication with eachother in a precise manner. The webpage, server backend, and database all communicate with eachother and rely on eachother. 

### 5.5 **Business Rules**
- Client (Teacher) - Potential admin of the system, and the main user of the web app.
- Parents: They can only request information about theory child through a request form.
- Admin - Developers: Able to access to client credentials, student information, and parent contact information

## 6 **Other Requirements**
>There must be an instance of MongoDB 6.0 for the information entry and retrieval. To run the web page the user must enter: localhost:3000/login.html. This is for them to access the landing page.
### **Appendix A: Glossary**
- SPED: Special Education 
- EL: English Learning
- ID: Identification
- Dummy Data: Data that was made up for mock purposes

# Software Design Document
>By: Emma Escandon

>Template: https://docs.google.com/document/d/1dFoX7ejhWUrdJjNDl2NFcmQIEFb6xlwLGmHPqqIlSZM/edit?usp=sharing

## 1 **Project Description**
### 1.1 **Project**
>The project name: Classparency

### 1.2 **Description**
>Classparency is a K-12 classroom data tracking web application that is able to track student behavior, attendance, and grades. Currently this product is a working prototype with the login information and initial class data hardcoded in order to demonstrate the uses of the web application.

### 1.3 **Revision History**
| Date | Comment | Author |
---|---|---|
| 12/10/22 | Final Update | Emma Escandon |

## 2 **Overview**
### 2.1 **Purpose**
>The purpose of this document is to document the design and implementation of the functionalities for the prototype Classparency project. This document covers the main functionalities of the prototype, as well as some technical design aspects. This document will serve as a guide for clients and developers in understanding what this product offers to users.

### 2.2 **Scope**
>The goal of this system is to create a more equitable classroom by identifying student needs. By providing classroom statistics, Classparency can lead to fewer misunderstandings between teachers and students and help teachers identify students who need more resources. By allowing parents to request their students data, Classparency also keeps parents involved in student success.

### 2.3 **Requirements** 
#### 2.3.1 **Traceability Matrix**
| SRS Requirement | SDD Module |
---|---
| Req 4.1 - Login | [5.2.1](#521-login) |
| Req 4.2 - Dashboard | [5.2.2](#522-dashboard) |
| Req 4.3 - View Events | [5.2.3](#523-view-events) |
| Req 4.4 - Add Event | [5.2.4](#524-add-event) |
| Req 4.5 - Update Event | [5.2.5](#525-update-event) |
| Req 4.6 - Delete Event | [5.2.6](#526-delete-event) |
| Req 4.7 - View Announcements | [5.2.7](#527-view-announcements) |
| Req 4.8 - Add Announcement | [5.2.8](#528-add-announcement) |
| Req 4.9 - Update Announcement | [5.2.9](#529-update-announcement) |
| Req 4.10 - Delete Announcement | [5.2.10](#5210-delete-announcement) |
| Req 4.11 - View Students | [5.2.11](#5211-view-students) |
| Req 4.12 - Add Student | [5.2.12](#5212-add-student) |
| Req 4.13 - Update Student | [5.2.13](#5213-update-student) |
| Req 4.14 - Delete Student | [5.2.14](#5214-delete-student) |
| Req 4.15 - View Attendance | [5.2.15](#5215-view-attendance) |
| Req 4.16 - Add Attendance | [5.2.16](#5216-add-attendance) |
| Req 4.17 - Update Attendance | [5.2.17](#5217-update-attendance) |
| Req 4.18 - Delete Attendance | [5.2.18](#5218-delete-attendance) |
| Req 4.19 - View Grades | [5.2.19](#5219-view-grades) |
| Req 4.20 - Add Assignment | [5.2.20](#5220-add-assignment) |
| Req 4.21 - Update Assignment | [5.2.21](#5221-update-assignment) |
| Req 4.22 - Delete Assignment | [5.2.22](#5222-delete-assignment) |
| Req 4.23 - View Behavior Incidents | [5.2.23](#5223-view-behavior-incidents) |
| Req 4.24 - Add Student Behavior | [5.2.24](#5224-add-student-behavior) |
| Req 4.25 - Update Student Behavior | [5.2.25](#5225-update-student-behavior) |
| Req 4.26 - Delete Student Behavior | [5.2.26](#5226-delete-student-behavior)|
| Req 4.27 - Parent Form | [5.2.27](#5227-parent-form) |

## 3 **System Architecture**
>To implement our web application we used a modified version of the MERN stack. MongoDB 6.0, Node JS 18.11, and Express JS 4.18.2 are used for backend. Pug JS 3.0.2 and CSS are used for the frontend structure and design. To handle the front-end we chose to use Pug JS so the HTML page (designed with CSS) can display the data from the database. Express JS is used to set up the server connection and to get requests and send responses. MongoDB is used as the database to store the classroom data. Node JS is used to make the classes and to implement the entire system. The server is hosted on the machine's local host on port 3000. The Express JS software listens to requests from that port. Based on the requests, the MongoDB client is created and connected, performs the database operation, then is closed. The MongoDB cluster is not locally hosted which means it can be accessed from anywhere with the correct credentials.

![System Overview](https://i.postimg.cc/xjtLTCby/system-Overview.png)

## 4 **Data Dictionary**
>Description of the Classparency Data

>Users Table

| Field | Notes | Type |
---|---|---|
| _id | Unique identifier provided by MongoDB | ObjectId |
| username | The username in Object.username() | String |
| password | The password in Object.password() | String |
| totalNumberOfClasses | The total number of classes in Object.totalNumberOfClasses() | Int32 |
| classes | The array of classes in Object.classes() | Array |

>Classes Table

| Field | Notes | Type |
---|---|---|
| _id | Unique identifier provided by MongoDB | ObjectId |
| courseName | The course name in Object.courseName() | String |
| instructorName | The instructor name in Object.instructorName() | String |
| gradeLevel | The grade level in Object.gradeLevel() | String |
| totalNumberOfStudents | The total number of students in Object.totalNumberOfStudents() | Int32 |
| totalSPED | The total number of SPED students in Object.totalSPED() | Int32 |
| totalEL | The total number of EL students in Object.totalEL() | Int32 |
| totalInternetAccess | The total number of students with internet access in Object.totalInternetAccess() | Int32 |
| SPEDPercentage | The percentage of SPED students in Object.SPEDPercentage() | Double |
| EL Percentage | The percentage of EL students in Object.ELPercentage() | Double |
| InternetAccessPercentage | The percentage of students with internet access in Object.InternetAccessPercentage() | Double |
| homeworkWeight | The weight of homework assignments in Object.homeworkWeight() | Double |
| quizWeight | The weight of quizzes in Object.quizWeight() | Double |
| examWeight | The weight of exams in Object.examWeight() | Double |
| projectWeight | The weight of projects in Object.projectWeight() | Double |
| totalHomework | The total number of homework assignments in Object.totalHomework() | Int32 |
| totalQuizzes | The total number of quizzes in Object.totalQuizzes() | Int32 |
| totalExams | The total number of exams in Object.totalExams() | Int32 |
| totalProjects | The total number of projects in Object.totalProjects() | Int32 |
| totalOtherAssignments | The total number of other assignments in Object.totalOtherAssignments() | Int32 |
| totalLetterGradeA | The total number of students with an A in Object.totalLetterGradeA() | Int32 |
| letterGradeAPercentage | The percentage of students with an A in Object.letterGradeAPercentage() | Double |
| totalLetterGradeB | The total number of students with a B in Object.totalLetterGradeB() | Int32 |
| letterGradeBPercentage | The percentage of students with a B in Object.letterGradeBPercentage() | Double |
| totalLetterGradeC | The total number of students with a C in Object.totalLetterGradeC() | Int32 |
| letterGradeCPercentage | The percentage of students with a C in Object.letterGradeCPercentage() | Double |
| totalLetterGradeD | The total number of students with a D in Object.totalLetterGradeD() | Int32 |
| letterGradeDPercentage | The percentage of students with a D in Object.letterGradeDPercentage() | Double |
| totalLetterGradeF | The total number of students with a F in Object.totalLetterGradeF() | Int32 |
| letterGradeFPercentage | The percentage of students with a F in Object.letterGradeFPercentage() | Double |
| totalAttendancePresent | The number of days students are present in Object.totalAttendancePresent() | Int32 |
| totalAttendanceAbsent | The number of days students are absent in Object.totalAttendanceAbsent() | Int32 |
| attendancePresentPercentage | The percentage of students are present in Object.attendancePresentPercentage() | Double |
| attendanceAbsentPercentage | The percentage of students are absent in Object.attendanceAbsentPercentage() | Double |
| totalBehaviorIncidents | The total number of behavior incidents in Object.totalBehaviorIncidents() | Int32 |
| totalOffTask | The total number of off task behavior incidents in Object.totalOffTask() | Int32 |
| offTaskPercentage | The percentage of off task behavior incidents in Object.offTaskPercentage() | Double |
| totalRefusingToWork | The total number of refusing to work behavior incidents in Object.totalRefusingToWork() | Int32 |
| refusingToWorkPercentage | The percentage of refusing to work behavior incidents in Object.refusingToWorkPercentage() | Double |
| totalOutOfSeat | The total number of out of seat behavior incidents in Object.totalOutOfSeat() | Int32 |
| outOfSeatPercentage | The percentage of out of seat behavior incidents in Object.outOfSeatPercentage() | Double |
| totalTalking | The total number of talking behavior incidents in Object.totalTalking() | Int32 |
| talkingPercentage | The percentage of talking behavior incidents in Object.talkingPercentage() | Double |
| totalThrowingObject| The total number of throwing object behavior incidents in Object.totalThrowingObject() | Int32 |
| throwingObjectPercentage | The percentage of throwing object behavior incidents in Object.throwingObjectPercentage() | Double |
| totalTouchingOthers| The total number of touching others behavior incidents in Object.totalTouchingOthers() | Int32 |
| touchingOthersPercentage | The percentage of touching others behavior incidents in Object.touchingOthersPercentage() | Double |
| totalSelfHarm | The total number of self harm behavior incidents in Object.totalSelfHarm() | Int32 |
| selfHarmPercentage | The percentage of self harm behavior incidents in Object.selfHarmPercentage() | Double |
| totalInappropriateLang | The total number of inappropriate language behavior incidents in Object.totalInappropriateLang() | Int32 |
| inappropriateLangPercentage | The percentage of inappropriate language behavior incidents in Object.inappropriateLangPercentage() | Double |
| totalBullyingTeasing| The total number of bullying/teasing behavior incidents in Object.totalBullyingTeasing() | Int32 |
| bullyingTeasingPercentage | The percentage of bullying/teasing behavior incidents in Object.bullyingTeasingPercentage() | Double |
| totalPropertyDamage | The total number of property damage behavior incidents in Object.totalpropertyDamage() | Int32 |
| propertyDamagePercentage | The percentage of property damage behavior incidents in Object.propertyDamagePercentage() | Double |
| totalDefianceDisrespect | The total number of defiance/desirespect behavior incidents in Object.totalDefianceDisrespect() | Int32 |
| defianceDisrespectPercentage | The percentage of defiance/disrespect behavior incidents in Object.defianceDisrespectPercentage() | Double |
| totalTheft | The total number of theft behavior incidents in Object.totalTheft() | Int32 |
| theftPercentage | The percentage of theft behavior incidents in Object.theftPercentage() | Double |
| totalLyingCheating | The total number of lying/cheating behavior incidents in Object.totalLyingCheating() | Int32 |
| lyingCheatingPercentage | The percentage of lying/cheating behavior incidents in Object.lyingCheatingPercentage() | Double |
| totalOtherBehavior | The total number of other behavior incidents in Object.totalOtherBehavior() | Int32 |
| otherBehaviorPercentage | The percentage of other behavior incidents in Object.otherBehaviorPercentage() | Double |
| students | The array of students in Object.students() | Array |
| events | The array of events in Object.events() | Array |
| announcements | The array of announcements in Object.announcements() | Array |

> Announcements Table

| Field | Notes | Type |
---|---|---|
| _id | Unique identifier provided by MongoDB | ObjectId |
| title | The title in Object.title() | String |
| description | The description in Object.description() | String |
| date | The date in Object.date() | Date |

> Events Table

| Field | Notes | Type |
---|---|---|
| _id | Unique identifier provided by MongoDB | ObjectId |
| eventName | The event name in Object.eventName() | String |
| date | The date in Object.date() | Date |
| description | The description in Object.description() | String |
| location | The location in Object.location() | String |

> Students Table

| Field | Notes | Type |
---|---|---|
| _id | Unique identifier provided by MongoDB | ObjectId |
| studentId | The student ID in Object.studentId() | Int32 |
| photo | The student photo in Object.photo() | String |
| firstName | The student first name in Object.firstName() | String |
| lastName | The student last name in Object.lastName() | String |
| gender | The student gender in Object.gender() | String |
| birthDate | The student date of birth in Object.birthDate() | Date |
| contactEmail | The student contact email in Object.contactEmail() | String |
| SPED | Identifies if the student is SPED in Object.SPED() | Boolean |
| EL | Identifies if the student is EL in Object.EL() | Boolean |
| internetAccess | Identifies if the student has internet access at home in Object.internetAccess() | Boolean |
| totalHomework | The total number of homework assignments in Object.totalHomework() | Int32 |
| totalQuizzes | The total number of quizzes in Object.totalQuizzes() | Int32 |
| totalExams | The total number of exams in Object.totalExams() | Int32 |
| totalProjects | The total number of projects in Object.totalProjects() | Int32 |
| totalOtherAssignments | The total number of other assignments in Object.totalOtherAssignments() | Int32 |
| totalAssignments | The total number of assignments in Object.totalAssignments() | Int32 |
| letterGrade | The letter grade of the student in Object.letterGrade() | String |
| gradePercentage | The grade percentage of student in Object.gradePercentage() | Double |
| studentAssignments | The array of assignments in Object.studentAssignments() | Array |
| totalDays | The total number of days in Object.totalDays() | Int32 |
| totalPresentAttendance | The number of days students are present in Object.totalPresentAttendance() | Int32 |
| totalAbsentAttendance | The number of days students are absent in Object.totalAbsentAttendance() | Int32 |
| attendancePresentPercentage | The percentage of students are present in Object.attendancePresentPercentage() | Double |
| studentAttendance | The array of attendance in Object.studentAttendance() | Array |
| totalOffTask | The total number of off task behavior incidents in Object.totalOffTask() | Int32 |
| offTaskPercentage | The percentage of off task behavior incidents in Object.offTaskPercentage() | Double |
| totalRefusingToWork | The total number of refusing to work behavior incidents in Object.totalRefusingToWork() | Int32 |
| refusingToWorkPercentage | The percentage of refusing to work behavior incidents in Object.refusingToWorkPercentage() | Double |
| totalOutOfSeat | The total number of out of seat behavior incidents in Object.totalOutOfSeat() | Int32 |
| outOfSeatPercentage | The percentage of out of seat behavior incidents in Object.outOfSeatPercentage() | Double |
| totalTalking | The total number of talking behavior incidents in Object.totalTalking() | Int32 |
| talkingPercentage | The percentage of talking behavior incidents in Object.talkingPercentage() | Double |
| totalThrowingObject| The total number of throwing object behavior incidents in Object.totalThrowingObject() | Int32 |
| throwingObjectPercentage | The percentage of throwing object behavior incidents in Object.throwingObjectPercentage() | Double |
| totalTouchingOthers| The total number of touching others behavior incidents in Object.totalTouchingOthers() | Int32 |
| touchingOthersPercentage | The percentage of touching others behavior incidents in Object.touchingOthersPercentage() | Double |
| totalSelfHarm | The total number of self harm behavior incidents in Object.totalSelfHarm() | Int32 |
| selfHarmPercentage | The percentage of self harm behavior incidents in Object.selfHarmPercentage() | Double |
| totalInappropriateLang | The total number of inappropriate language behavior incidents in Object.totalInappropriateLang() | Int32 |
| inappropriateLangPercentage | The percentage of inappropriate language behavior incidents in Object.inappropriateLangPercentage() | Double |
| totalBullyingTeasing| The total number of bullying/teasing behavior incidents in Object.totalBullyingTeasing() | Int32 |
| bullyingTeasingPercentage | The percentage of bullying/teasing behavior incidents in Object.bullyingTeasingPercentage() | Double |
| totalPropertyDamage | The total number of property damage behavior incidents in Object.totalpropertyDamage() | Int32 |
| propertyDamagePercentage | The percentage of property damage behavior incidents in Object.propertyDamagePercentage() | Double |
| totalDefianceDisrespect | The total number of defiance/desirespect behavior incidents in Object.totalDefianceDisrespect() | Int32 |
| defianceDisrespectPercentage | The percentage of defiance/disrespect behavior incidents in Object.defianceDisrespectPercentage() | Double |
| totalTheft | The total number of theft behavior incidents in Object.totalTheft() | Int32 |
| theftPercentage | The percentage of theft behavior incidents in Object.theftPercentage() | Double |
| totalLyingCheating | The total number of lying/cheating behavior incidents in Object.totalLyingCheating() | Int32 |
| lyingCheatingPercentage | The percentage of lying/cheating behavior incidents in Object.lyingCheatingPercentage() | Double |
| totalOtherBehavior | The total number of other behavior incidents in Object.totalOtherBehavior() | Int32 |
| otherBehaviorPercentage | The percentage of other behavior incidents in Object.otherBehaviorPercentage() | Double |
| totalBehaviorIncidents | The total number of behavior incidents in Object.totalBehaviorIncidents() | Int32 |
| studentBehavior | The array of student behavior in Object.studentBehavior() | Array |

>Attendance Class 

| Field | Notes | Type |
---|---|---|
| month | The month in Object.month() | Int32 |
| day | The day in Object.day() | Int32 |
| year | The year in Object.year() | Int32 |
| date | The date in Object.date() | Date |
| status | The status in Object.status(), either "Present" or "Absent" | String |

>Behavior Class 

| Field | Notes | Type |
---|---|---|
| id | The id in Object.id() | Int32 |
| incident | The behavior incident in Object.incident(), either "Off Task", "Refusing to Work", "Out of Seat", "Talking", "Throwing Object", "Touching Others", "Self Harm", "Inappropriate Language", "Bullying or Teasing", "Property Damage", "Defiance or Disrespect", "Theft", "Lying or Cheating" or "Other" | String |
| month | The month in Object.month() | Int32 |
| day | The day in Object.day() | Int32 |
| year | The year in Object.year() | Int32 |
| date | The date in Object.date() | Date |
| comment | The comment in Object.comment() | String |

>Assignment Class 

| Field | Notes | Type |
---|---|---|
| assignmentName | The assignment name in Object.assignmentName() | String |
| assignmentCategory | The assignment category in Object.assignmentCategory(), either "Homework", "Quiz", "Exam", "Project", or "Other" | String |
| assignmentWeight | The assignment weight in Object.assignmentWeight() | Int32 |
| possibleScore | The possible score of the assignment in Object.possibleScore() | Int32 |
| givenScore | The student's given score of the assignment in Object.givenScore() | Double |
| month | The month in Object.month() | Int32 |
| day | The day in Object.day() | Int32 |
| year | The year in Object.year() | Int32 |
| date | The date in Object.date() | Date |
| assignmentPercentage | The student's percentage on the assignment in Object.assignmentPercentage() | Double |

## 5 **Software Domain Design**
### 5.1 **Software Domain Chart**
>Class and Entity Relationship Diagram
Since the class diagram is large here is the link to it: https://drive.google.com/file/d/1H5uY5k1i1Yu8V6FzYxaAI6r8jW-X1-So/view?usp=sharing
[![Classparency-Class-Diagram.png](https://i.postimg.cc/mkTQ6st0/Classparency-Class-Diagram.png)](https://postimg.cc/k6h6BLNc)


#### 5.1.1 **Sequence Diagrams**

[![Parent-Page-Sequence-Diagram.png](https://i.postimg.cc/Pxb6xH9q/Parent-Page-Sequence-Diagram.png)](https://postimg.cc/zbBwtsJm)
[![Login-and-Dashboard-Page-Sequence-Diagram.png](https://i.postimg.cc/25wSmbG9/Login-and-Dashboard-Page-Sequence-Diagram.png)](https://postimg.cc/t1sjNgLF)
[![Student-Page-Sequence-Diagram.png](https://i.postimg.cc/HkYDQZdn/Student-Page-Sequence-Diagram.png)](https://postimg.cc/N5zztxyv)
[![Event-Page-Sequence-Diagram.png](https://i.postimg.cc/Jh8ycWtJ/Event-Page-Sequence-Diagram.png)](https://postimg.cc/JsT4MvN4)
[![Announcement-Page-Sequence-Diagram.png](https://i.postimg.cc/hjTcCXwt/Announcement-Page-Sequence-Diagram.png)](https://postimg.cc/JDrf0zMf)
[![Grades.png](https://i.postimg.cc/1t9JdT7V/Grades.png)](https://postimg.cc/94ndRxhc)
[![Behavior-Page-Sequence-Diagram.png](https://i.postimg.cc/4ycPHgmM/Behavior-Page-Sequence-Diagram.png)](https://postimg.cc/QKX1vvgk)
[![Attendance-Page-Sequence-Diagram.png](https://i.postimg.cc/MZ0jHHTw/Attendance-Page-Sequence-Diagram.png)](https://postimg.cc/grJ0BY8t)

### 5.2 **Software Application Domain**
>A Comprehensive high level description of each feature within the within the greater scope of the project. In each subsection the feture and the involved operations will be described.

#### 5.2.1 **Login**
> Login Process
1. GET ./login.html is the request to display the login page
2. User uses the textboxes to type their username and password (currently jDoe and password)
3. POST /login gets the request body and extracts the username and password
4. User object is created with the username and password
5. This User object is turned into a JSON object and passed into getUserFromDB function
- 5.1 That function establishes the MongoDB client, calls the retrieveUserFromDB with the JSON User object as the parameter, closes the connection, then returns the result from the called function
- 5.2 retrieverUserFromDB runs a query to find the document with the matching username and password and returns the JSON of the document
6. If the user does not exist, then undefined is returned and the page is reloaded
7. If the user exists, then the dashboard page is loaded

### 5.2.2 **Dashboard**
> Dashboard Process
1. GET ./dashboard is the request to display the dashboard page
2. To get the number of SPED students the getNumberOfSPED() function is called 
- 2.1 That function establishes the MongoDB client, calls the countSPED, closes the connection, then returns the result from the called function
- 2.2 countSPED runs a query to count the number of students where the field "SPED" is true
3. To get the number of EL students the getNumberOfEL() function is called 
- 3.1 That function establishes the MongoDB client, calls the countEL, closes the connection, then returns the result from the called function
- 3.2 countEL runs a query to count the number of students where the field "EL" is true
4. To get the number of students with internet access the getNumberOfInternetAccess() function is called 
- 4.1 That function establishes the MongoDB client, calls the countInternetAccess, closes the connection, then returns the result from the called function
- 4.2 countInternetAccess runs a query to count the number of students where the field "internetAccess" is true
5. To get the array of students the getStudentArrayFromDB() function is called 
- 5.1 That function establishes the MongoDB client, calls the retrieveStudentArrayFromDB(), closes the connection, then returns the result from the called function
- 5.2 retrieveStudentArrayFromDB() runs a query to get the student table as an array of students in JSON format
6. The attendance present percentage is calcated using for loops to iterate through the student array and get each student's totalAttendancePresent and totalAttendanceAbsent
7. The average grade percentage is calcated using for loops to iterate through the student array and get each student grade percentage and averaging them
8. To get the array of events the getEventArrayFromDB() function is called 
- 8.1 That function establishes the MongoDB client, calls the retrieveEventArrayFromDB(), closes the connection, then returns the result from the called function
- 8.2 retrieveEventArrayFromDB() runs a query to get the event table as an array of events in JSON format
9. To get the array of announcements the getAnnouncementArrayFromDB() function is called 
- 9.1 That function establishes the MongoDB client, calls the retrieveAnnouncementArrayFromDB(), closes the connection, then returns the result from the called function
- 9.2 retrieveAnnouncementArrayFromDB() runs a query to get the announcement table as an array of announcements in JSON format
10. The dates of the events are converted to dates in the form of mm/dd/yyyy
11. The dates of the announcements are converted to dates in the form of mm/dd/yyyy
12. The total number of behavior incidents per day is calculated using the student array and counting the total number of behavior incidents and dividing that by the total days
13. The dashboard page in rendered and the number of SPED and EL students, students with internet access, the behavior incidents per day, attendance present percentage, average grade percentage, events array, and announcements array are sent to the Pug page to be displayed

### 5.2.3 **View Events**
> View Events Process
1. GET ./eventsPage is the request to display the events page
2. To get the array of events the getEventArrayFromDB() function is called 
- 2.1 That function establishes the MongoDB client, calls the retrieveEventArrayFromDB(), closes the connection, then returns the result from the called function
- 2.2 retrieveEventArrayFromDB() runs a query to get the event table as an array of events in JSON format
3. The dates of the events are converted to dates in the form of mm/dd/yyyy
4. The events page is rendered and the events array and whether or not the page is editable are sent to the Pug page to be displayed and either allow or not allow editing

### 5.2.4 **Add Event**
> Add Event Process
1. POST /addEvent is the request to add an event
2. User uses the textboxes to enter the event name, desription, location, and date
3. The request body is parsed and extracts the event name, description, location, and date
4. The date is converted to a Date object
5. Event object is created with the extracted information
6. This Event object is turned into a JSON object and passed into addEventToDB function
- 6.1 That function establishes the MongoDB client, calls the addNewEventToDB with the JSON Event object as the parameter, closes the connection
- 6.2 addNewEventToDB runs a query to insert the JSON object into the database classparency and the table events
7. If no errors occur then the event page is reloaded

### 5.2.5 **Update Event**
> Update Event Process
1. POST /updateEvent is the request to update an event
2. User uses the textboxes to change the event name, desription, location, and date. The entire table is sent as a request
3. The request body is parsed and extracts the event name, description, location, and date. All of these are an array since they have the information for all the events.
4. For the length of the event name Array:
- 4.1 The dates are converted to a Date object
- 4.2 Old Event object is created with the eventName.
- 4.3 New Event object is created with the updated extracted information
- 4.4 Both Event objects are turned into a JSON objects and passed into updateEventFromDB function
- 4.4.1 That function establishes the MongoDB client, calls the updateEventFromDBClient with the JSON Event objects as the parameters, closes the connection
- 4.4.2 updateEventFromDBClient runs a query to find the JSON old Event object, get the document id, use the document id to update that document with the new Event JSON object
5. If no errors occur then the event page is reloaded

### 5.2.6 **Delete Event**
> Delete Event Process
1. POST /deleteEvent is the request to delete an event
2. User uses the dropdown to select the event name they would like to delete
3. The request body is parsed and extracts the event name
4. Event object is created with the extracted information
5. This Event object is turned into a JSON object and passed into deleteEventFromDB function
- 5.1 That function establishes the MongoDB client, calls the deleteEventFromDBClient with the JSON Event object as the parameter, closes the connection
- 5.2 deleteEventFromDBClient runs a query to delete the JSON object into the database classparency and the table events
6. If no errors occur then the event page is reloaded

### 5.2.7 **View Announcements**
> View Announcements Process
1. GET ./announcementsPage is the request to display the announcements page
2. To get the array of announcements the getAnnouncementArrayFromDB() function is called 
- 2.1 That function establishes the MongoDB client, calls the retrieveAnnouncementArrayFromDB(), closes the connection, then returns the result from the called function
- 2.2 retrieveAnnouncementArrayFromDB() runs a query to get the announcement table as an array of announcements in JSON format
3. The dates of the announcements are converted to dates in the form of mm/dd/yyyy
4. The announcements page is rendered and the announcements array and whether or not the page is editable are sent to the Pug page to be displayed and either allow or not allow editing

### 5.2.8 **Add Announcement**
> Add Announcement Process
1. POST /addAnnouncement is the request to add an announcement
2. User uses the textboxes to enter the announcement title, desription, and date
3. The request body is parsed and extracts the announcement title, description, and date
4. The date is converted to a Date object
5. Announcement object is created with the extracted information
6. This Announcement object is turned into a JSON object and passed into addAnnouncementToDB function
- 6.1 That function establishes the MongoDB client, calls the addNewAnnouncementToDB with the JSON Announcement object as the parameter, closes the connection
- 6.2 addNewAnnouncementToDB runs a query to insert the JSON object into the database classparency and the table announcements
7. If no errors occur then the announcement page is reloaded

### 5.2.9 **Update Announcement**
> Update Announcement Process
1. POST /updateAnnouncement is the request to update an announcement
2. User uses the textboxes to change the announcement title, desription, and date. The entire table is sent as a request
3. The request body is parsed and extracts the announcement title, description, and date. All of these are an array since they have the information for all the announcements.
4. For the length of the announcement title Array:
- 4.1 The dates are converted to a Date object
- 4.2 Old Announcement object is created with the announcementTitle.
- 4.3 New Announcement object is created with the updated extracted information
- 4.4 Both Announcements objects are turned into a JSON objects and passed into updateAnnouncementFromDB function
- 4.4.1 That function establishes the MongoDB client, calls the updateAnnouncementFromDBClient with the JSON Announcement objects as the parameters, closes the connection
- 4.4.2 updateAnnouncementFromDBClient runs a query to find the JSON old Announcement object, get the document id, use the document id to update that document with the new Announcement JSON object
5. If no errors occur then the announcement page is reloaded

### 5.2.10 **Delete Announcement**
> Delete Announcement Process
1. POST /deleteAnnouncement is the request to delete an announcement
2. User uses the dropdown to select the announcement title they would like to delete
3. The request body is parsed and extracts the announcement title
4. Announcement object is created with the extracted information
5. This Announcement object is turned into a JSON object and passed into deleteAnnouncementFromDB function
- 5.1 That function establishes the MongoDB client, calls the deleteAnnouncementFromDBClient with the JSON Announcement object as the parameter, closes the connection
- 5.2 deleteAnnouncementFromDBClient runs a query to delete the JSON object into the database classparency and the table announcements
6. If no errors occur then the announcement page is reloaded

### 5.2.11 **View Students**
>View Students Process
1. GET ./studentPage is the request to display the students page
2. To get the array of students the getStudentArrayFromDB() function is called 
- 2.1 That function establishes the MongoDB client, calls the retrieveStudentArrayFromDB(), closes the connection, then returns the result from the called function
- 2.2 retrieveStudentArrayFromDB() runs a query to get the student table as an array of students in JSON format
3. The date of birth of the students are converted to dates in the form of mm/dd/yyyy
4. The boolean values of the SPED, EL, and internetAccess fields are converted to strings so they can be displayed
5. The students page is rendered and the students array and whether or not the page is editable are sent to the Pug page to be displayed and either allow or not allow editing

### 5.2.12 **Add Student**
> Add Student Process
1. POST /addStudent is the request to add a student
2. User uses the textboxes to enter the student ID number, first name, last name, gender, date of birth, contact email, SPED (true or false with radio buttons), EL (true or false with radio buttons), and internet access (true or false with radio buttons). 
3. The request body is parsed and extracts the student ID number, first name, last name, gender, date of birth, contact email, SPED, EL, and internet access. 
4. The date or birth is converted to a Date object
5. The radio button values are converted from the string value to a boolean
6. Student object is created with the extracted information
7. This Student object is turned into a JSON object and passed into addStudentToDB function
- 7.1 That function establishes the MongoDB client, calls the addNewStudentToDB with the JSON Student object as the parameter, closes the connection
- 7.2 addNewStudentToDB runs a query to insert the JSON object into the database classparency and the table students
8. If no errors occur then the student page is reloaded

### 5.2.13 **Update Student**
> Update Student Process
1. POST /updateStudents is the request to update the students table
2. User uses the textboxes to change the student photo, first name, last name, gender, date of birth, contact email, SPED (true or false), EL (true or false), internet acess (true or false). The entire table is sent as a request
3. The request body is parsed and extracts the student photo, first name, last name, gender, date of birth, contact email, EL, SPED, internet access. All of these are an array since they have the information for all the students.
4. The string true and false values in each student's SPED, EL, and internet access field are converted to booleans
5. For the length of the student ID Array:
- 5.1 The date of birth of each student are converted to a Date object
- 5.2 Old Student object is created with the student ID number.
- 5.3 New Student object is created with the updated extracted information
- 5.4 Both Student objects are turned into a JSON objects and passed into updateStudentFromDB function
- 5.4.1 That function establishes the MongoDB client, calls the updateStudentFromDBClient with the JSON Student objects as the parameters, closes the connection
- 5.4.2 updateStudentFromDBClient runs a query to find the JSON old Student object, get the document id, use the document id to update that document with the new Student JSON object
6. If no errors occur then the student page is reloaded

### 5.2.14 **Delete Student**
> Delete Student Process
1. POST /deleteStudent is the request to delete a student
2. User uses the dropdown to select the student ID number they would like to delete
3. The request body is parsed and extracts the student ID
4. Student object is created with the extracted information
5. This Student object is turned into a JSON object and passed into deleteStudentFromDB function
- 5.1 That function establishes the MongoDB client, calls the deleteStudentFromDBClient with the JSON Student object as the parameter, closes the connection
- 5.2 deleteStudentFromDBClient runs a query to delete the JSON object into the database classparency and the table students
6. If no errors occur then the student page is reloaded

### 5.2.15 **View Attendance**
> View Attendance Process
1. GET ./attendance is the request to display the attendance page
2. To get the array of students the getStudentArrayFromDB() function is called 
- 2.1 That function establishes the MongoDB client, calls the retrieveStudentArrayFromDB(), closes the connection, then returns the result from the called function
- 2.2 retrieveStudentArrayFromDB() runs a query to get the student table as an array of students in JSON format
3. The attendance dates are converted to dates in the form of mm/dd/yyyy
4. The attendance page is rendered and the students array, attendance array, and whether or not the page is editable are sent to the Pug page to be displayed and either allow or not allow editing

### 5.2.16 **Add Attendance**
> Add Attendance Process
1. POST /addAttendance is the request to add an attendance
2. User uses the textboxes to enter the date, and for each student whether they were absent or present (with radio buttons)
3. The request body is parsed and extracts the student ID number and attendance date. The student ID's are in an array since the attendance is inputted for all the students.
4. The date is converted to a Date object
5. The attendance status for each student is gotten from the array of radio button responses
6. For the length of the student ID array:
- 6.1 New Attendance object is created with the extracted information
- 6.2 Student object created with the current student ID
- 6.3 The Student Object is turned into a JSON object and the Attendance Object is turned into a JSON object and passed into addAttendanceToDB function
- 6.3.1 That function establishes the MongoDB client, calls the addStudentAttendanceToDB with the JSON Student and JSON Attendance objects as the parameters, closes the connection
- 6.3.2 addStudentAttendanceToDB runs a query to find the JSON Student object, get the document id, use the document id to add to that document the Attendance JSON object
- 6.4 The Student JSON object and passed into getStudentFromDB function
- 6.4.1 That function establishes the MongoDB client, calls the retrieveStudentFromDB with the JSON Student object as the parameter, closes the connection, then returns the result from the called function
- 6.4.2 retrieveStudentFromDB runs a query to find the document with the matching student ID number and returns the JSON of the document
- 6.5 The result is used to make a new Student object
- 6.6 For the length of the Student attendance array:
- 6.6.1 The date is converted to a Date object
- 6.6.2 The student's attendance info is made into a new Attendance object
- 6.6.3 The new Attendance object is added to the new Student object, so the calculations can be updated
7. The function updateStudentAttendanceFromDB is called with the Student object in JSON form and the new Student object in JSON form
- 7.1 That function establishes the MongoDB client, calls the updateStudentAttendanceFromDBClient with the both JSON Student objects as the parameters, and closes the connection
- 7.2 updateStudentAttendanceFromDBClient runs a query to find the document with the matching student ID number updates the attendance stats of the student
8. If no errors occur then the attendance page is reloaded

### 5.2.17 **Update Attendance**
>Update Attendance Process
1. POST /updateAttendance is the request to update the attendance table
2. User uses the textboxes to change the student status. The entire table is sent as a request
3. The request body is parsed and extracts the student status. This is in an array since they have the information for all the students.
4. To get the array of students the getStudentArrayFromDB() function is called 
- 4.1 That function establishes the MongoDB client, calls the retrieveStudentArrayFromDB(), closes the connection, then returns the result from the called function
- 4.2 retrieveStudentArrayFromDB() runs a query to get the student table as an array of students in JSON format
5. For the length of the student ID Array:
- 5.1 Student object created with the current student ID
- 5.2 The Student JSON object and passed into getStudentFromDB function
- 5.2.1 That function establishes the MongoDB client, calls the retrieveStudentFromDB with the JSON Student object as the parameter, closes the connection, then returns the result from the called function
- 5.2.2 retrieveStudentFromDB runs a query to find the document with the matching student ID number and returns the JSON of the document
- 5.3 For the length of the Student attendance array:
- 5.3.1 The date is converted to a Date object
- 5.3.2 The student's attendance info is made into a new Attendance object
- 5.3.3 The new Attendance object is added to the new Student object, so the calculations can be updated
- 5.4 The function updateStudentAttendanceAfterDeleteFromDB is called with the Student object in JSON form and the new Student object in JSON form
- 5.4.1 That function establishes the MongoDB client, calls the updateStudentAttendanceAfterDeleteFromDBClient with the both JSON Student objects as the parameters, and closes the connection
- 5.4.2 updateStudentAttendanceAfterDeleteFromDBClient runs a query to find the document with the matching student ID number updates the attendance stats of the student and the attendance array
6. If no errors occur then the attendance page is reloaded

### 5.2.18 **Delete Attendance**
> Delete Attendance Process
1. POST /deleteAttendance is the request to delete an attendance
2. User uses the textboxes to enter the date they would like to delete
3. The request body is parsed and extracts the attendance date.
4. The date is converted to a Date object
5. Old Attendance object is made with the extracted informations
6. To get the array of students the getStudentArrayFromDB() function is called 
- 6.1 That function establishes the MongoDB client, calls the retrieveStudentArrayFromDB(), closes the connection, then returns the result from the called function
- 6.2 retrieveStudentArrayFromDB() runs a query to get the student table as an array of students in JSON format
7. For the length of the student ID array:
- 7.1 Student object created with the current student ID
- 7.2 The Student JSON object and passed into getStudentFromDB function
- 7.2.1 That function establishes the MongoDB client, calls the retrieveStudentFromDB with the JSON Student object as the parameter, closes the connection, then returns the result from the called function
- 7.2.2 retrieveStudentFromDB runs a query to find the document with the matching student ID number and returns the JSON of the document
- 7.3 The result is used to make a new Student object
- 7.4 For the length of the Student attendance array:
- 7.5.1 The date is converted to a Date object
- 7.5.2 The student's attendance info is made into a new Attendance object
- 7.5.3 The new Attendance object is added to the new Student object, so the calculations can be updated
8. The function removeAttendance is called on the new Student object and the old Attendance object
9. The function updateStudentAttendanceAfterDeleteFromDB is called with the Student object in JSON form and the new Student object in JSON form
- 9.1 That function establishes the MongoDB client, calls the updateStudentAttendanceAfterDeleteFromDBClient with the both JSON Student objects as the parameters, and closes the connection
- 9.2 updateStudentAttendanceAfterDeleteFromDBClient runs a query to find the document with the matching student ID number updates the attendance stats of the student and the attendance array
10. If no errors occur then the attendance page is reloaded

### 5.2.19 **View Grades**
> View Grades Process
1. GET ./grades is the request to display the grades page
2. To get the array of students the getStudentArrayFromDB() function is called 
- 2.1 That function establishes the MongoDB client, calls the retrieveStudentArrayFromDB(), closes the connection, then returns the result from the called function
- 2.2 retrieveStudentArrayFromDB() runs a query to get the student table as an array of students in JSON format
3. The assignment dates are converted to dates in the form of mm/dd/yyyy
4. The grades page is rendered and the students array. assignment array, and whether or not the page is editable are sent to the Pug page to be displayed and either allow or not allow editing

### 5.2.20 **Add Assignment**
> Add Assignment Process
1. POST /addAssignment is the request to add an attendance
2. User uses the textboxes to enter the date, assignment name, assignment category, possible score, and for each student whether their given score
3. The weight based on the category is then calculated from the weights defined in the database. 
4. The request body is parsed and extracts the student ID number, date, assignment name, assignment category, possible score, and for each student whether their given score. The student ID's and given scores are in arrays since the assignment given score is inputted for all the students.
5. The date is converted to a Date object
6. For the length of the student ID array:
- 6.1 New Assignment object is created with the extracted information
- 6.2 Student object created with the current student ID
- 6.3 The Student Object is turned into a JSON object and the Assignment Object is turned into a JSON object and passed into addAssignmentToDB function
- 6.3.1 That function establishes the MongoDB client, calls the addStudentAssignmentToDB with the JSON Student and JSON Assignment objects as the parameters, closes the connection
- 6.3.2 addStudentAssignmentToDB runs a query to find the JSON Student object, get the document id, use the document id to add to that document the Assignment JSON object
- 6.4 The Student JSON object and passed into getStudentFromDB function
- 6.4.1 That function establishes the MongoDB client, calls the retrieveStudentFromDB with the JSON Student object as the parameter, closes the connection, then returns the result from the called function
- 6.4.2 retrieveStudentFromDB runs a query to find the document with the matching student ID number and returns the JSON of the document
- 6.5 The result is used to make a new Student object
- 6.6 For the length of the Student assignment array:
- 6.6.1 The date is converted to a Date object
- 6.6.2 The student's assignment info is made into a new Assignment object
- 6.6.3 The new Assignment object is added to the new Student object, so the calculations can be updated
7. The function updateStudentAssignmentFromDB is called with the Student object in JSON form and the new Student object in JSON form
- 7.1 That function establishes the MongoDB client, calls the updateStudentAssignmentFromDBClient with the both JSON Student objects as the parameters, and closes the connection
- 7.2 updateStudentAssignmentFromDBClient runs a query to find the document with the matching student ID number updates the grades stats of the student
8. If no errors occur then the grades page is reloaded

### 5.2.21 **Update Assignment**
>Update Assignment Process
1. POST /updateAssignment is the request to update the grades table
2. User uses the textboxes to change the student given score. The entire table is sent as a request.
3. The request body is parsed and extracts the student given score. This is in an array since they have the information for all the students.
4. To get the array of students the getStudentArrayFromDB() function is called 
- 4.1 That function establishes the MongoDB client, calls the retrieveStudentArrayFromDB(), closes the connection, then returns the result from the called function
- 4.2 retrieveStudentArrayFromDB() runs a query to get the student table as an array of students in JSON format
5. For the length of the student ID Array:
- 5.1 Student object created with the current student ID
- 5.2 The Student JSON object and passed into getStudentFromDB function
- 5.2.1 That function establishes the MongoDB client, calls the retrieveStudentFromDB with the JSON Student object as the parameter, closes the connection, then returns the result from the called function
- 5.2.2 retrieveStudentFromDB runs a query to find the document with the matching student ID number and returns the JSON of the document
- 5.3 For the length of the Student assignment array:
- 5.3.1 The date is converted to a Date object
- 5.3.2 The student's assignment info is made into a new Assignment object
- 5.3.3 The new Assignment object is added to the new Student object, so the calculations can be updated
- 5.4 The function updateStudentGradeAfterDeleteFromDB is called with the Student object in JSON form and the new Student object in JSON form
- 5.4.1 That function establishes the MongoDB client, calls the updateStudentGradeAfterDeleteFromDBClient with the both JSON Student objects as the parameters, and closes the connection
- 5.4.2 updateStudentGradeAfterDeleteFromDBClient runs a query to find the document with the matching student ID number updates the assignments stats of the student and the student assignment array
6. If no errors occur then the grades page is reloaded

### 5.2.22 **Delete Assignment**
> Delete Assignment Process
1. POST /deleteAssignment is the request to delete an asssignment
2. User uses the textboxes to enter the assignment name they would like to delete
3. The request body is parsed and extracts the assignment name.
4. The date is converted to a Date object
5. Old Assignment object is made with the extracted informations
6. To get the array of students the getStudentArrayFromDB() function is called 
- 6.1 That function establishes the MongoDB client, calls the retrieveStudentArrayFromDB(), closes the connection, then returns the result from the called function
- 6.2 retrieveStudentArrayFromDB() runs a query to get the student table as an array of students in JSON format
7. For the length of the student ID array:
- 7.1 Student object created with the current student ID
- 7.2 The Student JSON object and passed into getStudentFromDB function
- 7.2.1 That function establishes the MongoDB client, calls the retrieveStudentFromDB with the JSON Student object as the parameter, closes the connection, then returns the result from the called function
- 7.2.2 retrieveStudentFromDB runs a query to find the document with the matching student ID number and returns the JSON of the document
- 7.3 The result is used to make a new Student object
- 7.4 For the length of the Student assignment array:
- 7.5.1 The date is converted to a Date object
- 7.5.2 The student's assignment info is made into a new Assignment object
- 7.5.3 The new Assignment object is added to the new Student object, so the calculations can be updated
8. The function removeAssignment is called on the new Student object and the old Assignment object
9. The function updateStudentGradeAfterDeleteFromDB is called with the Student object in JSON form and the new Student object in JSON form
- 9.1 That function establishes the MongoDB client, calls the updateStudentGradeAfterDeleteFromDBClient with the both JSON Student objects as the parameters, and closes the connection
- 9.2 updateStudentGradeAfterDeleteFromDBClient runs a query to find the document with the matching student ID number updates the grade stats of the student and the assignment array
10. If no errors occur then the grades page is reloaded

### 5.2.23 **View Behavior Incidents**
> View Behavior Process
1. GET ./behavior is the request to display the behavior page
2. To get the array of students the getStudentArrayFromDB() function is called 
- 2.1 That function establishes the MongoDB client, calls the retrieveStudentArrayFromDB(), closes the connection, then returns the result from the called function
- 2.2 retrieveStudentArrayFromDB() runs a query to get the student table as an array of students in JSON format
3. The max number of behavior incidents is calculation by iterating through the student array
4. The student behaviors are sorted by date ascending
5. The behavior incident dates are converted to dates in the form of mm/dd/yyyy.
6. The behavior page is rendered and the students array, max number of behavior incidents, and whether or not the page is editable are sent to the Pug page to be displayed and either allow or not allow editing

### 5.2.24 **Add Student Behavior**
> Add Student Behavior Process
1. POST /addBehavior is the request to add a behavior incident
2. User uses the textboxes to enter the date, studentID, behavior incident, and comment.
3. The request body is parsed and extracts the date, studentID, behavior incident, and comment.
4. The date is converted to a Date object
5. Student object created from the student ID number
7. New Behavior object created from the extracted information
8. The Student Object is turned into a JSON object and the Behavior Object is turned into a JSON object and passed into addBehaviorToDB function
- 8.1 That function establishes the MongoDB client, calls the addStudentBehaviorToDB with the JSON Student and JSON Behavior objects as the parameters, closes the connection
- 8.2 addStudentBehaviorToDB runs a query to find the JSON Student object, get the document id, use the document id to add to that document the Behavior JSON object
9. The Student JSON object and passed into getStudentFromDB function
- 9.1 That function establishes the MongoDB client, calls the retrieveStudentFromDB with the JSON Student object as the parameter, closes the connection, then returns the result from the called function
- 9.2 retrieveStudentFromDB runs a query to find the document with the matching student ID number and returns the JSON of the document
10. The result is used to make a new Student object
11. For the length of the Student behavior array:
- 11.1 The date is converted to a Date object
- 11.2 The student's behavior info is made into a new Behavior object
- 11.3 The new Behavior object is added to the new Student object, so the calculations can be updated
12. The function updateStudentBehaviorFromDB is called with the Student object in JSON form and the new Student object in JSON form
- 12.1 That function establishes the MongoDB client, calls the updateStudentBehaviorFromDBClient with the both JSON Student objects as the parameters, and closes the connection
- 12.2 updateStudentBehaviorFromDBClient runs a query to find the document with the matching student ID number updates the behavior stats of the student
13. If no errors occur then the behavior page is reloaded

### 5.2.25 **Update Student Behavior**
> Update Student Behavior Process
1. POST /updateBehavior is the request to update the behavior incidents table
2. User uses the textboxes to change the student behavior incident, date, and comment. The entire table is sent as a request
3. The request body is parsed and extracts the tudent behavior incident, date, and comment. Each is in an array since they have the information for all the students.
4. To get the array of students the getStudentArrayFromDB() function is called 
- 4.1 That function establishes the MongoDB client, calls the retrieveStudentArrayFromDB(), closes the connection, then returns the result from the called function
- 4.2 retrieveStudentArrayFromDB() runs a query to get the student table as an array of students in JSON format
5. For the length of the student ID Array:
- 5.1 Student object created with the current student ID
- 5.2 The Student JSON object and passed into getStudentFromDB function
- 5.2.1 That function establishes the MongoDB client, calls the retrieveStudentFromDB with the JSON Student object as the parameter, closes the connection, then returns the result from the called function
- 5.2.2 retrieveStudentFromDB runs a query to find the document with the matching student ID number and returns the JSON of the document
- 5.3 For the length of the Student behavior array:
- 5.3.1 The date is converted to a Date object
- 5.3.2 The student's behavior info is made into a new Behavior object
- 5.3.3 The new Behavior object is added to the new Student object, so the calculations can be updated
- 5.4 The function updateStudentBehaviorAfterDeleteFromDB is called with the Student object in JSON form and the new Student object in JSON form
- 5.4.1 That function establishes the MongoDB client, calls the updateStudentBehaviorAfterDeleteFromDBClient with the both JSON Student objects as the parameters, and closes the connection
- 5.4.2 updateStudentBehaviorAfterDeleteFromDBClient runs a query to find the document with the matching student ID number updates the beheavior stats of the student and the student behavior array
6. If no errors occur then the behavior page is reloaded

### 5.2.26 **Delete Student Behavior**
> Delete Student Behavior Process
1. POST /deleteBehavior is the request to delete a behavior incident
2. User uses the textboxes to enter the student ID number and incident index of the behavior they would like to delete
3. The request body is parsed and extracts the student ID number and behavior id.
4. Student object created with the current student ID
5. The Student JSON object and passed into getStudentFromDB function
- 5.1 That function establishes the MongoDB client, calls the retrieveStudentFromDB with the JSON Student object as the parameter, closes the connection, then returns the result from the called function
- 5.2 retrieveStudentFromDB runs a query to find the document with the matching student ID number and returns the JSON of the document
6. The date is converted to a Date object
7. Old Behavior object is made with the extracted information
8. The Old Behavior JSON object and student JSON object are passed into deleteBehaviorFromDB function
- 8.1 That function establishes the MongoDB client, calls the deleteStudentBehaviorFromDB with the JSON Student object and JSON old Behavior object as the parameter, and closes the
- 8.2 deleteStudentBehaviorFromDB runs a query to find the document with the matching student ID number and deletes the behavior from the studentBehavior array
9. The Student JSON object and passed into getStudentFromDB function
- 9.1 That function establishes the MongoDB client, calls the retrieveStudentFromDB with the JSON Student object as the parameter, closes the connection, then returns the result from the called function
- 9.2 retrieveStudentFromDB runs a query to find the document with the matching student ID number and returns the JSON of the document
10. The result is used to make a new Student object
11. For the length of the Student behavior array:
- 11.1 The date is converted to a Date object
- 11.2 The student's behavior info is made into a new Behavior object, the id's are updated due to the deletion
- 11.3 The new Behavior object is added to the new Student object, so the calculations can be updated
12. The function updateStudentBehaviorAfterDeleteFromDB is called with the Student object in JSON form and the new Student object in JSON form
- 12.1 That function establishes the MongoDB client, calls the updateStudentBehaviorAfterDeleteFromDBClient with the both JSON Student objects as the parameters, and closes the connection
- 12.2 updateStudentBehaviorAfterDeleteFromDBClient runs a query to find the document with the matching student ID number updates the behavior stats of the student and student behavior array
13. If no errors occur then the behavior page is reloaded

### 5.2.27 **Parent Form**
> Parent Form Process
1. On the login page, the user presses the button that redirects them to parent.html
2. On parent.html the user uses the textboxes to type the studentID (numbers 10000000-10000029)
3. POST /studentParentPage gets the request body and extracts the student ID number
4. Student object is created with the student ID number
5. This Student object is turned into a JSON object and passed into getStudentFromDB function
- 5.1 That function establishes the MongoDB client, calls the retrieveStudentFromDB with the JSON Student object as the parameter, closes the connection, then returns the result from the called function
- 5.2 retrieveStudentFromDB runs a query to find the document with the matching student ID number and returns the JSON of the document
6. If the student does not exist, then undefined is returned and the user is redirected to failedParentStudentView page
7. If the student exists, then the all of dates are converted to mm/dd/yyyy format and the parentStudentView page is rendered with the single student's information

## 6 **Data Design**
>The database uses 5 NoSQL tables to store data. These tables are titled as follows: announcements, events, students, classes, and users These were illustrated in the [data dictionary](#4-data-dictionary) section and are further shown below:

>announcements Collection
[![announcements](https://i.postimg.cc/V6ZM1H2j/Screen-Shot-2022-12-13-at-13-20-32.png)](https://postimg.cc/PpZNQKXx)

> Static Data
- _id
- title
> Dynamic Data
- description
- date

>events Collection
[![events](https://i.postimg.cc/9FRPXCmz/Screen-Shot-2022-12-13-at-13-19-58.png)](https://postimg.cc/XpWBQMy0)

> Static Data
- _id
- eventName
> Dynamic Data
- date
- description
- location

>students Collection
[![student1](https://i.postimg.cc/Rhz3M5XJ/Screen-Shot-2022-12-13-at-13-21-56.png)](https://postimg.cc/jwZqX9VR)
[![Screen-Shot-2022-12-13-at-13-23-45.png](https://i.postimg.cc/mDS4FvTH/Screen-Shot-2022-12-13-at-13-23-45.png)](https://postimg.cc/Q9Vw2n98)

> Static Data
- _id
- studentId
> Dynamic Data
- photo
- firstName
- lastName
- gender
- birthDate
- contactEmail
- SPED
- EL
- internetAccess
- totalHomework
- totalQuizzes
- totalExams
- totalProjects
- totalOtherAssignments
- totalAssignments
- letterGrade
- gradePercentage
- studentAssignments
- totalDays
- totalPresentAttendance
- totalAbsentAttendance
- attendancePresentPercentage
- studentAttendance
- totalOffTask
- offTaskPercentage
- totalRefusingToWork
- refusingToWorkPercentage
- totalOutOfSeat
- outOfSeatPercentage
- totalTalking
- talkingPercentage
- totalThrowingObject
- throwingObjectPercentage
- totalTouchingOthers
- touchingOthersPercentage
- totalSelfHarm
- selfHarmPercentage
- totalInappropriateLang
- inappropriateLangPercentage
- totalBullyingTeasing
- bullyingTeasingPercentage
- totalPropertyDamage
- propertyDamagePercentage
- totalDefianceDisrespect
- defianceDisrespectPercentage
- totalTheft
- theftPercentage
- totalLyingCheating
- lyingCheatingPercentage
- totalOtherBehavior
- otherBehaviorPercentage
- totalBehaviorIncidents
- studentBehavior


>classes Collection
[![classes1](https://i.postimg.cc/xTT76k3h/Screen-Shot-2022-12-13-at-13-17-51.png)](https://postimg.cc/rz3QmwbN)
[![classes2](https://i.postimg.cc/NMcCmL0N/Screen-Shot-2022-12-13-at-13-18-10.png)](https://postimg.cc/Z9wLhbp3)

> Static Data
- _id
- courseName
- gradeLevel
> Dynamic Data
- instructorName
- totalNumberOfStudents
- totalSPED
- totalEL
- totalInternetAccess
- SPEDPercentage
- ELPercentage
- InternetAccessPercentage
- homeworkWeight
- quizWeight
- examWeight
- projectWeight
- totalHomework
- totalQuizzes
- totalExams
- totalProjects
- totalOtherAssignments
- totalAssignments
- totalLetterGradeA
- totalLetterGradeAPercentage
- totalLetterGradeB
- totalLetterGradeBPercentage
- totalLetterGradeC
- totalLetterGradeCPercentage
- totalLetterGradeD
- totalLetterGradeDPercentage
- totalLetterGradeF
- totalLetterGradeFPercentage
- totalAttendancePresent
- totalAttendanceAbsent
- attendancePresentPercentage
- attendanceAbsentPercentage
- totalOffTask
- offTaskPercentage
- totalRefusingToWork
- refusingToWorkPercentage
- totalOutOfSeat
- outOfSeatPercentage
- totalTalking
- talkingPercentage
- totalThrowingObject
- throwingObjectPercentage
- totalTouchingOthers
- touchingOthersPercentage
- totalSelfHarm
- selfHarmPercentage
- totalInappropriateLang
- inappropriateLangPercentage
- totalBullyingTeasing
- bullyingTeasingPercentage
- totalPropertyDamage
- propertyDamagePercentage
- totalDefianceDisrespect
- defianceDisrespectPercentage
- totalTheft
- theftPercentage
- totalLyingCheating
- lyingCheatingPercentage
- totalOtherBehavior
- otherBehaviorPercentage
- totalBehaviorIncidents
- students
- events
- announcements

>users Collection
[![Screen-Shot-2022-12-13-at-13-26-42.png](https://i.postimg.cc/qRqw8nTx/Screen-Shot-2022-12-13-at-13-26-42.png)](https://postimg.cc/G80vR494)

>Static Data
- _id
- username
- password

>Dynamic Data
- totalNumberOfClasses
- classes

### 6.2 **External Interface Data**
>The data is in use in the Node JS implementation and is stored in MongoDB.

### 6.3 **Transformation of Data**
>When an item is added to the database the information is taken from the user, turned into an object, turned in the JSON representation, then added to the database where it is then considered a document. When an item is retrieved from the database

## 7 **User Interface Design**
### 7.1 **User Interface Design Overview**
>The link will take you to our wireframe that was made on Figma by Maria G. There you will see an overview of the user interface for both parents and teachers: https://www.figma.com/proto/1gC0JJpeMySEPR0bbnZmYz/Untitled?page-id=0%3A1&node-id=213%3A2&viewport=4027%2C2265%2C0.31&scaling=scale-down&starting-point-node-id=213%3A2

### 7.2 **User Interface Navigation Flow**
>Diagram the flow from one screen to the next
[![Classparency-Flow-Diagram-2.png](https://i.postimg.cc/hjqHS2W3/Classparency-Flow-Diagram-2.png)](https://postimg.cc/GBqMKJpk)

### 7.3 **Use Cases / User Function Description**
> Refer to [Section 4](#4-system-features) System Features of the SRS for the description of each user function
> Teacher Use Case
![Teacher Use Case Diagram](https://i.postimg.cc/CK8tX4gc/Teacher-Use-Case-Diagram.png)

>Parent Use Case
[![Parent-Use-Case-Diagram.png](https://i.postimg.cc/h4sYkjkR/Parent-Use-Case-Diagram.png)](https://postimg.cc/fk35XwW8)

## 8 **Other Interfaces**
> The Web app should be able to run on all the web browsers for desktops and laptops that can run the server on their machine. The web app will be responsive, in nature so that it can be viewed on different devices with their own respective views. The server is hosted on the machine's local host on port 3000. The Express JS software listens to requests from that port. Based on the requests, the MongoDB client is created and connected, performs the database operation, then is closed. MongoDB 6.0, Node JS 18.11, and Express JS 4.18.2 are used for backend. Pug JS 3.0.2 and CSS are used for the frontend structure and design. The web application runs on the machine's local host. All requests sending data to the database use POST requests. When a page is loaded, getting data from the database, GET requests are used. 

## 9 **Extra Design Features / Outstanding Issues**
>To get the server running, make sure you are in the directory where you have downloaded the code. From there go into the directory "backend" and enter "node index.js". To access the web page the user must enter: localhost:3000/login.html. This is for them to access the landing page.

> The updating and deleting of students, behavior, attendance, and grades actions will take a few minutes for the server to process of the requests and update the database. Adding an assignment, behavior incident, and attendance will also take a few minutes for the same reason. The dashbaord will take a few seconds to open since the statistics must be calculated and displayed. To make this faster in the next iteration, we would use MongoDB aggregations to calculate data instead of JavaScript functions. Due to the nature of a protoype, there is no error handling when adding, upating, or deleting objects. 

## 10 **References**
- Template: https://docs.google.com/document/d/1dFoX7ejhWUrdJjNDl2NFcmQIEFb6xlwLGmHPqqIlSZM/edit?usp=sharing

## 11 **Glossary**
> Glossary of terms / acronyms
- SPED: Special Education 
- EL: English Learning
- ID: Identification
- Dummy Data: Data that was made up for mock purposes