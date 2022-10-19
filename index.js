// Classes for Backend
// ATTENDANCE
class Attendance {
    #date;
    #status;
    constructor(date, status){
        this.#date = date;
        this.#status = status;
    }
    set date(date){
        this.#date = date;
    }
    set status(status){
        this.#status = status;
    }
    get date(){
        return this.#date;
    }
    get status(){
        return this.#status;
    }
}

// BEHAVIOR
class Behavior {
    #incident;
    #date;
    #comment;
    constructor(incident, date, comment){
        this.#incident = incident;
        this.#date = date;
        this.#comment = comment;
    }
    set incident(incident){
        this.#incident = incident;
    }
    set date(date) {
        this.#date = date;
    }
    set comment(comment) {
        this.#comment = comment;
    }
    get incident() {
        return this.#incident;
    }
    get date() {
        return this.#date;
    }
    get comment() {
        return this.#comment;
    }
}

// ASSIGNMENT
class Assignment {
    #assignmentName;
    #assignmentCategory;
    #assignmentWeight;
    #possibleScore;
    #givenScore;
    #date;
    #assignmentPercentage;
    constructor(name, category, weight, possibleScore, givenScore, date){
        this.#assignmentName = name;
        this.#assignmentCategory = category;
        this.#assignmentWeight = weight;
        this.#possibleScore = possibleScore;
        this.#givenScore = givenScore;
        this.#date = date;
        this.#assignmentPercentage = (this.#givenScore/this.#possibleScore)*100;
    }
    set assignmentName(name) {
        this.#assignmentName = name;
    }
    set assignmentCategory(category){
        this.#assignmentCategory = category;
    }
    set assignmentWeight(weight){
        this.#assignmentWeight = weight;
    }
    set possibleScore(possibleScore){
        this.#possibleScore = possibleScore;
    }
    set givenScore(givenScore){
        this.#givenScore = givenScore;
    }
    set date(date){
        this.#date = date;
    }
    get assignmentName() {
        return this.#assignmentName;
    }
    get assignmentCategory(){
        return this.#assignmentCategory;
    }
    get assignmentWeight(){
        return this.#assignmentWeight;
    }
    get possibleScore(){
        return this.#possibleScore;
    }
    get givenScore(){
        return this.#givenScore;
    }
    get date(){
        return this.#date;
    }
    get assignmentPercentage(){
        return this.#assignmentPercentage;
    } 
}

// EVENT
class Event{
    #eventName;
    #date;
    #description;
    #location;
    constructor(eventName, date, description, location){
        this.#eventName = eventName;
        this.#date = date;
        this.#description = description;
        this.#location = location;
    }
    set eventName(eventName){
        this.#eventName = eventName;
    }
    set date(date){
        this.#date = date;
    }
    set description(description){
        this.#description = description;
    }
    set location(location){
        this.#location = location;
    }
    get eventName(){
        return this.#eventName;
    }
    get date(){
        return this.#date;
    }
    get description(){
        return this.#description;
    }
    get location(){
        return this.#location;
    }
}

// REMINDER
class Reminder{
    #title;
    #description;
    #date;
    constructor(title, description, date){
        this.#title = title;
        this.#description = description;
        this.#date = date;
    }
    set title(title){
        this.#title = title;
    }
    set description(description){
        this.#description = description;
    }
    set date(date){
        this.#date = date;
    }
    get title(){
        return this.#title;
    }
    get description(){
        return this.#description;
    }
    get date(){
        return this.#date;
    }
}

