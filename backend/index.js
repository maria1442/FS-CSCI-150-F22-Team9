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
    get refusingToWorkPercentage(){
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
            totalOtherAssignments: this.#totalOtherAssignments,
            totalAssignments: this.#totalAssignments,
            letterGrade: this.#letterGrade,
            gradePercentage: this.#gradePercentage,
            studentAssignments: assignmentOutput,
            // TOTAL ATTENDANCE
            totalDays: this.#totalDays,
            totalPresentAttendance: this.#totalPresentAttendance,
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
    set totalNumberOfStudents(totalNumberOfStudents){
        this.#totalNumberOfStudents = totalNumberOfStudents;
    }
    set totalBehaviorIncidents(totalBehaviorIncidents) {
        this.#totalBehaviorIncidents = totalBehaviorIncidents;
    }
    set totalSPED(totalSPED){
        this.#totalSPED = totalSPED;
    }
    set totalEL(totalEL){
        this.#totalEL = totalEL;
    }
    set totalInternetAccess(totalInternetAccess){
        this.#totalInternetAccess = totalInternetAccess;
    }
    set SPEDPercentage(SPEDPercentage){
        this.#SPEDPercentage = SPEDPercentage;
    }
    set ELPercentage(ELPercentage){
        this.#ELPercentage = ELPercentage;
    }
    set InternetAccessPercentage(InternetAccessPercentage){
        this.#InternetAccessPercentage = InternetAccessPercentage;
    }
    set totalAttendancePresent(totalAttendancePresent){
        this.#totalAttendancePresent = totalAttendancePresent;
    }
    set totalAttendanceAbsent(totalAttendanceAbsent){
        this.#totalAttendanceAbsent = totalAttendanceAbsent;
    }
    set attendancePresentPercentage(attendancePresentPercentage){
        this.#attendancePresentPercentage = attendancePresentPercentage;
    }
    set attendanceAbsentPercentage(attendanceAbsentPercentage){
        this.#attendanceAbsentPercentage = attendanceAbsentPercentage;
    }
    set totalOffTask(totalOffTask){
        this.#totalOffTask = totalOffTask;
    }
    set totalRefusingToWork(totalRefusingToWork){
        this.#totalRefusingToWork = totalRefusingToWork;
    }
    set totalOutOfSeat(totalOutOfSeat){
        this.#totalOutOfSeat = totalOutOfSeat;
    }
    set totalTalking(totalTalking){
        this.#totalTalking = totalTalking;
    }
    set totalThrowingObject(totalThrowingObject){
        this.#totalThrowingObject = totalThrowingObject;
    }
    set totalTouchingOthers(totalTouchingOthers){
        this.#totalTouchingOthers = totalTouchingOthers;
    }
    set totalSelfHarm(totalSelfHarm){
        this.#totalSelfHarm = totalSelfHarm;
    }
    set totalInappropriateLang(totalInappropriateLang) {
        this.#totalInappropriateLang = totalInappropriateLang;
    }
    set totalBullyingTeasing(totalBullyingTeasing){
        this.#totalBullyingTeasing = totalBullyingTeasing;
    }
    set totalPropertyDamage(totalPropertyDamage){
        this.#totalPropertyDamage = totalPropertyDamage
    }
    set totalDefianceDisrespect(totalDefianceDisrespect){
        this.#totalDefianceDisrespect = totalDefianceDisrespect;
    }
    set totalTheft(totalTheft){
        this.#totalTheft = totalTheft;
    }
    set totalLyingCheating(totalLyingCheating){
        this.#totalLyingCheating = totalLyingCheating;
    }
    set totalOtherBehavior(totalOtherBehavior){
        this.#totalOtherBehavior = totalOtherBehavior;
    }
    set offTaskPercentage(offTaskPercentage){
        this.#offTaskPercentage = offTaskPercentage;
    }
    set refusingToWorkPercentage(refusingToWorkPercentage){
        this.#refusingToWorkPercentage = refusingToWorkPercentage;
    }
    set outOfSeatPercentage(outOfSeatPercentage){
        this.#outOfSeatPercentage = outOfSeatPercentage;
    }
    set talkingPercentage(talkingPercentage){
        this.#talkingPercentage = talkingPercentage;
    }
    set throwingObjectPercentage(throwingObjectPercentage){
        this.#throwingObjectPercentage = throwingObjectPercentage;
    }
    set touchingOthersPercentage(touchingOthersPercentage){
        this.#touchingOthersPercentage = touchingOthersPercentage;
    }
    set selfHarmPercentage(selfHarmPercentage){
        this.#selfHarmPercentage = selfHarmPercentage;
    }
    set inappropriateLangPercentage(inappropriateLangPercentage){
        this.#inappropriateLangPercentage = inappropriateLangPercentage;
    }
    set bullyingTeasingPercentage(bullyingTeasingPercentage){
        this.#bullyingTeasingPercentage = bullyingTeasingPercentage;
    }
    set propertyDamagePercentage(propertyDamagePercentage){
        this.#propertyDamagePercentage = propertyDamagePercentage;
    }
    set defianceDisrespectPercentage(defianceDisrespectPercentage){
        this.#defianceDisrespectPercentage = defianceDisrespectPercentage;
    }
    set theftPercentage(theftPercentage){
        this.#theftPercentage = theftPercentage;
    }
    set lyingCheatingPercentage(lyingCheatingPercentage){
        this.#lyingCheatingPercentage = lyingCheatingPercentage;
    }
    set otherBehaviorPercentage(otherBehaviorPercentage){
        this.#otherBehaviorPercentage = otherBehaviorPercentage;
    }
    set totalHomework(totalHomework){
        this.#totalHomework = totalHomework;
    }
    set totalQuizzes(totalQuizzes){
        this.#totalQuizzes = totalQuizzes;
    }
    set totalExams(totalExams){
        this.#totalExams = totalExams;
    }
    set totalProjects(totalProjects){
        this.#totalProjects = totalProjects;
    }
    set totalOtherAssignments(totalOtherAssignments){
        this.#totalOtherAssignments = totalOtherAssignments;
    }
    set totalAssignments(totalAssignments){
        this.#totalAssignments = totalAssignments;
    }
    set totalLetterGradeA(totalLetterGradeA){
        this.#totalLetterGradeA = totalLetterGradeA;
    }
    set totalLetterGradeB(totalLetterGradeB){
        this.#totalLetterGradeB = totalLetterGradeB;
    }
    set totalLetterGradeC(totalLetterGradeC){
        this.#totalLetterGradeC = totalLetterGradeC;
    }
    set totalLetterGradeD(totalLetterGradeD){
        this.#totalLetterGradeD = totalLetterGradeD;
    }
    set totalLetterGradeF(totalLetterGradeF){
        this.#totalLetterGradeF = totalLetterGradeF;
    }
    set letterGradeAPercentage(letterGradeAPercentage){
        this.#letterGradeAPercentage = letterGradeAPercentage;
    }
    set letterGradeBPercentage(letterGradeBPercentage){
        this.#letterGradeBPercentage = letterGradeBPercentage;
    }
    set letterGradeCPercentage(letterGradeCPercentage){
        this.#letterGradeCPercentage = letterGradeCPercentage;
    }
    set letterGradeDPercentage(letterGradeDPercentage){
        this.#letterGradeDPercentage = letterGradeDPercentage;
    }
    set letterGradeFPercentage(letterGradeFPercentage){
        this.#letterGradeFPercentage = letterGradeFPercentage;
    }
    set students(students){
        this.#students = students;
    }
    set events(events){
        this.#events = events;
    }
    set announcements(announcements){
        this.#announcements = announcements;
    }
    static from(json){
        return Object.assign(new Class(), json);
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
        // update InternetAccessPercentage
        this.#InternetAccessPercentage = Math.round(100*(this.#totalInternetAccess / this.#totalNumberOfStudents) * 100) / 100;
        // update totalAttendancePresent
        let totalAttendancePresentSum = 0;
        for (let i = 0; i < this.#students.length; i++){
            totalAttendancePresentSum += this.#students[i].totalPresentAttendance;
        }
        this.#totalAttendancePresent = totalAttendancePresentSum;
        this.#attendancePresentPercentage = Math.round(100*(this.#totalAttendancePresent / (this.#totalAttendancePresent + this.#totalAttendanceAbsent)) * 100) / 100;
        // update totalAttendanceAbsent
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
            // update InternetAccessPercentage
            this.#InternetAccessPercentage = Math.round(100*(this.#totalInternetAccess / this.#totalNumberOfStudents) * 100) / 100;
            // update totalAttendancePresent
            let totalAttendancePresentSum = 0;
            for (let i = 0; i < this.#students.length; i++){
                totalAttendancePresentSum += this.#students[i].totalPresentAttendance;
            }
            this.#totalAttendancePresent = totalAttendancePresentSum;
            this.#attendancePresentPercentage = Math.round(100*(this.#totalAttendancePresent / (this.#totalAttendancePresent + this.#totalAttendanceAbsent)) * 100) / 100;
            // update totalAttendanceAbsent
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
    get totalNumberOfStudents(){
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
    get refusingToWorkPercentage(){
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
    makeClass(doc) {
        this.#courseName = doc.courseName;
        this.#instructorName = doc.instructorName;
        this.#gradeLevel = doc.gradeLevel;
        this.#totalNumberOfStudents = doc.totalNumberOfStudents;
        this.#totalSPED = doc.totalSPED;
        this.#totalEL = doc.totalEL;
        this.#totalInternetAccess = doc.totalInternetAccess;
        this.#SPEDPercentage = doc.SPEDPercentage;
        this.#ELPercentage = doc.ELPercentage;
        this.#InternetAccessPercentage = doc.InternetAccessPercentage;

        this.#totalAttendancePresent = doc.totalAttendancePresent;
        this.#totalAttendanceAbsent = doc.totalAttendanceAbsent;
        this.#attendancePresentPercentage = doc.attendancePresentPercentage;
        this.#attendanceAbsentPercentage = doc.attendanceAbsentPercentage;

        this.#totalBehaviorIncidents = doc.totalBehaviorIncidents;
        this.#totalOffTask = doc.totalOffTask;
        this.#totalRefusingToWork = doc.totalRefusingToWork;
        this.#totalOutOfSeat = doc.totalOutOfSeat;
        this.#totalTalking = doc.totalTalking;
        this.#totalThrowingObject = doc.totalThrowingObject;
        this.#totalTouchingOthers = doc.totalTouchingOthers;
        this.#totalSelfHarm = doc.totalSelfHarm;
        this.#totalInappropriateLang = doc.totalInappropriateLang;
        this.#totalBullyingTeasing = doc.totalBullyingTeasing;
        this.#totalPropertyDamage = doc.totalPropertyDamage;
        this.#totalDefianceDisrespect = doc.totalDefianceDisrespect;
        this.#totalTheft = doc.totalTheft;
        this.#totalLyingCheating = doc.totalLyingCheating;
        this.#totalOtherBehavior = doc.totalOtherBehavior;
        this.#offTaskPercentage = doc.offTaskPercentage;
        this.#refusingToWorkPercentage = doc.refusingToWorkPercentage;
        this.#outOfSeatPercentage = doc.outOfSeatPercentage;
        this.#talkingPercentage = doc.talkingPercentage;
        this.#throwingObjectPercentage = doc.throwingObjectPercentage;
        this.#touchingOthersPercentage = doc.touchingOthersPercentage;
        this.#selfHarmPercentage = doc.selfHarmPercentage;
        this.#inappropriateLangPercentage = doc.inappropriateLangPercentage;
        this.#bullyingTeasingPercentage = doc.bullyingTeasingPercentage;
        this.#propertyDamagePercentage = doc.propertyDamagePercentage;
        this.#defianceDisrespectPercentage = doc.defianceDisrespectPercentage;
        this.#theftPercentage = doc.theftPercentage;
        this.#lyingCheatingPercentage = doc.lyingCheatingPercentage;
        this.#otherBehaviorPercentage = doc.otherBehaviorPercentage;

        this.#totalHomework = doc.totalHomework;
        this.#totalQuizzes = doc.totalQuizzes;
        this.#totalExams = doc.totalExams;
        this.#totalProjects = doc.totalProjects;
        this.#totalOtherAssignments = doc.totalOtherAssignments;
        this.#totalAssignments = doc.totalAssignments;
        homeworkWeight = doc.homeworkWeight;
        quizWeight = doc.quizWeight;
        examWeight = doc.examWeight;
        projectWeight = doc.projectWeight;
        this.#totalLetterGradeA = doc.totalLetterGradeA;
        this.#totalLetterGradeB = doc.totalLetterGradeB;
        this.#totalLetterGradeC = doc.totalLetterGradeC;
        this.#totalLetterGradeD = doc.totalLetterGradeD;
        this.#totalLetterGradeF = doc.totalLetterGradeF;
        this.#letterGradeAPercentage = doc.letterGradeAPercentage;
        this.#letterGradeBPercentage = doc.letterGradeBPercentage;
        this.#letterGradeCPercentage = doc.letterGradeCPercentage;
        this.#letterGradeDPercentage = doc.letterGradeDPercentage;
        this.#letterGradeFPercentage = doc.letterGradeFPercentage;

        this.#students = doc.students;
        this.#events = doc.events;
        this.#announcements = doc.announcements;
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
            totalOtherAssignments: this.#totalOtherAssignments,
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


// MongoDB Functions
const {MongoClient, MongoDBNamespace} = require('mongodb');

async function getNumberOfSPED(){
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    var numSPED;
    try {
        await client.connect();
        numSPED = await countSPED(client);
   }
    finally {
        await client.close(); 
        return numSPED;
    } 
}
async function getNumberOfEL(){
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    var numEL;
    try {
        await client.connect();
        numEL = await countEL(client);
   }
    finally {
        await client.close(); 
        return numEL;
    } 
}
async function getNumberOfInternetAccess(){
    const uri = "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";
    const client = new MongoClient(uri);
    var numIA;
    try {
        await client.connect();
        numIA = await countInternetAccess(client);
   }
    finally {
        await client.close(); 
        return numIA;
    } 
}

async function addEventToDB(event) {
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
async function addAnnouncementToDB(announcement) {
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
async function addStudentToDB(student) {
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
async function deleteEventFromDB(event) {
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
async function deleteAnnouncementFromDB(announcement) {
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
async function deleteStudentFromDB(student) {
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
async function deleteClassFromDB(course) {
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
async function updateEventFromDB(event, newEvent) {
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
async function updateAnnouncementFromDB(announcement, newAnnouncement) {
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
async function updateStudentFromDB(student, newStudent) {
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
async function updateClassFromDB(course, newCourse) {
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
// COUNT DOCUMENTS
async function countSPED(client){
    const query = {SPED: true};
    const numSPED = await client.db("classparency").collection("students").countDocuments(query);
    return numSPED;
}
async function countEL(client){
    const query = {EL: true};
    const numEL = await client.db("classparency").collection("students").countDocuments(query);
    return numEL;
}
async function countInternetAccess(client){
    const query = {internetAccess: true};
    const numIA = await client.db("classparency").collection("students").countDocuments(query);
    return numIA;
}

// ADD NEW DOCUMENTS
async function addNewEventToDB(client, event){
    let JSONEvent = event;
    const result = await client.db("classparency").collection("events").insertOne(JSONEvent);       
    console.log(`New event created with the following id: ${result.insertedId}`);
}
async function addNewEventToClassDB(client, course, event){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONEvent = event;
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId}, {$push: {events: JSONEvent}});
}
async function addNewAnnouncementToDB(client, announcement){
    let JSONAnnouncement = announcement;
    const result = await client.db("classparency").collection("announcements").insertOne(JSONAnnouncement);
    console.log(`New announcement created with the following id: ${result.insertedId}`);
}
async function addNewAnnouncementToClassDB(client, course, announcement){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONAnnouncement = announcement;
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId}, {$push: {announcements: JSONAnnouncement}});
}
async function addNewStudentToDB(client, student){
    let JSONStudent = student; 
    const result = await client.db("classparency").collection("students").insertOne(JSONStudent);
    console.log(`New student created with the following id: ${result.insertedId}`);
}
async function addNewStudentToClassDB(client, course, student){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONStudent = student;
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId}, {$push: {students: JSONStudent}});
}
async function addNewClassToDB(client, newClass){
    let JSONClass = newClass;
    const result = await client.db("classparency").collection("classes").insertOne(JSONClass);
    console.log(`New class created with the following id: ${result.insertedId}`);
}
async function addNewClassToUserDB(client, user, course){
    let name = user.username;
    const query = {username: name};
    const finding = await client.db("classparency").collection("users").findOne(query);
    let stringId = finding._id;        
    let JSONCourse = course;
    const result = await client.db("classparency").collection("users").updateOne({"_id": stringId}, {$push: {classes: JSONCourse}});
}
async function addNewUserToDB(client, user){
    let JSONUser = user;
    const result = await client.db("classparency").collection("users").insertOne(JSONUser);
    console.log(`New user created with the following id: ${result.insertedId}`);
}
async function addStudentAttendanceToDB(client, student, attendance){
    let id = student.studentId;
    const query = {studentId: id};
    const finding = await client.db("classparency").collection("students").findOne(query);
    let stringId = finding._id;        
    let JSONAttendance = attendance;
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
    let JSONBehavior = behavior;
    const result = await client.db("classparency").collection("students").updateOne({"_id": stringId}, {$push: {studentBehavior: JSONBehavior}});
}
async function addStudentBehaviorToClassDB(client, course, student, behavior){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONBehavior = behavior;
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "students.studentId": student.studentId}, {$push: {"students.$.studentBehavior": JSONBehavior}});
}
async function addStudentAssignmentToDB(client, student, assignment){
    let id = student.studentId;
    const query = {studentId: id};
    const finding = await client.db("classparency").collection("students").findOne(query);
    let stringId = finding._id;        
    let JSONAssignment = assignment;
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
    let update = newEvent;
    const result = await client.db("classparency").collection("events").updateOne({"_id": stringId}, {$set: update});
}
async function updateEventFromClassDB(client, course, event, newEvent){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONEvent = newEvent;
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "events.eventName": event.eventName}, {$set: {"events.$": JSONEvent}});
}
async function updateAnnouncementFromDBClient(client, announcement, newAnnouncement){
    let name = announcement.title;
    const query = {title: name};
    const finding = await client.db("classparency").collection("announcements").findOne(query);
    let stringId = finding._id;  
    let update = newAnnouncement;
    const result = await client.db("classparency").collection("announcements").updateOne({"_id": stringId}, {$set: update});
}
async function updateAnnouncementFromClassDB(client, course, announcement, newAnnouncement){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONAnnouncement = newAnnouncement;
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "announcements.title": announcement.title}, {$set: {"announcements.$": JSONAnnouncement}});
}
async function updateStudentFromDBClient(client, student, newStudent){
    let name = student.studentId;
    const query = {studentId: name};
    const finding = await client.db("classparency").collection("students").findOne(query);
    let stringId = finding._id;  
    let update = newStudent;
    const result = await client.db("classparency").collection("students").updateOne({"_id": stringId}, {$set: update});
}
async function updateStudentFromClassDB(client, course, student, newStudent){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONStudent = newStudent;
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "students.studentId": student.studentId}, {$set: {"students.$": JSONStudent}});
}
async function updateClassFromDBClient(client, course, newCourse){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;  
    let update = newCourse;
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId}, {$set: update});
}
async function updateClassFromUserDB(client, user, course, newCourse){
    let name = user.username;
    const query = {username: name};
    const finding = await client.db("classparency").collection("users").findOne(query);
    let stringId = finding._id;        
    let JSONClass = newCourse;
    const result = await client.db("classparency").collection("users").updateOne({"_id": stringId, "classes.courseName": course.courseName}, {$set: {"classes.$": JSONClass}});
}
async function updateUserFromDBClient(client, user, newUser){
    let name = user.username;
    const query = {username: name};
    const finding = await client.db("classparency").collection("users").findOne(query);
    let stringId = finding._id;  
    let update = newUser;  
    const result = await client.db("classparency").collection("users").updateOne({"_id": stringId}, {$set: update});
}
async function updateStudentAttendanceFromDB(client, student, attendance, newAttendance){
    let name = student.studentId;
    const query = {studentId: name};
    const finding = await client.db("classparency").collection("students").findOne(query);
    let stringId = finding._id;        
    let JSONAttendance = newAttendance;
    const result = await client.db("classparency").collection("students").updateOne({"_id": stringId, "studentAttendance.date": attendance.date}, {$set: {"studentAttendance.$": JSONAttendance}});
}
async function updateStudentAttendanceFromClassDB(client, course, student, attendance, newAttendance){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONAttendance = newAttendance;
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "students.studentId": student.studentId, "students.studentAttendance.date": attendance.date}, {$set: {"students.$.studentAttendance": JSONAttendance}});
}
async function updateStudentBehaviorFromDB(client, student, behavior, newBehavior){
    let name = student.studentId;
    const query = {studentId: name};
    const finding = await client.db("classparency").collection("students").findOne(query);
    let stringId = finding._id;        
    let JSONBehavior = newBehavior;
    const result = await client.db("classparency").collection("students").updateOne({"_id": stringId, "studentBehavior.date": behavior.date, "studentBehavior.incident": behavior.incident}, {$set: {"studentBehavior.$": JSONBehavior}});
}
async function updateStudentBehaviorFromClassDB(client, course, student, behavior, newBehavior){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONBehavior = newBehavior;
    const result = await client.db("classparency").collection("classes").updateOne({"_id": stringId, "students.studentId": student.studentId, "students.studentBehavior.date": behavior.date, "students.studentBehavior.incident": behavior.incident }, {$set: {"students.$.studentBehavior": JSONBehavior}});
}
async function updateStudentAssignmentFromDB(client, student, assignment, newAssignment){
    let name = student.studentId;
    const query = {studentId: name};
    const finding = await client.db("classparency").collection("students").findOne(query);
    let stringId = finding._id;        
    let JSONAssignment = newAssignment;
    const result = await client.db("classparency").collection("students").updateOne({"_id": stringId, "studentAssignments.assignmentName": assignment.assignmentName}, {$set: {"studentAssignments.$": JSONAssignment}});
}
async function updateStudentAssignmentFromClassDB(client, course, student, assignment, newAssignment){
    let name = course.courseName;
    const query = {courseName: name};
    const finding = await client.db("classparency").collection("classes").findOne(query);
    let stringId = finding._id;        
    let JSONAssignment = newAssignment;
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
    studentArray = await client.db("classparency").collection("students").find({},{projection:{ _id: 0 }, sort:{
        'studentId': 1}}).toArray();
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

const express = require("express");
const { response } = require('express');
const mongo = require("mongodb").MongoClient;

const app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'pug');
app.use(express.static('views'));

