// DEMO Main for Testing DB functions
/*async function main() {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";

    const client = new MongoClient(uri);

    try {
        await client.connect();
        var class1 = new Class("courseName", "Jane Doe", "9", 10, 25, 40, 25);
        var student1 = new Student(10000000, "alt", "John", "Doe", "male", 5, 21, 2010, "jDoe@gmail.com", false, true, true);
        var student1Day1 = new Attendance(9, 1, 2022, "Present");
        var student1Day2 = new Attendance(9, 2, 2022, "Present");
        var student1Behavior1 = new Behavior("Touching Others", 9, 1, 2022, "talking during reading time");
        var student1Behavior2 = new Behavior("Self Harm", 9, 3, 2022, "play fighting with student2");
        //await deleteStudentFromClassDB(client, class1, student1);
        //await addNewStudentToClassDB(client, class1, student1);
        //await addStudentAttendanceToDB(client, student1, student1Day2);
        //await updateStudentAttendanceFromClassDB(client, class1, student1, student1Day1, student1Day2);
        //await deleteStudentAttendanceFromClassDB(client, class1, student1, student1Day2);
        //await addStudentBehaviorToClassDB(client, class1, student1, student1Behavior1);
        //await updateStudentBehaviorFromClassDB(client, class1, student1, student1Behavior1, student1Behavior2);
        //var event1 = new Event("halloween", 10, 31, 2022, "party", "fs");
        //var event2 = new Event("halloween party", 10, 31, 2022, "party", "fs");
        //var event3 = new Event("end of october", 10, 31, 2022, "party", "fs");
        //await addNewEventToDB(client, event3);
        //await addNewEventToClassDB(client, class1, event3);
        //await deleteEventFromClassDB(client, class1, event1);
        //await updateEventToDB(client, event2, event1);
        //await updateEventFromClassDB(client, class1, event2, event1);
        //await addNewClassToDB(client, class1);
        var arr = await retrieveEventArrayFromDB(client);
        //var arr = new Array();
        //var arr = await retrieveStudentFromDB(client, student1);//retrieveStudentFromDB(client, student1);
        console.log(arr);//JSON.parse(arr));
    }
    finally {
        await client.close();
    }
}
main().catch(console.error);*/