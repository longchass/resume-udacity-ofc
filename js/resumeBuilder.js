var bio = {
    "name": "Longchass",
    "role": "Udastudent",
    "contact": {

        "mobile": "664-876-2919",
        "email": "Longchass@yahoo.com",
        "github": "Longchass",
        "twitter": "Longchass",
        "location": "Australia",
    },
    "welcomeMessage": "hellothere",
    "biopic": "images/monkuma.jpg",

    "skills": [
        "awesomeness", "hardworking", "sleep", "fabulous", "flamboyant"
    ],
    "displayskills": function() {
        $("#header").append(HTMLskillsStart);
        for (i = 0; i < bio.skills.length; i++) {
            $("#header").append(formattedSkills);
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        }
    },
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", "Longchass");
        var formattedRole = HTMLheaderRole.replace("%data%", "Udastudent");
        var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
        var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
        var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts:last", "#footerContacts:last").append(formattedMobile, formattedLocation, formattedTwitter, formattedEmail, formattedGithub);
        $("#header").append(formattedImage, formattedWelcome);
    }
};
var education = {
    "schools": [{
        "name": "primary schools",
        "location": "hochiminh",
        "degree": "primary student",
        "majors": "basic knowledge",
        "dates": "2000-2005",
        "url": "random.coT"
    }],
    "onlineCourses": [{
        "title": "nanodegree ",
        "majors": ["front end"],
        "school": "Udacity",
        "dates": "in progress",
        "url": "https://www.udacity.com/"
    }],
    "display": function() {
        for (var i = 0; i < education.schools.length; i++) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);


            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolStart, formattedSchoolName, formattedLocation, formattedDegree, formattedMajor, formattedSchoolDate, HTMLonlineClasses, formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineUrl);

        }
    }
};
var work = {
    "jobs": [{
            "employer": "self",
            "title": "information processor",
            "location": "england is my city",
            "dates": "since i was born",
            "description": "it was ok",
        },
        {
            "employer": "jake paul",
            "title": "hello",
            "location": "onLine",
            "dates": "2017",
            "description": "hello",
        }
    ],
    "display": function() {
        for (var i = 0; i < work.jobs.length; i++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedCity = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedEmployerTitle,formattedDates, formattedCity, formattedDescription);
        }
    }
};
var projects = {
    "project": [{
        "title": "the Red Wedding",
        "dates": "back in the day when George R.R Martin was born",
        "description": "there was a wedding and it was red. With blood",
        "image": "images/randomimage.png"

    }, {
        "title": "hello",
        "dates": "when the universe was born",
        "description": "the job was boring",
        "image": "images/randomimage.png"
    }],
    "display": function() {
        for (var i = 0; i < projects.project.length; i++) {
            var formattedTile = HTMLprojectTitle.replace("%data%", projects.project[i].title);
            var formattedDate = HTMLprojectDates.replace("%data%", projects.project[i].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
            var formattedProjectImage = HTMLprojectImage.replace("%data%",
                projects.project[i].image);
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedTile, formattedDate, formattedDescription, formattedProjectImage);
        }
    }
};
bio.display();
bio.displayskills();
education.display();
projects.display();
work.display();
clickLocations = [];
$(document).click(function(loc) {
    // your code goes here!
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

function logClicks(x, y) {
    clickLocations.push({
        "x": x,
        "y": y
    });
    console.log("x location: " + x + "; y location: " + y);
}

function initMap() {
    var hochimin = {
        lat: 11.767,
        lng: 107.64
    };
    var uluru = {
        lat: -25.363,
        lng: 131.044
    };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
    var marker2 = new google.maps.Marker({
        position: hochimin,
        map: map
    });
}
initMap();