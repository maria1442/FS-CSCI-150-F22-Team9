// CLASS STRUCTURES
const { execMap } = require("nodemon/lib/config/defaults");

// ATTENDANCE
class Attendance {
    #month;
    #day;
    #year;
    #date;
    #status = "";
    constructor(month, day, year, status){
        this.#month = month;
        this.#day = day;
        this.#year = year;
        this.#date = new Date(year, month, day);
        this.#status = status;
    }
    set month(month){
        this.#month = month;
    }
    set day(day){
        this.#day = day;
    }
    set year(year){
        this.#year = year;
    }
    set status(status){
        this.#status = status;
    }
    get month(){
        return this.#month;
    }
    get day(){
        return this.#day;
    }
    get year(){
        return this.#year;
    }
    get date(){
        return this.#date;
    }
    get status(){
        return this.#status;
    }
    toJSON(){
        return {
            date: this.#date,
            status: this.#status
        };
    }
    // Might be needed later for JSON parsing
    /*static fromJSON(obj){
        return new this(obj);
    }*/
}

// BEHAVIOR
class Behavior {
    #incident = "";
    #month;
    #day;
    #year;
    #date;
    #comment = "";
    constructor(incident, month, day, year, comment){
        this.#incident = incident;
        this.#month = month;
        this.#day = day;
        this.#year = year;
        this.#date = new Date(year, month, day);
        this.#comment = comment;
    }
    set incident(incident){
        this.#incident = incident;
    }
    set month(month){
        this.#month = month;
    }
    set day(day){
        this.#day = day;
    }
    set year(year){
        this.#year = year;
    }
    set comment(comment) {
        this.#comment = comment;
    }
    get incident() {
        return this.#incident;
    }
    get month(){
        return this.#month;
    }
    get day(){
        return this.#day;
    }
    get year(){
        return this.#year;
    }
    get date() {
        return this.#date;
    }
    get comment() {
        return this.#comment;
    }
    toJSON(){
        return {
            incident: this.#incident,
            date: this.#date,
            comment: this.#comment
        };
    }
}