//STUDENT
class Student{
    // STUDENT INFORMATION
    #studentId;
    #photo;
    #firstName;
    #lastName;
    #gender;
    #birthDate;
    #contactEmail;
    #SPED;
    #EL;
    #internetAccess;
    // TOTAL ASSIGNMENTS
    #totalHomework;
    #totalQuizzes;
    #totalExams;
    #totalProjects;
    #totalOtherAssignments;
    #totalAssignments;
    #letterGrade;
    #gradePercentage;
    #studentAssignments;
    // TOTAL ATTENDANCE
    #totalDays;
    #totalPresentAttendance;
    #totalAbsentAttendance;
    #totalAttendancePercentage;
    #studentAttendance;
    // TOTAL BEHAVIOR INCIDENTS
    #totalOffTask;
    #totalRefusingToWork;
    #totalOutOfSeat;
    #totalTalking;
    #totalThrowingObject;
    #totalTouchingOthers;
    #totalSelfHarm;
    #totalInappropriateLang;
    #totalBullyingTeasing;
    #totalPropertyDamage;
    #totalDefianceDisrespect;
    #totalTheft;
    #totalLyingCheating;
    #totalOtherBehavior;
    #totalBehavior
    #studentBehavior;
    constructor(studentId, photo, firstName, lastName, gender, birthDate, contactEmail, SPED, EL, internetAccess){
        // STUDENT INFORMATION
        this.#studentId = studentId;
        this.#photo = photo;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#gender = gender;
        this.#birthDate = birthDate;
        this.#contactEmail = contactEmail;
        this.#SPED = SPED;
        this.#EL = EL;
        this.#internetAccess = internetAccess;
        // STUDENT ASSIGNMENT INFORMATION
        this.#totalHomework = 0;
        this.#totalQuizzes = 0;
        this.#totalExams = 0;
        this.#totalProjects = 0;
        this.#totalOtherAssignments = 0;
        this.#totalAssignments = 0;
        this.#letterGrade = "";
        this.#gradePercentage = 0.0;
        this.#studentAssignments = [];
        // STUDENT BEHAVIOR
        this.#totalBehavior = 0;
        this.#totalOffTask = 0;
        this.#totalRefusingToWork = 0;
        this.#totalOutOfSeat = 0;
        this.#totalTalking = 0;
        this.#totalThrowingObject = 0;
        this.#totalTouchingOthers = 0;
        this.#totalSelfHarm = 0;
        this.#totalInappropriateLang = 0;
        this.#totalBullyingTeasing = 0;
        this.#totalPropertyDamage = 0;
        this.#totalDefianceDisrespect = 0;
        this.#totalTheft = 0;
        this.#totalLyingCheating = 0;
        this.#totalOtherBehavior = 0;
        this.#studentBehavior = [];
        // STUDENT ATTENDANCE INFORMATION
        this.#totalPresentAttendance = 0;
        this.#totalAttendancePercentage = 0.0;
        this.#studentAttendance = [];
    }
    set studentId(studentId){
        this.#studentId = studentId;
    }
    set photo(photo){
        this.#photo = photo;
    }
    set firstName(firstName){
        this.#firstName = firstName;
    }
    set lastName(lastName){
        this.#lastName = lastName;
    }
    set gender(gender){
        this.#gender = gender;
    }
    set birthDate(birthDate){
        this.#birthDate = birthDate;
    }
    set contactEmail(contactEmail){
        this.#contactEmail = contactEmail;
    }
    set SPED(isSPED){
        this.#SPED = isSPED;
    }
    set EL(isEL){
        this.#EL = isEL;
    }
    set internetAccess(hasInternet){
        this.#internetAccess = hasInternet;
    }
    calculateLetterGrade(){
        if (this.#gradePercentage < 60) {
            this.#letterGrade = "F";
        }
        else if (this.#gradePercentage < 65){
            this.#letterGrade = "D-";
        }
        else if (this.#gradePercentage < 70) {
            this.#letterGrade = "D+";
        }
        else if (this.#gradePercentage < 73){
            this.#letterGrade = "C-";
        }
        else if (this.#gradePercentage < 77){
            this.#letterGrade = "C";
        }
        else if (this.#gradePercentage < 80){
            this.#letterGrade = "C+";
        }
        else if (this.#gradePercentage < 83){
            this.#letterGrade = "B-";
        }
        else if (this.#gradePercentage < 87){
            this.#letterGrade = "B";
        }
        else if (this.#gradePercentage < 90){
            this.#letterGrade = "B+";
        }
        else if (this.#gradePercentage < 93){
            this.#letterGrade = "A-";
        }
        else if (this.#gradePercentage < 97){
            this.#letterGrade = "A";
        }
        else this.#letterGrade = "A+";
    }
    calculateGradePercentage(){
        var sum = 0.0;
        var points = 0.0;
        for (let i = 0; i < this.#studentAssignments.length; i++){
            points = (this.#studentAssignments[i].givenScore + this.#studentAssignments[i].assignmentWeight) / this.#studentAssignments[i].possibleScore;
            sum += points;
        }
        this.#gradePercentage = sum*100;
    }
    addAttendance(date, status){
        let a = new Attendance(date, status);
        this.#studentAttendance.push(a);
        this.#totalDays++;
        if (status == "Present"){
            this.#totalPresentAttendance++;
        }
        else if (status == "Absent"){
            this.#totalAbsentAttendance++;
        }
        this.#totalAttendancePercentage = ((this.#totalPresentAttendance) / this.#totalDays) * 100;
    }
    removeAttendance(date) {
        let pos = this.#studentAttendance.findIndex(
            element => element.date === date
        );
        if (pos > -1) { // only splice array when item is found
            if (this.#studentAttendance[pos].status == "Present"){
                this.#totalPresentAttendance--;
            }
            else if (this.#studentAttendance[pos].status == "Absent"){
                this.#totalAbsentAttendance--;
            }
            this.#studentAttendance.splice(pos, 1); // 2nd parameter means remove one item only
            this.#totalDays--;
            this.#totalAttendancePercentage = ((this.#totalPresentAttendance) / this.#totalDays) * 100;
        }
    }
    addBehavior(incident, date, comment){
        let b = new Behavior(incident, date, comment);
        this.#studentBehavior.push(b);
        this.#totalBehavior++;
        if (incident == "Off Task"){
            this.#totalOffTask++;
        }
        else if (incident == "Refusing to Work"){
            this.#totalRefusingToWork++;
        }
        else if (incident == "Out of Seat"){
            this.#totalRefusingToWork++;
        }
        else if (incident == "Talking"){
            this.#totalTalking++;
        }
        else if (incident == "Throwing Object"){
            this.#totalThrowingObject++;
        }
        else if (incident == "Touching Object"){
            this.#totalThrowingObject++;
        }
        else if (incident == "Touching Others"){
            this.#totalTouchingOthers++;
        }
        else if (incident == "Self Harm"){
            this.#totalSelfHarm++;
        }
        else if (incident == "Inappropriate Language"){
            this.#totalInappropriateLang++;
        }
        else if (incident == "Bullying or Teasing"){
            this.#totalBullyingTeasing++;
        }
        else if (incident == "Property Damage"){
            this.#totalPropertyDamage++;
        }
        else if (incident == "Defiance or Disrespect"){
            this.#totalDefianceDisrespect++;
        }
        else if (incident == "Theft"){
            this.#totalTheft++;
        }
        else if (incident == "Lying or Cheating"){
            this.#totalLyingCheating++;
        }
        else this.#totalOtherBehavior++;
    }
    removeBehavior(incident, date, comment){
        let pos = this.#studentBehavior.findIndex(
            element => element.incident === incident && element.date === date && element.comment === comment
        );
        if (pos > -1) { // only splice array when item is found
            this.#studentBehavior.splice(pos, 1); // 2nd parameter means remove one item only
        }
        this.#totalBehavior--;
        if (incident == "Off Task"){
            this.#totalOffTask--;
        }
        else if (incident == "Refusing to Work"){
            this.#totalRefusingToWork--;
        }
        else if (incident == "Out of Seat"){
            this.#totalRefusingToWork--;
        }
        else if (incident == "Talking"){
            this.#totalTalking--;
        }
        else if (incident == "Throwing Object"){
            this.#totalThrowingObject--;
        }
        else if (incident == "Touching Object"){
            this.#totalThrowingObject--;
        }
        else if (incident == "Touching Others"){
            this.#totalTouchingOthers--;
        }
        else if (incident == "Self Harm"){
            this.#totalSelfHarm--;
        }
        else if (incident == "Inappropriate Language"){
            this.#totalInappropriateLang--;
        }
        else if (incident == "Bullying or Teasing"){
            this.#totalBullyingTeasing--;
        }
        else if (incident == "Property Damage"){
            this.#totalPropertyDamage--;
        }
        else if (incident == "Defiance or Disrespect"){
            this.#totalDefianceDisrespect--;
        }
        else if (incident == "Theft"){
            this.#totalTheft--;
        }
        else if (incident == "Lying or Cheating"){
            this.#totalLyingCheating--;
        }
        else this.#totalOtherBehavior--;
    }
    addAssignment(assignmentName, assignmentCategory, assignmentWeight, possibleScore, givenScore, date, assignmentPercentage){
        let as = new Assignment(assignmentName, assignmentCategory, assignmentWeight, possibleScore, givenScore, date, assignmentPercentage);
        this.#studentAssignments.push(as);
        if (assignmentCategory == "Homework"){
            this.#totalHomework++;
        }
        else if (assignmentCategory == "Quiz"){
            this.#totalQuizzes++;
        }
        else if (assignmentCategory == "Exam"){
            this.#totalExams++;
        }
        else if (assignmentCategory == "Project"){
            this.#totalProjects++;
        }
        else this.#totalOtherAssignments++;
        this.#totalAssignments++;
        this.calculateGradePercentage();
        this.calculateLetterGrade();
    }
    removeAssignment(assignmentName){
        let pos = this.#studentAssignments.findIndex(
            element => element.assignmentName === assignmentName
        );
        if (pos > -1) { // only splice array when item is found
            if (this.#studentAssignments[pos].assignmentCategory == "Homework"){
                this.#totalHomework--;
            }
            else if (this.#studentAssignments[pos].assignmentCategory == "Quiz"){
                this.#totalQuizzes--;
            }
            else if (this.#studentAssignments[pos].assignmentCategory == "Exam"){
                this.#totalExams--;
            }
            else if (this.#studentAssignments[pos].assignmentCategory == "Project"){
                this.#totalProjects--;
            }
            else this.#totalOtherAssignments--;
            this.#studentAssignments.splice(pos, 1); // 2nd parameter means remove one item only
            this.#totalAssignments--;
            this.calculateGradePercentage();
            this.calculateLetterGrade();
        }
    }
    get studentId(){
        return this.#studentId;
    }
    get photo(){
        return this.#photo;
    }
    get firstName(){
        return this.#firstName;
    }
    get lastName(){
       return this.#lastName;
    }
    get gender(){
        return this.#gender;
    }
    get birthDate(){
       return this.#birthDate;
    }
    get contactEmail(){
        return this.#contactEmail;
    }
    get SPED(){
        return this.#SPED;
    }
    get EL(){
        return this.#EL;
    }
    get internetAccess(){
        return this.#internetAccess;
    }
    get totalHomework(){
        return this.#totalHomework;
    }
    get totalQuizzes(){
        return this.#totalQuizzes;
    }
    get totalExams(){
        return this.#totalExams;
    }
    get totalProjects(){
        return this.#totalProjects;
    }
    get totalOtherAssignments(){
        return this.#totalOtherAssignments;
    }
    get totalAssignments(){
        return this.#totalAssignments;
    }
    get letterGrade(){
        return this.#letterGrade;
    }
    get gradePercentage(){
       return this.#gradePercentage;
    }
    get totalDays(){
        return this.#totalDays;
    }
    get totalPresentAttendance(){
        return this.#totalPresentAttendance;
    }
    get totalAbsentAttendance(){
        return this.#totalAbsentAttendance;
    }
    get totalAttendancePercentage(){
        return this.#totalAttendancePercentage;
    }
    get studentAttendance(){
        return this.#studentAttendance;
    }
    get totalBehavior(){
        return this.#totalBehavior;
    }
    get totalOffTask(){
        return this.#totalOffTask;
    }
    get totalRefusingWork(){
       return this.#totalRefusingToWork;
    }
    get totalOutOfSeat(){
        return this.#totalOutOfSeat;
    }
    get totalTalking(){
        return this.#totalTalking;
    }
    get totalThrowingObject(){
        return this.#totalThrowingObject;
    }
    get totalTouchingOthers(){
        return this.#totalTouchingOthers;
    }
    get totalSelfHarm(){
        return this.#totalSelfHarm;
    }
    get totalInappropriateLang(){
        return this.#totalInappropriateLang;
    }
    get totalBullyingTeasing(){
        return this.#totalBullyingTeasing;
    }
    get totalPropertyDamage(){
        return this.#totalPropertyDamage;
    }
    get totalDefianceDisrespect(){
        return this.#totalDefianceDisrespect;
    }
    get totalTheft(){
        return this.#totalTheft;
    }
    get totalLyingCheating(){
        return this.#totalLyingCheating;
    }
    get totalOtherBehavior(){
        return this.#totalOtherBehavior;
    }
    get studentBehavior(){
        return this.#studentBehavior;
    }
    get studentAssignments(){
        return this.#studentAssignments;
    }
}

