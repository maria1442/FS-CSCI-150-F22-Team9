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
class Annoucement{
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
    #annoucements;
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
        this.#annoucements = [];
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
    addAnnoucement(annoucementObj){
        //let r = new Annoucement(title, description, date);
        this.#annoucements.push(annoucementObj);
    }
    removeAnnoucement(annoucementObj){
        let pos = this.#annoucements.findIndex(
            element => element.title === annoucementObj.title
        );
        if (pos > -1) { // only splice array when item is found
            this.#annoucements.splice(pos, 1); // 2nd parameter means remove one item only
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
            sum += this.#students[i].totalBehaviorIncidents;
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
    get attendancPresentPercentage(){
        this.#attendancePresentPercentage = (this.#totalAttendancePresent / (this.#totalAttendancePresent + this.#totalAttendanceAbsent)) * 100;
        return this.#attendancePresentPercentage;
    }
    get attendanceAbsentPercentage(){
        this.#attendanceAbsentPercentage = (this.#totalAttendanceAbsent / (this.#totalAttendancePresent + this.#totalAttendanceAbsent)) * 100;
        return this.#attendanceAbsentPercentage;
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
    get offTaskPercentage(){
        this.#offTaskPercentage = (this.#totalOffTask/ this.#totalBehaviorIncidents) * 100;
        return this.#offTaskPercentage;
    }
    get refuseToWorkPercentage(){
        this.#refusingToWorkPercentage= (this.#totalRefusingToWork / this.#totalBehaviorIncidents) * 100;
        return this.#refusingToWorkPercentage;
    }
    get outOfSeatPercentage(){
        this.#outOfSeatPercentage = (this.#totalOutOfSeat / this.#totalBehaviorIncidents) * 100;
        return this.#outOfSeatPercentage;
    }
    get talkingPercentage(){
        this.#talkingPercentage = (this.#totalTalking / this.#totalBehaviorIncidents) * 100;
        return this.#talkingPercentage;
    }
    get throwingObjectPercentage(){
        this.#throwingObjectPercentage = (this.#totalThrowingObject / this.#totalBehaviorIncidents) * 100;
        return this.#throwingObjectPercentage;
    }
    get touchingOthersPercentage(){
        this.#touchingOthersPercentage = (this.#totalTouchingOthers / this.#totalBehaviorIncidents) * 100;
        return this.#touchingOthersPercentage;
    }
    get selfHarmPercentage(){
        this.#selfHarmPercentage = (this.#totalSelfHarm / this.#totalBehaviorIncidents) * 100;
        return this.#selfHarmPercentage;
    }
    get inappropriateLangPercentage(){
        this.#inappropriateLangPercentage = (this.#totalInappropriateLang / this.#totalBehaviorIncidents) * 100;
        return this.#inappropriateLangPercentage;
    }
    get bullyingTeasingPercentage(){
        this.#bullyingTeasingPercentage = (this.#totalBullyingTeasing / this.#totalBehaviorIncidents) * 100;
        return this.#bullyingTeasingPercentage;
    }
    get propertyDamagePercentage(){
        this.#propertyDamagePercentage = (this.#totalPropertyDamage / this.#totalBehaviorIncidents) * 100;
        return this.#propertyDamagePercentage;
    }
    get defianceDisrespectPercentage(){
        this.#defianceDisrespectPercentage = (this.#totalDefianceDisrespect / this.#totalBehaviorIncidents) * 100;
        return this.#defianceDisrespectPercentage;
    }
    get theftPercentage(){
        this.#theftPercentage = (this.#totalTheft/ this.#totalBehaviorIncidents) * 100;
        return this.#theftPercentage;
    }
    get lyingCheatingPercentage(){
        this.#lyingCheatingPercentage = (this.#totalLyingCheating/ this.#totalBehaviorIncidents) * 100;
        return this.#lyingCheatingPercentage;
    }
    get otherBehaviorPercentage(){
        this.#otherBehaviorPercentage = (this.#totalOtherBehavior / this.#totalBehaviorIncidents) * 100;
        return this.#otherBehaviorPercentage;
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
    get letterGradeAPercentage(){
        this.#letterGradeAPercentage = (this.#totalLetterGradeA / this.#totalNumberOfStudents) * 100;
        return this.#letterGradeAPercentage;
    }
    get letterGradeBPercentage(){
        this.#letterGradeBPercentage = (this.#totalLetterGradeB / this.#totalNumberOfStudents) * 100;
        return this.#letterGradeBPercentage;
    }
    get letterGradeCPercentage(){
        this.#letterGradeCPercentage = (this.#totalLetterGradeC / this.#totalNumberOfStudents) * 100;
        return this.#letterGradeCPercentage;
    }
    get letterGradeDPercentage(){
        this.#letterGradeDPercentage = (this.#totalLetterGradeD / this.#totalNumberOfStudents) * 100;
        return this.#letterGradeDPercentage;
    }
    get letterGradeFPercentage(){
        this.#letterGradeFPercentage = (this.#totalLetterGradeF / this.#totalNumberOfStudents) * 100;
        return this.#letterGradeFPercentage;
    }
    get students(){
        return this.#students;
    }
    get events(){
        return this.#events;
    }
    get annoucements(){
        return this.#annoucements;
    }
    toJSON(){
        var studentOutput = new Array();;
        for (let i = 0; i < this.#students.length; i++){
            var s = this.#students[i];
            studentOutput[i] = s.toJSON();
        }
        var eventsOutput = new Array();;
        for (let i = 0; i < this.#events.length; i++){
            var t = this.#events[i];
            eventsOutput[i] = t.toJSON();
        }
        var annoucementsOutput = new Array();
        for (let i = 0; i < this.#annoucements.length; i++){
            var b = this.#annoucements[i];
            annoucementsOutput[i] = b.toJSON();
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
            annoucements: annoucementsOutput
        };
    }
}
class User {
    #username;
    #password;
    #totalNumberOfClasses;
    #classes;
    construct(username, password){
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
        var classOutput = {};
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

// DEMO Main for Testing DB functions
async function main() {
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
        //await addStudentAttendanceToClassDB(client, class1, student1, student1Day1);
        //await updateStudentAttendanceFromClassDB(client, class1, student1, student1Day1, student1Day2);
        //await deleteStudentAttendanceFromClassDB(client, class1, student1, student1Day1);
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
    }
    finally {
        await client.close();
    }
}
main().catch(console.error);
// Write to MongoDB
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
async function addNewUserToDB(client, user){
    let JSONUser = user.toJSON(); 
    const result = await client.db("classparency").collection("users").insertOne(JSONUser);
    console.log(`New user created with the following id: ${result.insertedId}`);
}
async function addNewClassToUserDB(client, user, course){
    let name = user.username;
    const query = {username: name};
    const finding = await client.db("classparency").collection("users").findOne(query);
    let stringId = finding._id;        
    let JSONCourse = course.toJSON();
    const result = await client.db("classparency").collection("users").updateOne({"_id": stringId}, {$push: {classes: JSONCourse}});
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
 async function deleteEventFromDB(client, event){
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
async function deleteAnnouncementFromDB(client, announcement){
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
async function deleteStudentFromDB(client, student){
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
async function deleteClassFromDB(client, removedClass){
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
async function deleteUserFromDB(client, user){
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
async function deleteClassfromUserDB(client, user, course){
    let name = user.username;
    const query = {username: name};
    const finding = await client.db("classparency").collection("users").findOne(query);
    let stringId = finding._id;        
    let JSONCourse = course.toJSON();
    const result = await client.db("classparency").collection("users").updateOne({"_id": stringId}, {$pull: {classes: JSONCourse}});
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
async function updateEventToDB(client, event, newEvent){
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
async function updateAnnouncementToDB(client, annoucement, newAnnouncement){
    let name = annoucement.title;
    const query = {title: name};
    const finding = await client.db("classparency").collection("announcements").findOne(query);
    let stringId = finding._id;  
    let update = newAnnouncement.toJSON();  
    const result = await client.db("classparency").collection("announcements").updateOne({"_id": stringId}, {$set: update});
}
async function updateAnnouncementFromClassDB(client, course, annoucement, newAnnouncement){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONAnnouncement = newAnnouncement.toJSON();
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "announcements.title": annoucement.title}, {$set: {"announcements.$": JSONAnnouncement}});
}
async function updateStudentToDB(client, student, newStudent){
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
async function updateClassToDB(client, course, newCourse){
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

/* TO DO: 
    Need to add formToObject, connected with HTML page
        Will need to make the main function for each to make db calls
        Will have the client connect and disconnect
    Need to add functions to take document and turn into object
        
*/

// TESTING BEFORE ADDING TO CLASS
// Class
/*var class1 = new Class("courseName", "Jane Doe", "9", 10, 25, 40, 25);
// Student
var student1 = new Student(10000000, "alt", "John", "Doe", "male", 5, 21, 2010, "jDoe@gmail.com", false, true, true);
// Student 1 Behavior Info, month of September
var student1Behavior1 = new Behavior("Touching Others", 9, 1, 2022, "talking during reading time");
var student1Behavior2 = new Behavior("Self Harm", 9, 3, 2022, "play fighting with student2");
student1.addBehavior(student1Behavior1);
student1.addBehavior(student1Behavior2);
// Student1 Attendance Info, month of September
var student1Day1 = new Attendance(9, 1, 2022, "Present");
var student1Day2 = new Attendance(9, 2, 2022, "Present");
var student1Day3 = new Attendance(9, 5, 2022, "Present");
var student1Day4 = new Attendance(9, 6, 2022, "Present");
var student1Day5 = new Attendance(9, 7, 2022, "Present");
var student1Day6 = new Attendance(9, 8, 2022, "Present");
var student1Day7 = new Attendance(9, 9, 2022, "Present");
var student1Day8 = new Attendance(9, 12, 2022, "Present");
var student1Day9 = new Attendance(9, 13, 2022, "Present");
var student1Day10 = new Attendance(9, 14, 2022, "Present");
var student1Day11 = new Attendance(9, 15, 2022, "Present");
var student1Day12 = new Attendance(9, 16, 2022, "Absent");
var student1Day13 = new Attendance(9, 19, 2022, "Absent");
var student1Day14 = new Attendance(9, 20, 2022, "Absent");
var student1Day15 = new Attendance(9, 21, 2022, "Absent");
var student1Day16 = new Attendance(9, 22, 2022, "Absent");
var student1Day17 = new Attendance(9, 23, 2022, "Absent");
var student1Day18 = new Attendance(9, 26, 2022, "Absent");
var student1Day19 = new Attendance(9, 27, 2022, "Absent");
var student1Day20 = new Attendance(9, 28, 2022, "Absent");
var student1Day21 = new Attendance(9, 29, 2022, "Absent");
var student1Day22 = new Attendance(9, 30, 2022, "Absent");
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
student1.addAttendance(student1Day22);
// Student 1 Assignment Info, month of September
var student1Assignment1 = new Assignment("Assignment1", "Homework", 10, 10, 9, 21, 2022);
console.log(student1Assignment1.assignmentPercentage);
student1.addAssignment(student1Assignment1);
console.log(homeworkWeight);
console.log(student1.gradePercentage);
var j = student1.toJSON();
var strJSON = JSON.stringify(j);
console.log(strJSON);
var attendanceOutput = {};
for (let i = 0; i < array.length; i++){
    var m = array[i];
    attendanceOutput[i] = m.toJSON();
}
var obj = {
    attended: attendanceOutput
};
var string = JSON.stringify(obj);
console.log(string);*/

/* TO DO: 
    Connect to DB
        Able to take document and turn into object
        Able to turn object into document and add to DB
*/