// ASSIGNMENT
var quizWeight;
var homeworkWeight;
var examWeight;
var projectWeight;
class Assignment {
    #assignmentName = "";
    #assignmentCategory = "";
    #assignmentWeight;
    #possibleScore = 0;
    #givenScore = 0;
    #month;
    #day;
    #year;
    #date;
    #assignmentPercentage = 0;
    constructor(name, category, possibleScore, givenScore, month, day, year){
        this.#assignmentName = name;
        this.#assignmentCategory = category;
        if (category == "Homework"){
            this.#assignmentWeight = homeworkWeight;
        }
        else if (category == "Quiz"){
            this.#assignmentWeight = quizWeight;
        }
        else if (category == "Exam"){
            this.#assignmentWeight = examWeight;
        }
        else this.#assignmentWeight = projectWeight;
        this.#possibleScore = possibleScore;
        this.#givenScore = givenScore;
        this.#month = month;
        this.#day = day;
        this.#year = year;
        this.#date = new Date(year, month, day);
        this.#assignmentPercentage = (this.#givenScore / this.#possibleScore) * 100;
    }
    set assignmentName(name) {
        this.#assignmentName = name;
    }
    set assignmentCategory(category){
        this.#assignmentCategory = category;
    }
    set possibleScore(possibleScore){
        this.#possibleScore = possibleScore;
    }
    set givenScore(givenScore){
        this.#givenScore = givenScore;
    }
    set month(month){
        this.#month = month;
    }
    set day(day){
        this.#day = day;
    }
    set year(year){
        this.#year = year;
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
    get month(){
        return this.#month;
    }
    get day(){
        return this.#day;
    }
    get year(){
        return this.#year;
    }
    get date(){
        return this.#date;
    }
    get assignmentPercentage(){
        return this.#assignmentPercentage;
    } 
    toJSON(){
        return {
            assignmentName: this.#assignmentName,
            assignmentCategory: this.#assignmentCategory,
            assignmentWeight: this.#assignmentWeight,
            possibleScore: this.#possibleScore,
            givenScore: this.#givenScore,
            date: this.#date,
            assignmentPercentage: this.#assignmentPercentage
        };
    }
}

// EVENT
class Event{
    #eventName = "";
    #month;
    #day;
    #year;
    #date;
    #description = "";
    #location = "";
    constructor(eventName, month, day, year, description, location){
        this.#eventName = eventName;
        this.#month = month;
        this.#day = day;
        this.#year = year;
        this.#date = new Date(year, month, day);
        this.#description = description;
        this.#location = location;
    }
    set eventName(eventName){
        this.#eventName = eventName;
    }
    set month(month){
        this.#month = month;
    }
    set day(day){
        this.#day = day;
    }
    set year(year){
        this.#year = year;
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
    get month(){
        return this.#month;
    }
    get day(){
        return this.#day;
    }
    get year(){
        return this.#year;
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
    toJSON(){
        return {
            eventName: this.#eventName,
            date: this.#date,
            description: this.#description,
            location: this.#location
        };
    }
}

// ANNOUNCEMENT
class Announcement{
    #title = "";
    #description = "";
    #month;
    #day;
    #year;
    #date;
    constructor(title, description, month, day, year){
        this.#title = title;
        this.#description = description;
        this.#month = month;
        this.#day = day;
        this.#year = year;
        this.#date = new Date(year, month, day);
    }
    set title(title){
        this.#title = title;
    }
    set description(description){
        this.#description = description;
    }
    set month(month){
        this.#month = month;
    }
    set day(day){
        this.#day = day;
    }
    set year(year){
        this.#year = year;
    }
    get title(){
        return this.#title;
    }
    get description(){
        return this.#description;
    }
    get month(){
        return this.#month;
    }
    get day(){
        return this.#day;
    }
    get year(){
        return this.#year;
    }
    get date(){
        return this.#date;
    }
    toJSON(){
        return {
            title: this.#title,
            description: this.#description,
            date: this.#date
        };
    }
}

//STUDENT
class Student{
    // STUDENT INFORMATION
    #studentId = 0;
    #photo = "";
    #firstName = "";
    #lastName = "";
    #gender = "";
    #birthMonth;
    #birthDay;
    #birthYear;
    #birthDate;
    #contactEmail = "";
    #SPED = false;
    #EL = false;
    #internetAccess = false;
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
    #attendancePresentPercentage;
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
    #totalBehaviorIncidents;
    #offTaskPercentage; 
    #refusingToWorkPercentage;
    #outOfSeatPercentage;
    #talkingPercentage;
    #throwingObjectPercentage;
    #touchingOthersPercentage;
    #selfHarmPercentage;
    #inappropriateLangPercentage;
    #bullyingTeasingPercentage;
    #propertyDamagePercentage;
    #defianceDisrespectPercentage;
    #theftPercentage;
    #lyingCheatingPercentage;
    #otherBehaviorPercentage;
    #studentBehavior;
    constructor(studentId, photo, firstName, lastName, gender, birthMonth, birthDay, birthYear, contactEmail, SPED, EL, internetAccess){
        // STUDENT INFORMATION
        this.#studentId = studentId;
        this.#photo = photo;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#gender = gender;
        this.#birthMonth = birthMonth;
        this.#birthDay = birthDay;
        this.#birthYear = birthYear;
        this.#birthDate = new Date(birthYear, birthMonth, birthDay);
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
        this.#gradePercentage = 0;
        this.#studentAssignments = [];
        // STUDENT BEHAVIOR
        this.#totalBehaviorIncidents = 0;
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
        this.#offTaskPercentage = 0;
        this.#refusingToWorkPercentage = 0;
        this.#outOfSeatPercentage = 0;
        this.#talkingPercentage = 0;
        this.#throwingObjectPercentage = 0;
        this.#touchingOthersPercentage = 0;
        this.#selfHarmPercentage = 0;
        this.#inappropriateLangPercentage = 0;
        this.#bullyingTeasingPercentage = 0;
        this.#propertyDamagePercentage = 0;
        this.#defianceDisrespectPercentage = 0;
        this.#theftPercentage = 0;
        this.#lyingCheatingPercentage = 0;
        this.#otherBehaviorPercentage = 0;
        this.#studentBehavior = [];
        // STUDENT ATTENDANCE INFORMATION
        this.#totalDays = 0;
        this.#totalPresentAttendance = 0;
        this.#totalAbsentAttendance = 0;
        this.#attendancePresentPercentage = 0;
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
    set birthMonth(birthMonth){
        this.#birthMonth = birthMonth;
    }
    set birthDay(birthDay){
        this.#birthDay = birthDay;
    }
    set birthYear(birthYear){
        this.#birthYear = birthYear;
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
        var sum = 0;
        var points = 0;
        for (let i = 0; i < this.#studentAssignments.length; i++){
            points = (this.#studentAssignments[i].assignmentPercentage * this.#studentAssignments[i].assignmentWeight);
            sum += points;
        }
        if (this.#totalHomework == 0 && this.#totalQuizzes == 0 && this.#totalExams == 0){
            this.#gradePercentage = sum / (projectWeight);
        }
        else if (this.#totalHomework == 0 && this.#totalQuizzes == 0 && this.#totalProjects == 0){
            this.#gradePercentage = sum / (examWeight);
        }
        else if (this.#totalHomework == 0 && this.#totalExams == 0 && this.#totalProjects == 0){
            this.#gradePercentage = sum / (quizWeight);
        }
        else if (this.#totalQuizzes == 0 && this.#totalExams == 0 && this.#totalProjects == 0){
            this.#gradePercentage = sum / (homeworkWeight);
        }
        else if (this.#totalHomework == 0 && this.#totalQuizzes == 0){
            this.#gradePercentage = sum / (examWeight + projectWeight);
        }
        else if (this.#totalHomework == 0 && this.#totalExams == 0){
            this.#gradePercentage = sum / (quizWeight + projectWeight);
        }
        else if (this.#totalHomework == 0 && this.#totalProjects == 0){
            this.#gradePercentage = sum / (quizWeight + examWeight);
        }
        else if (this.#totalQuizzes == 0 && this.#totalExams == 0){
            this.#gradePercentage = sum / (homeworkWeight + projectWeight);
        }
        else if (this.#totalQuizzes == 0 && this.#totalProjects == 0){
            this.#gradePercentage = sum / (homeworkWeight + examWeight);
        }
        else if (this.#totalExams == 0 && this.#totalProjects == 0){
            this.#gradePercentage = sum / (homeworkWeight + quizWeight);
        }
        else if (this.#totalHomework == 0){
            this.#gradePercentage = sum / (quizWeight + examWeight + projectWeight);
        }
        else if (this.#totalQuizzes == 0){
            this.#gradePercentage = sum / (homeworkWeight + examWeight + projectWeight);
        }
        else if (this.#totalExams == 0){
            this.#gradePercentage = sum / (homeworkWeight + quizWeight + projectWeight);
        }
        else if (this.#totalProjects == 0){
            this.#gradePercentage = sum / (homeworkWeight + quizWeight + examWeight);
        }
        else this.#gradePercentage = sum / (homeworkWeight + quizWeight + examWeight + projectWeight);
    }
    addAttendance(attendanceObj){
        //let a = new Attendance(month, day, year, status);
        this.#studentAttendance.push(attendanceObj);
        this.#totalDays++;
        if (attendanceObj.status == "Present"){
            this.#totalPresentAttendance++;
        }
        else if (attendanceObj.status == "Absent"){
            this.#totalAbsentAttendance++;
        }
        this.#attendancePresentPercentage = ((this.#totalPresentAttendance) / this.#totalDays) * 100;
    }
    removeAttendance(attendanceObj) {
        let pos = this.#studentAttendance.findIndex(
            element => element.date === attendanceObj.date
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
            this.#attendancePresentPercentage = ((this.#totalPresentAttendance) / this.#totalDays) * 100;
        }
    }
    addBehavior(behaviorObj){
        //let b = new Behavior(incident, date, comment);
        this.#studentBehavior.push(behaviorObj);
        this.#totalBehaviorIncidents++;
        if (behaviorObj.incident == "Off Task"){
            this.#totalOffTask++;
        }
        else if (behaviorObj.incident  == "Refusing to Work"){
            this.#totalRefusingToWork++;
        }
        else if (behaviorObj.incident  == "Out of Seat"){
            this.#totalOutOfSeat++;
        }
        else if (behaviorObj.incident  == "Talking"){
            this.#totalTalking++;
        }
        else if (behaviorObj.incident  == "Throwing Object"){
            this.#totalThrowingObject++;
        }
        else if (behaviorObj.incident  == "Touching Others"){
            this.#totalTouchingOthers++;
        }
        else if (behaviorObj.incident  == "Self Harm"){
            this.#totalSelfHarm++;
        }
        else if (behaviorObj.incident  == "Inappropriate Language"){
            this.#totalInappropriateLang++;
        }
        else if (behaviorObj.incident  == "Bullying or Teasing"){
            this.#totalBullyingTeasing++;
        }
        else if (behaviorObj.incident  == "Property Damage"){
            this.#totalPropertyDamage++;
        }
        else if (behaviorObj.incident  == "Defiance or Disrespect"){
            this.#totalDefianceDisrespect++;
        }
        else if (behaviorObj.incident  == "Theft"){
            this.#totalTheft++;
        }
        else if (behaviorObj.incident  == "Lying or Cheating"){
            this.#totalLyingCheating++;
        }
        else {
            this.#totalOtherBehavior++;
        }
        this.#offTaskPercentage = (this.#totalOffTask / this.#totalBehaviorIncidents) * 100;
        this.#refusingToWorkPercentage= (this.#totalRefusingToWork / this.#totalBehaviorIncidents) * 100;
        this.#outOfSeatPercentage = (this.#totalOutOfSeat / this.#totalBehaviorIncidents) * 100;
        this.#talkingPercentage = (this.#totalTalking / this.#totalBehaviorIncidents) * 100;
        this.#throwingObjectPercentage = (this.#totalThrowingObject / this.#totalBehaviorIncidents) * 100;
        this.#touchingOthersPercentage = (this.#totalTouchingOthers / this.#totalBehaviorIncidents) * 100;
        this.#selfHarmPercentage = (this.#totalSelfHarm / this.#totalBehaviorIncidents) * 100;
        this.#inappropriateLangPercentage = (this.#totalInappropriateLang / this.#totalBehaviorIncidents) * 100;
        this.#bullyingTeasingPercentage = (this.#totalBullyingTeasing / this.#totalBehaviorIncidents) * 100;
        this.#propertyDamagePercentage= (this.#totalPropertyDamage / this.#totalBehaviorIncidents) * 100;
        this.#defianceDisrespectPercentage = (this.#totalDefianceDisrespect / this.#totalBehaviorIncidents) * 100;
        this.#theftPercentage = (this.#totalTheft / this.#totalBehaviorIncidents) * 100;
        this.#lyingCheatingPercentage = (this.#totalLyingCheating / this.#totalBehaviorIncidents) * 100;
        this.#otherBehaviorPercentage = (this.#totalOtherBehavior / this.#totalBehaviorIncidents) * 100;
    }
    removeBehavior(behaviorObj){
        let pos = this.#studentBehavior.findIndex(
            element => element.incident === behaviorObj.incident && element.date === behaviorObj.date && element.comment === behaviorObj.comment
        );
        if (pos > -1) { // only splice array when item is found
            this.#studentBehavior.splice(pos, 1); // 2nd parameter means remove one item only
        }
        this.#totalBehaviorIncidents--;
        if (behaviorObj.incident == "Off Task"){
            this.#totalOffTask--;
        }
        else if (behaviorObj.incident == "Refusing to Work"){
            this.#totalRefusingToWork--;
        }
        else if (behaviorObj.incident == "Out of Seat"){
            this.#totalOutOfSeat--;
        }
        else if (behaviorObj.incident == "Talking"){
            this.#totalTalking--;
        }
        else if (behaviorObj.incident == "Throwing Object"){
            this.#totalThrowingObject--;
        }
        else if (behaviorObj.incident == "Touching Others"){
            this.#totalTouchingOthers--;
        }
        else if (behaviorObj.incident == "Self Harm"){
            this.#totalSelfHarm--;
        }
        else if (behaviorObj.incident == "Inappropriate Language"){
            this.#totalInappropriateLang--;
        }
        else if (behaviorObj.incident == "Bullying or Teasing"){
            this.#totalBullyingTeasing--;
        }
        else if (behaviorObj.incident == "Property Damage"){
            this.#totalPropertyDamage--;
        }
        else if (behaviorObj.incident == "Defiance or Disrespect"){
            this.#totalDefianceDisrespect--;
        }
        else if (behaviorObj.incident == "Theft"){
            this.#totalTheft--;
        }
        else if (behaviorObj.incident == "Lying or Cheating"){
            this.#totalLyingCheating--;
        }
        else {
            this.#totalOtherBehavior--;
        }
        this.#offTaskPercentage = (this.#totalOffTask / this.#totalBehaviorIncidents) * 100;
        this.#refusingToWorkPercentage= (this.#totalRefusingToWork / this.#totalBehaviorIncidents) * 100;
        this.#outOfSeatPercentage = (this.#totalOutOfSeat / this.#totalBehaviorIncidents) * 100;
        this.#talkingPercentage = (this.#totalTalking / this.#totalBehaviorIncidents) * 100;
        this.#throwingObjectPercentage = (this.#totalThrowingObject / this.#totalBehaviorIncidents) * 100;
        this.#touchingOthersPercentage = (this.#totalTouchingOthers / this.#totalBehaviorIncidents) * 100;
        this.#selfHarmPercentage = (this.#totalSelfHarm / this.#totalBehaviorIncidents) * 100;
        this.#inappropriateLangPercentage = (this.#totalInappropriateLang / this.#totalBehaviorIncidents) * 100;
        this.#bullyingTeasingPercentage = (this.#totalBullyingTeasing / this.#totalBehaviorIncidents) * 100;
        this.#propertyDamagePercentage= (this.#totalPropertyDamage / this.#totalBehaviorIncidents) * 100;
        this.#defianceDisrespectPercentage = (this.#totalDefianceDisrespect / this.#totalBehaviorIncidents) * 100;
        this.#theftPercentage = (this.#totalTheft / this.#totalBehaviorIncidents) * 100;
        this.#lyingCheatingPercentage = (this.#totalLyingCheating / this.#totalBehaviorIncidents) * 100;
        this.#otherBehaviorPercentage = (this.#totalOtherBehavior / this.#totalBehaviorIncidents) * 100;
    }
    addAssignment(assignmentObj){
        //let as = new Assignment(assignmentName, assignmentCategory, assignmentWeight, possibleScore, givenScore, date, assignmentPercentage);
        this.#studentAssignments.push(assignmentObj);
        if (assignmentObj.assignmentCategory == "Homework"){
            this.#totalHomework++;
        }
        else if (assignmentObj.assignmentCategory == "Quiz"){
            this.#totalQuizzes++;
        }
        else if (assignmentObj.assignmentCategory == "Exam"){
            this.#totalExams++;
        }
        else if (assignmentObj.assignmentCategory == "Project"){
            this.#totalProjects++;
        }
        else this.#totalOtherAssignments++;
        this.#totalAssignments++;
        this.calculateGradePercentage();
        this.calculateLetterGrade();
    }
    removeAssignment(assignmentObj){
        let pos = this.#studentAssignments.findIndex(
            element => element.assignmentName === assignmenObj.assignmentName
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
    get birthMonth(){
        return this.#birthMonth;
    }
    get birthDay(){
        return this.#birthDay;
    }
    get birthYear(){
        return this.#birthYear;
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
    get attendancePresentPercentage(){
        return this.#attendancePresentPercentage;
    }
    get studentAttendance(){
        return this.#studentAttendance;
    }
    get totalBehaviorIncidents(){
        return this.#totalBehaviorIncidents;
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
    get offTaskPercentage(){
        return this.#offTaskPercentage;
    }
    get refuseToWorkPercentage(){
        return this.#refusingToWorkPercentage;
    }
    get outOfSeatPercentage(){
        return this.#outOfSeatPercentage;
    }
    get talkingPercentage(){
        return this.#talkingPercentage;
    }
    get throwingObjectPercentage(){
        return this.#throwingObjectPercentage;
    }
    get touchingOthersPercentage(){
        return this.#touchingOthersPercentage;
    }
    get selfHarmPercentage(){
        return this.#selfHarmPercentage;
    }
    get inappropriateLangPercentage(){
        return this.#inappropriateLangPercentage;
    }
    get bullyingTeasingPercentage(){
        return this.#bullyingTeasingPercentage;
    }
    get propertyDamagePercentage(){
        return this.#propertyDamagePercentage;
    }
    get defianceDisrespectPercentage(){
        return this.#defianceDisrespectPercentage;
    }
    get theftPercentage(){
        return this.#theftPercentage;
    }
    get lyingCheatingPercentage(){
        return this.#lyingCheatingPercentage;
    }
    get otherBehaviorPercentage(){
        return this.#otherBehaviorPercentage;
    }
    get studentBehavior(){
        return this.#studentBehavior;
    }
    get studentAssignments(){
        return this.#studentAssignments;
    }
    toJSON(){
        var assignmentOutput = new Array();
        for (let i = 0; i < this.#studentAssignments.length; i++){
            var s = this.#studentAssignments[i];
            assignmentOutput[i] = s.toJSON();
        }
        var attendanceOutput = new Array();
        for (let i = 0; i < this.#studentAttendance.length; i++){
            var t = this.#studentAttendance[i];
            attendanceOutput[i] = t.toJSON();
        }
        var behaviorOutput = new Array();
        for (let i = 0; i < this.#studentBehavior.length; i++){
            var b = this.#studentBehavior[i];
            behaviorOutput[i] = b.toJSON();
        }
        return {
            // STUDENT INFORMATION
            studentId: this.#studentId,
            photo: this.#photo,
            firstName: this.#firstName,
            lastName: this.#lastName,
            gender: this.#gender,
            birthDate: this.#birthDate,
            contactEmail: this.#contactEmail,
            SPED: this.#SPED,
            EL: this.#EL,
            internetAccess: this.#internetAccess,
            // TOTAL ASSIGNMENTS
            totalHomework: this.#totalHomework,
            totalQuizzes: this.#totalQuizzes,
            totalExams: this.#totalExams,
            totalProjects: this.#totalProjects,
            totalOtherAssignements: this.#totalOtherAssignments,
            totalAssignments: this.#totalAssignments,
            letterGrade: this.#letterGrade,
            gradePercentage: this.#gradePercentage,
            studentAssignments: assignmentOutput,
            // TOTAL ATTENDANCE
            totalDays: this.#totalDays,
            totalPresentAttedance: this.#totalPresentAttendance,
            totalAbsentAttendance: this.#totalAbsentAttendance,
            attendancePresentPercentage: this.#attendancePresentPercentage,
            studentAttendance: attendanceOutput,
            // TOTAL BEHAVIOR INCIDENTS
            totalOffTask: this.#totalOffTask,
            offTaskPercentage: this.#offTaskPercentage,
            totalRefusingToWork: this.#totalRefusingToWork,
            refusingToWorkPercentage: this.#refusingToWorkPercentage,
            totalOutOfSeat: this.#totalOutOfSeat,
            outOfSeatPercentage: this.#outOfSeatPercentage,
            totalTalking: this.#totalTalking,
            talkingPercentage: this.#talkingPercentage,
            totalThrowingObject: this.#totalThrowingObject,
            throwingObjectPercentage: this.#throwingObjectPercentage,
            totalTouchingOthers: this.#totalTouchingOthers,
            touchingOthersPercentage: this.#touchingOthersPercentage,
            totalSelfHarm: this.#totalSelfHarm,
            selfHarmPercentage: this.#selfHarmPercentage,
            totalInappropriateLang: this.#totalInappropriateLang,
            inappropriateLangPercentage: this.#inappropriateLangPercentage,
            totalBullyingTeasing: this.#totalBullyingTeasing,
            bullyingTeasingPercentage: this.#bullyingTeasingPercentage,
            totalPropertyDamage: this.#totalPropertyDamage,
            propertyDamage: this.#propertyDamagePercentage,
            totalDefianceDisrespect: this.#totalDefianceDisrespect,
            defianceDisrespect: this.#defianceDisrespectPercentage,
            totalTheft: this.#totalTheft,
            theftPercentage: this.#theftPercentage,
            totalLyingCheating: this.#totalLyingCheating,
            lyingCheatingPercentage: this.#lyingCheatingPercentage,
            totalOtherBehavior: this.#totalOtherBehavior,
            otherBehaviorPercentage: this.#otherBehaviorPercentage,
            totalBehaviorIncidents: this.#totalBehaviorIncidents,
            studentBehavior: behaviorOutput
        };
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
    #attendancePresentPercentage;
    #attendanceAbsentPercentage;
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
    // Percentages
    #offTaskPercentage; 
    #refusingToWorkPercentage;
    #outOfSeatPercentage;
    #talkingPercentage;
    #throwingObjectPercentage;
    #touchingOthersPercentage;
    #selfHarmPercentage;
    #inappropriateLangPercentage;
    #bullyingTeasingPercentage;
    #propertyDamagePercentage;
    #defianceDisrespectPercentage;
    #theftPercentage;
    #lyingCheatingPercentage;
    #otherBehaviorPercentage;
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
    #letterGradeAPercentage;
    #letterGradeBPercentage;
    #letterGradeCPercentage;
    #letterGradeDPercentage;
    #letterGradeFPercentage;
    // ARRAYS OF STUDENTS, EVENTS, AND REMINDERS
    #students;
    #events;
    #announcements;
    constructor(courseName, instructorName, gradeLevel, classHomeworkWeight, classQuizWeight, classExamWeight, classProjectWeight){
        this.#courseName = courseName;
        this.#instructorName = instructorName;
        this.#gradeLevel = gradeLevel;
        this.#totalNumberOfStudents = 0;
        this.#totalSPED = 0;
        this.#totalEL = 0;
        this.#totalInternetAccess = 0;
        this.#SPEDPercentage = 0;
        this.#ELPercentage = 0;
        this.#InternetAccessPercentage = 0;

        this.#totalAttendancePresent = 0;
        this.#totalAttendanceAbsent = 0;
        this.#attendancePresentPercentage = 0;
        this.#attendanceAbsentPercentage = 0;

        this.#totalBehaviorIncidents = 0;
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
        this.#offTaskPercentage = 0;
        this.#refusingToWorkPercentage = 0;
        this.#outOfSeatPercentage = 0;
        this.#talkingPercentage = 0;
        this.#throwingObjectPercentage = 0;
        this.#touchingOthersPercentage = 0;
        this.#selfHarmPercentage = 0;
        this.#inappropriateLangPercentage = 0;
        this.#bullyingTeasingPercentage = 0;
        this.#propertyDamagePercentage = 0;
        this.#defianceDisrespectPercentage = 0;
        this.#theftPercentage = 0;
        this.#lyingCheatingPercentage = 0;
        this.#otherBehaviorPercentage = 0;

        this.#totalHomework = 0;
        this.#totalQuizzes = 0;
        this.#totalExams = 0;
        this.#totalProjects = 0;
        this.#totalOtherAssignments = 0;
        this.#totalAssignments = 0;
        homeworkWeight = classHomeworkWeight;
        quizWeight = classQuizWeight;
        examWeight = classExamWeight;
        projectWeight = classProjectWeight;
        this.#totalLetterGradeA = 0;
        this.#totalLetterGradeB = 0;
        this.#totalLetterGradeC = 0;
        this.#totalLetterGradeD = 0;
        this.#totalLetterGradeF = 0;
        this.#letterGradeAPercentage = 0;
        this.#letterGradeBPercentage = 0;
        this.#letterGradeCPercentage = 0;
        this.#letterGradeDPercentage = 0;
        this.#letterGradeFPercentage = 0;

        this.#students = [];
        this.#events = [];
        this.#announcements = [];
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
    addStudent(studentObj){
        //let s = new Student(studentId, photo, firstName, lastName, gender, birthDate, contactEmail, SPED, EL, internetAccess);
        this.#students.push(studentObj);
        this.#totalNumberOfStudents++;
        if (studentObj.SPED == true){
            this.#totalSPED++;
        }
        if (studentObj.EL == true){
            this.#totalEL++;
        }
        if (studentObj.internetAccess == true){
            this.#totalInternetAccess++;
        }
        // Update totalBehavior
        let totalBehaviorSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalBehaviorSum += this.#students[i].totalBehaviorIncidents;
        }
        this.#totalBehaviorIncidents = totalBehaviorSum;
        // Update SPEDPercentage
        this.#SPEDPercentage = Math.round(100*(this.#totalSPED / this.#totalNumberOfStudents) * 100)/100;
        // Update ELPercentage
        this.#ELPercentage = (this.#totalEL / this.#totalNumberOfStudents) * 100;
        // update InternestAccessPercentage
        this.#InternetAccessPercentage = Math.round(100*(this.#totalInternetAccess / this.#totalNumberOfStudents) * 100)/ 100;
        // update totalAttedancePresent
        let totalAttendancePresentSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalAttendancePresentSum += this.#students[i].totalPresentAttendance;
        }
        this.#totalAttendancePresent = totalAttendancePresentSum;
        this.#attendancePresentPercentage = Math.round(100*(this.#totalAttendancePresent / (this.#totalAttendancePresent + this.#totalAttendanceAbsent)) * 100) / 100;
        // update totalAttedanceAbsent
        let totalAttendanceAbsent = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalAttendanceAbsent += this.#students[i].totalAbsentAttendance;
        }
        this.#totalAttendanceAbsent = totalAttendanceAbsent;
        this.#attendanceAbsentPercentage = Math.round(100*(this.#totalAttendanceAbsent / (this.#totalAttendancePresent + this.#totalAttendanceAbsent)) * 100) / 100;
        // Update totalOffTask
        let totalOffTaskSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalOffTaskSum += this.#students[i].totalOffTask;
        }
        this.#totalOffTask = totalOffTaskSum;
        this.#offTaskPercentage = (this.#totalOffTask/ this.#totalBehaviorIncidents) * 100;
        // Update totalRefusingToWork
        let totalRefusingToWorkSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalRefusingToWorkSum += this.#students[i].totalRefusingToWork;
        }
        this.#totalRefusingToWork = totalRefusingToWorkSum;
        this.#refusingToWorkPercentage= (this.#totalRefusingToWork / this.#totalBehaviorIncidents) * 100;
        // Update totalOutOfSeat
        let totalOutOfSeatSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalOutOfSeatSum += this.#students[i].totalOutOfSeat;
        }
        this.#totalOutOfSeat = totalOutOfSeatSum;
        this.#outOfSeatPercentage = (this.#totalOutOfSeat / this.#totalBehaviorIncidents) * 100;
        // Update totalTalking
        let totalTalkingSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalTalkingSum += this.#students[i].totalTalking;
        }
        this.#totalTalking = totalTalkingSum;
        this.#talkingPercentage = (this.#totalTalking / this.#totalBehaviorIncidents) * 100;
        // Update totalThrowingObject
        let totalThrowingObjectSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalThrowingObjectSum += this.#students[i].totalThrowingObject;
        }
        this.#totalThrowingObject = totalThrowingObjectSum;
        this.#throwingObjectPercentage = (this.#totalThrowingObject / this.#totalBehaviorIncidents) * 100;
        // Update totalTouchingOthers
        let totalTouchingOthersSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalTouchingOthersSum += this.#students[i].totalTouchingOthers;
        }
        this.#totalTouchingOthers = totalTouchingOthersSum;
        this.#touchingOthersPercentage = (this.#totalTouchingOthers / this.#totalBehaviorIncidents) * 100;
        // Update totalSelfHarm
        let totalSelfHarmSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalSelfHarmSum += this.#students[i].totalSelfHarm;
        }
        this.#totalSelfHarm = totalSelfHarmSum;
        this.#selfHarmPercentage = (this.#totalSelfHarm / this.#totalBehaviorIncidents) * 100;
        // Update totalInappropriateLang
        let totalInappropriateLangSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalInappropriateLangSum += this.#students[i].totalInappropriateLang;
        }
        this.#totalInappropriateLang= totalInappropriateLangSum;
        this.#inappropriateLangPercentage = (this.#totalInappropriateLang / this.#totalBehaviorIncidents) * 100;
        // Update totalBullyingTeasing
        let totalBullyingTeasingSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalBullyingTeasingSum += this.#students[i].totalBullyingTeasing;
        }
        this.#totalBullyingTeasing = totalBullyingTeasingSum;
        this.#bullyingTeasingPercentage = (this.#totalBullyingTeasing / this.#totalBehaviorIncidents) * 100;
        // Update totalPropertyDamage
        let totalPropertyDamageSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalPropertyDamageSum += this.#students[i].totalPropertyDamage;
        }
        this.#totalPropertyDamage = totalPropertyDamageSum;
        this.#propertyDamagePercentage = (this.#totalPropertyDamage / this.#totalBehaviorIncidents) * 100;
        // Update totalDefianceDisrespect
        let totalDefianceDisrespectSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalDefianceDisrespectSum += this.#students[i].totalDefianceDisrespect;
        }
        this.#totalDefianceDisrespect = totalDefianceDisrespectSum;
        this.#defianceDisrespectPercentage = (this.#totalDefianceDisrespect / this.#totalBehaviorIncidents) * 100;
        // Update totalTheft
        let totalTheftSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalTheftSum += this.#students[i].totalTheft;
        }
        this.#totalTheft = totalTheftSum;
        this.#theftPercentage = (this.#totalTheft/ this.#totalBehaviorIncidents) * 100;
        // Update totalLyingCheating
        let totalLyingCheatingSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalLyingCheatingSum += this.#students[i].totalLyingCheating;
        }
        this.#totalLyingCheating = totalLyingCheatingSum;
        this.#lyingCheatingPercentage = (this.#totalLyingCheating/ this.#totalBehaviorIncidents) * 100;
        // Update totalOtherBehavior
        let totalOtherBehaviorSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalOtherBehaviorSum += this.#students[i].totalOtherBehavior;
        }
        this.#totalOtherBehavior = totalOtherBehaviorSum;
        this.#otherBehaviorPercentage = (this.#totalOtherBehavior / this.#totalBehaviorIncidents) * 100;
        // Update Assignments
        this.#totalHomework = this.#students[0].totalHomework;
        this.#totalQuizzes= this.#students[0].totalQuizzes;
        this.#totalExams = this.#students[0].totalExams;
        this.#totalProjects = this.#students[0].totalProjects;
        this.#totalOtherAssignments = this.#students[0].totalOtherAssignments;
        this.#totalAssignments= this.#students[0].totalAssignments;
        // Update totalLetterGradeA
        let totalLetterGradeASum = 0;
        for (let i = 0; i < this.#students.length; i++){
            if (this.#students[i].letterGrade == "A+" || this.#students[i].letterGrade == "A" || this.#students[i].letterGrade == "A-"){
                totalLetterGradeASum++;
            }
        }
        this.#totalLetterGradeA = totalLetterGradeASum;
        this.#letterGradeAPercentage = (this.#totalLetterGradeA / this.#totalNumberOfStudents) * 100;
        // Update totalLetterGradeB
        let totalLetterGradeBSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            if (this.#students[i].letterGrade == "B+" || this.#students[i].letterGrade == "B" || this.#students[i].letterGrade == "B-"){
                totalLetterGradeBSum++;
            }
        }
        this.#totalLetterGradeB = totalLetterGradeBSum;
        this.#letterGradeBPercentage = (this.#totalLetterGradeB / this.#totalNumberOfStudents) * 100;
        // Update totalLetterGradeC
        let totalLetterGradeCSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            if (this.#students[i].letterGrade == "C+" || this.#students[i].letterGrade == "C" || this.#students[i].letterGrade == "C-"){
                totalLetterGradeCSum++;
            }
        }
        this.#totalLetterGradeC = totalLetterGradeCSum;
        this.#letterGradeCPercentage = (this.#totalLetterGradeC / this.#totalNumberOfStudents) * 100;
        // Update totalLetterGradeD
        let totalLetterGradeDSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            if (this.#students[i].letterGrade == "D+" || this.#students[i].letterGrade == "D" || this.#students[i].letterGrade == "D-"){
                totalLetterGradeDSum++;
            }
        }
        this.#totalLetterGradeD = totalLetterGradeDSum;
        this.#letterGradeDPercentage = (this.#totalLetterGradeD / this.#totalNumberOfStudents) * 100;
        // Update totalLetterGradeF
        let totalLetterGradeFSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            if (this.#students[i].letterGrade == "F"){
                totalLetterGradeFSum++;
            }
        }
        this.#totalLetterGradeF = totalLetterGradeFSum;
        this.#letterGradeFPercentage = (this.#totalLetterGradeF / this.#totalNumberOfStudents) * 100;
    }
    removeStudent(studentObj){
        let pos = this.#students.findIndex(
            element => element.studentId === studentObj.studentId
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
            // Update totalBehavior
            let totalBehaviorSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalBehaviorSum += this.#students[i].totalBehaviorIncidents;
            }
            this.#totalBehaviorIncidents = totalBehaviorSum;
            // Update SPEDPercentage
            this.#SPEDPercentage = (this.#totalSPED / this.#totalNumberOfStudents) * 100;
            // Update ELPercentage
            this.#ELPercentage = (this.#totalEL / this.#totalNumberOfStudents) * 100;
            // update InternestAccessPercentage
            this.#InternetAccessPercentage = (this.#totalInternetAccess / this.#totalNumberOfStudents) * 100;
            // update totalAttedancePresent
            let totalAttendancePresentSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalAttendancePresentSum += this.#students[i].totalPresentAttendance;
            }
            this.#totalAttendancePresent = totalAttendancePresentSum;
            this.#attendancePresentPercentage = (this.#totalAttendancePresent / (this.#totalAttendancePresent + this.#totalAttendanceAbsent)) * 100;
            // update totalAttedanceAbsent
            let totalAttendanceAbsent = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalAttendanceAbsent += this.#students[i].totalAbsentAttendance;
            }
            this.#totalAttendanceAbsent = totalAttendanceAbsent;
            this.#attendanceAbsentPercentage = (this.#totalAttendanceAbsent / (this.#totalAttendancePresent + this.#totalAttendanceAbsent)) * 100;
            // Update totalOffTask
            let totalOffTaskSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalOffTaskSum += this.#students[i].totalOffTask;
            }
            this.#totalOffTask = totalOffTaskSum;
            this.#offTaskPercentage = (this.#totalOffTask/ this.#totalBehaviorIncidents) * 100;
            // Update totalRefusingToWork
            let totalRefusingToWorkSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalRefusingToWorkSum += this.#students[i].totalRefusingToWork;
            }
            this.#totalRefusingToWork = totalRefusingToWorkSum;
            this.#refusingToWorkPercentage= (this.#totalRefusingToWork / this.#totalBehaviorIncidents) * 100;
            // Update totalOutOfSeat
            let totalOutOfSeatSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalOutOfSeatSum += this.#students[i].totalOutOfSeat;
            }
            this.#totalOutOfSeat = totalOutOfSeatSum;
            this.#outOfSeatPercentage = (this.#totalOutOfSeat / this.#totalBehaviorIncidents) * 100;
            // Update totalTalking
            let totalTalkingSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalTalkingSum += this.#students[i].totalTalking;
            }
            this.#totalTalking = totalTalkingSum;
            this.#talkingPercentage = (this.#totalTalking / this.#totalBehaviorIncidents) * 100;
            // Update totalThrowingObject
            let totalThrowingObjectSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalThrowingObjectSum += this.#students[i].totalThrowingObject;
            }
            this.#totalThrowingObject = totalThrowingObjectSum;
            this.#throwingObjectPercentage = (this.#totalThrowingObject / this.#totalBehaviorIncidents) * 100;
            // Update totalTouchingOthers
            let totalTouchingOthersSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalTouchingOthersSum += this.#students[i].totalTouchingOthers;
            }
            this.#totalTouchingOthers = totalTouchingOthersSum;
            this.#touchingOthersPercentage = (this.#totalTouchingOthers / this.#totalBehaviorIncidents) * 100;
            // Update totalSelfHarm
            let totalSelfHarmSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalSelfHarmSum += this.#students[i].totalSelfHarm;
            }
            this.#totalSelfHarm = totalSelfHarmSum;
            this.#selfHarmPercentage = (this.#totalSelfHarm / this.#totalBehaviorIncidents) * 100;
            // Update totalInappropriateLang
            let totalInappropriateLangSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalInappropriateLangSum += this.#students[i].totalInappropriateLang;
            }
            this.#totalInappropriateLang= totalInappropriateLangSum;
            this.#inappropriateLangPercentage = (this.#totalInappropriateLang / this.#totalBehaviorIncidents) * 100;
            // Update totalBullyingTeasing
            let totalBullyingTeasingSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalBullyingTeasingSum += this.#students[i].totalBullyingTeasing;
            }
            this.#totalBullyingTeasing = totalBullyingTeasingSum;
            this.#bullyingTeasingPercentage = (this.#totalBullyingTeasing / this.#totalBehaviorIncidents) * 100;
            // Update totalPropertyDamage
            let totalPropertyDamageSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalPropertyDamageSum += this.#students[i].totalPropertyDamage;
            }
            this.#totalPropertyDamage = totalPropertyDamageSum;
            this.#propertyDamagePercentage = (this.#totalPropertyDamage / this.#totalBehaviorIncidents) * 100;
            // Update totalDefianceDisrespect
            let totalDefianceDisrespectSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalDefianceDisrespectSum += this.#students[i].totalDefianceDisrespect;
            }
            this.#totalDefianceDisrespect = totalDefianceDisrespectSum;
            this.#defianceDisrespectPercentage = (this.#totalDefianceDisrespect / this.#totalBehaviorIncidents) * 100;
            // Update totalTheft
            let totalTheftSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalTheftSum += this.#students[i].totalTheft;
            }
            this.#totalTheft = totalTheftSum;
            this.#theftPercentage = (this.#totalTheft/ this.#totalBehaviorIncidents) * 100;
            // Update totalLyingCheating
            let totalLyingCheatingSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalLyingCheatingSum += this.#students[i].totalLyingCheating;
            }
            this.#totalLyingCheating = totalLyingCheatingSum;
            this.#lyingCheatingPercentage = (this.#totalLyingCheating/ this.#totalBehaviorIncidents) * 100;
            // Update totalOtherBehavior
            let totalOtherBehaviorSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalOtherBehaviorSum += this.#students[i].totalOtherBehavior;
            }
            this.#totalOtherBehavior = totalOtherBehaviorSum;
            this.#otherBehaviorPercentage = (this.#totalOtherBehavior / this.#totalBehaviorIncidents) * 100;
            // Update Assignments
            this.#totalHomework = this.#students[0].totalHomework;
            this.#totalQuizzes= this.#students[0].totalQuizzes;
            this.#totalExams = this.#students[0].totalExams;
            this.#totalProjects = this.#students[0].totalProjects;
            this.#totalOtherAssignments = this.#students[0].totalOtherAssignments;
            this.#totalAssignments= this.#students[0].totalAssignments;
            // Update totalLetterGradeA
            let totalLetterGradeASum = 0;
            for (let i = 0; i < this.#students.length; i++){
                if (this.#students[i].letterGrade == "A+" || this.#students[i].letterGrade == "A" || this.#students[i].letterGrade == "A-"){
                    totalLetterGradeASum++;
                }
            }
            this.#totalLetterGradeA = totalLetterGradeASum;
            this.#letterGradeAPercentage = (this.#totalLetterGradeA / this.#totalNumberOfStudents) * 100;
            // Update totalLetterGradeB
            let totalLetterGradeBSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                if (this.#students[i].letterGrade == "B+" || this.#students[i].letterGrade == "B" || this.#students[i].letterGrade == "B-"){
                    totalLetterGradeBSum++;
                }
            }
            this.#totalLetterGradeB = totalLetterGradeBSum;
            this.#letterGradeBPercentage = (this.#totalLetterGradeB / this.#totalNumberOfStudents) * 100;
            // Update totalLetterGradeC
            let totalLetterGradeCSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                if (this.#students[i].letterGrade == "C+" || this.#students[i].letterGrade == "C" || this.#students[i].letterGrade == "C-"){
                    totalLetterGradeCSum++;
                }
            }
            this.#totalLetterGradeC = totalLetterGradeCSum;
            this.#letterGradeCPercentage = (this.#totalLetterGradeC / this.#totalNumberOfStudents) * 100;
            // Update totalLetterGradeD
            let totalLetterGradeDSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                if (this.#students[i].letterGrade == "D+" || this.#students[i].letterGrade == "D" || this.#students[i].letterGrade == "D-"){
                    totalLetterGradeDSum++;
                }
            }
            this.#totalLetterGradeD = totalLetterGradeDSum;
            this.#letterGradeDPercentage = (this.#totalLetterGradeD / this.#totalNumberOfStudents) * 100;
            // Update totalLetterGradeF
            let totalLetterGradeFSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                if (this.#students[i].letterGrade == "F"){
                    totalLetterGradeFSum++;
                }
            }
            this.#totalLetterGradeF = totalLetterGradeFSum;
            this.#letterGradeFPercentage = (this.#totalLetterGradeF / this.#totalNumberOfStudents) * 100;
        }
    }
    addEvent(eventObj){
        //let e = new Event(eventName, date, description, location);
        this.#events.push(eventObj);
    }
    removeEvent(eventObj){
        let pos = this.#events.findIndex(
            element => element.eventName === eventObj.eventName
        );
        if (pos > -1) { // only splice array when item is found
            this.#events.splice(pos, 1); // 2nd parameter means remove one item only
        }
    }
    addAnnouncement(announcementObj){
        //let r = new Announcement(title, description, date);
        this.#announcements.push(announcementObj);
    }
    removeAnnouncement(announcementObj){
        let pos = this.#announcements.findIndex(
            element => element.title === announcementObj.title
        );
        if (pos > -1) { // only splice array when item is found
            this.#announcements.splice(pos, 1); // 2nd parameter means remove one item only
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
        return this.#SPEDPercentage;
    }
    get ELPercentage(){
        return this.#ELPercentage;
    }
    get InternetAccessPercentage(){
        return this.#InternetAccessPercentage;
    }
    get totalAttendancePresent(){
        return this.#totalAttendancePresent;
    }
    get totalAttendanceAbsent(){
        return this.#totalAttendanceAbsent;
    }
    get attendancePresentPercentage(){
        return this.#attendancePresentPercentage;
    }
    get attendanceAbsentPercentage(){
        return this.#attendanceAbsentPercentage;
    }
    get totalOffTask(){
        return this.#totalOffTask;
    }
    get totalRefusingToWork(){
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
    get totalInappropriateLang() {
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
    get offTaskPercentage(){
        return this.#offTaskPercentage;
    }
    get refuseToWorkPercentage(){
        return this.#refusingToWorkPercentage;
    }
    get outOfSeatPercentage(){
        return this.#outOfSeatPercentage;
    }
    get talkingPercentage(){
        return this.#talkingPercentage;
    }
    get throwingObjectPercentage(){
        return this.#throwingObjectPercentage;
    }
    get touchingOthersPercentage(){
        return this.#touchingOthersPercentage;
    }
    get selfHarmPercentage(){
        return this.#selfHarmPercentage;
    }
    get inappropriateLangPercentage(){
        return this.#inappropriateLangPercentage;
    }
    get bullyingTeasingPercentage(){
        return this.#bullyingTeasingPercentage;
    }
    get propertyDamagePercentage(){
        return this.#propertyDamagePercentage;
    }
    get defianceDisrespectPercentage(){
        return this.#defianceDisrespectPercentage;
    }
    get theftPercentage(){
        return this.#theftPercentage;
    }
    get lyingCheatingPercentage(){
        return this.#lyingCheatingPercentage;
    }
    get otherBehaviorPercentage(){
        return this.#otherBehaviorPercentage;
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
    get totalLetterGradeA(){
        return this.#totalLetterGradeA;
    }
    get totalLetterGradeB(){
        return this.#totalLetterGradeB;
    }
    get totalLetterGradeC(){
        return this.#totalLetterGradeC;
    }
    get totalLetterGradeD(){
        return this.#totalLetterGradeD;
    }
    get totalLetterGradeF(){
        return this.#totalLetterGradeF;
    }
    get letterGradeAPercentage(){
        return this.#letterGradeAPercentage;
    }
    get letterGradeBPercentage(){
        return this.#letterGradeBPercentage;
    }
    get letterGradeCPercentage(){
        return this.#letterGradeCPercentage;
    }
    get letterGradeDPercentage(){
        return this.#letterGradeDPercentage;
    }
    get letterGradeFPercentage(){
        return this.#letterGradeFPercentage;
    }
    get students(){
        return this.#students;
    }
    get events(){
        return this.#events;
    }
    get announcements(){
        return this.#announcements;
    }
    toJSON(){
        var studentOutput = new Array();
        for (let i = 0; i < this.#students.length; i++){
            var s = this.#students[i];
            studentOutput[i] = s.toJSON();
        }
        var eventsOutput = new Array();
        for (let i = 0; i < this.#events.length; i++){
            var t = this.#events[i];
            eventsOutput[i] = t.toJSON();
        }
        var announcementsOutput = new Array();
        for (let i = 0; i < this.#announcements.length; i++){
            var b = this.#announcements[i];
            announcementsOutput[i] = b.toJSON();
        }
        return {
            // COURSE INFORMATION
            courseName: this.#courseName,
            instructorName: this.#instructorName,
            gradeLevel: this.#gradeLevel,
            totalNumberOfStudents: this.#totalNumberOfStudents,
            totalSPED: this.#totalSPED,
            totalEL: this.#totalEL,
            totalInternetAccess: this.#totalInternetAccess,
            SPEDPercentage: this.#SPEDPercentage,
            ELPercentage: this.#ELPercentage,
            InternetAccessPercentage: this.#InternetAccessPercentage,
            // TOTAL ASSIGNMENTS
            totalHomework: this.#totalHomework,
            totalQuizzes: this.#totalQuizzes,
            totalExams: this.#totalExams,
            totalProjects: this.#totalProjects,
            totalOtherAssignements: this.#totalOtherAssignments,
            totalAssignments: this.#totalAssignments,
            totalLetterGradeA: this.#totalLetterGradeA,
            letterGradeAPercentage: this.#letterGradeAPercentage,
            totalLetterGradeB: this.#totalLetterGradeB,
            letterGradeBPercentage: this.#letterGradeBPercentage,
            totalLetterGradeC: this.#totalLetterGradeC,
            letterGradeCPercentage: this.#letterGradeCPercentage,
            totalLetterGradeD: this.#totalLetterGradeD,
            letterGradeDPercentage: this.#letterGradeDPercentage,
            totalLetterGradeF: this.#totalLetterGradeF,
            letterGradeFPercentage: this.#letterGradeFPercentage,
            // TOTAL ATTENDANCE
            totalAttendancePresent: this.#totalAttendancePresent,
            totalAttendanceAbsent: this.#totalAttendanceAbsent,
            attendancePresentPercentage: this.#attendancePresentPercentage,
            attendanceAbsentPercentage: this.#attendanceAbsentPercentage,
            // TOTAL BEHAVIOR INCIDENTS
            totalBehaviorIncidents: this.#totalBehaviorIncidents,
            totalOffTask: this.#totalOffTask,
            offTaskPercentage: this.#offTaskPercentage,
            totalRefusingToWork: this.#totalRefusingToWork,
            refusingToWorkPercentage: this.#refusingToWorkPercentage,
            totalOutOfSeat: this.#totalOutOfSeat,
            outOfSeatPercentage: this.#outOfSeatPercentage,
            totalTalking: this.#totalTalking,
            talkingPercentage: this.#talkingPercentage,
            totalThrowingObject: this.#totalThrowingObject,
            throwingObjectPercentage: this.#throwingObjectPercentage,
            totalTouchingOthers: this.#totalTouchingOthers,
            touchingOthersPercentage: this.#touchingOthersPercentage,
            totalSelfHarm: this.#totalSelfHarm,
            selfHarmPercentage: this.#selfHarmPercentage,
            totalInappropriateLang: this.#totalInappropriateLang,
            inappropriateLangPercentage: this.#inappropriateLangPercentage,
            totalBullyingTeasing: this.#totalBullyingTeasing,
            bullyingTeasingPercentage: this.#bullyingTeasingPercentage,
            totalPropertyDamage: this.#totalPropertyDamage,
            propertyDamage: this.#propertyDamagePercentage,
            totalDefianceDisrespect: this.#totalDefianceDisrespect,
            defianceDisrespect: this.#defianceDisrespectPercentage,
            totalTheft: this.#totalTheft,
            theftPercentage: this.#theftPercentage,
            totalLyingCheating: this.#totalLyingCheating,
            lyingCheatingPercentage: this.#lyingCheatingPercentage,
            totalOtherBehavior: this.#totalOtherBehavior,
            otherBehaviorPercentage: this.#otherBehaviorPercentage,
            // ARRAYS
            students: studentOutput,
            events: eventsOutput,
            announcements: announcementsOutput
        };
    }
}
class User {
    #username;
    #password;
    #totalNumberOfClasses;
    #classes;
    constructor(username, password){
        this.#username = username;
        this.#password = password;
        this.#totalNumberOfClasses = 0;
        this.#classes = [];
    }
    set username(username){
        this.#username = username;
    }
    set password(password){
        this.#password = password;
    }
    addClass(classObj){
        //let c = new Class(courseName, instructorName, gradeLevel);
        this.#classes.push(classObj);
        this.#totalNumberOfClasses++;
    }
    removeClass(classObj){
        let pos = this.#classes.findIndex(
            element => element.courseName === classObj.courseName
        );
        if (pos > -1) { // only splice array when item is found
            this.#classes.splice(pos, 1); // 2nd parameter means remove one item only
        }
        this.#totalNumberOfClasses--;
    }
    get username(){
        return this.#username;
    }
    get password(){
        return this.#password;
    }
    get totalNumberOfClass(){
        return this.#totalNumberOfClasses;
    }
    toJSON(){
        var classOutput = new Array();
        for (let i = 0; i < this.#classes.length; i++){
            var s = this.#classes[i];
            classOutput[i] = s.toJSON();
        }
        return {
            username: this.#username,
            password: this.#password,
            totalNumberOfClasses: this.#totalNumberOfClasses,
            classes: classOutput
        };
    }
}
// --------------------------------------
// MONGO DB FUNCTIONS
const {MongoClient, MongoDBNamespace} = require('mongodb');

// Functions to call MongoDB, use form functionName(parameter(s)).catch(console.error); to call functions
// ADD DOCUMENTS
async function addEventToDB(course, event) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await addNewEventToDB(client, event);
        await addNewEventToClassDB(client, course, event);
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
        await addNewAnnouncementToClassDB(client, course, announcement);
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
        await addNewStudentToClassDB(client, course, student);
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
        await addNewClassToUserDB(client, user, course);
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
        await addNewUserToDB(client, user);
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
        await addStudentAttendanceToClassDB(client, course, student, attendance);
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
        await addStudentBehaviorToClassDB(client, course, student, behavior);
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
        await addStudentAssignmentToClassDB(client, course, student, assignment);
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
        await deleteEventFromClassDB(client, course, event);
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
        await deleteAnnouncementFromClassDB(client, course, announcement);
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
        await deleteStudentFromClassDB(client, course, student);
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
        await deleteClassfromUserDB(client, user, course);
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
        await updateEventFromClassDB(client, course, event, newEvent);
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
        await updateAnnouncementFromClassDB(client, course, announcement, newAnnouncement);
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
        await updateStudentFromClassDB(client, course, student, newStudent);
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
        await updateClassFromUserDB(client, user, course, newCourse);
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
    try {
        await client.connect();
        const readEvent = await retrieveEventFromDB(client, event);
    }
    finally {
        await client.close();
        return readEvent;
    }
}
async function getEventArrayFromDB() {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const eventArr = await retrieveEventArrayFromDB(client);
    }
    finally {
        await client.close();
        return eventArr;
    }
}
async function getAnnouncementFromDB(announcement) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const readAnnouncement = await retrieveAnnouncementFromDB(client, announcement);
    }
    finally {
        await client.close();
        return readAnnouncement;
    }
}
async function getAnnouncementArrayFromDB() {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const announcementArr = await retrieveAnnouncementArrayFromDB(client);
    }
    finally {
        await client.close();
        return announcementArr;
    }
}
async function getStudentFromDB(student) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const readStudent = await retrieveStudentFromDB(client, student);
    }
    finally {
        await client.close();
        return readStudent;
    }
}
async function getStudentArrayFromDB() {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const studentArr = await retrieveStudentArrayFromDB(client);
    }
    finally {
        await client.close();
        return studentArr;
    }
}
async function getClassFromDB(course) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const readClass = await retrieveClassFromDB(client, course);
    }
    finally {
        await client.close();
        return readClass;
    }
}
async function getClassArrayFromDB() {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const classArr = await retrieveClassArrayFromDB(client);
    }
    finally {
        await client.close();
        return classArr;
    }
}
async function getUserFromDB(user) {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const readUser = await retrieveUserFromDB(client, user);
    }
    finally {
        await client.close();
        return readUser;
    }
}
async function getUserArrayFromDB() {
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const userArr = await retrieveUserArrayFromDB(client);
    }
    finally {
        await client.close();
        return userArr;
    }
}