// CLASS
class Class {
    // COURSE INFORMATION
    #courseName;
    #instructorName;
    #gradeLevel;
    #totalNumberOfStudents;
    #totalSPED;
    #totalEL;
    #totalInternetAccess;
    #SPEDPercentage;
    #ELPercentage;
    #InternetAccessPercentage;
    // COURSE ATTENDANCE INFORMATION
    #totalAttendancePresent;
    #totalAttendanceAbsent;
    #totalAttendancePresentPercentage;
    #totalAttendanceAbsentPercentage;
    // COURSE BEHAVIOR INFORMATION
    #totalBehaviorIncidents;
    #totalOffTask;
    #totalRefusingToWork;
    #totalOutOfSeat;
    #totalTalking;
    #totalThrowingObject;
    #totalTouchingOthers;
    #totalSelfHarm;
    #totalInappropriateLang;
    #totalBullyingTeasing;
    #totalPropertyDamage;
    #totalDefianceDisrespect;
    #totalTheft;
    #totalLyingCheating;
    #totalOtherBehavior;
    // COURSE ASSIGNMENT INFORMATION
    #totalHomework;
    #totalQuizzes;
    #totalExams;
    #totalProjects;
    #totalOtherAssignments;
    #totalAssignments;
    #totalLetterGradeA;
    #totalLetterGradeB;
    #totalLetterGradeC;
    #totalLetterGradeD;
    #totalLetterGradeF;
    // ARRAYS OF STUDENTS, EVENTS, AND REMINDERS
    #students;
    #events;
    #reminders;
    constructor(courseName, instructorName, gradeLevel){
        this.#courseName = courseName;
        this.#instructorName = instructorName;
        this.#gradeLevel = gradeLevel;
        this.#totalNumberOfStudents = 0;
        this.#totalBehaviorIncidents = 0;
        this.#totalSPED = 0;
        this.#totalEL = 0;
        this.#totalInternetAccess = 0;
        this.#SPEDPercentage = 0.0;
        this.#ELPercentage = 0.0;
        this.#InternetAccessPercentage = 0.0;

        this.#totalAttendancePresent = 0;
        this.#totalAttendanceAbsent = 0;

        this.#totalOffTask = 0;
        this.#totalRefusingToWork = 0;
        this.#totalOutOfSeat = 0;
        this.#totalTalking = 0;
        this.#totalThrowingObject = 0;
        this.#totalTouchingOthers = 0;
        this.#totalSelfHarm = 0;
        this.#totalInappropriateLang = 0;
        this.#totalBullyingTeasing = 0;
        this.#totalPropertyDamage = 0;
        this.#totalDefianceDisrespect = 0;
        this.#totalTheft = 0;
        this.#totalLyingCheating = 0;
        this.#totalOtherBehavior = 0;
    
        this.#totalHomework = 0;
        this.#totalQuizzes = 0;
        this.#totalExams = 0;
        this.#totalProjects = 0;
        this.#totalOtherAssignments = 0;
        this.#totalAssignments = 0;
        this.#totalLetterGradeA = 0;
        this.#totalLetterGradeB = 0;
        this.#totalLetterGradeC = 0;
        this.#totalLetterGradeD = 0;
        this.#totalLetterGradeF = 0;

        this.#students = [];
        this.#events = [];
        this.#reminders = [];
    }
    set courseName(courseName) {
        this.#courseName = courseName;
    }
    set instructorName(instructorName){
        this.#instructorName = instructorName;
    }
    set gradeLevel(gradeLevel){
        this.#gradeLevel = gradeLevel;
    }
    addStudent(studentId, photo, firstName, lastName, gender, birthDate, contactEmail, SPED, EL, internetAccess){
        let s = new Student(studentId, photo, firstName, lastName, gender, birthDate, contactEmail, SPED, EL, internetAccess);
        this.#students.push(s);
        this.#totalNumberOfStudents++;
        if (SPED == true){
            this.#totalSPED++;
        }
        if (EL == true){
            this.#totalEL++;
        }
        if (internetAccess == true){
            this.#totalInternetAccess++;
        }
    }
    removeStudent(studentId){
        let pos = this.#students.findIndex(
            element => element.studentId === studentId
        );
        if (pos > -1) { // only splice array when item is found
            if (this.#students[pos].SPED == true){
                this.#totalSPED--;
            }
            if (this.#students[pos].EL == true){
                this.#totalEL--;
            }
            if (this.#students[pos].internetAccess == true){
                this.#totalInternetAccess--;
            }
            this.#students.splice(pos, 1); // 2nd parameter means remove one item only
            this.#totalNumberOfStudents--;
        }
    }
    addEvent(eventName, date, description, location){
        let e = new Event(eventName, date, description, location);
        this.#events.push(e);
    }
    removeEvent(eventName){
        let pos = this.#events.findIndex(
            element => element.eventName === eventName
        );
        if (pos > -1) { // only splice array when item is found
            this.#events.splice(pos, 1); // 2nd parameter means remove one item only
        }
    }
    addReminder(title, description, date){
        let r = new Reminder(title, description, date);
        this.#reminders.push(r);
    }
    removeReminder(title){
        let pos = this.#reminders.findIndex(
            element => element.title === title
        );
        if (pos > -1) { // only splice array when item is found
            this.#reminders.splice(pos, 1); // 2nd parameter means remove one item only
        } 
    }
    get courseName() {
        return this.#courseName;
    }
    get instructorName(){
        return this.#instructorName;
    }
    get gradeLevel(){
        return this.#gradeLevel;
    }
    get totaNumberOfStudents(){
        return this.#totalNumberOfStudents;
    }
    get totalBehaviorIncidents() {
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            sum += this.#students[i].totalBehavior;
        }
        this.#totalBehaviorIncidents = sum;
        return this.#totalBehaviorIncidents;
    }
    get totalSPED(){
        return this.#totalSPED;
    }
    get totalEL(){
        return this.#totalEL;
    }
    get totalInternetAccess(){
        return this.#totalInternetAccess;
    }
    get SPEDPercentage(){
        this.#SPEDPercentage = (this.#totalSPED / this.#totalNumberOfStudents) * 100;
        return this.#SPEDPercentage;
    }
    get ELPercentage(){
        this.#ELPercentage = (this.#totalEL / this.#totalNumberOfStudents) * 100;
        return this.#ELPercentage;
    }
    get InternetAccessPercentage(){
        this.#InternetAccessPercentage = (this.#totalInternetAccess / this.#totalNumberOfStudents) * 100;
        return this.#InternetAccessPercentage;
    }
    get totalAttendancePresent(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            sum += this.#students[i].totalPresentAttendance;
        }
        this.#totalAttendancePresent = sum;
        return this.#totalAttendancePresent;
    }
    get totalAttendanceAbsent(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            sum += this.#students[i].totalAbsentAttendance;
        }
        this.#totalAttendanceAbsent = sum;
        return this.#totalAttendanceAbsent;
    }
    get totalOffTask(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            sum += this.#students[i].totalOffTask;
        }
        this.#totalOffTask = sum;
        return this.#totalOffTask;
    }
    get totalRefusingToWork(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            sum += this.#students[i].totalRefusingToWork;
        }
        this.#totalRefusingToWork = sum;
        return this.#totalRefusingToWork;
    }
    get totalOutOfSeat(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            sum += this.#students[i].totalOutOfSeat;
        }
        this.#totalOutOfSeat = sum;
        return this.#totalOutOfSeat;
    }
    get totalTalking(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            sum += this.#students[i].totalTalking;
        }
        this.#totalTalking= sum;
        return this.#totalTalking;
    }
    get totalThrowingObject(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            sum += this.#students[i].totalThrowingObject;
        }
        this.#totalThrowingObject= sum;
        return this.#totalThrowingObject;
    }
    get totalTouchingOthers(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            sum += this.#students[i].totalTouchingOthers;
        }
        this.#totalTouchingOthers = sum;
        return this.#totalTouchingOthers;
    }
    get totalSelfHarm(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            sum += this.#students[i].totalSelfHarm;
        }
        this.#totalSelfHarm = sum;
        return this.#totalSelfHarm;
    }
    get totalInappropriateLang() {
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            sum += this.#students[i].totalInappropriateLang;
        }
        this.#totalInappropriateLang= sum;
        return this.#totalInappropriateLang;
    }
    get totalBullyingTeasing(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            sum += this.#students[i].totalBullyingTeasing;
        }
        this.#totalBullyingTeasing = sum;
        return this.#totalBullyingTeasing;
    }
    get totalPropertyDamage(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            sum += this.#students[i].totalPropertyDamage;
        }
        this.#totalPropertyDamage = sum;
        return this.#totalPropertyDamage;
    }
    get totalDefianceDisrespect(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            sum += this.#students[i].totalDefianceDisrespect;
        }
        this.#totalDefianceDisrespect= sum;
        return this.#totalDefianceDisrespect;
    }
    get totalTheft(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            sum += this.#students[i].totalTheft;
        }
        this.#totalTheft = sum;
        return this.#totalTheft;
    }
    get totalLyingCheating(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            sum += this.#students[i].totalLyingCheating;
        }
        this.#totalLyingCheating = sum;
        return this.#totalLyingCheating;
    }
    get totalOtherBehavior(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            sum += this.#students[i].totalOtherBehavior;
        }
        this.#totalOtherBehavior = sum;
        return this.#totalOtherBehavior;
    }
    get totalHomework(){
        this.#totalHomework = this.#students[0].totalHomework;
        return this.#totalHomework;
    }
    get totalQuizzes(){
        this.#totalQuizzes= this.#students[0].totalQuizzes;
        return this.#totalQuizzes;
    }
    get totalExams(){
        this.#totalExams = this.#students[0].totalExams;
        return this.#totalExams;
    }
    get totalProjects(){
        this.#totalProjects = this.#students[0].totalProjects;
        return this.#totalProjects;
    }
    get totalOtherAssignments(){
        this.#totalOtherAssignments = this.#students[0].totalOtherAssignments;
        return this.#totalOtherAssignments;
    }
    get totalAssignments(){
        this.#totalAssignments= this.#students[0].totalAssignments;
        return this.#totalAssignments;
    }
    get totalLetterGradeA(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            if (this.#students[i].letterGrade == "A+" || this.#students[i].letterGrade == "A" || this.#students[i].letterGrade == "A-"){
                sum++;
            }
        }
        this.#totalLetterGradeA = sum;
        return this.#totalLetterGradeA;
    }
    get totalLetterGradeB(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            if (this.#students[i].letterGrade == "B+" || this.#students[i].letterGrade == "B" || this.#students[i].letterGrade == "B-"){
                sum++;
            }
        }
        this.#totalLetterGradeB = sum;
        return this.#totalLetterGradeB;
    }
    get totalLetterGradeC(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            if (this.#students[i].letterGrade == "C+" || this.#students[i].letterGrade == "C" || this.#students[i].letterGrade == "C-"){
                sum++;
            }
        }
        this.#totalLetterGradeC = sum;
        return this.#totalLetterGradeC;
    }
    get totalLetterGradeD(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            if (this.#students[i].letterGrade == "D+" || this.#students[i].letterGrade == "D" || this.#students[i].letterGrade == "D-"){
                sum++;
            }
        }
        this.#totalLetterGradeD = sum;
        return this.#totalLetterGradeD;
    }
    get totalLetterGradeF(){
        let sum = 0;
        for (let i = 0; i < this.#students.length; i++){
            if (this.#students[i].letterGrade == "F"){
                sum++;
            }
        }
        this.#totalLetterGradeF = sum;
        return this.#totalLetterGradeF;
    }
    get students(){
        return this.#students;
    }
    get events(){
        return this.#events;
    }
    get reminders(){
        return this.#reminders;
    }
}
// TO DO: Add functions for percentages