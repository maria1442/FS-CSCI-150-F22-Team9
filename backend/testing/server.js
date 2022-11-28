// --------------------------------------
// MONGO DB FUNCTIONS
const {MongoClient, MongoDBNamespace} = require('mongodb');
// Functions to call MongoDB, use form functionName(parameter(s)).catch(console.error); to call functions
// USE THESE IN CLIENT JS
// ADD DOCUMENTS to EXISTING CLASS
async function addEventToDB(course, event) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await addNewEventToDB(client, event);
        //await addNewEventToClassDB(client, course, event);
    }
    finally {
        await client.close();
    }
}
async function addAnnouncementToDB(course, announcement) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await addNewAnnouncementToDB(client, announcement);
        //await addNewAnnouncementToClassDB(client, course, announcement);
    }
    finally {
        await client.close();
    }
}
async function addStudentToDB(course, student) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await addNewStudentToDB(client, student);
        //await addNewStudentToClassDB(client, course, student);
    }
    finally {
        await client.close();
    }
}
async function addClassToDB(user, course) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await addNewClassToDB(client, course);
        //await addNewClassToUserDB(client, user, course);
    }
    finally {
        await client.close();
    }
}
async function addUserToDB(user) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        //await addNewUserToDB(client, user);
    }
    finally {
        await client.close();
    }
}
async function addAttendanceToDB(course, student, attendance) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await addStudentAttendanceToDB(client, student, attendance);
        //await addStudentAttendanceToClassDB(client, course, student, attendance);
    }
    finally {
        await client.close();
    }
}
async function addBehaviorToDB(course, student, behavior) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await addStudentBehaviorToDB(client, student, behavior);
        //await addStudentBehaviorToClassDB(client, course, student, behavior);
    }
    finally {
        await client.close();
    }
}
async function addAssignmentToDB(course, student, assignment) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await addStudentAssignmentToDB(client, student, assignment);
        //await addStudentAssignmentToClassDB(client, course, student, assignment);
    }
    finally {
        await client.close();
    }
}
// DELETE DOCUMENTS
async function deleteEventFromDB(course, event) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await deleteEventFromDBClient(client, event);
        //await deleteEventFromClassDB(client, course, event);
    }
    finally {
        await client.close();
    }
}
async function deleteAnnouncementFromDB(course, announcement) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await deleteAnnouncementFromDBClient(client, announcement);
        //await deleteAnnouncementFromClassDB(client, course, announcement);
    }
    finally {
        await client.close();
    }
}
async function deleteStudentFromDB(course, student) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await deleteStudentFromDBClient(client, student);
        //await deleteStudentFromClassDB(client, course, student);
    }
    finally {
        await client.close();
    }
}
async function deleteClassFromDB(user, course) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await deleteClassFromDBClient(client, course);
        //await deleteClassfromUserDB(client, user, course);
    }
    finally {
        await client.close();
    }
}
async function deleteUserFromDB(user) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await deleteUserFromDBClient(client, user);
    }
    finally {
        await client.close();
    }
}
async function deleteAttendanceFromDB(course, student, attendance) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await deleteStudentAttendanceFromDB(client, student, attendance);
        await deleteStudentAttendanceFromClassDB(client, course, student, attendance);
    }
    finally {
        await client.close();
    }
}
async function deleteBehaviorFromDB(course, student, behavior) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await deleteStudentBehaviorFromDB(client, student, behavior);
        await deleteStudentBehaviorFromClassDB(client, course, student, behavior);
    }
    finally {
        await client.close();
    }
}
async function deleteAssignmentFromDB(course, student, assignment) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await deleteStudentAssignmentFromDB(client, student, assignment);
        await deleteStudentAssignmentFromClassDB(client, course, student, assignment);
    }
    finally {
        await client.close();
    }
}
// UPDATE DOCUMENTS
async function updateEventFromDB(course, event, newEvent) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await updateEventFromDBClient(client, event, newEvent);
        //await updateEventFromClassDB(client, course, event, newEvent);
    }
    finally {
        await client.close();
    }
}
async function updateAnnouncementFromDB(course, announcement, newAnnouncement) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await updateAnnouncementFromDBClient(client, announcement, newAnnouncement);
        //await updateAnnouncementFromClassDB(client, course, announcement, newAnnouncement);
    }
    finally {
        await client.close();
    }
}
async function updateStudentFromDB(course, student, newStudent) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await updateStudentFromDBClient(client, student, newStudent);
        //await updateStudentFromClassDB(client, course, student, newStudent);
    }
    finally {
        await client.close();
    }
}
async function updateClassFromDB(user, course, newCourse) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await updateClassFromDBClient(client, course, newCourse);
        //await updateClassFromUserDB(client, user, course, newCourse);
    }
    finally {
        await client.close();
    }
}
async function updateUserFromDB(user, newUser) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await updateUserFromDBClient(client, user, newUser);
    }
    finally {
        await client.close();
    }
}
async function updateAttendanceFromDB(course, student, attendance, newAttendance) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await updateStudentAttendanceFromDB(client, student, attendance, newAttendance);
        await updateStudentAttendanceFromClassDB(client, course, student, attendance, newAttendance);
    }
    finally {
        await client.close();
    }
}
async function updateBehaviorFromDB(course, student, behavior, newBehavior) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await updateStudentBehaviorFromDB(client, student, behavior, newBehavior);
        await updateStudentBehaviorFromClassDB(client, course, student, behavior, newBehavior);
    }
    finally {
        await client.close();
    }
}
async function updateAssignmentFromDB(course, student, assignment, newAssignment) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await updateStudentAssignmentFromDB(client, student, assignment, newAssignment);
        await updateStudentAssignmentFromClassDB(client, course, student, assignment, newAssignment);
    }
    finally {
        await client.close();
    }
}
// READ DOCUMENT
async function getEventFromDB(event) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    var readEvent;
    try {
        await client.connect();
        readEvent = await retrieveEventFromDB(client, event);
    }
    finally {
        await client.close();
        return readEvent;
    }
}