// Functions to write to MongoDB
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
/* TO DO: 
    Add Math.round(100*X)/100; to percentages
    Need to add formToObject, connected with HTML page
        Will need to make the main function for each to make db calls
        Will have the client connect and disconnect 
        Will have to be async when retrieving values    
*/

// DEMO CLASS
//ADDING TO CLASS
// Students
var student0 = new Student(10000000, "alt", "Bryana", "Cantle", "female", 5, 28, 2012, "bcantle0@gmail.com", false, false, true);
var student1 = new Student(10000001, "alt", "Josephina", "Udden", "agender", 11, 26, 2011, "judden1@gmail.com", false, false, true);
var student2 = new Student(10000002, "alt", "Jaunita", "Hebborne", "female", 12, 2, 2011, "jhebborne2@gmail.com", false, false, true);
var student3 = new Student(10000003, "alt", "Lincoln", "Mousley", "male", 3, 25, 2012, "lmousley3@gmail.com", false, false, true);
var student4 = new Student(10000004, "alt", "Octavia", "Brooksbie", "female", 7, 28, 2012, "obrooksbie4@gmail.com", false, false, true);
var student5 = new Student(10000005, "alt", "Channa", "Benbow", "female", 4, 4, 2012, "cbenbow5@gmail.com", false, false, true);
var student6 = new Student(10000006, "alt", "Margarete", "Souza", "female", 5, 11, 2012, "msouza6@gmail.com", false, false, false);
var student7 = new Student(10000007, "alt", "Lexine", "Warsop", "female", 6, 9, 2012, "lwarsop7@gmail.com", false, false, true);
var student8 = new Student(10000008, "alt", "Whit", "Adair", "male", 12, 2, 2011, "wadair8@gmail.com", false, false, true);
var student9 = new Student(10000009, "alt", "Goddard", "Bruntjen", "male", 8, 24, 2012, "gbruntjen9@gmail.com", false, true, true);
var student10 = new Student(10000010, "alt", "Ethelin", "O'Rourke", "female", 8, 4, 2012, "eorourkea@gmail.com", false, false, true);
var student11 = new Student(10000011, "alt", "Beulah", "Moxon", "female", 5, 24, 2012, "bmoxonb@gmail.com", false, false, true);
var student12 = new Student(10000012, "alt", "Colly", "Abley", "female", 4, 9, 2012, "cableyc@gmail.com", true, false, true);
var student13 = new Student(10000013, "alt", "Cleveland", "Giblin", "genderfluid", 5, 31, 2012, "cgiblind@gmail.com", false, false, false);
var student14 = new Student(10000014, "alt", "Tandi", "Canape", "female", 2, 9, 2012, "tcanape@gmail.com", false, false, true);
var student15 = new Student(10000015, "alt", "Pascal", "Blei", "genderqueer", 2, 15, 2012, "pbleif@gmail.com", false, false, true);
var student16 = new Student(10000016, "alt", "Valencia", "Prynne", "female", 5, 1, 2012, "vprynneg@gmail.com", false, false, true);
var student17 = new Student(10000017, "alt", "Mel", "Linbohm", "male", 5, 31, 2012, "mlinbohmh@gmail.com", false, false, true);
var student18 = new Student(10000018, "alt", "Jarid", "Scurry", "male", 3, 15, 2012, "jscurryi@gmail.com", false, false, true);
var student19 = new Student(10000019, "alt", "Mitch", "Winram", "male", 4, 1, 2012, "mwinram@gmail.com", false, true, true);
var student20 = new Student(10000020, "alt", "Willy", "Petrina", "male", 11, 29, 2011, "wpetrinak@gmail.com", false, false, false);
var student21 = new Student(10000021, "alt", "Enid", "Plowright", "female", 5, 18, 2012, "eplowrightl@gmail.com", false, false, true);
var student22 = new Student(10000022, "alt", "Deandra", "Sarch", "female", 10, 24, 2012, "dsarchm@gmail.com", false, false, true);
var student23 = new Student(10000023, "alt", "Goldina", "Hebbes", "non-binary", 12, 17, 2011, "ghebbesn@gmail.com", false, false, true);
var student24 = new Student(10000024, "alt", "Kendra", "Offen", "female", 2, 29, 2012, "koffeno@gmail.com", false, false, true);
var student25 = new Student(10000025, "alt", "Valeria", "McKernon", "female", 4, 3, 2012, "vmckernonp@gmail.com", true, false, true);
var student26 = new Student(10000026, "alt", "Fabio", "Judgkins", "male", 11, 1, 2011, "fjudgkinsq@gmail.com", false, false, true);
var student27 = new Student(10000027, "alt", "Giusto", "Kemshell", "male", 1, 23, 2012, "gkemshellr@gmail.com", false, false, false);
var student28 = new Student(10000028, "alt", "Eve", "Vallerine", "female", 10, 29, 2012, "evallerines@gmail.com", false, false, true);
var student29 = new Student(10000029, "alt", "Nikolas", "Morriarty", "male", 1, 13, 2012, "nmorriartyt@gmail.com", false, true, true);
// Attendance
var student0Day0 = new Attendance(9, 1, 2022, "Present");
var student0Day1 = new Attendance(9, 2, 2022, "Present");
var student0Day2 = new Attendance(9, 5, 2022, "Present");
var student0Day3 = new Attendance(9, 6, 2022, "Present");
var student0Day4 = new Attendance(9, 7, 2022, "Present");
var student0Day5 = new Attendance(9, 8, 2022, "Present");
var student0Day6 = new Attendance(9, 9, 2022, "Present");
var student0Day7 = new Attendance(9, 12, 2022, "Present");
var student0Day8 = new Attendance(9, 13, 2022, "Present");
var student0Day9 = new Attendance(9, 14, 2022, "Present");
var student0Day10 = new Attendance(9, 15, 2022, "Present");
var student0Day11 = new Attendance(9, 16, 2022, "Present");
var student0Day12 = new Attendance(9, 19, 2022, "Present");
var student0Day13 = new Attendance(9, 20, 2022, "Present");
var student0Day14 = new Attendance(9, 21, 2022, "Present");
var student0Day15 = new Attendance(9, 22, 2022, "Present");
var student0Day16 = new Attendance(9, 23, 2022, "Present");
var student0Day17 = new Attendance(9, 26, 2022, "Present");
var student0Day18 = new Attendance(9, 27, 2022, "Present");
var student0Day19 = new Attendance(9, 28, 2022, "Present");
var student0Day20 = new Attendance(9, 29, 2022, "Present");
var student0Day21 = new Attendance(9, 30, 2022, "Present");

var student1Day0 = new Attendance(9, 1, 2022, "Present");
var student1Day1 = new Attendance(9, 2, 2022, "Present");
var student1Day2 = new Attendance(9, 5, 2022, "Present");
var student1Day3 = new Attendance(9, 6, 2022, "Present");
var student1Day4 = new Attendance(9, 7, 2022, "Present");
var student1Day5 = new Attendance(9, 8, 2022, "Present");
var student1Day6 = new Attendance(9, 9, 2022, "Present");
var student1Day7 = new Attendance(9, 12, 2022, "Present");
var student1Day8 = new Attendance(9, 13, 2022, "Present");
var student1Day9 = new Attendance(9, 14, 2022, "Present");
var student1Day10 = new Attendance(9, 15, 2022, "Present");
var student1Day11 = new Attendance(9, 16, 2022, "Absent");
var student1Day12 = new Attendance(9, 19, 2022, "Absent");
var student1Day13 = new Attendance(9, 20, 2022, "Absent");
var student1Day14 = new Attendance(9, 21, 2022, "Absent");
var student1Day15 = new Attendance(9, 22, 2022, "Absent");
var student1Day16 = new Attendance(9, 23, 2022, "Absent");
var student1Day17 = new Attendance(9, 26, 2022, "Absent");
var student1Day18 = new Attendance(9, 27, 2022, "Absent");
var student1Day19 = new Attendance(9, 28, 2022, "Absent");
var student1Day20 = new Attendance(9, 29, 2022, "Absent");
var student1Day21 = new Attendance(9, 30, 2022, "Absent");

var student2Day0 = new Attendance(9, 1, 2022, "Present");
var student2Day1 = new Attendance(9, 2, 2022, "Present");
var student2Day2 = new Attendance(9, 5, 2022, "Absent");
var student2Day3 = new Attendance(9, 6, 2022, "Present");
var student2Day4 = new Attendance(9, 7, 2022, "Present");
var student2Day5 = new Attendance(9, 8, 2022, "Absent");
var student2Day6 = new Attendance(9, 9, 2022, "Present");
var student2Day7 = new Attendance(9, 12, 2022, "Present");
var student2Day8 = new Attendance(9, 13, 2022, "Absent");
var student2Day9 = new Attendance(9, 14, 2022, "Present");
var student2Day10 = new Attendance(9, 15, 2022, "Present");
var student2Day11 = new Attendance(9, 16, 2022, "Absent");
var student2Day12 = new Attendance(9, 19, 2022, "Present");
var student2Day13 = new Attendance(9, 20, 2022, "Present");
var student2Day14 = new Attendance(9, 21, 2022, "Absent");
var student2Day15 = new Attendance(9, 22, 2022, "Present");
var student2Day16 = new Attendance(9, 23, 2022, "Present");
var student2Day17 = new Attendance(9, 26, 2022, "Absent");
var student2Day18 = new Attendance(9, 27, 2022, "Present");
var student2Day19 = new Attendance(9, 28, 2022, "Present");
var student2Day20 = new Attendance(9, 29, 2022, "Absent");
var student2Day21 = new Attendance(9, 30, 2022, "Present");

