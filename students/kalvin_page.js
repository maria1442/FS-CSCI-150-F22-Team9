//import myJson from './announcements.json' assert {type: 'json'};

//console.log(myJson.at(0).title);

var data = [
  {
    title: "Book Fair",
    description:
      "Book Fair is on Friday. If your student wants to buy a book, please send them with money.",
    date: {
      $date: {
        $numberLong: "1665730800000",
      },
    },
  },
  {
    title: "Exam 1 Grades",
    description:
      "Exam 1 Grades will be out soon. Please contact me if there are any questions.",
    date: {
      $date: {
        $numberLong: "1666335600000",
      },
    },
  },
  {
    title: "Show and Tell",
    description:
      "Have your student bring a school appropriate item to show the class.",
    date: {
      $date: {
        $numberLong: "1665126000000",
      },
    },
  },
  {
    title: "Upcoming Exam 2",
    description:
      "Reminder: Exam 2 is this Friday. Please contact me if there are any questions.",
    date: {
      $date: {
        $numberLong: "1666940400000",
      },
    },
  },
  {
    title: "Book Fair",
    description:
      "Book Fair is on Friday. If your student wants to buy a book, please send them with money.",
    date: {
      $date: {
        $numberLong: "1665730800000",
      },
    },
  },
  {
    title: "Exam 1 Grades",
    description:
      "Exam 1 Grades will be out soon. Please contact me if there are any questions.",
    date: {
      $date: {
        $numberLong: "1666335600000",
      },
    },
  },
  {
    title: "Show and Tell",
    description:
      "Have your student bring a school appropriate item to show the class.",
    date: {
      $date: {
        $numberLong: "1665126000000",
      },
    },
  },
  {
    title: "Upcoming Exam 2",
    description:
      "Reminder: Exam 2 is this Friday. Please contact me if there are any questions.",
    date: {
      $date: {
        $numberLong: "1666940400000",
      },
    },
  },
  {
    title: "Book Fair",
    description:
      "Book Fair is on Friday. If your student wants to buy a book, please send them with money.",
    date: {
      $date: {
        $numberLong: "1665730800000",
      },
    },
  },
  {
    title: "Exam 1 Grades",
    description:
      "Exam 1 Grades will be out soon. Please contact me if there are any questions.",
    date: {
      $date: {
        $numberLong: "1666335600000",
      },
    },
  },
  {
    title: "Show and Tell",
    description:
      "Have your student bring a school appropriate item to show the class.",
    date: {
      $date: {
        $numberLong: "1665126000000",
      },
    },
  },
  {
    title: "Upcoming Exam 2",
    description:
      "Reminder: Exam 2 is this Friday. Please contact me if there are any questions.",
    date: {
      $date: {
        $numberLong: "1666940400000",
      },
    },
  },
];

var data2 = [
  {
    eventName: "Scholastic Book Fair",
    date: {
      $date: {
        $numberLong: "1665903600000",
      },
    },
    description: "Students can buy books from the book fair",
    location: "Library",
  },
  {
    eventName: "School Carnival",
    date: {
      $date: {
        $numberLong: "1664694000000",
      },
    },
    description: "Plenty of games and booths after school",
    location: "School Foyer",
  },
  {
    eventName: "Pastries with Parents",
    date: {
      $date: {
        $numberLong: "1665298800000",
      },
    },
    description: "Come enjoy pastries with your student",
    location: "Cafeteria",
  },
  {
    eventName: "End of Month Assembly",
    date: {
      $date: {
        $numberLong: "1667113200000",
      },
    },
    description: "Monthly assembly",
    location: "Cafeteria",
  },
  {
    eventName: "Drug Free Assembly",
    date: {
      $date: {
        $numberLong: "1666508400000",
      },
    },
    description: "Assembly about being drug free",
    location: "Cafeteria",
  },
];

//var myList = document.getElementsByClassName("main")[0].children[0];

function add(i, div) {
  var myTitle = data.at(i).title;
  var myDes = data.at(i).description;

  var lList = document.createElement("LI");
  var uList = document.createElement("UL");
  console.log(div.childElementCount);
  div.appendChild(lList);

  div.children[i].innerHTML =
    "<p id='title'>" + "<b>" + myTitle + "</b>" + "</p>";
  console.log(div.children[i].innerHTML);

  div.children[i].appendChild(uList);
  console.log(div.children[i].children[1]);
  div.children[i].children[1].innerHTML = "<p id='des'>" + myDes + "</p>";
}

function makeList() {
  var div = document.getElementById("announcement_content");

  for (i = div.childElementCount; i < data.length; i++) {
    add(i, div);
  }
}

var days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function createTable(div) {
  var myTable = document.createElement("TABLE");
  var myHead = document.createElement("THEAD");
  var myBody = document.createElement("TBODY");
  var divCount = div.childElementCount;
  div.appendChild(myTable);
  div.children[divCount].appendChild(myHead);
  div.children[divCount].appendChild(myBody);

  for (d = 0; d < 7; d++) {
    div.children[divCount].children[0].appendChild(
      document.createElement("TH")
    );
    div.children[divCount].children[0].children[d].innerHTML = days[d];

    div.children[divCount].children[1].appendChild(
      document.createElement("TD")
    );
  }

  //div.children[0].children[1].children[0].innerHTML = "test";
  //console.log(div.children[0].children[1].children[0]);
}

function fillEvent(div) {
  console.log(div.children[1].children[1]); // des of events

  for (i = 0; i < 7; i++) {
    for (j = 0; j < 4; j++) {
      div.children[j].children[1].children[i].innerHTML =
        data2.at(0).eventName + ": " + data2.at(0).description;
    }
  }
}

function makeEvent() {
  var div = document.getElementById("event_content");
  for (i = 0; i < 4; i++) {
    createTable(div);
  }

  fillEvent(div);
}