async function getEventArrayFromDB() {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    var eventArr;
    try {
        await client.connect();
        eventArr = await retrieveEventArrayFromDB(client);
    }
    finally {
        await client.close();
        return eventArr;
    }
}
async function getAnnouncementFromDB(announcement) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    var readAnnouncement;
    try {
        await client.connect();
        readAnnouncement = await retrieveAnnouncementFromDB(client, announcement);
    }
    finally {
        await client.close();
        return readAnnouncement;
    }
}
async function getAnnouncementArrayFromDB() {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    var announcementArr;
    try {
        await client.connect();
        announcementArr = await retrieveAnnouncementArrayFromDB(client);
    }
    finally {
        await client.close();
        return announcementArr;
    }
}
async function getStudentFromDB(student) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    var readStudent;
    try {
        await client.connect();
        readStudent = await retrieveStudentFromDB(client, student);
    }
    finally {
        await client.close();
        return readStudent;
    }
}
async function getStudentArrayFromDB() {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    var studentArr;
    try {
        await client.connect();
        studentArr = await retrieveStudentArrayFromDB(client);
    }
    finally {
        await client.close();
        return studentArr;
    }
}
async function getClassFromDB(course) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    var readClass;
    try {
        await client.connect();
        readClass = await retrieveClassFromDB(client, course);
    }
    finally {
        await client.close();
        return readClass;
    }
}
async function getClassArrayFromDB() {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    var classArr;
    try {
        await client.connect();
        classArr = await retrieveClassArrayFromDB(client);
    }
    finally {
        await client.close();
        return classArr;
    }
}
async function getUserFromDB(user) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    var readUser;
    try {
        await client.connect();
        readUser = await retrieveUserFromDB(client, user);
    }
    finally {
        await client.close();
        return readUser;
    }
}
async function getUserArrayFromDB() {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    var userArr;
    try {
        await client.connect();
        userArr = await retrieveUserArrayFromDB(client);
    }
    finally {
        await client.close();
        return userArr;
    }
}