var student3Day0 = new Attendance(9, 1, 2022, "Present");
var student3Day1 = new Attendance(9, 2, 2022, "Present");
var student3Day2 = new Attendance(9, 5, 2022, "Present");
var student3Day3 = new Attendance(9, 6, 2022, "Absent");
var student3Day4 = new Attendance(9, 7, 2022, "Present");
var student3Day5 = new Attendance(9, 8, 2022, "Present");
var student3Day6 = new Attendance(9, 9, 2022, "Present");
var student3Day7 = new Attendance(9, 12, 2022, "Absent");
var student3Day8 = new Attendance(9, 13, 2022, "Present");
var student3Day9 = new Attendance(9, 14, 2022, "Present");
var student3Day10 = new Attendance(9, 15, 2022, "Present");
var student3Day11 = new Attendance(9, 16, 2022, "Absent");
var student3Day12 = new Attendance(9, 19, 2022, "Present");
var student3Day13 = new Attendance(9, 20, 2022, "Present");
var student3Day14 = new Attendance(9, 21, 2022, "Present");
var student3Day15 = new Attendance(9, 22, 2022, "Absent");
var student3Day16 = new Attendance(9, 23, 2022, "Present");
var student3Day17 = new Attendance(9, 26, 2022, "Present");
var student3Day18 = new Attendance(9, 27, 2022, "Present");
var student3Day19 = new Attendance(9, 28, 2022, "Absent");
var student3Day20 = new Attendance(9, 29, 2022, "Present");
var student3Day21 = new Attendance(9, 30, 2022, "Present");

var student4Day0 = new Attendance(9, 1, 2022, "Present");
var student4Day1 = new Attendance(9, 2, 2022, "Present");
var student4Day2 = new Attendance(9, 5, 2022, "Present");
var student4Day3 = new Attendance(9, 6, 2022, "Present");
var student4Day4 = new Attendance(9, 7, 2022, "Absent");
var student4Day5 = new Attendance(9, 8, 2022, "Present");
var student4Day6 = new Attendance(9, 9, 2022, "Present");
var student4Day7 = new Attendance(9, 12, 2022, "Present");
var student4Day8 = new Attendance(9, 13, 2022, "Present");
var student4Day9 = new Attendance(9, 14, 2022, "Absent");
var student4Day10 = new Attendance(9, 15, 2022, "Present");
var student4Day11 = new Attendance(9, 16, 2022, "Present");
var student4Day12 = new Attendance(9, 19, 2022, "Present");
var student4Day13 = new Attendance(9, 20, 2022, "Present");
var student4Day14 = new Attendance(9, 21, 2022, "Absent");
var student4Day15 = new Attendance(9, 22, 2022, "Present");
var student4Day16 = new Attendance(9, 23, 2022, "Present");
var student4Day17 = new Attendance(9, 26, 2022, "Present");
var student4Day18 = new Attendance(9, 27, 2022, "Present");
var student4Day19 = new Attendance(9, 28, 2022, "Absent");
var student4Day20 = new Attendance(9, 29, 2022, "Present");
var student4Day21 = new Attendance(9, 30, 2022, "Present");

var student5Day0 = new Attendance(9, 1, 2022, "Present");
var student5Day1 = new Attendance(9, 2, 2022, "Present");
var student5Day2 = new Attendance(9, 5, 2022, "Present");
var student5Day3 = new Attendance(9, 6, 2022, "Present");
var student5Day4 = new Attendance(9, 7, 2022, "Present");
var student5Day5 = new Attendance(9, 8, 2022, "Present");
var student5Day6 = new Attendance(9, 9, 2022, "Absent");
var student5Day7 = new Attendance(9, 12, 2022, "Present");
var student5Day8 = new Attendance(9, 13, 2022, "Present");
var student5Day9 = new Attendance(9, 14, 2022, "Present");
var student5Day10 = new Attendance(9, 15, 2022, "Present");
var student5Day11 = new Attendance(9, 16, 2022, "Present");
var student5Day12 = new Attendance(9, 19, 2022, "Present");
var student5Day13 = new Attendance(9, 20, 2022, "Absent");
var student5Day14 = new Attendance(9, 21, 2022, "Present");
var student5Day15 = new Attendance(9, 22, 2022, "Present");
var student5Day16 = new Attendance(9, 23, 2022, "Present");
var student5Day17 = new Attendance(9, 26, 2022, "Present");
var student5Day18 = new Attendance(9, 27, 2022, "Present");
var student5Day19 = new Attendance(9, 28, 2022, "Present");
var student5Day20 = new Attendance(9, 29, 2022, "Absent");
var student5Day21 = new Attendance(9, 30, 2022, "Present");

var student6Day0 = new Attendance(9, 1, 2022, "Present");
var student6Day1 = new Attendance(9, 2, 2022, "Present");
var student6Day2 = new Attendance(9, 5, 2022, "Present");
var student6Day3 = new Attendance(9, 6, 2022, "Present");
var student6Day4 = new Attendance(9, 7, 2022, "Present");
var student6Day5 = new Attendance(9, 8, 2022, "Present");
var student6Day6 = new Attendance(9, 9, 2022, "Present");
var student6Day7 = new Attendance(9, 12, 2022, "Absent");
var student6Day8 = new Attendance(9, 13, 2022, "Present");
var student6Day9 = new Attendance(9, 14, 2022, "Present");
var student6Day10 = new Attendance(9, 15, 2022, "Present");
var student6Day11 = new Attendance(9, 16, 2022, "Present");
var student6Day12 = new Attendance(9, 19, 2022, "Present");
var student6Day13 = new Attendance(9, 20, 2022, "Present");
var student6Day14 = new Attendance(9, 21, 2022, "Present");
var student6Day15 = new Attendance(9, 22, 2022, "Absent");
var student6Day16 = new Attendance(9, 23, 2022, "Present");
var student6Day17 = new Attendance(9, 26, 2022, "Present");
var student6Day18 = new Attendance(9, 27, 2022, "Present");
var student6Day19 = new Attendance(9, 28, 2022, "Present");
var student6Day20 = new Attendance(9, 29, 2022, "Present");
var student6Day21 = new Attendance(9, 30, 2022, "Present");

var student7Day0 = new Attendance(9, 1, 2022, "Present");
var student7Day1 = new Attendance(9, 2, 2022, "Present");
var student7Day2 = new Attendance(9, 5, 2022, "Present");
var student7Day3 = new Attendance(9, 6, 2022, "Present");
var student7Day4 = new Attendance(9, 7, 2022, "Present");
var student7Day5 = new Attendance(9, 8, 2022, "Present");
var student7Day6 = new Attendance(9, 9, 2022, "Present");
var student7Day7 = new Attendance(9, 12, 2022, "Present");
var student7Day8 = new Attendance(9, 13, 2022, "Absent");
var student7Day9 = new Attendance(9, 14, 2022, "Present");
var student7Day10 = new Attendance(9, 15, 2022, "Present");
var student7Day11 = new Attendance(9, 16, 2022, "Present");
var student7Day12 = new Attendance(9, 19, 2022, "Present");
var student7Day13 = new Attendance(9, 20, 2022, "Present");
var student7Day14 = new Attendance(9, 21, 2022, "Present");
var student7Day15 = new Attendance(9, 22, 2022, "Present");
var student7Day16 = new Attendance(9, 23, 2022, "Present");
var student7Day17 = new Attendance(9, 26, 2022, "Absent");
var student7Day18 = new Attendance(9, 27, 2022, "Present");
var student7Day19 = new Attendance(9, 28, 2022, "Present");
var student7Day20 = new Attendance(9, 29, 2022, "Present");
var student7Day21 = new Attendance(9, 30, 2022, "Present");

var student8Day0 = new Attendance(9, 1, 2022, "Present");
var student8Day1 = new Attendance(9, 2, 2022, "Present");
var student8Day2 = new Attendance(9, 5, 2022, "Present");
var student8Day3 = new Attendance(9, 6, 2022, "Present");
var student8Day4 = new Attendance(9, 7, 2022, "Present");
var student8Day5 = new Attendance(9, 8, 2022, "Present");
var student8Day6 = new Attendance(9, 9, 2022, "Present");
var student8Day7 = new Attendance(9, 12, 2022, "Present");
var student8Day8 = new Attendance(9, 13, 2022, "Present");
var student8Day9 = new Attendance(9, 14, 2022, "Absent");
var student8Day10 = new Attendance(9, 15, 2022, "Present");
var student8Day11 = new Attendance(9, 16, 2022, "Present");
var student8Day12 = new Attendance(9, 19, 2022, "Present");
var student8Day13 = new Attendance(9, 20, 2022, "Present");
var student8Day14 = new Attendance(9, 21, 2022, "Present");
var student8Day15 = new Attendance(9, 22, 2022, "Present");
var student8Day16 = new Attendance(9, 23, 2022, "Present");
var student8Day17 = new Attendance(9, 26, 2022, "Present");
var student8Day18 = new Attendance(9, 27, 2022, "Present");
var student8Day19 = new Attendance(9, 28, 2022, "Absent");
var student8Day20 = new Attendance(9, 29, 2022, "Present");
var student8Day21 = new Attendance(9, 30, 2022, "Present");

var student9Day0 = new Attendance(9, 1, 2022, "Present");
var student9Day1 = new Attendance(9, 2, 2022, "Present");
var student9Day2 = new Attendance(9, 5, 2022, "Present");
var student9Day3 = new Attendance(9, 6, 2022, "Present");
var student9Day4 = new Attendance(9, 7, 2022, "Present");
var student9Day5 = new Attendance(9, 8, 2022, "Present");
var student9Day6 = new Attendance(9, 9, 2022, "Present");
var student9Day7 = new Attendance(9, 12, 2022, "Present");
var student9Day8 = new Attendance(9, 13, 2022, "Present");
var student9Day9 = new Attendance(9, 14, 2022, "Present");
var student9Day10 = new Attendance(9, 15, 2022, "Present");
var student9Day11 = new Attendance(9, 16, 2022, "Present");
var student9Day12 = new Attendance(9, 19, 2022, "Present");
var student9Day13 = new Attendance(9, 20, 2022, "Present");
var student9Day14 = new Attendance(9, 21, 2022, "Present");
var student9Day15 = new Attendance(9, 22, 2022, "Present");
var student9Day16 = new Attendance(9, 23, 2022, "Present");
var student9Day17 = new Attendance(9, 26, 2022, "Present");
var student9Day18 = new Attendance(9, 27, 2022, "Present");
var student9Day19 = new Attendance(9, 28, 2022, "Present");
var student9Day20 = new Attendance(9, 29, 2022, "Present");
var student9Day21 = new Attendance(9, 30, 2022, "Present");

var student10Day0 = new Attendance(9, 1, 2022, "Present");
var student10Day1 = new Attendance(9, 2, 2022, "Present");
var student10Day2 = new Attendance(9, 5, 2022, "Present");
var student10Day3 = new Attendance(9, 6, 2022, "Present");
var student10Day4 = new Attendance(9, 7, 2022, "Present");
var student10Day5 = new Attendance(9, 8, 2022, "Present");
var student10Day6 = new Attendance(9, 9, 2022, "Present");
var student10Day7 = new Attendance(9, 12, 2022, "Present");
var student10Day8 = new Attendance(9, 13, 2022, "Present");
var student10Day9 = new Attendance(9, 14, 2022, "Present");
var student10Day10 = new Attendance(9, 15, 2022, "Present");
var student10Day11 = new Attendance(9, 16, 2022, "Absent");
var student10Day12 = new Attendance(9, 19, 2022, "Absent");
var student10Day13 = new Attendance(9, 20, 2022, "Absent");
var student10Day14 = new Attendance(9, 21, 2022, "Absent");
var student10Day15 = new Attendance(9, 22, 2022, "Absent");
var student10Day16 = new Attendance(9, 23, 2022, "Absent");
var student10Day17 = new Attendance(9, 26, 2022, "Absent");
var student10Day18 = new Attendance(9, 27, 2022, "Absent");
var student10Day19 = new Attendance(9, 28, 2022, "Absent");
var student10Day20 = new Attendance(9, 29, 2022, "Absent");
var student10Day21 = new Attendance(9, 30, 2022, "Absent");

var student11Day0 = new Attendance(9, 1, 2022, "Present");
var student11Day1 = new Attendance(9, 2, 2022, "Present");
var student11Day2 = new Attendance(9, 5, 2022, "Absent");
var student11Day3 = new Attendance(9, 6, 2022, "Present");
var student11Day4 = new Attendance(9, 7, 2022, "Present");
var student11Day5 = new Attendance(9, 8, 2022, "Absent");
var student11Day6 = new Attendance(9, 9, 2022, "Present");
var student11Day7 = new Attendance(9, 12, 2022, "Present");
var student11Day8 = new Attendance(9, 13, 2022, "Absent");
var student11Day9 = new Attendance(9, 14, 2022, "Present");
var student11Day10 = new Attendance(9, 15, 2022, "Present");
var student11Day11 = new Attendance(9, 16, 2022, "Absent");
var student11Day12 = new Attendance(9, 19, 2022, "Present");
var student11Day13 = new Attendance(9, 20, 2022, "Present");
var student11Day14 = new Attendance(9, 21, 2022, "Absent");
var student11Day15 = new Attendance(9, 22, 2022, "Present");
var student11Day16 = new Attendance(9, 23, 2022, "Present");
var student11Day17 = new Attendance(9, 26, 2022, "Absent");
var student11Day18 = new Attendance(9, 27, 2022, "Present");
var student11Day19 = new Attendance(9, 28, 2022, "Present");
var student11Day20 = new Attendance(9, 29, 2022, "Absent");
var student11Day21 = new Attendance(9, 30, 2022, "Present");

var student12Day0 = new Attendance(9, 1, 2022, "Present");
var student12Day1 = new Attendance(9, 2, 2022, "Present");
var student12Day2 = new Attendance(9, 5, 2022, "Present");
var student12Day3 = new Attendance(9, 6, 2022, "Absent");
var student12Day4 = new Attendance(9, 7, 2022, "Present");
var student12Day5 = new Attendance(9, 8, 2022, "Present");
var student12Day6 = new Attendance(9, 9, 2022, "Present");
var student12Day7 = new Attendance(9, 12, 2022, "Absent");
var student12Day8 = new Attendance(9, 13, 2022, "Present");
var student12Day9 = new Attendance(9, 14, 2022, "Present");
var student12Day10 = new Attendance(9, 15, 2022, "Present");
var student12Day11 = new Attendance(9, 16, 2022, "Absent");
var student12Day12 = new Attendance(9, 19, 2022, "Present");
var student12Day13 = new Attendance(9, 20, 2022, "Present");
var student12Day14 = new Attendance(9, 21, 2022, "Present");
var student12Day15 = new Attendance(9, 22, 2022, "Absent");
var student12Day16 = new Attendance(9, 23, 2022, "Present");
var student12Day17 = new Attendance(9, 26, 2022, "Present");
var student12Day18 = new Attendance(9, 27, 2022, "Present");
var student12Day19 = new Attendance(9, 28, 2022, "Absent");
var student12Day20 = new Attendance(9, 29, 2022, "Present");
var student12Day21 = new Attendance(9, 30, 2022, "Present");

var student13Day0 = new Attendance(9, 1, 2022, "Present");
var student13Day1 = new Attendance(9, 2, 2022, "Present");
var student13Day2 = new Attendance(9, 5, 2022, "Present");
var student13Day3 = new Attendance(9, 6, 2022, "Present");
var student13Day4 = new Attendance(9, 7, 2022, "Absent");
var student13Day5 = new Attendance(9, 8, 2022, "Present");
var student13Day6 = new Attendance(9, 9, 2022, "Present");
var student13Day7 = new Attendance(9, 12, 2022, "Present");
var student13Day8 = new Attendance(9, 13, 2022, "Present");
var student13Day9 = new Attendance(9, 14, 2022, "Absent");
var student13Day10 = new Attendance(9, 15, 2022, "Present");
var student13Day11 = new Attendance(9, 16, 2022, "Present");
var student13Day12 = new Attendance(9, 19, 2022, "Present");
var student13Day13 = new Attendance(9, 20, 2022, "Present");
var student13Day14 = new Attendance(9, 21, 2022, "Absent");
var student13Day15 = new Attendance(9, 22, 2022, "Present");
var student13Day16 = new Attendance(9, 23, 2022, "Present");
var student13Day17 = new Attendance(9, 26, 2022, "Present");
var student13Day18 = new Attendance(9, 27, 2022, "Present");
var student13Day19 = new Attendance(9, 28, 2022, "Absent");
var student13Day20 = new Attendance(9, 29, 2022, "Present");
var student13Day21 = new Attendance(9, 30, 2022, "Present");

var student14Day0 = new Attendance(9, 1, 2022, "Present");
var student14Day1 = new Attendance(9, 2, 2022, "Present");
var student14Day2 = new Attendance(9, 5, 2022, "Present");
var student14Day3 = new Attendance(9, 6, 2022, "Present");
var student14Day4 = new Attendance(9, 7, 2022, "Present");
var student14Day5 = new Attendance(9, 8, 2022, "Present");
var student14Day6 = new Attendance(9, 9, 2022, "Absent");
var student14Day7 = new Attendance(9, 12, 2022, "Present");
var student14Day8 = new Attendance(9, 13, 2022, "Present");
var student14Day9 = new Attendance(9, 14, 2022, "Present");
var student14Day10 = new Attendance(9, 15, 2022, "Present");
var student14Day11 = new Attendance(9, 16, 2022, "Present");
var student14Day12 = new Attendance(9, 19, 2022, "Present");
var student14Day13 = new Attendance(9, 20, 2022, "Absent");
var student14Day14 = new Attendance(9, 21, 2022, "Present");
var student14Day15 = new Attendance(9, 22, 2022, "Present");
var student14Day16 = new Attendance(9, 23, 2022, "Present");
var student14Day17 = new Attendance(9, 26, 2022, "Present");
var student14Day18 = new Attendance(9, 27, 2022, "Present");
var student14Day19 = new Attendance(9, 28, 2022, "Present");
var student14Day20 = new Attendance(9, 29, 2022, "Absent");
var student14Day21 = new Attendance(9, 30, 2022, "Present");

var student15Day0 = new Attendance(9, 1, 2022, "Present");
var student15Day1 = new Attendance(9, 2, 2022, "Present");
var student15Day2 = new Attendance(9, 5, 2022, "Present");
var student15Day3 = new Attendance(9, 6, 2022, "Present");
var student15Day4 = new Attendance(9, 7, 2022, "Present");
var student15Day5 = new Attendance(9, 8, 2022, "Present");
var student15Day6 = new Attendance(9, 9, 2022, "Present");
var student15Day7 = new Attendance(9, 12, 2022, "Absent");
var student15Day8 = new Attendance(9, 13, 2022, "Present");
var student15Day9 = new Attendance(9, 14, 2022, "Present");
var student15Day10 = new Attendance(9, 15, 2022, "Present");
var student15Day11 = new Attendance(9, 16, 2022, "Present");
var student15Day12 = new Attendance(9, 19, 2022, "Present");
var student15Day13 = new Attendance(9, 20, 2022, "Present");
var student15Day14 = new Attendance(9, 21, 2022, "Present");
var student15Day15 = new Attendance(9, 22, 2022, "Absent");
var student15Day16 = new Attendance(9, 23, 2022, "Present");
var student15Day17 = new Attendance(9, 26, 2022, "Present");
var student15Day18 = new Attendance(9, 27, 2022, "Present");
var student15Day19 = new Attendance(9, 28, 2022, "Present");
var student15Day20 = new Attendance(9, 29, 2022, "Present");
var student15Day21 = new Attendance(9, 30, 2022, "Present");

var student16Day0 = new Attendance(9, 1, 2022, "Present");
var student16Day1 = new Attendance(9, 2, 2022, "Present");
var student16Day2 = new Attendance(9, 5, 2022, "Present");
var student16Day3 = new Attendance(9, 6, 2022, "Present");
var student16Day4 = new Attendance(9, 7, 2022, "Present");
var student16Day5 = new Attendance(9, 8, 2022, "Present");
var student16Day6 = new Attendance(9, 9, 2022, "Present");
var student16Day7 = new Attendance(9, 12, 2022, "Present");
var student16Day8 = new Attendance(9, 13, 2022, "Absent");
var student16Day9 = new Attendance(9, 14, 2022, "Present");
var student16Day10 = new Attendance(9, 15, 2022, "Present");
var student16Day11 = new Attendance(9, 16, 2022, "Present");
var student16Day12 = new Attendance(9, 19, 2022, "Present");
var student16Day13 = new Attendance(9, 20, 2022, "Present");
var student16Day14 = new Attendance(9, 21, 2022, "Present");
var student16Day15 = new Attendance(9, 22, 2022, "Present");
var student16Day16 = new Attendance(9, 23, 2022, "Present");
var student16Day17 = new Attendance(9, 26, 2022, "Absent");
var student16Day18 = new Attendance(9, 27, 2022, "Present");
var student16Day19 = new Attendance(9, 28, 2022, "Present");
var student16Day20 = new Attendance(9, 29, 2022, "Present");
var student16Day21 = new Attendance(9, 30, 2022, "Present");

var student17Day0 = new Attendance(9, 1, 2022, "Present");
var student17Day1 = new Attendance(9, 2, 2022, "Present");
var student17Day2 = new Attendance(9, 5, 2022, "Present");
var student17Day3 = new Attendance(9, 6, 2022, "Present");
var student17Day4 = new Attendance(9, 7, 2022, "Present");
var student17Day5 = new Attendance(9, 8, 2022, "Present");
var student17Day6 = new Attendance(9, 9, 2022, "Present");
var student17Day7 = new Attendance(9, 12, 2022, "Present");
var student17Day8 = new Attendance(9, 13, 2022, "Present");
var student17Day9 = new Attendance(9, 14, 2022, "Absent");
var student17Day10 = new Attendance(9, 15, 2022, "Present");
var student17Day11 = new Attendance(9, 16, 2022, "Present");
var student17Day12 = new Attendance(9, 19, 2022, "Present");
var student17Day13 = new Attendance(9, 20, 2022, "Present");
var student17Day14 = new Attendance(9, 21, 2022, "Present");
var student17Day15 = new Attendance(9, 22, 2022, "Present");
var student17Day16 = new Attendance(9, 23, 2022, "Present");
var student17Day17 = new Attendance(9, 26, 2022, "Present");
var student17Day18 = new Attendance(9, 27, 2022, "Present");
var student17Day19 = new Attendance(9, 28, 2022, "Absent");
var student17Day20 = new Attendance(9, 29, 2022, "Present");
var student17Day21 = new Attendance(9, 30, 2022, "Present");

