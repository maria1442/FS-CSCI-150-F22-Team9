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
        this.#assignmentPercentage = Math.round(100*(this.#givenScore / this.#possibleScore) * 100) / 100;
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
        var hwSum = 0;
        var hwPoints = 0;
        var hwGrade = 0;
        var quizSum = 0;
        var quizPoints = 0;
        var quizGrade = 0;
        var examSum = 0;
        var examPoints = 0;
        var examGrade = 0;
        var projectSum = 0;
        var projectPoints = 0;
        var projectGrade = 0;
        for (let i = 0; i < this.#studentAssignments.length; i++){
            if (this.#studentAssignments[i].assignmentCategory == "Homework"){
                hwPoints += (this.#studentAssignments[i].givenScore);
                hwSum += this.#studentAssignments[i].possibleScore;
            }
            else if (this.#studentAssignments[i].assignmentCategory == "Quiz"){
                quizPoints += (this.#studentAssignments[i].givenScore);
                quizSum += this.#studentAssignments[i].possibleScore;
            }
            else if (this.#studentAssignments[i].assignmentCategory == "Exam"){
                examPoints += (this.#studentAssignments[i].givenScore);
                examSum += this.#studentAssignments[i].possibleScore;
            }
            else {
                projectPoints += (this.#studentAssignments[i].givenScore);
                projectSum += this.#studentAssignments[i].possibleScore;
            }
        }
        hwGrade = (hwPoints / hwSum) * 100;
        quizGrade = (quizPoints / quizSum) * 100;
        examGrade = (examPoints / examSum) * 100;
        projectGrade = (projectPoints / projectSum) *100;
        if (this.#totalHomework == 0 && this.#totalQuizzes == 0 && this.#totalExams == 0){
            this.#gradePercentage = (projectGrade * projectWeight) / projectWeight;
        }
        else if (this.#totalHomework == 0 && this.#totalQuizzes == 0 && this.#totalProjects == 0){
            this.#gradePercentage = (examGrade * examWeight) / examWeight;
        }
        else if (this.#totalHomework == 0 && this.#totalExams == 0 && this.#totalProjects == 0){
            this.#gradePercentage = (quizGrade * quizWeight) / quizWeight;
        }
        else if (this.#totalQuizzes == 0 && this.#totalExams == 0 && this.#totalProjects == 0){
            this.#gradePercentage = (hwGrade * homeworkWeight) / homeworkWeight;
        }
        else if (this.#totalHomework == 0 && this.#totalQuizzes == 0){
            this.#gradePercentage = ((examGrade * examWeight) + (projectGrade * projectWeight)) / (examWeight + projectWeight);
        }
        else if (this.#totalHomework == 0 && this.#totalExams == 0){
            this.#gradePercentage = ((quizGrade * quizWeight) + (projectGrade * projectWeight)) / (quizWeight + projectWeight);
        }
        else if (this.#totalHomework == 0 && this.#totalProjects == 0){
            this.#gradePercentage = ((quizGrade * quizWeight) + (examGrade * examWeight)) / (quizWeight + examWeight);
        }
        else if (this.#totalQuizzes == 0 && this.#totalExams == 0){
            this.#gradePercentage = ((hwGrade * homeworkWeight) + (projectGrade * projectWeight)) / (homeworkWeight + projectWeight);
        }
        else if (this.#totalQuizzes == 0 && this.#totalProjects == 0){
            this.#gradePercentage = ((hwGrade * homeworkWeight) + (examGrade * examWeight)) / (homeworkWeight + examWeight);
        }
        else if (this.#totalExams == 0 && this.#totalProjects == 0){
            this.#gradePercentage = ((hwGrade * homeworkWeight) + (quizGrade * quizWeight)) / (homeworkWeight + quizWeight);
        }
        else if (this.#totalHomework == 0){
            this.#gradePercentage = ((quizGrade * quizWeight) + (examGrade * examWeight) + (projectGrade * projectWeight)) / (quizWeight + examWeight + projectWeight);
        }
        else if (this.#totalQuizzes == 0){
            this.#gradePercentage = ((hwGrade * homeworkWeight) + (examGrade * examWeight) + (projectGrade * projectWeight)) / (homeworkWeight + examWeight + projectWeight);
        }
        else if (this.#totalExams == 0){
            this.#gradePercentage = ((hwGrade * homeworkWeight) + (quizGrade * quizWeight) + (projectGrade * projectWeight)) / (homeworkWeight + quizWeight + projectWeight);
        }
        else if (this.#totalProjects == 0){
            this.#gradePercentage = ((hwGrade * homeworkWeight) + (quizGrade * quizWeight) + (examGrade * examWeight)) / (homeworkWeight + quizWeight + examWeight);
        }
        else this.#gradePercentage = (hwGrade * homeworkWeight) + (quizGrade * quizWeight) + (examGrade * examWeight) + (projectGrade * projectWeight);
        this.#gradePercentage = Math.round(100*this.#gradePercentage)/100;
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
        this.#attendancePresentPercentage = Math.round(100*((this.#totalPresentAttendance) / this.#totalDays) * 100) / 100;
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
            this.#attendancePresentPercentage = Math.round(100*((this.#totalPresentAttendance) / this.#totalDays) * 100) / 100;
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
        this.#offTaskPercentage = Math.round(100*(this.#totalOffTask / this.#totalBehaviorIncidents) * 100) / 100;
        this.#refusingToWorkPercentage= Math.round(100*(this.#totalRefusingToWork / this.#totalBehaviorIncidents) * 100) / 100;
        this.#outOfSeatPercentage = Math.round(100*(this.#totalOutOfSeat / this.#totalBehaviorIncidents) * 100) / 100;
        this.#talkingPercentage = Math.round(100*(this.#totalTalking / this.#totalBehaviorIncidents) * 100) / 100;
        this.#throwingObjectPercentage = Math.round(100*(this.#totalThrowingObject / this.#totalBehaviorIncidents) * 100) / 100;
        this.#touchingOthersPercentage = Math.round(100*(this.#totalTouchingOthers / this.#totalBehaviorIncidents) * 100) / 100;
        this.#selfHarmPercentage = Math.round(100*(this.#totalSelfHarm / this.#totalBehaviorIncidents) * 100) / 100;
        this.#inappropriateLangPercentage = Math.round(100*(this.#totalInappropriateLang / this.#totalBehaviorIncidents) * 100) / 100;
        this.#bullyingTeasingPercentage = Math.round(100*(this.#totalBullyingTeasing / this.#totalBehaviorIncidents) * 100) / 100;
        this.#propertyDamagePercentage= Math.round(100*(this.#totalPropertyDamage / this.#totalBehaviorIncidents) * 100) / 100;
        this.#defianceDisrespectPercentage = Math.round(100*(this.#totalDefianceDisrespect / this.#totalBehaviorIncidents) * 100) / 100;
        this.#theftPercentage = Math.round(100*(this.#totalTheft / this.#totalBehaviorIncidents) * 100) / 100;
        this.#lyingCheatingPercentage = Math.round(100*(this.#totalLyingCheating / this.#totalBehaviorIncidents) * 100) / 100;
        this.#otherBehaviorPercentage = Math.round(100*(this.#totalOtherBehavior / this.#totalBehaviorIncidents) * 100) / 100;
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
        this.#offTaskPercentage = Math.round(100*(this.#totalOffTask / this.#totalBehaviorIncidents) * 100) / 100;
        this.#refusingToWorkPercentage= Math.round(100*(this.#totalRefusingToWork / this.#totalBehaviorIncidents) * 100) / 100;
        this.#outOfSeatPercentage = Math.round(100*(this.#totalOutOfSeat / this.#totalBehaviorIncidents) * 100) / 100;
        this.#talkingPercentage = Math.round(100*(this.#totalTalking / this.#totalBehaviorIncidents) * 100) / 100;
        this.#throwingObjectPercentage = Math.round(100*(this.#totalThrowingObject / this.#totalBehaviorIncidents) * 100) / 100;
        this.#touchingOthersPercentage = Math.round(100*(this.#totalTouchingOthers / this.#totalBehaviorIncidents) * 100) / 100;
        this.#selfHarmPercentage = Math.round(100*(this.#totalSelfHarm / this.#totalBehaviorIncidents) * 100) / 100;
        this.#inappropriateLangPercentage = Math.round(100*(this.#totalInappropriateLang / this.#totalBehaviorIncidents) * 100) / 100;
        this.#bullyingTeasingPercentage = Math.round(100*(this.#totalBullyingTeasing / this.#totalBehaviorIncidents) * 100) / 100;
        this.#propertyDamagePercentage= Math.round(100*(this.#totalPropertyDamage / this.#totalBehaviorIncidents) * 100) / 100;
        this.#defianceDisrespectPercentage = Math.round(100*(this.#totalDefianceDisrespect / this.#totalBehaviorIncidents) * 100) / 100;
        this.#theftPercentage = Math.round(100*(this.#totalTheft / this.#totalBehaviorIncidents) * 100) / 100;
        this.#lyingCheatingPercentage = Math.round(100*(this.#totalLyingCheating / this.#totalBehaviorIncidents) * 100) / 100;
        this.#otherBehaviorPercentage = Math.round(100*(this.#totalOtherBehavior / this.#totalBehaviorIncidents) * 100) / 100;
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
        homeworkWeight = classHomeworkWeight / 100;
        quizWeight = classQuizWeight / 100;
        examWeight = classExamWeight / 100;
        projectWeight = classProjectWeight / 100;
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
        this.#SPEDPercentage = Math.round(100*(this.#totalSPED / this.#totalNumberOfStudents) * 100) / 100;
        // Update ELPercentage
        this.#ELPercentage = (this.#totalEL / this.#totalNumberOfStudents) * 100;
        // update InternestAccessPercentage
        this.#InternetAccessPercentage = Math.round(100*(this.#totalInternetAccess / this.#totalNumberOfStudents) * 100) / 100;
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
        this.#offTaskPercentage = Math.round(100*(this.#totalOffTask/ this.#totalBehaviorIncidents) * 100) / 100;
        // Update totalRefusingToWork
        let totalRefusingToWorkSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalRefusingToWorkSum += this.#students[i].totalRefusingToWork;
        }
        this.#totalRefusingToWork = totalRefusingToWorkSum;
        this.#refusingToWorkPercentage = Math.round(100*(this.#totalRefusingToWork / this.#totalBehaviorIncidents) * 100) / 100;
        // Update totalOutOfSeat
        let totalOutOfSeatSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalOutOfSeatSum += this.#students[i].totalOutOfSeat;
        }
        this.#totalOutOfSeat = totalOutOfSeatSum;
        this.#outOfSeatPercentage = Math.round(100*(this.#totalOutOfSeat / this.#totalBehaviorIncidents) * 100) / 100;
        // Update totalTalking
        let totalTalkingSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalTalkingSum += this.#students[i].totalTalking;
        }
        this.#totalTalking = totalTalkingSum;
        this.#talkingPercentage = Math.round(100*(this.#totalTalking / this.#totalBehaviorIncidents) * 100) / 100;
        // Update totalThrowingObject
        let totalThrowingObjectSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalThrowingObjectSum += this.#students[i].totalThrowingObject;
        }
        this.#totalThrowingObject = totalThrowingObjectSum;
        this.#throwingObjectPercentage = Math.round(100*(this.#totalThrowingObject / this.#totalBehaviorIncidents) * 100) / 100;
        // Update totalTouchingOthers
        let totalTouchingOthersSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalTouchingOthersSum += this.#students[i].totalTouchingOthers;
        }
        this.#totalTouchingOthers = totalTouchingOthersSum;
        this.#touchingOthersPercentage = Math.round(100*(this.#totalTouchingOthers / this.#totalBehaviorIncidents) * 100) / 100;
        // Update totalSelfHarm
        let totalSelfHarmSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalSelfHarmSum += this.#students[i].totalSelfHarm;
        }
        this.#totalSelfHarm = totalSelfHarmSum;
        this.#selfHarmPercentage = Math.round(100*(this.#totalSelfHarm / this.#totalBehaviorIncidents) * 100) / 100;
        // Update totalInappropriateLang
        let totalInappropriateLangSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalInappropriateLangSum += this.#students[i].totalInappropriateLang;
        }
        this.#totalInappropriateLang= totalInappropriateLangSum;
        this.#inappropriateLangPercentage = Math.round(100*(this.#totalInappropriateLang / this.#totalBehaviorIncidents) * 100) / 100;
        // Update totalBullyingTeasing
        let totalBullyingTeasingSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalBullyingTeasingSum += this.#students[i].totalBullyingTeasing;
        }
        this.#totalBullyingTeasing = totalBullyingTeasingSum;
        this.#bullyingTeasingPercentage = Math.round(100*(this.#totalBullyingTeasing / this.#totalBehaviorIncidents) * 100) / 100;
        // Update totalPropertyDamage
        let totalPropertyDamageSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalPropertyDamageSum += this.#students[i].totalPropertyDamage;
        }
        this.#totalPropertyDamage = totalPropertyDamageSum;
        this.#propertyDamagePercentage = Math.round(100*(this.#totalPropertyDamage / this.#totalBehaviorIncidents) * 100) / 100;
        // Update totalDefianceDisrespect
        let totalDefianceDisrespectSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalDefianceDisrespectSum += this.#students[i].totalDefianceDisrespect;
        }
        this.#totalDefianceDisrespect = totalDefianceDisrespectSum;
        this.#defianceDisrespectPercentage = Math.round(100*(this.#totalDefianceDisrespect / this.#totalBehaviorIncidents) * 100) / 100;
        // Update totalTheft
        let totalTheftSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalTheftSum += this.#students[i].totalTheft;
        }
        this.#totalTheft = totalTheftSum;
        this.#theftPercentage = Math.round(100*(this.#totalTheft/ this.#totalBehaviorIncidents) * 100) / 100;
        // Update totalLyingCheating
        let totalLyingCheatingSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalLyingCheatingSum += this.#students[i].totalLyingCheating;
        }
        this.#totalLyingCheating = totalLyingCheatingSum;
        this.#lyingCheatingPercentage = Math.round(100*(this.#totalLyingCheating/ this.#totalBehaviorIncidents) * 100) / 100;
        // Update totalOtherBehavior
        let totalOtherBehaviorSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalOtherBehaviorSum += this.#students[i].totalOtherBehavior;
        }
        this.#totalOtherBehavior = totalOtherBehaviorSum;
        this.#otherBehaviorPercentage = Math.round(100*(this.#totalOtherBehavior / this.#totalBehaviorIncidents) * 100) / 100;
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
        this.#letterGradeAPercentage = Math.round(100*(this.#totalLetterGradeA / this.#totalNumberOfStudents) * 100) / 100;
        // Update totalLetterGradeB
        let totalLetterGradeBSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            if (this.#students[i].letterGrade == "B+" || this.#students[i].letterGrade == "B" || this.#students[i].letterGrade == "B-"){
                totalLetterGradeBSum++;
            }
        }
        this.#totalLetterGradeB = totalLetterGradeBSum;
        this.#letterGradeBPercentage = Math.round(100*(this.#totalLetterGradeB / this.#totalNumberOfStudents) * 100) / 100;
        // Update totalLetterGradeC
        let totalLetterGradeCSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            if (this.#students[i].letterGrade == "C+" || this.#students[i].letterGrade == "C" || this.#students[i].letterGrade == "C-"){
                totalLetterGradeCSum++;
            }
        }
        this.#totalLetterGradeC = totalLetterGradeCSum;
        this.#letterGradeCPercentage = Math.round(100*(this.#totalLetterGradeC / this.#totalNumberOfStudents) * 100) / 100;
        // Update totalLetterGradeD
        let totalLetterGradeDSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            if (this.#students[i].letterGrade == "D+" || this.#students[i].letterGrade == "D" || this.#students[i].letterGrade == "D-"){
                totalLetterGradeDSum++;
            }
        }
        this.#totalLetterGradeD = totalLetterGradeDSum;
        this.#letterGradeDPercentage = Math.round(100*(this.#totalLetterGradeD / this.#totalNumberOfStudents) * 100) / 100;
        // Update totalLetterGradeF
        let totalLetterGradeFSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            if (this.#students[i].letterGrade == "F"){
                totalLetterGradeFSum++;
            }
        }
        this.#totalLetterGradeF = totalLetterGradeFSum;
        this.#letterGradeFPercentage = Math.round(100*(this.#totalLetterGradeF / this.#totalNumberOfStudents) * 100) / 100;
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
            this.#SPEDPercentage = Math.round(100*(this.#totalSPED / this.#totalNumberOfStudents) * 100) / 100;
            // Update ELPercentage
            this.#ELPercentage = (this.#totalEL / this.#totalNumberOfStudents) * 100;
            // update InternestAccessPercentage
            this.#InternetAccessPercentage = Math.round(100*(this.#totalInternetAccess / this.#totalNumberOfStudents) * 100) / 100;
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
            this.#offTaskPercentage = Math.round(100*(this.#totalOffTask/ this.#totalBehaviorIncidents) * 100) / 100;
            // Update totalRefusingToWork
            let totalRefusingToWorkSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalRefusingToWorkSum += this.#students[i].totalRefusingToWork;
            }
            this.#totalRefusingToWork = totalRefusingToWorkSum;
            this.#refusingToWorkPercentage = Math.round(100*(this.#totalRefusingToWork / this.#totalBehaviorIncidents) * 100) / 100;
            // Update totalOutOfSeat
            let totalOutOfSeatSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalOutOfSeatSum += this.#students[i].totalOutOfSeat;
            }
            this.#totalOutOfSeat = totalOutOfSeatSum;
            this.#outOfSeatPercentage = Math.round(100*(this.#totalOutOfSeat / this.#totalBehaviorIncidents) * 100) / 100;
            // Update totalTalking
            let totalTalkingSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalTalkingSum += this.#students[i].totalTalking;
            }
            this.#totalTalking = totalTalkingSum;
            this.#talkingPercentage = Math.round(100*(this.#totalTalking / this.#totalBehaviorIncidents) * 100) / 100;
            // Update totalThrowingObject
            let totalThrowingObjectSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalThrowingObjectSum += this.#students[i].totalThrowingObject;
            }
            this.#totalThrowingObject = totalThrowingObjectSum;
            this.#throwingObjectPercentage = Math.round(100*(this.#totalThrowingObject / this.#totalBehaviorIncidents) * 100) / 100;
            // Update totalTouchingOthers
            let totalTouchingOthersSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalTouchingOthersSum += this.#students[i].totalTouchingOthers;
            }
            this.#totalTouchingOthers = totalTouchingOthersSum;
            this.#touchingOthersPercentage = Math.round(100*(this.#totalTouchingOthers / this.#totalBehaviorIncidents) * 100) / 100;
            // Update totalSelfHarm
            let totalSelfHarmSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalSelfHarmSum += this.#students[i].totalSelfHarm;
            }
            this.#totalSelfHarm = totalSelfHarmSum;
            this.#selfHarmPercentage = Math.round(100*(this.#totalSelfHarm / this.#totalBehaviorIncidents) * 100) / 100;
            // Update totalInappropriateLang
            let totalInappropriateLangSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalInappropriateLangSum += this.#students[i].totalInappropriateLang;
            }
            this.#totalInappropriateLang= totalInappropriateLangSum;
            this.#inappropriateLangPercentage = Math.round(100*(this.#totalInappropriateLang / this.#totalBehaviorIncidents) * 100) / 100;
            // Update totalBullyingTeasing
            let totalBullyingTeasingSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalBullyingTeasingSum += this.#students[i].totalBullyingTeasing;
            }
            this.#totalBullyingTeasing = totalBullyingTeasingSum;
            this.#bullyingTeasingPercentage = Math.round(100*(this.#totalBullyingTeasing / this.#totalBehaviorIncidents) * 100) / 100;
            // Update totalPropertyDamage
            let totalPropertyDamageSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalPropertyDamageSum += this.#students[i].totalPropertyDamage;
            }
            this.#totalPropertyDamage = totalPropertyDamageSum;
            this.#propertyDamagePercentage = Math.round(100*(this.#totalPropertyDamage / this.#totalBehaviorIncidents) * 100) / 100;
            // Update totalDefianceDisrespect
            let totalDefianceDisrespectSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalDefianceDisrespectSum += this.#students[i].totalDefianceDisrespect;
            }
            this.#totalDefianceDisrespect = totalDefianceDisrespectSum;
            this.#defianceDisrespectPercentage = Math.round(100*(this.#totalDefianceDisrespect / this.#totalBehaviorIncidents) * 100) / 100;
            // Update totalTheft
            let totalTheftSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalTheftSum += this.#students[i].totalTheft;
            }
            this.#totalTheft = totalTheftSum;
            this.#theftPercentage = Math.round(100*(this.#totalTheft/ this.#totalBehaviorIncidents) * 100) / 100;
            // Update totalLyingCheating
            let totalLyingCheatingSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalLyingCheatingSum += this.#students[i].totalLyingCheating;
            }
            this.#totalLyingCheating = totalLyingCheatingSum;
            this.#lyingCheatingPercentage = Math.round(100*(this.#totalLyingCheating/ this.#totalBehaviorIncidents) * 100) / 100;
            // Update totalOtherBehavior
            let totalOtherBehaviorSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalOtherBehaviorSum += this.#students[i].totalOtherBehavior;
            }
            this.#totalOtherBehavior = totalOtherBehaviorSum;
            this.#otherBehaviorPercentage = Math.round(100*(this.#totalOtherBehavior / this.#totalBehaviorIncidents) * 100) / 100;
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
            this.#letterGradeAPercentage = Math.round(100*(this.#totalLetterGradeA / this.#totalNumberOfStudents) * 100) / 100;
            // Update totalLetterGradeB
            let totalLetterGradeBSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                if (this.#students[i].letterGrade == "B+" || this.#students[i].letterGrade == "B" || this.#students[i].letterGrade == "B-"){
                    totalLetterGradeBSum++;
                }
            }
            this.#totalLetterGradeB = totalLetterGradeBSum;
            this.#letterGradeBPercentage = Math.round(100*(this.#totalLetterGradeB / this.#totalNumberOfStudents) * 100) / 100;
            // Update totalLetterGradeC
            let totalLetterGradeCSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                if (this.#students[i].letterGrade == "C+" || this.#students[i].letterGrade == "C" || this.#students[i].letterGrade == "C-"){
                    totalLetterGradeCSum++;
                }
            }
            this.#totalLetterGradeC = totalLetterGradeCSum;
            this.#letterGradeCPercentage = Math.round(100*(this.#totalLetterGradeC / this.#totalNumberOfStudents) * 100) / 100;
            // Update totalLetterGradeD
            let totalLetterGradeDSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                if (this.#students[i].letterGrade == "D+" || this.#students[i].letterGrade == "D" || this.#students[i].letterGrade == "D-"){
                    totalLetterGradeDSum++;
                }
            }
            this.#totalLetterGradeD = totalLetterGradeDSum;
            this.#letterGradeDPercentage = Math.round(100*(this.#totalLetterGradeD / this.#totalNumberOfStudents) * 100) / 100;
            // Update totalLetterGradeF
            let totalLetterGradeFSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                if (this.#students[i].letterGrade == "F"){
                    totalLetterGradeFSum++;
                }
            }
            this.#totalLetterGradeF = totalLetterGradeFSum;
            this.#letterGradeFPercentage = Math.round(100*(this.#totalLetterGradeF / this.#totalNumberOfStudents) * 100) / 100;
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
/* TO DO: 
    Need to add formToObject, connected with HTML page
        Will need to make the main function for each to make db calls
        Will have the client connect and disconnect 
        Will have to be async when retrieving values    
    Steps to Grab Data
        Retrieve document, student, and class from DB, use arrays for large amounts
        Turn documents into object
        Add object to student object, add student to class
        Update class, student, and object (if updating object)
    Connect with Express.js
    */
