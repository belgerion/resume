var bio = {
	"name" : "Jeffrey Barnes",
	"role" : "Web Developer",
	"welcomeMessage" : "Welcome to my resume. This covers the work from my nano-degree from Udacity, my on-going education with FreeCodeCamp, and my work as a freelance developer.",
	"contacts" : {
		"email" : "jeffrey_w_barnes@hotmail.com",
		"mobile" : "406-560-1633",
		"github" : "https://github.com/belgerion",
		"linkedin" : "https://www.linkedin.com/pub/jeffrey-barnes/3b/90a/bba",
		"location" : "Anaconda, MT"
	},
	"skills" : [
		"HTML",
		"CSS",
		"Javascript",
		"Video Editing",
		"Technical Writing"
	],
	"bioPic" : "images/profile_pic.jpeg"
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
		"dates" : "Incomplete August 2009 - June 2012",
		"url" : "http://www.mtech.edu"
	},
	{
		"name" : "Udacity",
		"location" : "Online",
		"degree" : "Nano-Degree",
		"major" : ["Front-End Web Developer"],
		"dates" : "October 2014 - May 2015",
		"url" : "http://www.udacity.com"
	},
	{
		"name" : "FreeCodeCamp",
		"location" : "Online",
		"degree" : "Certification",
		"major" : ["Full Stack Web Developer"],
		"dates" : "October 2015 - Present",
		"url" : "http://www.FreeCodeCamp.com"
	}],
	"onlineCourse": [
		{
			"title" : "JavaScript, ",
			"school" : "CodeAcademy",
			"dates" : "February 2015",
			"url" : "http://www.codecademy.com/en/tracks/javascript"
		},
		{
			"title" : "jQuery",
			"school" : "CodeAcademy",
			"dates" : "February 2015",
			"url" : "http://www.codecademy.com/en/tracks/javascript"
		},
		{
			"title" : "PHP",
			"school" : "CodeAcademy",
			"dates" : "February 2016",
			"url" : "http://www.codecademy.com/en/tracks/javascript"
		},
	]
};

var work = {
	"jobs" : [
	{
		"title" : "Freelance Web Developer",
		"employer" : "Self-Employeed",
		"url" : "http://belgerion.github.io/portfolio/",
		"dates" : "May 2015 - Current",
		"location" : "Anaconda, MT",
		"description" : "Design and Develop websites using various tools and skills"
	},
	{
		"title" : "Day Care Provider",
		"employer" : "Self-Employeed",
		"url" : "http://belgerion.github.io/portfolio/",
		"dates" : "November 2013 - Current",
		"location" : "Anaconda, MT",
		"description" : "Ran a daycare out of my home for children aged 0-12 years of age."
	},
	{
		"title" : "Treatment Service Technician",
		"employer" : "BSW Inc.",
		"url" : "http://www.bswinc.org/",
		"dates" : "August 2012 - November 2013, August 2008 - August 2009",
		"location" : "Anaconda, MT",
		"description" : "Work with individuals with developemental disabilities, providing assistance with daily activities."
	},
	{
		"title" : "Team Leader",
		"employer" : "Montana Tech AmeriCorps",
		"url" : "http://institute.mtech.edu/americorps/",
		"dates" : "August 2007 - July 2008",
		"location" : "Butte, MT",
		"description" : "Recruit and train volunteers to work in community improvement projects out of the Montana Tech campus."
	}
	]
};

var projects = {
	"projects" : [
	{
		"title" : "Spokes Unlimited Website Redesign",
		"url" : "http://www.spokesunlimited.org",
		"dates" : "February 2016",
		"description" : "A redesigned website for the non-profit Spokes Unlimited, using HTML/CSS and JavaScript, converted to a Joomla template/website.",
		"images" : ["images/spokes_ss.png"]
	},
	{
		"title" : "Interactive Tourist Map",
		"url" : "http://belgerion.github.io/map/",
		"dates" : "March 2015",
		"description" : "Interactive map using Google Maps API and Flickr API",
		"images" : ["images/tourist_map.jpg"]
	},
	{
		"title" : "Frogger Clone",
		"url" : "http://belgerion.github.io/frogger/",
		"dates" : "February 2015",
		"description" : "Frogger Clone made in JavaScript",
		"images" : ["images/java_game.jpg"]
	},
	{
		"title" : "My Portfolio",
		"url" : "http://belgerion.github.io/portfolio/",
		"dates" : "November 2014",
		"description" : "My current portfolio",
		"images" : ["images/code_wallpaper.jpg"]
	},
	{
		"title" : "Additional projects",
		"url" : "mailto:jeffrey_w_barnes@hotmail.com",
		"dates" : "jeffrey_w_barnes@hotmail.com",
		"description" : "Additional video projects are available upon request, but are not hosted, due to copyright",
		"images" : ["images/code_wallpaper.jpg"]
	}	]
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
	var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
	$("#topContacts").append(formattedLinkedIn);
	$("#footerContacts").append(formattedLinkedIn);
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
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer); formattedEmployer = formattedEmployer.replace("%url%", work.jobs[job].url);
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

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title); formattedTitle = formattedTitle.replace("%url%", projects.projects[project].url);
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

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name); formattedSchoolName = formattedSchoolName.replace("%url%", education.schools[school].url);
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

	  var formattedonlineTitle =  HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title); formattedonlineTitle =  formattedonlineTitle.replace("%url%", education.onlineCourse[course].url);
	  var formattedonlineDates =  HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates);
	  var formattedonlineSchool =  HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
	  var formattedonlineUrl =  HTMLonlineURL.replace("%data%", education.onlineCourse[course].url); formattedonlineUrl =  formattedonlineUrl.replace("%url%", education.onlineCourse[course].url);

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