var student18Day0 = new Attendance(9, 1, 2022, "Present");
var student18Day1 = new Attendance(9, 2, 2022, "Present");
var student18Day2 = new Attendance(9, 5, 2022, "Present");
var student18Day3 = new Attendance(9, 6, 2022, "Present");
var student18Day4 = new Attendance(9, 7, 2022, "Present");
var student18Day5 = new Attendance(9, 8, 2022, "Present");
var student18Day6 = new Attendance(9, 9, 2022, "Present");
var student18Day7 = new Attendance(9, 12, 2022, "Present");
var student18Day8 = new Attendance(9, 13, 2022, "Present");
var student18Day9 = new Attendance(9, 14, 2022, "Present");
var student18Day10 = new Attendance(9, 15, 2022, "Present");
var student18Day11 = new Attendance(9, 16, 2022, "Present");
var student18Day12 = new Attendance(9, 19, 2022, "Present");
var student18Day13 = new Attendance(9, 20, 2022, "Present");
var student18Day14 = new Attendance(9, 21, 2022, "Present");
var student18Day15 = new Attendance(9, 22, 2022, "Present");
var student18Day16 = new Attendance(9, 23, 2022, "Present");
var student18Day17 = new Attendance(9, 26, 2022, "Present");
var student18Day18 = new Attendance(9, 27, 2022, "Present");
var student18Day19 = new Attendance(9, 28, 2022, "Present");
var student18Day20 = new Attendance(9, 29, 2022, "Present");
var student18Day21 = new Attendance(9, 30, 2022, "Present");

var student19Day0 = new Attendance(9, 1, 2022, "Present");
var student19Day1 = new Attendance(9, 2, 2022, "Present");
var student19Day2 = new Attendance(9, 5, 2022, "Present");
var student19Day3 = new Attendance(9, 6, 2022, "Present");
var student19Day4 = new Attendance(9, 7, 2022, "Present");
var student19Day5 = new Attendance(9, 8, 2022, "Present");
var student19Day6 = new Attendance(9, 9, 2022, "Present");
var student19Day7 = new Attendance(9, 12, 2022, "Present");
var student19Day8 = new Attendance(9, 13, 2022, "Present");
var student19Day9 = new Attendance(9, 14, 2022, "Present");
var student19Day10 = new Attendance(9, 15, 2022, "Present");
var student19Day11 = new Attendance(9, 16, 2022, "Present");
var student19Day12 = new Attendance(9, 19, 2022, "Present");
var student19Day13 = new Attendance(9, 20, 2022, "Present");
var student19Day14 = new Attendance(9, 21, 2022, "Present");
var student19Day15 = new Attendance(9, 22, 2022, "Present");
var student19Day16 = new Attendance(9, 23, 2022, "Present");
var student19Day17 = new Attendance(9, 26, 2022, "Present");
var student19Day18 = new Attendance(9, 27, 2022, "Present");
var student19Day19 = new Attendance(9, 28, 2022, "Present");
var student19Day20 = new Attendance(9, 29, 2022, "Present");
var student19Day21 = new Attendance(9, 30, 2022, "Present");

var student20Day0 = new Attendance(9, 1, 2022, "Present");
var student20Day1 = new Attendance(9, 2, 2022, "Present");
var student20Day2 = new Attendance(9, 5, 2022, "Present");
var student20Day3 = new Attendance(9, 6, 2022, "Present");
var student20Day4 = new Attendance(9, 7, 2022, "Present");
var student20Day5 = new Attendance(9, 8, 2022, "Present");
var student20Day6 = new Attendance(9, 9, 2022, "Present");
var student20Day7 = new Attendance(9, 12, 2022, "Present");
var student20Day8 = new Attendance(9, 13, 2022, "Present");
var student20Day9 = new Attendance(9, 14, 2022, "Present");
var student20Day10 = new Attendance(9, 15, 2022, "Present");
var student20Day11 = new Attendance(9, 16, 2022, "Present");
var student20Day12 = new Attendance(9, 19, 2022, "Present");
var student20Day13 = new Attendance(9, 20, 2022, "Present");
var student20Day14 = new Attendance(9, 21, 2022, "Present");
var student20Day15 = new Attendance(9, 22, 2022, "Present");
var student20Day16 = new Attendance(9, 23, 2022, "Present");
var student20Day17 = new Attendance(9, 26, 2022, "Present");
var student20Day18 = new Attendance(9, 27, 2022, "Present");
var student20Day19 = new Attendance(9, 28, 2022, "Present");
var student20Day20 = new Attendance(9, 29, 2022, "Present");
var student20Day21 = new Attendance(9, 30, 2022, "Present");

var student21Day0 = new Attendance(9, 1, 2022, "Present");
var student21Day1 = new Attendance(9, 2, 2022, "Present");
var student21Day2 = new Attendance(9, 5, 2022, "Present");
var student21Day3 = new Attendance(9, 6, 2022, "Present");
var student21Day4 = new Attendance(9, 7, 2022, "Present");
var student21Day5 = new Attendance(9, 8, 2022, "Present");
var student21Day6 = new Attendance(9, 9, 2022, "Present");
var student21Day7 = new Attendance(9, 12, 2022, "Present");
var student21Day8 = new Attendance(9, 13, 2022, "Present");
var student21Day9 = new Attendance(9, 14, 2022, "Present");
var student21Day10 = new Attendance(9, 15, 2022, "Present");
var student21Day11 = new Attendance(9, 16, 2022, "Absent");
var student21Day12 = new Attendance(9, 19, 2022, "Absent");
var student21Day13 = new Attendance(9, 20, 2022, "Absent");
var student21Day14 = new Attendance(9, 21, 2022, "Absent");
var student21Day15 = new Attendance(9, 22, 2022, "Absent");
var student21Day16 = new Attendance(9, 23, 2022, "Absent");
var student21Day17 = new Attendance(9, 26, 2022, "Absent");
var student21Day18 = new Attendance(9, 27, 2022, "Absent");
var student21Day19 = new Attendance(9, 28, 2022, "Absent");
var student21Day20 = new Attendance(9, 29, 2022, "Absent");
var student21Day21 = new Attendance(9, 30, 2022, "Absent");

var student22Day0 = new Attendance(9, 1, 2022, "Present");
var student22Day1 = new Attendance(9, 2, 2022, "Present");
var student22Day2 = new Attendance(9, 5, 2022, "Absent");
var student22Day3 = new Attendance(9, 6, 2022, "Present");
var student22Day4 = new Attendance(9, 7, 2022, "Present");
var student22Day5 = new Attendance(9, 8, 2022, "Absent");
var student22Day6 = new Attendance(9, 9, 2022, "Present");
var student22Day7 = new Attendance(9, 12, 2022, "Present");
var student22Day8 = new Attendance(9, 13, 2022, "Absent");
var student22Day9 = new Attendance(9, 14, 2022, "Present");
var student22Day10 = new Attendance(9, 15, 2022, "Present");
var student22Day11 = new Attendance(9, 16, 2022, "Absent");
var student22Day12 = new Attendance(9, 19, 2022, "Present");
var student22Day13 = new Attendance(9, 20, 2022, "Present");
var student22Day14 = new Attendance(9, 21, 2022, "Absent");
var student22Day15 = new Attendance(9, 22, 2022, "Present");
var student22Day16 = new Attendance(9, 23, 2022, "Present");
var student22Day17 = new Attendance(9, 26, 2022, "Absent");
var student22Day18 = new Attendance(9, 27, 2022, "Present");
var student22Day19 = new Attendance(9, 28, 2022, "Present");
var student22Day20 = new Attendance(9, 29, 2022, "Absent");
var student22Day21 = new Attendance(9, 30, 2022, "Present");

var student23Day0 = new Attendance(9, 1, 2022, "Present");
var student23Day1 = new Attendance(9, 2, 2022, "Present");
var student23Day2 = new Attendance(9, 5, 2022, "Present");
var student23Day3 = new Attendance(9, 6, 2022, "Absent");
var student23Day4 = new Attendance(9, 7, 2022, "Present");
var student23Day5 = new Attendance(9, 8, 2022, "Present");
var student23Day6 = new Attendance(9, 9, 2022, "Present");
var student23Day7 = new Attendance(9, 12, 2022, "Absent");
var student23Day8 = new Attendance(9, 13, 2022, "Present");
var student23Day9 = new Attendance(9, 14, 2022, "Present");
var student23Day10 = new Attendance(9, 15, 2022, "Present");
var student23Day11 = new Attendance(9, 16, 2022, "Absent");
var student23Day12 = new Attendance(9, 19, 2022, "Present");
var student23Day13 = new Attendance(9, 20, 2022, "Present");
var student23Day14 = new Attendance(9, 21, 2022, "Present");
var student23Day15 = new Attendance(9, 22, 2022, "Absent");
var student23Day16 = new Attendance(9, 23, 2022, "Present");
var student23Day17 = new Attendance(9, 26, 2022, "Present");
var student23Day18 = new Attendance(9, 27, 2022, "Present");
var student23Day19 = new Attendance(9, 28, 2022, "Absent");
var student23Day20 = new Attendance(9, 29, 2022, "Present");
var student23Day21 = new Attendance(9, 30, 2022, "Present");

var student24Day0 = new Attendance(9, 1, 2022, "Present");
var student24Day1 = new Attendance(9, 2, 2022, "Present");
var student24Day2 = new Attendance(9, 5, 2022, "Present");
var student24Day3 = new Attendance(9, 6, 2022, "Present");
var student24Day4 = new Attendance(9, 7, 2022, "Absent");
var student24Day5 = new Attendance(9, 8, 2022, "Present");
var student24Day6 = new Attendance(9, 9, 2022, "Present");
var student24Day7 = new Attendance(9, 12, 2022, "Present");
var student24Day8 = new Attendance(9, 13, 2022, "Present");
var student24Day9 = new Attendance(9, 14, 2022, "Absent");
var student24Day10 = new Attendance(9, 15, 2022, "Present");
var student24Day11 = new Attendance(9, 16, 2022, "Present");
var student24Day12 = new Attendance(9, 19, 2022, "Present");
var student24Day13 = new Attendance(9, 20, 2022, "Present");
var student24Day14 = new Attendance(9, 21, 2022, "Absent");
var student24Day15 = new Attendance(9, 22, 2022, "Present");
var student24Day16 = new Attendance(9, 23, 2022, "Present");
var student24Day17 = new Attendance(9, 26, 2022, "Present");
var student24Day18 = new Attendance(9, 27, 2022, "Present");
var student24Day19 = new Attendance(9, 28, 2022, "Absent");
var student24Day20 = new Attendance(9, 29, 2022, "Present");
var student24Day21 = new Attendance(9, 30, 2022, "Present");

var student25Day0 = new Attendance(9, 1, 2022, "Present");
var student25Day1 = new Attendance(9, 2, 2022, "Present");
var student25Day2 = new Attendance(9, 5, 2022, "Present");
var student25Day3 = new Attendance(9, 6, 2022, "Present");
var student25Day4 = new Attendance(9, 7, 2022, "Present");
var student25Day5 = new Attendance(9, 8, 2022, "Present");
var student25Day6 = new Attendance(9, 9, 2022, "Absent");
var student25Day7 = new Attendance(9, 12, 2022, "Present");
var student25Day8 = new Attendance(9, 13, 2022, "Present");
var student25Day9 = new Attendance(9, 14, 2022, "Present");
var student25Day10 = new Attendance(9, 15, 2022, "Present");
var student25Day11 = new Attendance(9, 16, 2022, "Present");
var student25Day12 = new Attendance(9, 19, 2022, "Present");
var student25Day13 = new Attendance(9, 20, 2022, "Absent");
var student25Day14 = new Attendance(9, 21, 2022, "Present");
var student25Day15 = new Attendance(9, 22, 2022, "Present");
var student25Day16 = new Attendance(9, 23, 2022, "Present");
var student25Day17 = new Attendance(9, 26, 2022, "Present");
var student25Day18 = new Attendance(9, 27, 2022, "Present");
var student25Day19 = new Attendance(9, 28, 2022, "Present");
var student25Day20 = new Attendance(9, 29, 2022, "Absent");
var student25Day21 = new Attendance(9, 30, 2022, "Present");

var student26Day0 = new Attendance(9, 1, 2022, "Present");
var student26Day1 = new Attendance(9, 2, 2022, "Present");
var student26Day2 = new Attendance(9, 5, 2022, "Present");
var student26Day3 = new Attendance(9, 6, 2022, "Present");
var student26Day4 = new Attendance(9, 7, 2022, "Present");
var student26Day5 = new Attendance(9, 8, 2022, "Present");
var student26Day6 = new Attendance(9, 9, 2022, "Present");
var student26Day7 = new Attendance(9, 12, 2022, "Absent");
var student26Day8 = new Attendance(9, 13, 2022, "Present");
var student26Day9 = new Attendance(9, 14, 2022, "Present");
var student26Day10 = new Attendance(9, 15, 2022, "Present");
var student26Day11 = new Attendance(9, 16, 2022, "Present");
var student26Day12 = new Attendance(9, 19, 2022, "Present");
var student26Day13 = new Attendance(9, 20, 2022, "Present");
var student26Day14 = new Attendance(9, 21, 2022, "Present");
var student26Day15 = new Attendance(9, 22, 2022, "Absent");
var student26Day16 = new Attendance(9, 23, 2022, "Present");
var student26Day17 = new Attendance(9, 26, 2022, "Present");
var student26Day18 = new Attendance(9, 27, 2022, "Present");
var student26Day19 = new Attendance(9, 28, 2022, "Present");
var student26Day20 = new Attendance(9, 29, 2022, "Present");
var student26Day21 = new Attendance(9, 30, 2022, "Present");

var student27Day0 = new Attendance(9, 1, 2022, "Present");
var student27Day1 = new Attendance(9, 2, 2022, "Present");
var student27Day2 = new Attendance(9, 5, 2022, "Present");
var student27Day3 = new Attendance(9, 6, 2022, "Present");
var student27Day4 = new Attendance(9, 7, 2022, "Present");
var student27Day5 = new Attendance(9, 8, 2022, "Present");
var student27Day6 = new Attendance(9, 9, 2022, "Present");
var student27Day7 = new Attendance(9, 12, 2022, "Present");
var student27Day8 = new Attendance(9, 13, 2022, "Absent");
var student27Day9 = new Attendance(9, 14, 2022, "Present");
var student27Day10 = new Attendance(9, 15, 2022, "Present");
var student27Day11 = new Attendance(9, 16, 2022, "Present");
var student27Day12 = new Attendance(9, 19, 2022, "Present");
var student27Day13 = new Attendance(9, 20, 2022, "Present");
var student27Day14 = new Attendance(9, 21, 2022, "Present");
var student27Day15 = new Attendance(9, 22, 2022, "Present");
var student27Day16 = new Attendance(9, 23, 2022, "Present");
var student27Day17 = new Attendance(9, 26, 2022, "Absent");
var student27Day18 = new Attendance(9, 27, 2022, "Present");
var student27Day19 = new Attendance(9, 28, 2022, "Present");
var student27Day20 = new Attendance(9, 29, 2022, "Present");
var student27Day21 = new Attendance(9, 30, 2022, "Present");

var student28Day0 = new Attendance(9, 1, 2022, "Present");
var student28Day1 = new Attendance(9, 2, 2022, "Present");
var student28Day2 = new Attendance(9, 5, 2022, "Present");
var student28Day3 = new Attendance(9, 6, 2022, "Present");
var student28Day4 = new Attendance(9, 7, 2022, "Present");
var student28Day5 = new Attendance(9, 8, 2022, "Present");
var student28Day6 = new Attendance(9, 9, 2022, "Present");
var student28Day7 = new Attendance(9, 12, 2022, "Present");
var student28Day8 = new Attendance(9, 13, 2022, "Present");
var student28Day9 = new Attendance(9, 14, 2022, "Absent");
var student28Day10 = new Attendance(9, 15, 2022, "Present");
var student28Day11 = new Attendance(9, 16, 2022, "Present");
var student28Day12 = new Attendance(9, 19, 2022, "Present");
var student28Day13 = new Attendance(9, 20, 2022, "Present");
var student28Day14 = new Attendance(9, 21, 2022, "Present");
var student28Day15 = new Attendance(9, 22, 2022, "Present");
var student28Day16 = new Attendance(9, 23, 2022, "Present");
var student28Day17 = new Attendance(9, 26, 2022, "Present");
var student28Day18 = new Attendance(9, 27, 2022, "Present");
var student28Day19 = new Attendance(9, 28, 2022, "Absent");
var student28Day20 = new Attendance(9, 29, 2022, "Present");
var student28Day21 = new Attendance(9, 30, 2022, "Present");

var student29Day0 = new Attendance(9, 1, 2022, "Present");
var student29Day1 = new Attendance(9, 2, 2022, "Present");
var student29Day2 = new Attendance(9, 5, 2022, "Present");
var student29Day3 = new Attendance(9, 6, 2022, "Present");
var student29Day4 = new Attendance(9, 7, 2022, "Present");
var student29Day5 = new Attendance(9, 8, 2022, "Present");
var student29Day6 = new Attendance(9, 9, 2022, "Present");
var student29Day7 = new Attendance(9, 12, 2022, "Present");
var student29Day8 = new Attendance(9, 13, 2022, "Present");
var student29Day9 = new Attendance(9, 14, 2022, "Present");
var student29Day10 = new Attendance(9, 15, 2022, "Present");
var student29Day11 = new Attendance(9, 16, 2022, "Present");
var student29Day12 = new Attendance(9, 19, 2022, "Present");
var student29Day13 = new Attendance(9, 20, 2022, "Present");
var student29Day14 = new Attendance(9, 21, 2022, "Present");
var student29Day15 = new Attendance(9, 22, 2022, "Present");
var student29Day16 = new Attendance(9, 23, 2022, "Present");
var student29Day17 = new Attendance(9, 26, 2022, "Present");
var student29Day18 = new Attendance(9, 27, 2022, "Present");
var student29Day19 = new Attendance(9, 28, 2022, "Present");
var student29Day20 = new Attendance(9, 29, 2022, "Present");
var student29Day21 = new Attendance(9, 30, 2022, "Present");

student0.addAttendance(student0Day0);
student0.addAttendance(student0Day1);
student0.addAttendance(student0Day2);
student0.addAttendance(student0Day3);
student0.addAttendance(student0Day4);
student0.addAttendance(student0Day5);
student0.addAttendance(student0Day6);
student0.addAttendance(student0Day7);
student0.addAttendance(student0Day8);
student0.addAttendance(student0Day9);
student0.addAttendance(student0Day10);
student0.addAttendance(student0Day11);
student0.addAttendance(student0Day12);
student0.addAttendance(student0Day13);
student0.addAttendance(student0Day14);
student0.addAttendance(student0Day15);
student0.addAttendance(student0Day16);
student0.addAttendance(student0Day17);
student0.addAttendance(student0Day18);
student0.addAttendance(student0Day19); 
student0.addAttendance(student0Day20);
student0.addAttendance(student0Day21);

student1.addAttendance(student1Day0);
student1.addAttendance(student1Day1);
student1.addAttendance(student1Day2);
student1.addAttendance(student1Day3);
student1.addAttendance(student1Day4);
student1.addAttendance(student1Day5);
student1.addAttendance(student1Day6);
student1.addAttendance(student1Day7);
student1.addAttendance(student1Day8); 
student1.addAttendance(student1Day9);
student1.addAttendance(student1Day10);
student1.addAttendance(student1Day11);
student1.addAttendance(student1Day12);
student1.addAttendance(student1Day13);
student1.addAttendance(student1Day14);
student1.addAttendance(student1Day15);
student1.addAttendance(student1Day16);
student1.addAttendance(student1Day17);
student1.addAttendance(student1Day18);
student1.addAttendance(student1Day19); 
student1.addAttendance(student1Day20);
student1.addAttendance(student1Day21);

student2.addAttendance(student2Day0);
student2.addAttendance(student2Day1);
student2.addAttendance(student2Day2);
student2.addAttendance(student2Day3);
student2.addAttendance(student2Day4);
student2.addAttendance(student2Day5);
student2.addAttendance(student2Day6);
student2.addAttendance(student2Day7);
student2.addAttendance(student2Day8); 
student2.addAttendance(student2Day9);
student2.addAttendance(student2Day10);
student2.addAttendance(student2Day11);
student2.addAttendance(student2Day12);
student2.addAttendance(student2Day13);
student2.addAttendance(student2Day14);
student2.addAttendance(student2Day15);
student2.addAttendance(student2Day16);
student2.addAttendance(student2Day17);
student2.addAttendance(student2Day18);
student2.addAttendance(student2Day19); 
student2.addAttendance(student2Day20);
student2.addAttendance(student2Day21);

student3.addAttendance(student3Day0);
student3.addAttendance(student3Day1);
student3.addAttendance(student3Day2);
student3.addAttendance(student3Day3);
student3.addAttendance(student3Day4);
student3.addAttendance(student3Day5);
student3.addAttendance(student3Day6);
student3.addAttendance(student3Day7);
student3.addAttendance(student3Day8); 
student3.addAttendance(student3Day9);
student3.addAttendance(student3Day10);
student3.addAttendance(student3Day11);
student3.addAttendance(student3Day12);
student3.addAttendance(student3Day13);
student3.addAttendance(student3Day14);
student3.addAttendance(student3Day15);
student3.addAttendance(student3Day16);
student3.addAttendance(student3Day17);
student3.addAttendance(student3Day18);
student3.addAttendance(student3Day19); 
student3.addAttendance(student3Day20);
student3.addAttendance(student3Day21);