var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


const url =  "mongodb+srv://test1:alligator0523@cluster0.h7j34v9.mongodb.net/test";

let db

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err)
      return
    }
    db = client.db("classparency")
  }
);
app.use(express.json())


// Send Documents
// Add new document
app.post("/newEvent", (req, res) => {
    const newEvent = req.body;
    addEventToDB(newEvent).catch(console.error);
    res.status(200).json({ ok: true })
})
app.post("/addEvent", urlencodedParser, async function(req, res){
    var eventName = req.body.eventName;
    var eventDescription = req.body.description;
    var eventLocation = req.body.location;
    var eventDate = new Date(req.body.eventDate);
    const newEvent = new Event(eventName, eventDate.getUTCMonth(), eventDate.getUTCDate(), eventDate.getUTCFullYear(), eventDescription, eventLocation);
    addEventToDB(newEvent.toJSON());
    res.redirect('back');
})

app.post("/newAnnouncement", (req, res) => {
    const newAnnouncement = req.body;
    addAnnouncementToDB(newAnnouncement).catch(console.error);
    res.status(200).json({ ok: true })
})
app.post("/addAnnouncement", urlencodedParser, async function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    var announcementDate = new Date(req.body.announcementDate);
    const newAnnouncement = new Announcement(title, description, announcementDate.getUTCMonth(), announcementDate.getUTCDate(), announcementDate.getUTCFullYear());
    addAnnouncementToDB(newAnnouncement.toJSON());
    res.redirect('back');
})
app.post("/newStudent", (req, res) => {
    const newStudent = req.body;
    addStudentToDB(newStudent).catch(console.error);
    res.status(200).json({ ok: true })
})

