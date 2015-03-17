var bio = {
	"name" : "Jeffrey Barnes",
	"role" : "Web Developer", 
	"welcomeMessage" : "Greetings, and welcome to my interactive resume. Don't mind the dust, I am still building in here.",
	"contacts" : {
		"email" : "jeffrey_w_barnes@hotmail.com", 
		"mobile" : "406-560-1633", 
		"github" : "Belgerion", 
		"location" : "Anaconda, MT"
	},
	"skills" : [
		"HTML", 
		"CSS", 
		"Javascript", 
		"Video Editing",
		"Technical Writing"
	],
	"bioPic" : "profile_pic.jpeg"
};

var education = {
	"schools" : [ 
	{
		"name" : "Montana Tech",
		"location" : "Butte, MT, US",
		"degree" : "Bachelor of Science",
		"major" : ["Professional and Technical Communication"],
		"dates" : "August 2002 - July 2007",
		"url" : "http://www.mtech.edu"
	},
	{
		"name" : "Montana Tech",
		"location" : "Butte, MT, US",
		"degree" : "Masters of Science",
		"major" : "Technical Communication",
		"dates" : "Incomplete August 2009 - July 2012",
		"url" : "http://www.mtech.edu"
	},
	{
		"name" : "Udacity",
		"location" : "Anaconda, MT, US",
		"degree" : "Nano-Degree",
		"major" : ["Front-End Web Developer"],
		"dates" : "In Progress",
		"url" : "http://www.udacity.com"
	}],
	"onlineCourse": [
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"dates" : "Oct - Nov 2014",
			"urls" : "http://www.udacity.com"
		},

		{
			"title" : "JaveScript Basics",
			"school" : "Udacity",
			"dates" : "Nov - Dec 2014",
			"urls" : "http://www.udacity.com"
		}

	]
};

var work = {
	"jobs" : [
	{
		"title" : "Day Care Provider",
		"employer" : "Self-Employeed", 
		"dates" : "November 2013 - Current",
		"location" : "Anaconda, MT",
		"description" : "Ran a daycare out of my home for children aged 0-12 years of age."
	},
	{
		"title" : "Treatment Service Technician",
		"employer" : "BSW Inc.",
		"dates" : "August 2012 - November 2013, August 2008 - August 2009",
		"location" : "Anaconda, MT",
		"description" : "Work with individuals with developemental disabilities, providing assistance with daily activities."
	},
	{
		"title" : "Team Leader",
		"employer" : "Montana Tech AmeriCorps",
		"dates" : "August 2007 - July 2008",
		"location" : "Butte, MT",
		"description" : "Recruit and train volunteers to work in community improvement projects out of the Montana Tech campus."
	}
	]
};

var projects = {
	"projects" : [
	{
		"title" : "Interactive Resume",
		"dates" : "November 2014",
		"description" : "My Interactive Resume for the Javascript class and Nano-Degree",
		"images" : ["images/reef.jpg"]
	},
	{
		"title" : "Website Mockup",
		"dates" : "October 2014",
		"description" : "Mockup of a website for the Nano-Degree",
		"images" : ["images/trident.png"]
	}
	]
};

function displayBio (){
	var formattedName = HTMLheaderName.replace ("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);
	var picture = HTMLbioPic.replace ("%data%", bio.bioPic);
	$("#header").prepend(picture);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
};

displayBio();

if (bio.skills.length > 0 ) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills.join(", "));
	var formattedSkillList = HTMLskillsList.replace("%data%", bio.skills.join(": "));
	$("#skills").append(formattedSkill);
};

function displayWork() {
	for (job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

displayWork();


function displayProjects() {
	for (project in projects.projects) {

		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for(image  in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

displayProjects();

function displayEducation() {
	for (school in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").prepend(formattedDegree);
		$(".education-entry:last").prepend(formattedSchoolMajor);
		$(".education-entry:last").prepend(formattedSchoolDates);
		$(".education-entry:last").prepend(formattedSchoolLocation);
		$(".education-entry:last").prepend(formattedSchoolName);
	}
};


displayEducation();

function displayOnline() { 

  $(".education-entry:last").append(HTMLonlineClasses);
  
  for (course in education.onlineCourse) {

	  var formattedonlineTitle =  HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
	  var formattedonlineDates =  HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates);
	  var formattedonlineSchool =  HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
	  var formattedonlineUrl =  HTMLonlineURL.replace("%data%", education.onlineCourse[course].urls);

	  $(".education-entry:last").append(formattedonlineTitle  + formattedonlineSchool);
	  $(".education-entry:last").append(formattedonlineDates);
	  $(".education-entry:last").append(formattedonlineUrl);


  }	
			 
}
displayOnline();

$(document).click(function(loc) { 
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function locationizer(work_obj) {
    var locations = [];

    for(job in work_obj.jobs) {
    	var newLocation = work_obj.jobs[job].location;
    	locationArray.push(newLocation);
    }
    return locations;
};

function inName(name) {
	name = bio.name.trim().split(" ");
	console.log(bio.name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
};

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


$(document).ready(function(){
$('.chart').horizBarChart({
  selector: '.bar',
  speed: 3000
});
});