// Functions to write to MongoDB
// HELPER FUNCTIONS, CALL THE ONES ABOVE
// ADD NEW DOCUMENTS
async function addNewEventToDB(client, event){
    let JSONEvent = event.toJSON(); 
    const result = await client.db("classparency").collection("events").insertOne(JSONEvent);       
    console.log(`New event created with the following id: ${result.insertedId}`);
}
async function addNewEventToClassDB(client, course, event){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONEvent = event.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId}, {$push: {events: JSONEvent}});
}
async function addNewAnnouncementToDB(client, announcement){
    let JSONAnnouncement = announcement.toJSON(); 
    const result = await client.db("classparency").collection("announcements").insertOne(JSONAnnouncement);
    console.log(`New announcement created with the following id: ${result.insertedId}`);
}
async function addNewAnnouncementToClassDB(client, course, announcement){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONAnnouncement = announcement.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId}, {$push: {announcements: JSONAnnouncement}});
}
async function addNewStudentToDB(client, student){
    let JSONStudent = student.toJSON(); 
    const result = await client.db("classparency").collection("students").insertOne(JSONStudent);
    console.log(`New student created with the following id: ${result.insertedId}`);
}
async function addNewStudentToClassDB(client, course, student){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONStudent = student.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId}, {$push: {students: JSONStudent}});
}
async function addNewClassToDB(client, newClass){
    let JSONClass = newClass.toJSON(); 
    const result = await client.db("classparency").collection("classes").insertOne(JSONClass);
    console.log(`New class created with the following id: ${result.insertedId}`);
}
async function addNewClassToUserDB(client, user, course){
    let name = user.username;
    const query = {username: name};
    const finding = await client.db("classparency").collection("users").findOne(query);
    let stringId = finding._id;        
    let JSONCourse = course.toJSON();
    const result = await client.db("classparency").collection("users").updateOne({"_id": stringId}, {$push: {classes: JSONCourse}});
}
async function addNewUserToDB(client, user){
    let JSONUser = user.toJSON(); 
    const result = await client.db("classparency").collection("users").insertOne(JSONUser);
    console.log(`New user created with the following id: ${result.insertedId}`);
}
async function addStudentAttendanceToDB(client, student, attendance){
    let id = student.studentId;
    const query = {studentId: id};
    const finding = await client.db("classparency").collection("students").findOne(query);
    let stringId = finding._id;        
    let JSONAttendance = attendance.toJSON();
    const result = await client.db("classparency").collection("students").updateOne({"_id": stringId}, {$push: { studentAttendance: JSONAttendance}});
}
async function addStudentAttendanceToClassDB(client, course, student, attendance){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONAttendance = attendance.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "students.studentId": student.studentId}, {$push: {"students.$.studentAttendance": JSONAttendance}});
}
async function addStudentBehaviorToDB(client, student, behavior){
    let id = student.studentId;
    const query = {studentId: id};
    const finding = await client.db("classparency").collection("students").findOne(query);
    let stringId = finding._id;        
    let JSONBehavior = behavior.toJSON();
    const result = await client.db("classparency").collection("students").updateOne({"_id": stringId}, {$push: {studentBehavior: JSONBehavior}});
}
async function addStudentBehaviorToClassDB(client, course, student, behavior){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONBehavior = behavior.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "students.studentId": student.studentId}, {$push: {"students.$.studentBehavior": JSONBehavior}});
}
async function addStudentAssignmentToDB(client, student, assignment){
    let id = student.studentId;
    const query = {studentId: id};
    const finding = await client.db("classparency").collection("students").findOne(query);
    let stringId = finding._id;        
    let JSONAssignment = assignment.toJSON();
    const result = await client.db("classparency").collection("students").updateOne({"_id": stringId}, {$push: {studentAssignments: JSONAssignment}}); 
}
async function addStudentAssignmentToClassDB(client, course, student, assignment){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONAssignment = assignment.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "students.studentId": student.studentId}, {$push: {"students.$.studentAssignments": JSONAssignment}});
}
// DELETE DOCUMENTS
 async function deleteEventFromDBClient(client, event){
    let name = event.eventName;
    const query = {eventName: name};
    const result = await client.db("classparency").collection("events").deleteOne(query);
    if (result.deletedCount === 1) {
        console.log("Successfully deleted one document.");
    } 
    else {
        console.log("No documents matched the query. Deleted 0 documents.");
    } 
}
async function deleteEventFromClassDB(client, course, event){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONEvent = event.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId}, {$pull: {events: JSONEvent}});
}
async function deleteAnnouncementFromDBClient(client, announcement){
    let name = announcement.title;
    const query = {title: name};
    const result = await client.db("classparency").collection("announcements").deleteOne(query);
    if (result.deletedCount === 1) {
        console.log("Successfully deleted one document.");
    } 
    else {
        console.log("No documents matched the query. Deleted 0 documents.");
    }
}
async function deleteAnnouncementFromClassDB(client, course, announcement){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONAnnouncement = announcement.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId}, {$pull: {events: JSONAnnouncement}});
}
async function deleteStudentFromDBClient(client, student){
    let id = student.studentId;
    const query = {studentId: id};
    const result = await client.db("classparency").collection("students").deleteOne(query);
    if (result.deletedCount === 1) {
        console.log("Successfully deleted one document.");
    } 
    else {
        console.log("No documents matched the query. Deleted 0 documents.");
    }
}
async function deleteStudentFromClassDB(client, course, student){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONStudent = student.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId}, {$pull: {students: JSONStudent}});
}
async function deleteClassFromDBClient(client, removedClass){
    let name = removedClass.courseName;
    const query = {courseName: name};
    const result = await client.db("classparency").collection("classes").deleteOne(query);
    if (result.deletedCount === 1) {
        console.log("Successfully deleted one document.");
    } 
     else {
        console.log("No documents matched the query. Deleted 0 documents.");
    }   
}
async function deleteClassfromUserDB(client, user, course){
    let name = user.username;
    const query = {username: name};
    const finding = await client.db("classparency").collection("users").findOne(query);
    let stringId = finding._id;        
    let JSONCourse = course.toJSON();
    const result = await client.db("classparency").collection("users").updateOne({"_id": stringId}, {$pull: {classes: JSONCourse}});
}
async function deleteUserFromDBClient(client, user){
    let name = user.username;
    const query = {username: name};
    const result = await client.db("classparency").collection("users").deleteOne(query);
    if (result.deletedCount === 1) {
        console.log("Successfully deleted one document.");
    } 
    else {
        console.log("No documents matched the query. Deleted 0 documents.");
    }
}
async function deleteStudentAttendanceFromDB(client, student, attendance){
    let name = student.studentId;
    const query = {studentId: name};
    const finding = await client.db("classparency").collection("students").findOne(query);
    let stringId = finding._id;        
    let JSONAttendance = attendance.toJSON();
    const result = await client.db("classparency").collection("students").updateOne({"_id": stringId}, {$pull: {studentAttendance: JSONAttendance}});
}
async function deleteStudentAttendanceFromClassDB(client, course, student, attendance){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONAttendance = attendance.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "students.studentId": student.studentId}, {$pull: {"students.$.studentAttendance": JSONAttendance}});
}
async function deleteStudentBehaviorFromDB(client, student, behavior){
    let name = student.studentId;
    const query = {studentId: name};
    const finding = await client.db("classparency").collection("students").findOne(query);
    let stringId = finding._id;        
    let JSONBehavior = behavior.toJSON();
    const result = await client.db("classparency").collection("students").updateOne({"_id": stringId}, {$pull: {studentBehavior: JSONBehavior}});
}
async function deleteStudentBehaviorFromClassDB(client, course, student, behavior){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONBehavior = behavior.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "students.studentId": student.studentId}, {$pull: {"students.$.studentBehavior": JSONBehavior}});
}
async function deleteStudentAssignmentFromDB(client, student, assignment){
    let name = student.studentId;
    const query = {studentId: name};
    const finding = await client.db("classparency").collection("students").findOne(query);
    let stringId = finding._id;        
    let JSONAssignment = assignment.toJSON();
    const result = await client.db("classparency").collection("students").updateOne({"_id": stringId}, {$pull: {studentAssignments: JSONAssignment}});
}
async function deleteStudentAssignmentFromClassDB(client, course, student, assignment){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONAssignment = assignment.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "students.studentId": student.studentId}, {$pull: {"students.$.studentAssignments": JSONAssignment}});
}
// UPDATE EXISTING DOCUMENTS
async function updateEventFromDBClient(client, event, newEvent){
    let name = event.eventName;
    const query = {eventName: name};
    const finding = await client.db("classparency").collection("events").findOne(query);
    let stringId = finding._id;  
    let update = newEvent.toJSON();  
    const result = await client.db("classparency").collection("events").updateOne({"_id": stringId}, {$set: update});
}
async function updateEventFromClassDB(client, course, event, newEvent){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONEvent = newEvent.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "events.eventName": event.eventName}, {$set: {"events.$": JSONEvent}});
}
async function updateAnnouncementFromDBClient(client, announcement, newAnnouncement){
    let name = announcement.title;
    const query = {title: name};
    const finding = await client.db("classparency").collection("announcements").findOne(query);
    let stringId = finding._id;  
    let update = newAnnouncement.toJSON();  
    const result = await client.db("classparency").collection("announcements").updateOne({"_id": stringId}, {$set: update});
}
async function updateAnnouncementFromClassDB(client, course, announcement, newAnnouncement){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONAnnouncement = newAnnouncement.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "announcements.title": announcement.title}, {$set: {"announcements.$": JSONAnnouncement}});
}
async function updateStudentFromDBClient(client, student, newStudent){
    let name = student.studentId;
    const query = {studentId: name};
    const finding = await client.db("classparency").collection("students").findOne(query);
    let stringId = finding._id;  
    let update = newStudent.toJSON();  
    const result = await client.db("classparency").collection("students").updateOne({"_id": stringId}, {$set: update});
}
async function updateStudentFromClassDB(client, course, student, newStudent){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONStudent = newStudent.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "students.studentId": student.studentId}, {$set: {"students.$": JSONStudent}});
}
async function updateClassFromDBClient(client, course, newCourse){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;  
    let update = newCourse.toJSON();  
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId}, {$set: update});
}
async function updateClassFromUserDB(client, user, course, newCourse){
    let name = user.username;
    const query = {username: name};
    const finding = await client.db("classparency").collection("users").findOne(query);
    let stringId = finding._id;        
    let JSONClass = newCourse.toJSON();
    const result = await client.db("classparency").collection("users").updateOne({"_id": stringId, "classes.courseName": course.courseName}, {$set: {"classes.$": JSONClass}});
}
async function updateUserFromDBClient(client, user, newUser){
    let name = user.username;
    const query = {username: name};
    const finding = await client.db("classparency").collection("users").findOne(query);
    let stringId = finding._id;  
    let update = newUser.toJSON();  
    const result = await client.db("classparency").collection("users").updateOne({"_id": stringId}, {$set: update});
}
async function updateStudentAttendanceFromDB(client, student, attendance, newAttendance){
    let name = student.studentId;
    const query = {studentId: name};
    const finding = await client.db("classparency").collection("students").findOne(query);
    let stringId = finding._id;        
    let JSONAttendance = newAttendance.toJSON();
    const result = await client.db("classparency").collection("students").updateOne({"_id": stringId, "studentAttendance.date": attendance.date}, {$set: {"studentAttendance.$": JSONAttendance}});
}
async function updateStudentAttendanceFromClassDB(client, course, student, attendance, newAttendance){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONAttendance = newAttendance.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "students.studentId": student.studentId, "students.studentAttendance.date": attendance.date}, {$set: {"students.$.studentAttendance": JSONAttendance}});
}
async function updateStudentBehaviorFromDB(client, student, behavior, newBehavior){
    let name = student.studentId;
    const query = {studentId: name};
    const finding = await client.db("classparency").collection("students").findOne(query);
    let stringId = finding._id;        
    let JSONBehavior = newBehavior.toJSON();
    const result = await client.db("classparency").collection("students").updateOne({"_id": stringId, "studentBehavior.date": behavior.date, "studentBehavior.incident": behavior.incident}, {$set: {"studentBehavior.$": JSONBehavior}});
}
async function updateStudentBehaviorFromClassDB(client, course, student, behavior, newBehavior){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONBehavior = newBehavior.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "students.studentId": student.studentId, "students.studentBehavior.date": behavior.date, "students.studentBehavior.incident": behavior.incident }, {$set: {"students.$.studentBehavior": JSONBehavior}});
}
async function updateStudentAssignmentFromDB(client, student, assignment, newAssignment){
    let name = student.studentId;
    const query = {studentId: name};
    const finding = await client.db("classparency").collection("students").findOne(query);
    let stringId = finding._id;        
    let JSONAssignment = newAssignment.toJSON();
    const result = await client.db("classparency").collection("students").updateOne({"_id": stringId, "studentAssignments.assignmentName": assignment.assignmentName}, {$set: {"studentAssignments.$": JSONAssignment}});
}
async function updateStudentAssignmentFromClassDB(client, course, student, assignment, newAssignment){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONAssignment = newAssignment.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "students.studentId": student.studentId, "students.studentAssignments.assignmentName": assignment.assignmentName}, {$set: {"students.$.studentAssignments": JSONAssignment}});
}