app.post("/addStudent",  urlencodedParser, async function(req, res) {
    var studentID = req.body.studentID;
    var studentFirstName = req.body.studentFirstName;
    var studentLastName = req.body.studentLastName;
    var studentGender = req.body.studentGender;
    var studentDOB = new Date(req.body.studentDOB);
    var studentContactEmail = req.body.studentContactEmail;
    var studentSPEDRadio = req.body.sped;
    var studentSPED;
    if (studentSPEDRadio == "SPEDFalse"){
        studentSPED = false;
    }
    else studentSPED = true;
    var studentELRadio = req.body.el;
    var studentEL;
    if (studentELRadio == "ELFalse"){
        studentEL = false;
    }
    else studentEL = true;
    var studentIARadio = req.body.internetAccess;
    var studentIA;
    if (studentIARadio == "InternetAccessFalse"){
        studentIA = false;
    }
    else studentIA = true;
    const newStudent = new Student(studentID, "alt", studentFirstName, studentLastName, studentGender, studentDOB.getUTCMonth(), studentDOB.getUTCDate(), studentDOB.getUTCFullYear(), studentContactEmail, studentSPED, studentEL, studentIA);
    addStudentToDB(newStudent.toJSON());
    res.redirect('back');
})

app.post("/newClass", (req, res) => {
    const newCourse = req.body;
    addClassToDB(newCourse).catch(console.error);
    res.status(200).json({ ok: true })
})
app.post("/newUser", (req, res) => {
    const newUser = req.body;
    addUserToDB(newUser).catch(console.error);
    res.status(200).json({ ok: true })
})
// Delete Documents
app.post("/deleteEvent", (req, res) => {
    const event = req.body;
    deleteEventFromDB(event).catch(console.error);
    res.status(200).json({ ok: true })
})
app.post("/deleteAnnouncement", (req, res) => {
    const announcement = req.body;
    deleteAnnouncementFromDB(announcement).catch(console.error);
    res.status(200).json({ ok: true })
})
app.post("/deleteStudent", (req, res) => {
    const student = req.body;
    deleteStudentFromDB(student).catch(console.error);
    res.status(200).json({ ok: true })
})
app.post("/deleteClass", (req, res) => {
    const course = req.body;
    deleteClassFromDB(course).catch(console.error);
    res.status(200).json({ ok: true })
})
app.post("/deleteUser", (req, res) => {
    const user = req.body;
    deleteUserFromDB(user).catch(console.error);
    res.status(200).json({ ok: true })
})
// Update documents
/*
Prep: 
{"event":
  {"eventName": "Scholastic Book Fair",
  "date": {
    "$date": {
      "$numberLong": "1665903600000"
    }
  },
  "description": "Students can buy books from the book fair",
  "location": "Library"
},
 "newEvent":
 {"eventName": "Scholastic Boo Fair",
  "date": {
    "$date": {
      "$numberLong": "1665903600000"
    }
  },
  "description": "Students can buy books from the book fair",
  "location": "Library"
}
}
*/
app.post("/updateEvent", (req, res) => {
    const event = req.body.event;
    const newEvent = req.body.newEvent;
    updateEventFromDB(event, newEvent).catch(console.error);
    res.status(200).json({ ok: true })
})
app.post("/updateAnnouncement", (req, res) => {
    const announcement = req.body.announcement;
    const newAnnouncement = req.body.newAnnouncement;
    updateAnnouncementFromDB(announcement, newAnnouncement).catch(console.error);
    res.status(200).json({ ok: true })
})
app.post("/updateStudent", (req, res) => {
    const student = req.body.student;
    const newStudent = req.body.newStudent;
    updateStudentFromDB(student, newStudent).catch(console.error);
    res.status(200).json({ ok: true })
})
app.post("/updateClass", (req, res) => {
    const course = req.body.course;
    const newCourse = req.body.newCourse;
    updateClassFromDB(course, newCourse).catch(console.error);
    res.status(200).json({ ok: true })
})
app.post("/updateUser", (req, res) => {
    const user = req.body.user;
    const newUser = req.body.newUser;
    updateUserFromDB(user, newUser).catch(console.error);
    res.status(200).json({ ok: true })
})
// Get Documents
app.get("/event", async function(req, res) {
    const singleEvent = await getEventFromDB(req.body);
    res.status(200).json({event: singleEvent});
})
/*app.get("/events", async function(req, res) {
    const eventsArr = await getEventArrayFromDB();
    res.status(200).json({events: eventsArr});
})*/
app.get("/eventsPage", async function(req, res) {
    const eventsArr = await getEventArrayFromDB();
    for (let i = 0; i < eventsArr.length; i++){
        eventsArr[i].date = eventsArr[i].date.toLocaleDateString();
    }
    res.render('events', {events: eventsArr});
})
app.get("/announcement", async function(req, res) {
    const singleAnnouncement = await getAnnouncementFromDB(req.body);
    res.status(200).json({announcement: singleAnnouncement});
})
app.get("/announcements", async function(req, res) {
    const announcementsArr = await getAnnouncementArrayFromDB();
    res.status(200).json({announcements: announcementsArr});
})
app.get("/announcementsPage", async function(req, res) {
    const announcementsArr = await getAnnouncementArrayFromDB();
    for (let i = 0; i < announcementsArr.length; i++){
        announcementsArr[i].date = announcementsArr[i].date.toLocaleDateString();
    }
    res.render('announcements', {announcements: announcementsArr});
})
app.get("/student", async function(req, res) {
    var studentId = req.query.studentID;
    var student = new Student(Number(studentId));
    const singleStudent = await getStudentFromDB(student.toJSON());
    res.status(200).json({student: singleStudent});
})

