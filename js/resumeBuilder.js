// Bio section

var bio = {
  "name": "Lucie Bassetto",
  "role": "Front-end developer student",
  "contacts": {
    "mobile": "+47 456 97 370",
    "email": "lucie.bassetto@gmail.com",
    "github" : "lbassetto",
    "location" : "Oslo, Norway"
  },
  "welcomeMessage": "Welcome to my online-resume page",
  "skills": ["HTML", "CSS", "Git", "GitHub", "JavaScript"],
  "biopic": "images/me.jpg",

  display: function (){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    for (var item in bio.contacts) {
      var formattedContact = HTMLcontactGeneric.replace("%contact%", item);
      var formattedData = formattedContact.replace("%data%", bio.contacts[item]);
      $("#topContacts").append(formattedData);
      $("#footerContacts").append(formattedData);
    };
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for (var i=0; i<bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
      };
    };
  }
};

bio.display();


// Education section

var education = {
  "schools": [
    {
      "name": "INSA",
      "location": "Rouen, France",
      "degree": "Engineering master",
      "majors": ["Industrial Risk Management and Environmental Impacts"],
      "dates": "Sept 2006-July 2011",
      "url": "http://www.insa-rouen.fr/accueil?set_language=fr&cl=fr"
    },
    {
      "name": "NTNU",
      "location": "Trondheim, Norway",
      "degree": "Engineering master, Exchange Student",
      "majors": ["Industrial Risk Management and Environmental Impacts"],
      "dates": "August 2010-December 2010",
      "url": "https://www.ntnu.no/"
    }
  ],
  "onlineCourses" : [{
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "date": "February 2016-now",
      "url": "https://www.udacity.com/"
    }],

  display: function () {
    for (var school in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedNameDegree = formattedName + formattedDegree;
      $(".education-entry:last").append(formattedNameDegree);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedLocation);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);
      if (education.schools[school].majors.length > 0) {
        for (var major in education.schools[school].majors) {
          var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
          $(".education-entry:last").append(formattedMajors);
        };
      };
    };
    $("#education").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedTitleSchool = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedTitleSchool);
    var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
    $(".education-entry:last").append(formattedDate);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedURL);
    }
  }
};

education.display();


// Work section

var work = {
  "jobs": [
    {
      "employer": "Lloyd's Register Consulting",
      "title": "Senior Consultant",
      "location": "Sandvika, Norway",
      "dates": "May 2013-April 2016",
      "description": "Consultant within safety and risk analysis"
    },
    {
      "employer": "Bertin Technologies",
      "title": "Consultant",
      "location": "Montigny-le-Bretonneux, France",
      "dates": "August 2011-March 2013",
      "description": "Consultant within risk analysis and environmental impacts"
    },
    {
      "employer": "Bertin Technologies",
      "title": "Consultant - Trainee",
      "location": "Montigny-le-Bretonneux, France",
      "dates": "February 2011-July 2011",
      "description": "Internship as consultant within risk analysis and environmental impacts"
    }
  ],

  display: function () {
    for (var job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    };
  }
};

work.display();


// Projects section

var projects = {
  "projects": [
    {
      "title": "Project 1",
      "dates": "20xx-20xx",
      "description": "Project 1 description",
      "images": ["http://placehold.it/150x100"]
    },
    {
      "title": "Project 2",
      "dates": "20xx-20xx",
      "description": "Project 2 description",
      "images": ["http://placehold.it/150x100", "http://placehold.it/150x100"]
    }
  ],

  display: function () {
    for (var project in projects.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);
      if (projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images) {
          var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImages);
        };
      };
    };
  }
};

projects.display();


// Interactive map
$("#mapDiv").append(googleMap);


// internationalizeButton
function inName() {
  var name = bio.name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