student4.addAttendance(student4Day0);
student4.addAttendance(student4Day1);
student4.addAttendance(student4Day2);
student4.addAttendance(student4Day3);
student4.addAttendance(student4Day4);
student4.addAttendance(student4Day5);
student4.addAttendance(student4Day6);
student4.addAttendance(student4Day7);
student4.addAttendance(student4Day8); 
student4.addAttendance(student4Day9);
student4.addAttendance(student4Day10);
student4.addAttendance(student4Day11);
student4.addAttendance(student4Day12);
student4.addAttendance(student4Day13);
student4.addAttendance(student4Day14);
student4.addAttendance(student4Day15);
student4.addAttendance(student4Day16);
student4.addAttendance(student4Day17);
student4.addAttendance(student4Day18);
student4.addAttendance(student4Day19); 
student4.addAttendance(student4Day20);
student4.addAttendance(student4Day21);

student5.addAttendance(student5Day0);
student5.addAttendance(student5Day1);
student5.addAttendance(student5Day2);
student5.addAttendance(student5Day3);
student5.addAttendance(student5Day4);
student5.addAttendance(student5Day5);
student5.addAttendance(student5Day6);
student5.addAttendance(student5Day7);
student5.addAttendance(student5Day8); 
student5.addAttendance(student5Day9);
student5.addAttendance(student5Day10);
student5.addAttendance(student5Day11);
student5.addAttendance(student5Day12);
student5.addAttendance(student5Day13);
student5.addAttendance(student5Day14);
student5.addAttendance(student5Day15);
student5.addAttendance(student5Day16);
student5.addAttendance(student5Day17);
student5.addAttendance(student5Day18);
student5.addAttendance(student5Day19); 
student5.addAttendance(student5Day20);
student5.addAttendance(student5Day21);

student6.addAttendance(student6Day0);
student6.addAttendance(student6Day1);
student6.addAttendance(student6Day2);
student6.addAttendance(student6Day3);
student6.addAttendance(student6Day4);
student6.addAttendance(student6Day5);
student6.addAttendance(student6Day6);
student6.addAttendance(student6Day7);
student6.addAttendance(student6Day8); 
student6.addAttendance(student6Day9);
student6.addAttendance(student6Day10);
student6.addAttendance(student6Day11);
student6.addAttendance(student6Day12);
student6.addAttendance(student6Day13);
student6.addAttendance(student6Day14);
student6.addAttendance(student6Day15);
student6.addAttendance(student6Day16);
student6.addAttendance(student6Day17);
student6.addAttendance(student6Day18);
student6.addAttendance(student6Day19); 
student6.addAttendance(student6Day20);
student6.addAttendance(student6Day21);

student7.addAttendance(student7Day0);
student7.addAttendance(student7Day1);
student7.addAttendance(student7Day2);
student7.addAttendance(student7Day3);
student7.addAttendance(student7Day4);
student7.addAttendance(student7Day5);
student7.addAttendance(student7Day6);
student7.addAttendance(student7Day7);
student7.addAttendance(student7Day8); 
student7.addAttendance(student7Day9);
student7.addAttendance(student7Day10);
student7.addAttendance(student7Day11);
student7.addAttendance(student7Day12);
student7.addAttendance(student7Day13);
student7.addAttendance(student7Day14);
student7.addAttendance(student7Day15);
student7.addAttendance(student7Day16);
student7.addAttendance(student7Day17);
student7.addAttendance(student7Day18);
student7.addAttendance(student7Day19); 
student7.addAttendance(student7Day20);
student7.addAttendance(student7Day21);

student8.addAttendance(student8Day0);
student8.addAttendance(student8Day1);
student8.addAttendance(student8Day2);
student8.addAttendance(student8Day3);
student8.addAttendance(student8Day4);
student8.addAttendance(student8Day5);
student8.addAttendance(student8Day6);
student8.addAttendance(student8Day7);
student8.addAttendance(student8Day8); 
student8.addAttendance(student8Day9);
student8.addAttendance(student8Day10);
student8.addAttendance(student8Day11);
student8.addAttendance(student8Day12);
student8.addAttendance(student8Day13);
student8.addAttendance(student8Day14);
student8.addAttendance(student8Day15);
student8.addAttendance(student8Day16);
student8.addAttendance(student8Day17);
student8.addAttendance(student8Day18);
student8.addAttendance(student8Day19); 
student8.addAttendance(student8Day20);
student8.addAttendance(student8Day21);

student9.addAttendance(student9Day0);
student9.addAttendance(student9Day1);
student9.addAttendance(student9Day2);
student9.addAttendance(student9Day3);
student9.addAttendance(student9Day4);
student9.addAttendance(student9Day5);
student9.addAttendance(student9Day6);
student9.addAttendance(student9Day7);
student9.addAttendance(student9Day8); 
student9.addAttendance(student9Day9);
student9.addAttendance(student9Day10);
student9.addAttendance(student9Day11);
student9.addAttendance(student9Day12);
student9.addAttendance(student9Day13);
student9.addAttendance(student9Day14);
student9.addAttendance(student9Day15);
student9.addAttendance(student9Day16);
student9.addAttendance(student9Day17);
student9.addAttendance(student9Day18);
student9.addAttendance(student9Day19); 
student9.addAttendance(student9Day20);
student9.addAttendance(student9Day21);

student10.addAttendance(student10Day0);
student10.addAttendance(student10Day1);
student10.addAttendance(student10Day2);
student10.addAttendance(student10Day3);
student10.addAttendance(student10Day4);
student10.addAttendance(student10Day5);
student10.addAttendance(student10Day6);
student10.addAttendance(student10Day7);
student10.addAttendance(student10Day8); 
student10.addAttendance(student10Day9);
student10.addAttendance(student10Day10);
student10.addAttendance(student10Day11);
student10.addAttendance(student10Day12);
student10.addAttendance(student10Day13);
student10.addAttendance(student10Day14);
student10.addAttendance(student10Day15);
student10.addAttendance(student10Day16);
student10.addAttendance(student10Day17);
student10.addAttendance(student10Day18);
student10.addAttendance(student10Day19); 
student10.addAttendance(student10Day20);
student10.addAttendance(student10Day21);

student11.addAttendance(student11Day0);
student11.addAttendance(student11Day1);
student11.addAttendance(student11Day2);
student11.addAttendance(student11Day3);
student11.addAttendance(student11Day4);
student11.addAttendance(student11Day5);
student11.addAttendance(student11Day6);
student11.addAttendance(student11Day7);
student11.addAttendance(student11Day8); 
student11.addAttendance(student11Day9);
student11.addAttendance(student11Day10);
student11.addAttendance(student11Day11);
student11.addAttendance(student11Day12);
student11.addAttendance(student11Day13);
student11.addAttendance(student11Day14);
student11.addAttendance(student11Day15);
student11.addAttendance(student11Day16);
student11.addAttendance(student11Day17);
student11.addAttendance(student11Day18);
student11.addAttendance(student11Day19); 
student11.addAttendance(student11Day20);
student11.addAttendance(student11Day21);

student12.addAttendance(student12Day0);
student12.addAttendance(student12Day1);
student12.addAttendance(student12Day2);
student12.addAttendance(student12Day3);
student12.addAttendance(student12Day4);
student12.addAttendance(student12Day5);
student12.addAttendance(student12Day6);
student12.addAttendance(student12Day7);
student12.addAttendance(student12Day8); 
student12.addAttendance(student12Day9);
student12.addAttendance(student12Day10);
student12.addAttendance(student12Day11);
student12.addAttendance(student12Day12);
student12.addAttendance(student12Day13);
student12.addAttendance(student12Day14);
student12.addAttendance(student12Day15);
student12.addAttendance(student12Day16);
student12.addAttendance(student12Day17);
student12.addAttendance(student12Day18);
student12.addAttendance(student12Day19); 
student12.addAttendance(student12Day20);
student12.addAttendance(student12Day21);

student13.addAttendance(student13Day0);
student13.addAttendance(student13Day1);
student13.addAttendance(student13Day2);
student13.addAttendance(student13Day3);
student13.addAttendance(student13Day4);
student13.addAttendance(student13Day5);
student13.addAttendance(student13Day6);
student13.addAttendance(student13Day7);
student13.addAttendance(student13Day8); 
student13.addAttendance(student13Day9);
student13.addAttendance(student13Day10);
student13.addAttendance(student13Day11);
student13.addAttendance(student13Day12);
student13.addAttendance(student13Day13);
student13.addAttendance(student13Day14);
student13.addAttendance(student13Day15);
student13.addAttendance(student13Day16);
student13.addAttendance(student13Day17);
student13.addAttendance(student13Day18);
student13.addAttendance(student13Day19); 
student13.addAttendance(student13Day20);
student13.addAttendance(student13Day21);

student14.addAttendance(student14Day0);
student14.addAttendance(student14Day1);
student14.addAttendance(student14Day2);
student14.addAttendance(student14Day3);
student14.addAttendance(student14Day4);
student14.addAttendance(student14Day5);
student14.addAttendance(student14Day6);
student14.addAttendance(student14Day7);
student14.addAttendance(student14Day8); 
student14.addAttendance(student14Day9);
student14.addAttendance(student14Day10);
student14.addAttendance(student14Day11);
student14.addAttendance(student14Day12);
student14.addAttendance(student14Day13);
student14.addAttendance(student14Day14);
student14.addAttendance(student14Day15);
student14.addAttendance(student14Day16);
student14.addAttendance(student14Day17);
student14.addAttendance(student14Day18);
student14.addAttendance(student14Day19); 
student14.addAttendance(student14Day20);
student14.addAttendance(student14Day21);

student15.addAttendance(student15Day0);
student15.addAttendance(student15Day1);
student15.addAttendance(student15Day2);
student15.addAttendance(student15Day3);
student15.addAttendance(student15Day4);
student15.addAttendance(student15Day5);
student15.addAttendance(student15Day6);
student15.addAttendance(student15Day7);
student15.addAttendance(student15Day8); 
student15.addAttendance(student15Day9);
student15.addAttendance(student15Day10);
student15.addAttendance(student15Day11);
student15.addAttendance(student15Day12);
student15.addAttendance(student15Day13);
student15.addAttendance(student15Day14);
student15.addAttendance(student15Day15);
student15.addAttendance(student15Day16);
student15.addAttendance(student15Day17);
student15.addAttendance(student15Day18);
student15.addAttendance(student15Day19); 
student15.addAttendance(student15Day20);
student15.addAttendance(student15Day21);

student16.addAttendance(student16Day0);
student16.addAttendance(student16Day1);
student16.addAttendance(student16Day2);
student16.addAttendance(student16Day3);
student16.addAttendance(student16Day4);
student16.addAttendance(student16Day5);
student16.addAttendance(student16Day6);
student16.addAttendance(student16Day7);
student16.addAttendance(student16Day8); 
student16.addAttendance(student16Day9);
student16.addAttendance(student16Day10);
student16.addAttendance(student16Day11);
student16.addAttendance(student16Day12);
student16.addAttendance(student16Day13);
student16.addAttendance(student16Day14);
student16.addAttendance(student16Day15);
student16.addAttendance(student16Day16);
student16.addAttendance(student16Day17);
student16.addAttendance(student16Day18);
student16.addAttendance(student16Day19); 
student16.addAttendance(student16Day20);
student16.addAttendance(student16Day21);

student17.addAttendance(student17Day0);
student17.addAttendance(student17Day1);
student17.addAttendance(student17Day2);
student17.addAttendance(student17Day3);
student17.addAttendance(student17Day4);
student17.addAttendance(student17Day5);
student17.addAttendance(student17Day6);
student17.addAttendance(student17Day7);
student17.addAttendance(student17Day8); 
student17.addAttendance(student17Day9);
student17.addAttendance(student17Day10);
student17.addAttendance(student17Day11);
student17.addAttendance(student17Day12);
student17.addAttendance(student17Day13);
student17.addAttendance(student17Day14);
student17.addAttendance(student17Day15);
student17.addAttendance(student17Day16);
student17.addAttendance(student17Day17);
student17.addAttendance(student17Day18);
student17.addAttendance(student17Day19); 
student17.addAttendance(student17Day20);
student17.addAttendance(student17Day21);

student18.addAttendance(student18Day0);
student18.addAttendance(student18Day1);
student18.addAttendance(student18Day2);
student18.addAttendance(student18Day3);
student18.addAttendance(student18Day4);
student18.addAttendance(student18Day5);
student18.addAttendance(student18Day6);
student18.addAttendance(student18Day7);
student18.addAttendance(student18Day8); 
student18.addAttendance(student18Day9);
student18.addAttendance(student18Day10);
student18.addAttendance(student18Day11);
student18.addAttendance(student18Day12);
student18.addAttendance(student18Day13);
student18.addAttendance(student18Day14);
student18.addAttendance(student18Day15);
student18.addAttendance(student18Day16);
student18.addAttendance(student18Day17);
student18.addAttendance(student18Day18);
student18.addAttendance(student18Day19); 
student18.addAttendance(student18Day20);
student18.addAttendance(student18Day21);

student19.addAttendance(student19Day0);
student19.addAttendance(student19Day1);
student19.addAttendance(student19Day2);
student19.addAttendance(student19Day3);
student19.addAttendance(student19Day4);
student19.addAttendance(student19Day5);
student19.addAttendance(student19Day6);
student19.addAttendance(student19Day7);
student19.addAttendance(student19Day8); 
student19.addAttendance(student19Day9);
student19.addAttendance(student19Day10);
student19.addAttendance(student19Day11);
student19.addAttendance(student19Day12);
student19.addAttendance(student19Day13);
student19.addAttendance(student19Day14);
student19.addAttendance(student19Day15);
student19.addAttendance(student19Day16);
student19.addAttendance(student19Day17);
student19.addAttendance(student19Day18);
student19.addAttendance(student19Day19); 
student19.addAttendance(student19Day20);
student19.addAttendance(student19Day21);

student20.addAttendance(student20Day0);
student20.addAttendance(student20Day1);
student20.addAttendance(student20Day2);
student20.addAttendance(student20Day3);
student20.addAttendance(student20Day4);
student20.addAttendance(student20Day5);
student20.addAttendance(student20Day6);
student20.addAttendance(student20Day7);
student20.addAttendance(student20Day8); 
student20.addAttendance(student20Day9);
student20.addAttendance(student20Day10);
student20.addAttendance(student20Day11);
student20.addAttendance(student20Day12);
student20.addAttendance(student20Day13);
student20.addAttendance(student20Day14);
student20.addAttendance(student20Day15);
student20.addAttendance(student20Day16);
student20.addAttendance(student20Day17);
student20.addAttendance(student20Day18);
student20.addAttendance(student20Day19); 
student20.addAttendance(student20Day20);
student20.addAttendance(student20Day21);

student21.addAttendance(student21Day0);
student21.addAttendance(student21Day1);
student21.addAttendance(student21Day2);
student21.addAttendance(student21Day3);
student21.addAttendance(student21Day4);
student21.addAttendance(student21Day5);
student21.addAttendance(student21Day6);
student21.addAttendance(student21Day7);
student21.addAttendance(student21Day8); 
student21.addAttendance(student21Day9);
student21.addAttendance(student21Day10);
student21.addAttendance(student21Day11);
student21.addAttendance(student21Day12);
student21.addAttendance(student21Day13);
student21.addAttendance(student21Day14);
student21.addAttendance(student21Day15);
student21.addAttendance(student21Day16);
student21.addAttendance(student21Day17);
student21.addAttendance(student21Day18);
student21.addAttendance(student21Day19); 
student21.addAttendance(student21Day20);
student21.addAttendance(student21Day21);

student22.addAttendance(student22Day0);
student22.addAttendance(student22Day1);
student22.addAttendance(student22Day2);
student22.addAttendance(student22Day3);
student22.addAttendance(student22Day4);
student22.addAttendance(student22Day5);
student22.addAttendance(student22Day6);
student22.addAttendance(student22Day7);
student22.addAttendance(student22Day8); 
student22.addAttendance(student22Day9);
student22.addAttendance(student22Day10);
student22.addAttendance(student22Day11);
student22.addAttendance(student22Day12);
student22.addAttendance(student22Day13);
student22.addAttendance(student22Day14);
student22.addAttendance(student22Day15);
student22.addAttendance(student22Day16);
student22.addAttendance(student22Day17);
student22.addAttendance(student22Day18);
student22.addAttendance(student22Day19); 
student22.addAttendance(student22Day20);
student22.addAttendance(student22Day21);

student23.addAttendance(student23Day0);
student23.addAttendance(student23Day1);
student23.addAttendance(student23Day2);
student23.addAttendance(student23Day3);
student23.addAttendance(student23Day4);
student23.addAttendance(student23Day5);
student23.addAttendance(student23Day6);
student23.addAttendance(student23Day7);
student23.addAttendance(student23Day8); 
student23.addAttendance(student23Day9);
student23.addAttendance(student23Day10);
student23.addAttendance(student23Day11);
student23.addAttendance(student23Day12);
student23.addAttendance(student23Day13);
student23.addAttendance(student23Day14);
student23.addAttendance(student23Day15);
student23.addAttendance(student23Day16);
student23.addAttendance(student23Day17);
student23.addAttendance(student23Day18);
student23.addAttendance(student23Day19); 
student23.addAttendance(student23Day20);
student23.addAttendance(student23Day21);

student24.addAttendance(student24Day0);
student24.addAttendance(student24Day1);
student24.addAttendance(student24Day2);
student24.addAttendance(student24Day3);
student24.addAttendance(student24Day4);
student24.addAttendance(student24Day5);
student24.addAttendance(student24Day6);
student24.addAttendance(student24Day7);
student24.addAttendance(student24Day8); 
student24.addAttendance(student24Day9);
student24.addAttendance(student24Day10);
student24.addAttendance(student24Day11);
student24.addAttendance(student24Day12);
student24.addAttendance(student24Day13);
student24.addAttendance(student24Day14);
student24.addAttendance(student24Day15);
student24.addAttendance(student24Day16);
student24.addAttendance(student24Day17);
student24.addAttendance(student24Day18);
student24.addAttendance(student24Day19); 
student24.addAttendance(student24Day20);
student24.addAttendance(student24Day21);

student25.addAttendance(student25Day0);
student25.addAttendance(student25Day1);
student25.addAttendance(student25Day2);
student25.addAttendance(student25Day3);
student25.addAttendance(student25Day4);
student25.addAttendance(student25Day5);
student25.addAttendance(student25Day6);
student25.addAttendance(student25Day7);
student25.addAttendance(student25Day8); 
student25.addAttendance(student25Day9);
student25.addAttendance(student25Day10);
student25.addAttendance(student25Day11);
student25.addAttendance(student25Day12);
student25.addAttendance(student25Day13);
student25.addAttendance(student25Day14);
student25.addAttendance(student25Day15);
student25.addAttendance(student25Day16);
student25.addAttendance(student25Day17);
student25.addAttendance(student25Day18);
student25.addAttendance(student25Day19); 
student25.addAttendance(student25Day20);
student25.addAttendance(student25Day21);

student26.addAttendance(student26Day0);
student26.addAttendance(student26Day1);
student26.addAttendance(student26Day2);
student26.addAttendance(student26Day3);
student26.addAttendance(student26Day4);
student26.addAttendance(student26Day5);
student26.addAttendance(student26Day6);
student26.addAttendance(student26Day7);
student26.addAttendance(student26Day8); 
student26.addAttendance(student26Day9);
student26.addAttendance(student26Day10);
student26.addAttendance(student26Day11);
student26.addAttendance(student26Day12);
student26.addAttendance(student26Day13);
student26.addAttendance(student26Day14);
student26.addAttendance(student26Day15);
student26.addAttendance(student26Day16);
student26.addAttendance(student26Day17);
student26.addAttendance(student26Day18);
student26.addAttendance(student26Day19); 
student26.addAttendance(student26Day20);
student26.addAttendance(student26Day21);

student27.addAttendance(student27Day0);
student27.addAttendance(student27Day1);
student27.addAttendance(student27Day2);
student27.addAttendance(student27Day3);
student27.addAttendance(student27Day4);
student27.addAttendance(student27Day5);
student27.addAttendance(student27Day6);
student27.addAttendance(student27Day7);
student27.addAttendance(student27Day8); 
student27.addAttendance(student27Day9);
student27.addAttendance(student27Day10);
student27.addAttendance(student27Day11);
student27.addAttendance(student27Day12);
student27.addAttendance(student27Day13);
student27.addAttendance(student27Day14);
student27.addAttendance(student27Day15);
student27.addAttendance(student27Day16);
student27.addAttendance(student27Day17);
student27.addAttendance(student27Day18);
student27.addAttendance(student27Day19); 
student27.addAttendance(student27Day20);
student27.addAttendance(student27Day21);

student28.addAttendance(student28Day0);
student28.addAttendance(student28Day1);
student28.addAttendance(student28Day2);
student28.addAttendance(student28Day3);
student28.addAttendance(student28Day4);
student28.addAttendance(student28Day5);
student28.addAttendance(student28Day6);
student28.addAttendance(student28Day7);
student28.addAttendance(student28Day8); 
student28.addAttendance(student28Day9);
student28.addAttendance(student28Day10);
student28.addAttendance(student28Day11);
student28.addAttendance(student28Day12);
student28.addAttendance(student28Day13);
student28.addAttendance(student28Day14);
student28.addAttendance(student28Day15);
student28.addAttendance(student28Day16);
student28.addAttendance(student28Day17);
student28.addAttendance(student28Day18);
student28.addAttendance(student28Day19); 
student28.addAttendance(student28Day20);
student28.addAttendance(student28Day21);