app.get("/studentParentPage", async function(req, res) {
    var studentId = req.query.studentID;
    var student = new Student(Number(studentId));
    const singleStudent = await getStudentFromDB(student.toJSON());
    if (singleStudent == undefined){
        res.render('failedParentStudentView');
    }
    else{
        singleStudent.birthDate = singleStudent.birthDate.toLocaleDateString();
        for (let i = 0; i < singleStudent.studentAttendance.length; i++){
            singleStudent.studentAttendance[i].date = singleStudent.studentAttendance[i].date.toLocaleDateString();
        }
        for (let i = 0; i < singleStudent.studentAssignments.length; i++){
            singleStudent.studentAssignments[i].date = singleStudent.studentAssignments[i].date.toLocaleDateString();
        }
        for (let i = 0; i < singleStudent.studentBehavior.length; i++){
            singleStudent.studentBehavior[i].date = singleStudent.studentBehavior[i].date.toLocaleDateString();
        }
        res.render('parentStudentView', { studentPhoto: singleStudent.photo, 
                                        studentFirstName: singleStudent.firstName, 
                                        studentLastName: singleStudent.lastName, 
                                        gender: singleStudent.gender,
                                        birthDate: singleStudent.birthDate,
                                        contactEmail: singleStudent.contactEmail,
                                        sped: singleStudent.SPED,
                                        el: singleStudent.EL,
                                        internetAccess: singleStudent.internetAccess,
                                        letterGrade: singleStudent.letterGrade,
                                        gradePercentage: singleStudent.gradePercentage,
                                        studentAssignments: singleStudent.studentAssignments,
                                        totalDays: singleStudent.totalDays,
                                        totalPresentAttendance: singleStudent.totalPresentAttendance,
                                        totalAbsentAttendance: singleStudent.totalAbsentAttendance,
                                        attendancePresentPercentage: singleStudent.attendancePresentPercentage,
                                        studentAttendance: singleStudent.studentAttendance,
                                        totalBehaviorIncidents: singleStudent.totalBehaviorIncidents,
                                        studentBehavior: singleStudent.studentBehavior
                                        });
    }
})
app.get("/students", async function(req, res) {
    const studentsArr = await getStudentArrayFromDB();
    res.status(200).json({students: studentsArr});
})