// Read from MongoDB
async function retrieveEventArrayFromDB(client){
    let eventArray = new Array();
    eventArray = await client.db("classparency").collection("events").find({},{projection:{ _id: 0 }}).toArray();
    return eventArray;
}
async function retrieveEventFromDB(client, event){
    let name = event.eventName;
    const query = {eventName: name};
    const finding = await client.db("classparency").collection("events").findOne(query);
    let stringId = finding._id; 
    const eventObj = await client.db("classparency").collection("events").findOne({"_id": stringId});
    return eventObj;
}
async function retrieveAnnouncementArrayFromDB(client){
    let announcementArray = new Array();
    announcementArray = await client.db("classparency").collection("announcements").find({},{projection:{ _id: 0 }}).toArray();
    return announcementArray;
}
async function retrieveAnnouncementFromDB(client, announcement){
    let name = announcement.title;
    const query = {title: name};
    const finding = await client.db("classparency").collection("announcements").findOne(query);
    let stringId = finding._id;
    const announcementObj = await client.db("classparency").collection("announcements").findOne({"_id": stringId});
    return announcementObj;
}
async function retrieveStudentArrayFromDB(client){
    let studentArray = new Array();
    studentArray = await client.db("classparency").collection("students").find({},{projection:{ _id: 0 }}).toArray();
    return studentArray;
}
// Use student.fieldname to get info from student
async function retrieveStudentFromDB(client, student){
    let id = student.studentId;
    const query = {studentId: id};
    const finding = await client.db("classparency").collection("students").findOne(query);
    let stringId = finding._id; 
    const studentObj = await client.db("classparency").collection("students").findOne({"_id": stringId}, {projection:{ _id: 0 }});
    return studentObj;
}
async function retrieveClassArrayFromDB(client){
    let classArray = new Array();
    classArray = await client.db("classparency").collection("classes").find({},{projection:{ _id: 0 }}).toArray();
    return classArray;
}
async function retrieveClassFromDB(client, course){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id; 
    const classObj = await client.db("classparency").collection("classes").findOne({"_id": stringId}, {projection:{ _id: 0 }});
    return classObj;
}
async function retrieveUserArrayFromDB(client){
    let userArray = new Array();
    userArray = await client.db("classparency").collection("users").find({},{projection:{ _id: 0 }}).toArray();
    return userArray;
}
async function retrieveUserFromDB(client, user){
    let name = user.username;
    const query = {username: name};
    const finding = await client.db("classparency").collection("users").findOne(query);
    let stringId = finding._id; 
    const userObj = await client.db("classparency").collection("users").findOne({"_id": stringId}, {projection:{ _id: 0 }});
    return userObj;
}