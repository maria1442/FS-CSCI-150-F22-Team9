# Classparency | Classroom Management System

## Group Members 
| Team Member | Role |
---|---
| Emma Escandon | Project Manager & Backend Developer|
| Aakash Sharma | Frontend Developer |
| Kalvin Xiong | Frontend Developer |
| Maria Gonzalez | UI/UX Designer |

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
>Classparency is a web based responsive application, it will be running on any web browser. Currently, the web applicaton can only run on a device's local host. Therefore, the user must have the latest versions of MongoDB 6.0, Node JS 18.11, Pug JS 3.0.2, and Express JS 4.18.2 installed on their machine. In addition, the user must use their terminal to start up the server on their local host. The web applications runs on localhost:3000 so that must go at the beginning of the URL. The machine must be connected to the interent in order for the web application to properly load. To run the web page the user must enter: localhost:3000/login.html. This is for them to access the landing page.

### 2.5 **Design and Implementation Constraints**
>MongoDB is used for the database for its No SQL design and it's ability to easily be connected to Node JS applications. Node.js and Express.js are being used to handle requests and the backend framework. Pug JS and CSS are used for the front end design and displaying the data. 

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
The web app will be responsive, in nature so that it can be viewed on different devices with their own respective views. The server is hosted on the machine's local host on port 3000. The Express JS software listens to requests from that port. Based on the requests, the MongoDB client is created and connected, performs the database operation, then is closed. 

### 3.3 **Software Interfaces**
>MongoDB 6.0, Node JS 18.11, and Express JS 4.18.2 are used for backend. Pug JS 3.0.2 and CSS are used for the frontend structure and design. 

- Node Download Link: https://nodejs.org/en/download/
- Express Download Link: https://expressjs.com/en/starter/installing.html
- Pug Download Link: https://www.npmjs.com/package/pug
- MongoDB Download Link: https://www.mongodb.com/try/download/shell

### 3.4 **Communication Interfaces**
>The web application runs on the machine's local host. All requests sending data to the database use POST requests. When a page is loaded, getting data from the database, GET requests are used. 

## 4 **System Features**
>With this being a protoype, the features are based on a single super user. There is a sidebar that has navigation features to the different tabs just by clicking. The tabs include: Dashboard, Students, Grades, Attendance, Events, Behavior, and Announcements.

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
>By clicking on the Announcements tab from any page, the user can view the classroom announcements. Shown in table format are the annoucement title, description, and date. The user can also decide if they want to make the information in the table editable by toggling the "Allow Editing" or "No Editing" option and then applying the change. 
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
### 4.16 **Add Student Attendance**
>Scrolling below the Attendance table shows the area for the user to add a attendance for a given day. The user must enter a unique date, since currently that is how attendance is identified. The user can use the radio button provided next to the student name and ID number to identify if the student was present or absent on the given day. Then the user presses the "Add Attendance" button to add the attendance. 
### 4.17 **Update Student Attendance**
>To update an attendance of a student, the user can click the Attendance table cell they would like to alter. Any of the table values can be adjusted except the student ID number, student name, and attendance date. Once the user is finished making updates, they can press the "Update Attendance" button at the bottom of the table to save their changes.
### 4.18 **Delete Student Attendance**
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
### **Appendix A: Gloassary**
- SPED: Special Education 
- EL: English Learning
- ID: Identification
- Dummy Data: Data that was made up for mock purposes

# Software Design Document
>The purpose of this document is to document the required functionalities for the Classparency project. This document covers the main functionalities of the prototype, as well as some technical design aspects.
## 1 **Project Description**
### 1.1 **Project**
>The project name:Classparency

### 1.2 **Descriptions**
>Brief overall description of the project

### 1.3 **Revision History**
>Date, Comment, Author

## 2 **Overview**
### 2.1 **Purpose**
>Brief description of the focus of this module of the overall project and its intended audience.

### 2.2 **Scope**
>Describe the scope of the module to be produced

### 2.3 **Requirements**
>Your mileage may vary -- we typically break down the requirements to provide a ballpark estimate.
#### 2.3.1 **Estimates**
> Brief description of task / module with link

#### 2.3.2 **Traceability Matrix**
>Cross reference this document with your requirements document and link where you satisfy each requirement

| SRS Requirement | SDD Module |
---|---
| Req 1 | 5.1.1 (link to module), 5.1.2 (link) |
| Req 2 | link to module |
| Req 3 | link to module |
| Req 4 | link to module |

## 3 **System Architecture**
>Describe/include a figure of the overall system architecture (and where this module fits in)

## 4 **Data Dictionary**
>Brief description of each element in this module or a link to an actual data dictionary

| Field | Notes | Type |
---|---|---
| ID | Unique identifier from TABLE_SEQ | DECIMAL |
| NAME | The Name in Object.Name() | VARCHAR |
| VALUE | The value output from somewhere | VARCHAR |

## 5 **Software Domain Design**
### 5.1 **Software Domain Chart**
>Describe / chart each major software application domain and the relationships between objects (UML, etc)

### 5.2 **Software Application Domain**
>A Comprehensive high level description of each domain (package/object wherever it is better to start) within the scope of this module (or within the greater scope of the project if applicable)

#### 5.2.1 **Domain X**
>A high level description of the family of components within this domain and their relationship. Include database domain, stored procedures, triggers, packages, objects, functions, etc.

##### 5.2.1.1 **Component Y of Domain X**
>Define Component Y, describe data flow/control at component level

###### 5.2.1.1.1 **Task Z of Component Y1 of Domain X**
>Define Task Z, describe data flow/control at task level

## 6 **Data Design**
>Describe the data contained in databases and other shared structures between domains or within the scope of the overall project architecture

### 6.1 **Persistent/Static Data**
>Describe/illustrate the logical data model or entity relationship diagrams for the persistent data (or static data if static)

#### 6.1.1 **Dataset**
>Describe persisted object/dataset and its relationships to other entities/datasets

#### 6.1.2 **Static Data**
>Describe static data

#### 6.1.3 **Persistent Data**
>Describe persisted data

### 6.2 **Transient/Dynamic Data**
>Describe any transient data, include any necessary subsections

### 6.3 **External Interface Data**
>Any external interfaces’ data goes here (this is for the data, section 8 is for the interface itself)

### 6.4 **Transformation of Data**
>Describe any data transformation that goes on between design elements

## 7 **User Interface Design**
### 7.1 **User Interface Design Overview**
>Pictures, high level requirements, mockups, etc.

### 7.2 **User Interface Navigation Flow**
>Diagram the flow from one screen to the next

### 7.3 **Use Cases / User Function Description**
>Describe screen usage / function using use cases, or on a per function basis

## 8 **Other Interfaces**
>Identify any external interfaces used in the execution of this module, include technology and other pertinent data

### 8.1 **Interface X**
>Describe interactions, protocols, message formats, failure conditions, handshaking, etc

## 9 **Extra Design Features / Outstanding Issues**
>Does not fit anywhere else above, but should be mentioned -- goes here

## 10 **References**
>Any documents which would be useful to understand this design document or which were used in drawing up this design.

## 11 **Glossary**
>Glossary of terms / acronyms