app.get("/grades", async function(req, res) {
    const studentsArr = await getStudentArrayFromDB();
    var assignmentArr = studentsArr[0].studentAssignments;
    for (let i = 0; i < assignmentArr.length; i++){
        assignmentArr[i].date = assignmentArr[i].date.toLocaleDateString();
    }
    res.render('grades', {students: studentsArr, assignmentArr: assignmentArr});
})

app.get("/attendance", async function(req, res) {
    const studentsArr = await getStudentArrayFromDB();
    var attendanceArr = studentsArr[0].studentAttendance;
    for (let i = 0; i < attendanceArr.length; i++){
        attendanceArr[i].date = attendanceArr[i].date.toLocaleDateString();
    }
    res.render('attendance', {students: studentsArr, attendanceArr: attendanceArr});
})

app.get("/class", async function(req, res) {
    const singleClass = await getClassFromDB(req.body);
    res.status(200).json({class: singleClass});
})
app.get("/classes", async function(req, res) {
    const classesArr = await getClassArrayFromDB();
    res.status(200).json({classes: classesArr});
})

app.get("/dashboard", async function(req, res) {
    //const classesArr = await getClassArrayFromDB();
    const numSPED = await getNumberOfSPED();
    const numEL = await getNumberOfEL();
    const numIA = await getNumberOfInternetAccess();
    const studentsArr = await getStudentArrayFromDB();
    let totalAttendancePresentSum = 0;
    let attendancePresentPercentage = 0;
    for (let i = 0; i < studentsArr.length; i++){
        totalAttendancePresentSum += studentsArr[i].totalPresentAttendance;
    }
    let totalAttendanceAbsent = 0;
    for (let i = 0; i < studentsArr.length; i++){
        totalAttendanceAbsent += studentsArr[i].totalAbsentAttendance;
    }
    attendancePresentPercentage = Math.round(100*(totalAttendancePresentSum / (totalAttendancePresentSum + totalAttendanceAbsent)) * 100) / 100;
    let totalLetterGradeASum = 0;
        for (let i = 0; i < studentsArr.length; i++){
            if (studentsArr[i].letterGrade == "A+" || studentsArr[i].letterGrade == "A" || studentsArr[i].letterGrade == "A-"){
                totalLetterGradeASum++;
            }
        }
    var letterGradeAPercentage = Math.round(100*(totalLetterGradeASum / studentsArr.length) * 100) / 100;
    const eventsArr = await getEventArrayFromDB();
    const announcementsArr = await getAnnouncementArrayFromDB();
    for (let i = 0; i < eventsArr.length; i++){
        eventsArr[i].date = eventsArr[i].date.toLocaleDateString();
    }
    for (let i = 0; i < announcementsArr.length; i++){
        announcementsArr[i].date = announcementsArr[i].date.toLocaleDateString();
    }
    res.render('dashboard', {   sped: numSPED,
                                el: numEL,
                                internetAccess: numIA,
                                attendancePercentage: attendancePresentPercentage,
                                letterGradeAPercentage: letterGradeAPercentage,
                                events: eventsArr,
                                announcements: announcementsArr
                        });
})

app.get("/studentPage",  async function(req, res) {
    /*const classesArr = await getClassArrayFromDB();
    const singleClass = classesArr[0];
    for (let i = 0; i < singleClass.students.length; i++){
        singleClass.students[i].birthDate = singleClass.students[i].birthDate.toLocaleDateString();
    }
    res.render('student', { students: singleClass.students});*/
    const students = await getStudentArrayFromDB();
    for (let i = 0; i < students.length; i++){
        students[i].birthDate = students[i].birthDate.toLocaleDateString();
    }
    res.render('student', {students: students});
})

app.get("/user", async function(req, res) {
    const singleUser = await getUserFromDB(req.body);
    res.status(200).json({user: singleUser});
})
app.get("/users", async function(req, res) {
    const usersArr = await getUserArrayFromDB();
    res.status(200).json({users: usersArr});
})

app.use(express.static('public'));
app.get('/parent.html', function (req, res) {
   res.sendFile( __dirname + "/" + "parent.html" );
})

app.listen(3000, () => console.log("Server ready"))