student29.addAttendance(student29Day0);
student29.addAttendance(student29Day1);
student29.addAttendance(student29Day2);
student29.addAttendance(student29Day3);
student29.addAttendance(student29Day4);
student29.addAttendance(student29Day5);
student29.addAttendance(student29Day6);
student29.addAttendance(student29Day7);
student29.addAttendance(student29Day8); 
student29.addAttendance(student29Day9);
student29.addAttendance(student29Day10);
student29.addAttendance(student29Day11);
student29.addAttendance(student29Day12);
student29.addAttendance(student29Day13);
student29.addAttendance(student29Day14);
student29.addAttendance(student29Day15);
student29.addAttendance(student29Day16);
student29.addAttendance(student29Day17);
student29.addAttendance(student29Day18);
student29.addAttendance(student29Day19); 
student29.addAttendance(student29Day20);
student29.addAttendance(student29Day21);
// Behavior
var student0Behavior1 = new Behavior("Refusing To Work", 9, 1, 2022, "Did not want to do writing assignment");
var student1Behavior1 = new Behavior("Talking", 9, 1, 2022, "Talking during reading time");
var student2Behavior1 = new Behavior("Touching Others", 9, 2, 2022, "Play fighting with Josephina");
var student3Behavior1 = new Behavior("Off Task", 9, 5, 2022, "Not paying attention");
var student4Behavior1 = new Behavior("Refusing To Work", 9, 6, 2022, "Did not want to do math");
var student5Behavior1 = new Behavior("Out of Seat", 9, 7, 2022, "Would not stay seated during reading time");
var student6Behavior1 = new Behavior("Talking", 9, 8, 2022, "Talking with Lexine");
var student7Behavior1 = new Behavior("Talking", 9, 8, 2022, "Talking with Margarete");
var student8Behavior1 = new Behavior("Throwing Object", 9, 9, 2022, "Threw pencil");
var student9Behavior1 = new Behavior("Touching Others", 9, 12, 2022, "Pushed Cleveland");
var student10Behavior1 = new Behavior("Self Harm", 9, 13, 2022, "Pulling out their own hair");
var student11Behavior1 = new Behavior("Inappropriate Language", 9, 14, 2022, "Cussed at another student");
var student12Behavior1 = new Behavior("Bullying or Teasing", 9, 15, 2022, "Teasing another student");
var student13Behavior1 = new Behavior("Property Damage", 9, 16, 2022, "Vandalized desk");
var student14Behavior1 = new Behavior("Defiance or Disrespect", 9, 19, 2022, "Talked back to teacher");
var student15Behavior1 = new Behavior("Theft", 9, 20, 2022, "Stole an eraser");
var student16Behavior1 = new Behavior("Lying or Cheating", 9, 21, 2022, "Lied about homework");
var student17Behavior1 = new Behavior("Touching Others", 9, 22, 2022, "Not keeping hands to themselves");
var student18Behavior1 = new Behavior("Off Task", 9, 23, 2022, "Not paying attention");
var student19Behavior1 = new Behavior("Refusing To Work", 9, 26, 2022, "Did not want to read out loud");
var student20Behavior1 = new Behavior("Out of Seat", 9, 27, 2022, "Did not stay seated during science lesson");
var student21Behavior1 = new Behavior("Throwing Object", 9, 28, 2022, "Threw ball of paper across room");
var student22Behavior1 = new Behavior("Touching Others", 9, 29, 2022, "Play fighting");
var student23Behavior1 = new Behavior("Self Harm", 9, 30, 2022, "Writing on themselves");
var student24Behavior1 = new Behavior("Inappropriate Language", 9, 14, 2022, "Cussed at Colly");
var student25Behavior1 = new Behavior("Bullying or Teasing", 9, 15, 2022, "Called Tandi names");
var student26Behavior1 = new Behavior("Property Damage", 9, 16, 2022, "Wrote on a chair with a marker");
var student27Behavior1 = new Behavior("Defiance or Disrespect", 9, 19, 2022, "Talked back to teacher");
var student28Behavior1 = new Behavior("Theft", 9, 20, 2022, "Stole snack from Deandra");
var student29Behavior1 = new Behavior("Lying or Cheating", 9, 21, 2022, "Cheated on quiz");

var student0Behavior2 = new Behavior("Lying or Cheating", 9, 30, 2022, "Lied about doing their homework");
var student1Behavior2 = new Behavior("Theft", 9, 29, 2022, "Stole Fabio's pencil");
var student2Behavior2 = new Behavior("Defiance or Disrespect", 9, 28, 2022, "Refused to go to the office");
var student3Behavior2 = new Behavior("Property Damage", 9, 27, 2022, "Ripped page from textbook");
var student4Behavior2 = new Behavior("Bullying or Teasing", 9, 26, 2022, "Made fun of Mitch");
var student5Behavior2 = new Behavior("Inappropriate Language", 9, 23, 2022, "Cussed at Lincoln");
var student6Behavior2 = new Behavior("Self Harm", 9, 22, 2022, "Hitting themselves");
var student7Behavior2 = new Behavior("Touching Others", 9, 21, 2022, "Hit Goldina");
var student8Behavior2 = new Behavior("Throwing Object", 9, 20, 2022, "Threw eraser at Channa");
var student9Behavior2 = new Behavior("Out of Seat", 9, 19, 2022, "Did not stay seated during attendance");
var student10Behavior2 = new Behavior("Refusing To Work", 9, 16, 2022, "Did not want to work on classwork");
var student11Behavior2 = new Behavior("Off Task", 9, 15, 2022, "Did not pay attention during video");
var student12Behavior2 = new Behavior("Other Behavior", 9, 14, 2022, "Need to talk to parent");
var student13Behavior2 = new Behavior("Lying or Cheating", 9, 13, 2022, "Cheating on exam");
var student14Behavior2 = new Behavior("Theft", 9, 12, 2022, "Stole Octavia's book");
var student15Behavior2 = new Behavior("Defiance or Disrespect", 9, 9, 2022, "Talked back to librarian");
var student16Behavior2 = new Behavior("Property Damage", 9, 8, 2022, "Wrote on the wall with permanent marker");
var student17Behavior2 = new Behavior("Bullying or Teasing", 9, 7, 2022, "Bullying Bryana");
var student18Behavior2 = new Behavior("Inappropriate Language", 9, 6, 2022, "Cussed during free time");
var student19Behavior2 = new Behavior("Touching Others", 9, 5, 2022, "Play fighting with Whit");
var student20Behavior2 = new Behavior("Throwing Object", 9, 2, 2022, "Threw whiteboard marker");
var student21Behavior2 = new Behavior("Out of Seat", 9, 1, 2022, "Out of seat during homework time");
var student22Behavior2 = new Behavior("Refusing To Work", 9, 30, 2022, "Refused to check out book");
var student23Behavior2 = new Behavior("Off Task", 9, 29, 2022, "Was doing math homework during reading time");
var student24Behavior2 = new Behavior("Other Behavior", 9, 28, 2022, "Need to talk to parent");
var student25Behavior2 = new Behavior("Lying or Cheating", 9, 27, 2022, "Forged parent signature");
var student26Behavior2 = new Behavior("Theft", 9, 12, 2022, "Stole Eve's water bottle");
var student27Behavior2 = new Behavior("Defiance or Disrespect", 9, 9, 2022, "Talked back to vice principal");
var student28Behavior2 = new Behavior("Property Damage", 9, 8, 2022, "Wrote on the wall with permanent marker");
var student29Behavior2 = new Behavior("Bullying or Teasing", 9, 7, 2022, "Bullying Bryana");
student0.addBehavior(student0Behavior1);
student0.addBehavior(student0Behavior2);

student1.addBehavior(student1Behavior1);
student1.addBehavior(student1Behavior2);

student2.addBehavior(student2Behavior1);
student2.addBehavior(student2Behavior2);

student3.addBehavior(student3Behavior1);
student3.addBehavior(student3Behavior2);

student4.addBehavior(student4Behavior1);
student4.addBehavior(student4Behavior2);

student5.addBehavior(student5Behavior1);
student5.addBehavior(student5Behavior2);

student6.addBehavior(student6Behavior1);
student6.addBehavior(student6Behavior2);

student7.addBehavior(student7Behavior1);
student7.addBehavior(student7Behavior2);

student8.addBehavior(student8Behavior1);
student8.addBehavior(student8Behavior2);

student9.addBehavior(student9Behavior1);
student9.addBehavior(student9Behavior2);

student10.addBehavior(student10Behavior1);
student10.addBehavior(student10Behavior2);

student11.addBehavior(student11Behavior1);
student11.addBehavior(student11Behavior2);

student12.addBehavior(student12Behavior1);
student12.addBehavior(student12Behavior2);

student13.addBehavior(student13Behavior1);
student13.addBehavior(student13Behavior2);

student14.addBehavior(student14Behavior1);
student14.addBehavior(student14Behavior2);

student15.addBehavior(student15Behavior1);
student15.addBehavior(student15Behavior2);

student16.addBehavior(student16Behavior1);
student16.addBehavior(student16Behavior2);

student17.addBehavior(student17Behavior1);
student17.addBehavior(student17Behavior2);

student18.addBehavior(student18Behavior1);
student18.addBehavior(student18Behavior2);

student19.addBehavior(student19Behavior1);
student19.addBehavior(student19Behavior2);

student20.addBehavior(student20Behavior1);
student20.addBehavior(student20Behavior2);

student21.addBehavior(student21Behavior1);
student21.addBehavior(student21Behavior2);

student22.addBehavior(student22Behavior1);
student22.addBehavior(student22Behavior2);

student23.addBehavior(student23Behavior1);
student23.addBehavior(student23Behavior2);

student24.addBehavior(student24Behavior1);
student24.addBehavior(student24Behavior2);

student25.addBehavior(student25Behavior1);
student25.addBehavior(student25Behavior2);

student26.addBehavior(student26Behavior1);
student26.addBehavior(student26Behavior2);

student27.addBehavior(student27Behavior1);
student27.addBehavior(student27Behavior2);

student28.addBehavior(student28Behavior1);
student28.addBehavior(student28Behavior2);

student29.addBehavior(student29Behavior1);
student29.addBehavior(student29Behavior2);
// Assignments
// Homework
var student0Assignment0 = new Assignment("Homework 1", "Homework", 10, 10, 9, 19, 2022);
var student1Assignment0 = new Assignment("Homework 1", "Homework", 10, 9, 9, 19, 2022);
var student2Assignment0 = new Assignment("Homework 1", "Homework", 10, 8, 9, 19, 2022);
var student3Assignment0 = new Assignment("Homework 1", "Homework", 10, 7, 9, 19, 2022);
var student4Assignment0 = new Assignment("Homework 1", "Homework", 10, 6, 9, 19, 2022);
var student5Assignment0 = new Assignment("Homework 1", "Homework", 10, 10, 9, 19, 2022);
var student6Assignment0 = new Assignment("Homework 1", "Homework", 10, 9, 9, 19, 2022);
var student7Assignment0 = new Assignment("Homework 1", "Homework", 10, 8, 9, 19, 2022);
var student8Assignment0 = new Assignment("Homework 1", "Homework", 10, 7, 9, 19, 2022);
var student9Assignment0 = new Assignment("Homework 1", "Homework", 10, 6, 9, 19, 2022);
var student10Assignment0 = new Assignment("Homework 1", "Homework", 10, 10, 9, 19, 2022);
var student11Assignment0 = new Assignment("Homework 1", "Homework", 10, 9, 9, 19, 2022);
var student12Assignment0 = new Assignment("Homework 1", "Homework", 10, 8, 9, 19, 2022);
var student13Assignment0 = new Assignment("Homework 1", "Homework", 10, 7, 9, 19, 2022);
var student14Assignment0 = new Assignment("Homework 1", "Homework", 10, 6, 9, 19, 2022);
var student15Assignment0 = new Assignment("Homework 1", "Homework", 10, 10, 9, 19, 2022);
var student16Assignment0 = new Assignment("Homework 1", "Homework", 10, 9, 9, 19, 2022);
var student17Assignment0 = new Assignment("Homework 1", "Homework", 10, 8, 9, 19, 2022);
var student18Assignment0 = new Assignment("Homework 1", "Homework", 10, 6, 9, 19, 2022);
var student19Assignment0 = new Assignment("Homework 1", "Homework", 10, 10, 9, 19, 2022);
var student20Assignment0 = new Assignment("Homework 1", "Homework", 10, 9, 9, 19, 2022);
var student21Assignment0 = new Assignment("Homework 1", "Homework", 10, 8, 9, 19, 2022);
var student22Assignment0 = new Assignment("Homework 1", "Homework", 10, 7, 9, 19, 2022);
var student23Assignment0 = new Assignment("Homework 1", "Homework", 10, 6, 9, 19, 2022);
var student24Assignment0 = new Assignment("Homework 1", "Homework", 10, 10, 9, 19, 2022);
var student25Assignment0 = new Assignment("Homework 1", "Homework", 10, 9, 9, 19, 2022);
var student26Assignment0 = new Assignment("Homework 1", "Homework", 10, 8, 9, 19, 2022);
var student27Assignment0 = new Assignment("Homework 1", "Homework", 10, 7, 9, 19, 2022);
var student28Assignment0 = new Assignment("Homework 1", "Homework", 10, 6, 9, 19, 2022);
var student29Assignment0 = new Assignment("Homework 1", "Homework", 10, 10, 9, 19, 2022);

var student0Assignment1 = new Assignment("Homework 2", "Homework", 10, 10, 9, 21, 2022);
var student1Assignment1 = new Assignment("Homework 2", "Homework", 10, 9, 9, 21, 2022);
var student2Assignment1 = new Assignment("Homework 2", "Homework", 10, 8, 9, 21, 2022);
var student3Assignment1 = new Assignment("Homework 2", "Homework", 10, 7, 9, 21, 2022);
var student4Assignment1 = new Assignment("Homework 2", "Homework", 10, 6, 9, 21, 2022);
var student5Assignment1 = new Assignment("Homework 2", "Homework", 10, 10, 9, 21, 2022);
var student6Assignment1 = new Assignment("Homework 2", "Homework", 10, 9, 9, 21, 2022);
var student7Assignment1 = new Assignment("Homework 2", "Homework", 10, 8, 9, 21, 2022);
var student8Assignment1 = new Assignment("Homework 2", "Homework", 10, 7, 9, 21, 2022);
var student9Assignment1 = new Assignment("Homework 2", "Homework", 10, 6, 9, 21, 2022);
var student10Assignment1 = new Assignment("Homework 2", "Homework", 10, 10, 9, 21, 2022);
var student11Assignment1 = new Assignment("Homework 2", "Homework", 10, 9, 9, 21, 2022);
var student12Assignment1 = new Assignment("Homework 2", "Homework", 10, 8, 9, 21, 2022);
var student13Assignment1 = new Assignment("Homework 2", "Homework", 10, 7, 9, 21, 2022);
var student14Assignment1 = new Assignment("Homework 2", "Homework", 10, 6, 9, 21, 2022);
var student15Assignment1 = new Assignment("Homework 2", "Homework", 10, 10, 9, 21, 2022);
var student16Assignment1 = new Assignment("Homework 2", "Homework", 10, 9, 9, 21, 2022);
var student17Assignment1 = new Assignment("Homework 2", "Homework", 10, 8, 9, 21, 2022);
var student18Assignment1 = new Assignment("Homework 2", "Homework", 10, 6, 9, 21, 2022);
var student19Assignment1 = new Assignment("Homework 2", "Homework", 10, 10, 9, 21, 2022);
var student20Assignment1 = new Assignment("Homework 2", "Homework", 10, 9, 9, 21, 2022);
var student21Assignment1 = new Assignment("Homework 2", "Homework", 10, 8, 9, 21, 2022);
var student22Assignment1 = new Assignment("Homework 2", "Homework", 10, 7, 9, 21, 2022);
var student23Assignment1 = new Assignment("Homework 2", "Homework", 10, 6, 9, 21, 2022);
var student24Assignment1 = new Assignment("Homework 2", "Homework", 10, 10, 9, 21, 2022);
var student25Assignment1 = new Assignment("Homework 2", "Homework", 10, 9, 9, 21, 2022);
var student26Assignment1 = new Assignment("Homework 2", "Homework", 10, 8, 9, 21, 2022);
var student27Assignment1 = new Assignment("Homework 2", "Homework", 10, 7, 9, 21, 2022);
var student28Assignment1 = new Assignment("Homework 2", "Homework", 10, 6, 9, 21, 2022);
var student29Assignment1 = new Assignment("Homework 2", "Homework", 10, 10, 9, 21, 2022);
// Quizzes
var student0Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 20, 9, 16, 2022);
var student1Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 19, 9, 16, 2022);
var student2Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 18, 9, 16, 2022);
var student3Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 17, 9, 16, 2022);
var student4Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 16, 9, 16, 2022);
var student5Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 20, 9, 16, 2022);
var student6Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 19, 9, 16, 2022);
var student7Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 18, 9, 16, 2022);
var student8Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 17, 9, 16, 2022);
var student9Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 16, 9, 16, 2022);
var student10Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 20, 9, 16, 2022);
var student11Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 19, 9, 16, 2022);
var student12Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 18, 9, 16, 2022);
var student13Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 17, 9, 16, 2022);
var student14Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 16, 9, 16, 2022);
var student15Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 20, 9, 16, 2022);
var student16Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 19, 9, 16, 2022);
var student17Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 18, 9, 16, 2022);
var student18Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 17, 9, 16, 2022);
var student19Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 16, 9, 16, 2022);
var student20Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 20, 9, 16, 2022);
var student21Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 19, 9, 16, 2022);
var student22Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 18, 9, 16, 2022);
var student23Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 17, 9, 16, 2022);
var student24Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 16, 9, 16, 2022);
var student25Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 20, 9, 16, 2022);
var student26Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 19, 9, 16, 2022);
var student27Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 18, 9, 16, 2022);
var student28Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 17, 9, 16, 2022);
var student29Assignment2 = new Assignment("Quiz 1", "Quiz", 20, 16, 9, 16, 2022);

var student0Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 15, 9, 23, 2022);
var student1Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 13, 9, 23, 2022);
var student2Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 11, 9, 23, 2022);
var student3Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 9, 9, 23, 2022);
var student4Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 14, 9, 23, 2022);
var student5Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 13, 9, 23, 2022);
var student6Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 11, 9, 23, 2022);
var student7Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 9, 9, 23, 2022);
var student8Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 15, 9, 23, 2022);
var student9Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 13, 9, 23, 2022);
var student10Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 11, 9, 23, 2022);
var student11Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 11, 9, 23, 2022);
var student12Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 9, 9, 23, 2022);
var student13Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 14, 9, 23, 2022);
var student14Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 13, 9, 23, 2022);
var student15Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 11, 9, 23, 2022);
var student16Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 9, 9, 23, 2022);
var student17Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 9, 9, 23, 2022);
var student18Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 15, 9, 23, 2022);
var student19Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 13, 9, 23, 2022);
var student20Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 11, 9, 23, 2022);
var student21Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 11, 9, 23, 2022);
var student22Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 14, 9, 23, 2022);
var student23Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 13, 9, 23, 2022);
var student24Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 11, 9, 23, 2022);
var student25Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 9, 9, 23, 2022);
var student26Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 15, 9, 23, 2022);
var student27Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 13, 9, 23, 2022);
var student28Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 11, 9, 23, 2022);
var student29Assignment3 = new Assignment("Quiz 2", "Quiz", 15, 15, 9, 23, 2022);
// Exams
var student0Assignment4 = new Assignment("Exam 1", "Exam", 50, 48, 9, 1, 2022);
var student1Assignment4 = new Assignment("Exam 1", "Exam", 50, 40, 9, 1, 2022);
var student2Assignment4 = new Assignment("Exam 1", "Exam", 50, 35, 9, 1, 2022);
var student3Assignment4 = new Assignment("Exam 1", "Exam", 50, 25, 9, 1, 2022);
var student4Assignment4 = new Assignment("Exam 1", "Exam", 50, 50, 9, 1, 2022);
var student5Assignment4 = new Assignment("Exam 1", "Exam", 50, 37, 9, 1, 2022);
var student6Assignment4 = new Assignment("Exam 1", "Exam", 50, 28, 9, 1, 2022);
var student7Assignment4 = new Assignment("Exam 1", "Exam", 50, 50, 9, 1, 2022);
var student8Assignment4 = new Assignment("Exam 1", "Exam", 50, 25, 9, 1, 2022);
var student9Assignment4 = new Assignment("Exam 1", "Exam", 50, 50, 9, 1, 2022);
var student10Assignment4 = new Assignment("Exam 1", "Exam", 50, 37, 9, 1, 2022);
var student11Assignment4 = new Assignment("Exam 1", "Exam", 50, 28, 9, 1, 2022);
var student12Assignment4 = new Assignment("Exam 1", "Exam", 50, 35, 9, 1, 2022);
var student13Assignment4 = new Assignment("Exam 1", "Exam", 50, 25, 9, 1, 2022);
var student14Assignment4 = new Assignment("Exam 1", "Exam", 50, 50, 9, 1, 2022);
var student15Assignment4 = new Assignment("Exam 1", "Exam", 50, 37, 9, 1, 2022);
var student16Assignment4 = new Assignment("Exam 1", "Exam", 50, 28, 9, 1, 2022);
var student17Assignment4 = new Assignment("Exam 1", "Exam", 50, 50, 9, 1, 2022);
var student18Assignment4 = new Assignment("Exam 1", "Exam", 50, 25, 9, 1, 2022);
var student19Assignment4 = new Assignment("Exam 1", "Exam", 50, 50, 9, 1, 2022);
var student20Assignment4 = new Assignment("Exam 1", "Exam", 50, 37, 9, 1, 2022);
var student21Assignment4 = new Assignment("Exam 1", "Exam", 50, 28, 9, 1, 2022);
var student22Assignment4 = new Assignment("Exam 1", "Exam", 50, 50, 9, 1, 2022);
var student23Assignment4 = new Assignment("Exam 1", "Exam", 50, 25, 9, 1, 2022);
var student24Assignment4 = new Assignment("Exam 1", "Exam", 50, 50, 9, 1, 2022);
var student25Assignment4 = new Assignment("Exam 1", "Exam", 50, 37, 9, 1, 2022);
var student26Assignment4 = new Assignment("Exam 1", "Exam", 50, 28, 9, 1, 2022);
var student27Assignment4 = new Assignment("Exam 1", "Exam", 50, 50, 9, 1, 2022);
var student28Assignment4 = new Assignment("Exam 1", "Exam", 50, 37, 9, 1, 2022);
var student29Assignment4 = new Assignment("Exam 1", "Exam", 50, 28, 9, 1, 2022);

var student0Assignment5 = new Assignment("Exam 2", "Exam", 50, 49, 9, 30, 2022);
var student1Assignment5 = new Assignment("Exam 2", "Exam", 50, 50, 9, 30, 2022);
var student2Assignment5 = new Assignment("Exam 2", "Exam", 50, 41, 9, 30, 2022);
var student3Assignment5 = new Assignment("Exam 2", "Exam", 50, 48, 9, 30, 2022);
var student4Assignment5 = new Assignment("Exam 2", "Exam", 50, 32, 9, 30, 2022);
var student5Assignment5 = new Assignment("Exam 2", "Exam", 50, 39, 9, 30, 2022);
var student6Assignment5 = new Assignment("Exam 2", "Exam", 50, 23, 9, 30, 2022);
var student7Assignment5 = new Assignment("Exam 2", "Exam", 50, 36, 9, 30, 2022);
var student8Assignment5 = new Assignment("Exam 2", "Exam", 50, 45, 9, 30, 2022);
var student9Assignment5 = new Assignment("Exam 2", "Exam", 50, 41, 9, 30, 2022);
var student10Assignment5 = new Assignment("Exam 2", "Exam", 50, 48, 9, 30, 2022);
var student11Assignment5 = new Assignment("Exam 2", "Exam", 50, 32, 9, 30, 2022);
var student12Assignment5 = new Assignment("Exam 2", "Exam", 50, 39, 9, 30, 2022);
var student13Assignment5 = new Assignment("Exam 2", "Exam", 50, 49, 9, 30, 2022);
var student14Assignment5 = new Assignment("Exam 2", "Exam", 50, 50, 9, 30, 2022);
var student15Assignment5 = new Assignment("Exam 2", "Exam", 50, 41, 9, 30, 2022);
var student16Assignment5 = new Assignment("Exam 2", "Exam", 50, 48, 9, 30, 2022);
var student17Assignment5 = new Assignment("Exam 2", "Exam", 50, 32, 9, 30, 2022);
var student18Assignment5 = new Assignment("Exam 2", "Exam", 50, 32, 9, 30, 2022);
var student19Assignment5 = new Assignment("Exam 2", "Exam", 50, 39, 9, 30, 2022);
var student20Assignment5 = new Assignment("Exam 2", "Exam", 50, 49, 9, 30, 2022);
var student21Assignment5 = new Assignment("Exam 2", "Exam", 50, 50, 9, 30, 2022);
var student22Assignment5 = new Assignment("Exam 2", "Exam", 50, 41, 9, 30, 2022);
var student23Assignment5 = new Assignment("Exam 2", "Exam", 50, 41, 9, 30, 2022);
var student24Assignment5 = new Assignment("Exam 2", "Exam", 50, 48, 9, 30, 2022);
var student25Assignment5 = new Assignment("Exam 2", "Exam", 50, 32, 9, 30, 2022);
var student26Assignment5 = new Assignment("Exam 2", "Exam", 50, 39, 9, 30, 2022);
var student27Assignment5 = new Assignment("Exam 2", "Exam", 50, 23, 9, 30, 2022);
var student28Assignment5 = new Assignment("Exam 2", "Exam", 50, 49, 9, 30, 2022);
var student29Assignment5 = new Assignment("Exam 2", "Exam", 50, 50, 9, 30, 2022);
// Projects
var student0Assignment6 = new Assignment("Project 1", "Project", 100, 90, 9, 5, 2022);
var student1Assignment6 = new Assignment("Project 1", "Project", 100, 95, 9, 5, 2022);
var student2Assignment6 = new Assignment("Project 1", "Project", 100, 98, 9, 5, 2022);
var student3Assignment6 = new Assignment("Project 1", "Project", 100, 86, 9, 5, 2022);
var student4Assignment6 = new Assignment("Project 1", "Project", 100, 87, 9, 5, 2022);
var student5Assignment6 = new Assignment("Project 1", "Project", 100, 78, 9, 5, 2022);
var student6Assignment6 = new Assignment("Project 1", "Project", 100, 84, 9, 5, 2022);
var student7Assignment6 = new Assignment("Project 1", "Project", 100, 92, 9, 5, 2022);
var student8Assignment6 = new Assignment("Project 1", "Project", 100, 95, 9, 5, 2022);
var student9Assignment6 = new Assignment("Project 1", "Project", 100, 98, 9, 5, 2022);
var student10Assignment6 = new Assignment("Project 1", "Project", 100, 86, 9, 5, 2022);
var student11Assignment6 = new Assignment("Project 1", "Project", 100, 87, 9, 5, 2022);
var student12Assignment6 = new Assignment("Project 1", "Project", 100, 78, 9, 5, 2022);
var student13Assignment6 = new Assignment("Project 1", "Project", 100, 86, 9, 5, 2022);
var student14Assignment6 = new Assignment("Project 1", "Project", 100, 87, 9, 5, 2022);
var student15Assignment6 = new Assignment("Project 1", "Project", 100, 78, 9, 5, 2022);
var student16Assignment6 = new Assignment("Project 1", "Project", 100, 84, 9, 5, 2022);
var student17Assignment6 = new Assignment("Project 1", "Project", 100, 92, 9, 5, 2022);
var student18Assignment6 = new Assignment("Project 1", "Project", 100, 95, 9, 5, 2022);
var student19Assignment6 = new Assignment("Project 1", "Project", 100, 84, 9, 5, 2022);
var student20Assignment6 = new Assignment("Project 1", "Project", 100, 92, 9, 5, 2022);
var student21Assignment6 = new Assignment("Project 1", "Project", 100, 95, 9, 5, 2022);
var student22Assignment6 = new Assignment("Project 1", "Project", 100, 98, 9, 5, 2022);
var student23Assignment6 = new Assignment("Project 1", "Project", 100, 86, 9, 5, 2022);
var student24Assignment6 = new Assignment("Project 1", "Project", 100, 98, 9, 5, 2022);
var student25Assignment6 = new Assignment("Project 1", "Project", 100, 86, 9, 5, 2022);
var student26Assignment6 = new Assignment("Project 1", "Project", 100, 87, 9, 5, 2022);
var student27Assignment6 = new Assignment("Project 1", "Project", 100, 78, 9, 5, 2022);
var student28Assignment6 = new Assignment("Project 1", "Project", 100, 84, 9, 5, 2022);
var student29Assignment6 = new Assignment("Project 1", "Project", 100, 92, 9, 5, 2022);

var student0Assignment7 = new Assignment("Project 2", "Project", 100, 75, 9, 26, 2022);
var student1Assignment7 = new Assignment("Project 2", "Project", 100, 90, 9, 26, 2022);
var student2Assignment7 = new Assignment("Project 2", "Project", 100, 88, 9, 26, 2022);
var student3Assignment7 = new Assignment("Project 2", "Project", 100, 92, 9, 26, 2022);
var student4Assignment7 = new Assignment("Project 2", "Project", 100, 100, 9, 26, 2022);
var student5Assignment7 = new Assignment("Project 2", "Project", 100, 96, 9, 26, 2022);
var student6Assignment7 = new Assignment("Project 2", "Project", 100, 89, 9, 26, 2022);
var student7Assignment7 = new Assignment("Project 2", "Project", 100, 85, 9, 26, 2022);
var student8Assignment7 = new Assignment("Project 2", "Project", 100, 77, 9, 26, 2022);
var student9Assignment7 = new Assignment("Project 2", "Project", 100, 90, 9, 26, 2022);
var student10Assignment7 = new Assignment("Project 2", "Project", 100, 88, 9, 26, 2022);
var student11Assignment7 = new Assignment("Project 2", "Project", 100, 92, 9, 26, 2022);
var student12Assignment7 = new Assignment("Project 2", "Project", 100, 100, 9, 26, 2022);
var student13Assignment7 = new Assignment("Project 2", "Project", 100, 89, 9, 26, 2022);
var student14Assignment7 = new Assignment("Project 2", "Project", 100, 85, 9, 26, 2022);
var student15Assignment7 = new Assignment("Project 2", "Project", 100, 77, 9, 26, 2022);
var student16Assignment7 = new Assignment("Project 2", "Project", 100, 90, 9, 26, 2022);
var student17Assignment7 = new Assignment("Project 2", "Project", 100, 90, 9, 26, 2022);
var student18Assignment7 = new Assignment("Project 2", "Project", 100, 88, 9, 26, 2022);
var student19Assignment7 = new Assignment("Project 2", "Project", 100, 92, 9, 26, 2022);
var student20Assignment7 = new Assignment("Project 2", "Project", 100, 100, 9, 26, 2022);
var student21Assignment7 = new Assignment("Project 2", "Project", 100, 75, 9, 26, 2022);
var student22Assignment7 = new Assignment("Project 2", "Project", 100, 90, 9, 26, 2022);
var student23Assignment7 = new Assignment("Project 2", "Project", 100, 88, 9, 26, 2022);
var student24Assignment7 = new Assignment("Project 2", "Project", 100, 92, 9, 26, 2022);
var student25Assignment7 = new Assignment("Project 2", "Project", 100, 88, 9, 26, 2022);
var student26Assignment7 = new Assignment("Project 2", "Project", 100, 92, 9, 26, 2022);
var student27Assignment7 = new Assignment("Project 2", "Project", 100, 100, 9, 26, 2022);
var student28Assignment7 = new Assignment("Project 2", "Project", 100, 89, 9, 26, 2022);
var student29Assignment7 = new Assignment("Project 2", "Project", 100, 85, 9, 26, 2022);
student0.addAssignment(student0Assignment0);
student0.addAssignment(student0Assignment1);
student0.addAssignment(student0Assignment2);
student0.addAssignment(student0Assignment3);
student0.addAssignment(student0Assignment4);
student0.addAssignment(student0Assignment5);
student0.addAssignment(student0Assignment6);
student0.addAssignment(student0Assignment7);

student1.addAssignment(student1Assignment0);
student1.addAssignment(student1Assignment1);
student1.addAssignment(student1Assignment2);
student1.addAssignment(student1Assignment3);
student1.addAssignment(student1Assignment4);
student1.addAssignment(student1Assignment5);
student1.addAssignment(student1Assignment6);
student1.addAssignment(student1Assignment7);

student2.addAssignment(student2Assignment0);
student2.addAssignment(student2Assignment1);
student2.addAssignment(student2Assignment2);
student2.addAssignment(student2Assignment3);
student2.addAssignment(student2Assignment4);
student2.addAssignment(student2Assignment5);
student2.addAssignment(student2Assignment6);
student2.addAssignment(student2Assignment7);

student3.addAssignment(student3Assignment0);
student3.addAssignment(student3Assignment1);
student3.addAssignment(student3Assignment2);
student3.addAssignment(student3Assignment3);
student3.addAssignment(student3Assignment4);
student3.addAssignment(student3Assignment5);
student3.addAssignment(student3Assignment6);
student3.addAssignment(student3Assignment7);

student4.addAssignment(student4Assignment0);
student4.addAssignment(student4Assignment1);
student4.addAssignment(student4Assignment2);
student4.addAssignment(student4Assignment3);
student4.addAssignment(student4Assignment4);
student4.addAssignment(student4Assignment5);
student4.addAssignment(student4Assignment6);
student4.addAssignment(student4Assignment7);

student5.addAssignment(student5Assignment0);
student5.addAssignment(student5Assignment1);
student5.addAssignment(student5Assignment2);
student5.addAssignment(student5Assignment3);
student5.addAssignment(student5Assignment4);
student5.addAssignment(student5Assignment5);
student5.addAssignment(student5Assignment6);
student5.addAssignment(student5Assignment7);

student6.addAssignment(student6Assignment0);
student6.addAssignment(student6Assignment1);
student6.addAssignment(student6Assignment2);
student6.addAssignment(student6Assignment3);
student6.addAssignment(student6Assignment4);
student6.addAssignment(student6Assignment5);
student6.addAssignment(student6Assignment6);
student6.addAssignment(student6Assignment7);

student7.addAssignment(student7Assignment0);
student7.addAssignment(student7Assignment1);
student7.addAssignment(student7Assignment2);
student7.addAssignment(student7Assignment3);
student7.addAssignment(student7Assignment4);
student7.addAssignment(student7Assignment5);
student7.addAssignment(student7Assignment6);
student7.addAssignment(student7Assignment7);

student8.addAssignment(student8Assignment0);
student8.addAssignment(student8Assignment1);
student8.addAssignment(student8Assignment2);
student8.addAssignment(student8Assignment3);
student8.addAssignment(student8Assignment4);
student8.addAssignment(student8Assignment5);
student8.addAssignment(student8Assignment6);
student8.addAssignment(student8Assignment7);

student9.addAssignment(student9Assignment0);
student9.addAssignment(student9Assignment1);
student9.addAssignment(student9Assignment2);
student9.addAssignment(student9Assignment3);
student9.addAssignment(student9Assignment4);
student9.addAssignment(student9Assignment5);
student9.addAssignment(student9Assignment6);
student9.addAssignment(student9Assignment7);

student10.addAssignment(student10Assignment0);
student10.addAssignment(student10Assignment1);
student10.addAssignment(student10Assignment2);
student10.addAssignment(student10Assignment3);
student10.addAssignment(student10Assignment4);
student10.addAssignment(student10Assignment5);
student10.addAssignment(student10Assignment6);
student10.addAssignment(student10Assignment7);

student11.addAssignment(student11Assignment0);
student11.addAssignment(student11Assignment1);
student11.addAssignment(student11Assignment2);
student11.addAssignment(student11Assignment3);
student11.addAssignment(student11Assignment4);
student11.addAssignment(student11Assignment5);
student11.addAssignment(student11Assignment6);
student11.addAssignment(student11Assignment7);

student12.addAssignment(student12Assignment0);
student12.addAssignment(student12Assignment1);
student12.addAssignment(student12Assignment2);
student12.addAssignment(student12Assignment3);
student12.addAssignment(student12Assignment4);
student12.addAssignment(student12Assignment5);
student12.addAssignment(student12Assignment6);
student12.addAssignment(student12Assignment7);

student13.addAssignment(student13Assignment0);
student13.addAssignment(student13Assignment1);
student13.addAssignment(student13Assignment2);
student13.addAssignment(student13Assignment3);
student13.addAssignment(student13Assignment4);
student13.addAssignment(student13Assignment5);
student13.addAssignment(student13Assignment6);
student13.addAssignment(student13Assignment7);

student14.addAssignment(student14Assignment0);
student14.addAssignment(student14Assignment1);
student14.addAssignment(student14Assignment2);
student14.addAssignment(student14Assignment3);
student14.addAssignment(student14Assignment4);
student14.addAssignment(student14Assignment5);
student14.addAssignment(student14Assignment6);
student14.addAssignment(student14Assignment7);

student15.addAssignment(student15Assignment0);
student15.addAssignment(student15Assignment1);
student15.addAssignment(student15Assignment2);
student15.addAssignment(student15Assignment3);
student15.addAssignment(student15Assignment4);
student15.addAssignment(student15Assignment5);
student15.addAssignment(student15Assignment6);
student15.addAssignment(student15Assignment7);

student16.addAssignment(student16Assignment0);
student16.addAssignment(student16Assignment1);
student16.addAssignment(student16Assignment2);
student16.addAssignment(student16Assignment3);
student16.addAssignment(student16Assignment4);
student16.addAssignment(student16Assignment5);
student16.addAssignment(student16Assignment6);
student16.addAssignment(student16Assignment7);

student17.addAssignment(student17Assignment0);
student17.addAssignment(student17Assignment1);
student17.addAssignment(student17Assignment2);
student17.addAssignment(student17Assignment3);
student17.addAssignment(student17Assignment4);
student17.addAssignment(student17Assignment5);
student17.addAssignment(student17Assignment6);
student17.addAssignment(student17Assignment7);

student18.addAssignment(student18Assignment0);
student18.addAssignment(student18Assignment1);
student18.addAssignment(student18Assignment2);
student18.addAssignment(student18Assignment3);
student18.addAssignment(student18Assignment4);
student18.addAssignment(student18Assignment5);
student18.addAssignment(student18Assignment6);
student18.addAssignment(student18Assignment7);

student19.addAssignment(student19Assignment0);
student19.addAssignment(student19Assignment1);
student19.addAssignment(student19Assignment2);
student19.addAssignment(student19Assignment3);
student19.addAssignment(student19Assignment4);
student19.addAssignment(student19Assignment5);
student19.addAssignment(student19Assignment6);
student19.addAssignment(student19Assignment7);

student20.addAssignment(student20Assignment0);
student20.addAssignment(student20Assignment1);
student20.addAssignment(student20Assignment2);
student20.addAssignment(student20Assignment3);
student20.addAssignment(student20Assignment4);
student20.addAssignment(student20Assignment5);
student20.addAssignment(student20Assignment6);
student20.addAssignment(student20Assignment7);

student21.addAssignment(student21Assignment0);
student21.addAssignment(student21Assignment1);
student21.addAssignment(student21Assignment2);
student21.addAssignment(student21Assignment3);
student21.addAssignment(student21Assignment4);
student21.addAssignment(student21Assignment5);
student21.addAssignment(student21Assignment6);
student21.addAssignment(student21Assignment7);

student22.addAssignment(student22Assignment0);
student22.addAssignment(student22Assignment1);
student22.addAssignment(student22Assignment2);
student22.addAssignment(student22Assignment3);
student22.addAssignment(student22Assignment4);
student22.addAssignment(student22Assignment5);
student22.addAssignment(student22Assignment6);
student22.addAssignment(student22Assignment7);

student23.addAssignment(student23Assignment0);
student23.addAssignment(student23Assignment1);
student23.addAssignment(student23Assignment2);
student23.addAssignment(student23Assignment3);
student23.addAssignment(student23Assignment4);
student23.addAssignment(student23Assignment5);
student23.addAssignment(student23Assignment6);
student23.addAssignment(student23Assignment7);

student24.addAssignment(student24Assignment0);
student24.addAssignment(student24Assignment1);
student24.addAssignment(student24Assignment2);
student24.addAssignment(student24Assignment3);
student24.addAssignment(student24Assignment4);
student24.addAssignment(student24Assignment5);
student24.addAssignment(student24Assignment6);
student24.addAssignment(student24Assignment7);

student25.addAssignment(student25Assignment0);
student25.addAssignment(student25Assignment1);
student25.addAssignment(student25Assignment2);
student25.addAssignment(student25Assignment3);
student25.addAssignment(student25Assignment4);
student25.addAssignment(student25Assignment5);
student25.addAssignment(student25Assignment6);
student25.addAssignment(student25Assignment7);

student26.addAssignment(student26Assignment0);
student26.addAssignment(student26Assignment1);
student26.addAssignment(student26Assignment2);
student26.addAssignment(student26Assignment3);
student26.addAssignment(student26Assignment4);
student26.addAssignment(student26Assignment5);
student26.addAssignment(student26Assignment6);
student26.addAssignment(student26Assignment7);

student27.addAssignment(student27Assignment0);
student27.addAssignment(student27Assignment1);
student27.addAssignment(student27Assignment2);
student27.addAssignment(student27Assignment3);
student27.addAssignment(student27Assignment4);
student27.addAssignment(student27Assignment5);
student27.addAssignment(student27Assignment6);
student27.addAssignment(student27Assignment7);

student28.addAssignment(student28Assignment0);
student28.addAssignment(student28Assignment1);
student28.addAssignment(student28Assignment2);
student28.addAssignment(student28Assignment3);
student28.addAssignment(student28Assignment4);
student28.addAssignment(student28Assignment5);
student28.addAssignment(student28Assignment6);
student28.addAssignment(student28Assignment7);

student29.addAssignment(student29Assignment0);
student29.addAssignment(student29Assignment1);
student29.addAssignment(student29Assignment2);
student29.addAssignment(student29Assignment3);
student29.addAssignment(student29Assignment4);
student29.addAssignment(student29Assignment5);
student29.addAssignment(student29Assignment6);
student29.addAssignment(student29Assignment7);

// User
var user1 = new User("jDoe", "password");

// Class
var class1 = new Class("Mrs. Doe Sixth Grade", "Jane Doe", "6", 10, 25, 40, 25);

// Events
var event0 = new Event("School Carnival", 9, 2, 2022, "Plenty of games and booths after school", "School Foyer")
var event1 = new Event("Pastries with Parents", 9, 9, 2022, "Come enjoy pastries with your student", "Cafeteria");
var event2 = new Event("Scholastic Book Fair", 9, 16, 2022, "Students can buy books from the book fair", "Library");
var event3 = new Event("Drug Free Assembly", 9, 23, 2022, "Assembly about being drug free", "Cafeteria");
var event4 = new Event("End of Month Assembly", 9, 30, 2022, "Monthly assembly", "Cafeteria");
class1.addEvent(event0);
class1.addEvent(event1);
class1.addEvent(event2);
class1.addEvent(event3);
class1.addEvent(event4);

// Announcements
var announcement0 = new Announcement("Show and Tell", "Have your student bring a school appropriate item to show the class.", 9, 7, 2022);
var announcement1 = new Announcement("Book Fair", "Book Fair is on Friday. If your student wants to buy a book, please send them with money.", 9, 14, 2022);
var announcement2 = new Announcement("Exam 1 Grades", "Exam 1 Grades will be out soon. Please contact me if there are any questions.", 9, 21, 2022);
var announcement3 = new Announcement("Upcoming Exam 2", "Reminder: Exam 2 is this Friday. Please contact me if there are any questions.", 9, 28, 2022);
class1.addAnnouncement(announcement0);
class1.addAnnouncement(announcement1);
class1.addAnnouncement(announcement2);
class1.addAnnouncement(announcement3);

// Students
class1.addStudent(student0);
class1.addStudent(student1);
class1.addStudent(student2);
class1.addStudent(student3);
class1.addStudent(student4);
class1.addStudent(student5);
class1.addStudent(student6);
class1.addStudent(student7);
class1.addStudent(student8);
class1.addStudent(student9);
class1.addStudent(student10);
class1.addStudent(student11);
class1.addStudent(student12);
class1.addStudent(student13);
class1.addStudent(student14);
class1.addStudent(student15);
class1.addStudent(student16);
class1.addStudent(student17);
class1.addStudent(student18);
class1.addStudent(student19);
class1.addStudent(student20);
class1.addStudent(student21);
class1.addStudent(student22);
class1.addStudent(student23);
class1.addStudent(student24);
class1.addStudent(student25);
class1.addStudent(student26);
class1.addStudent(student27);
class1.addStudent(student28);
class1.addStudent(student29);

console.log(JSON.stringify(class1));
// Add class to user
user1.addClass(class1);





