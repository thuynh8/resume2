var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.skills = [
		{name:'Python', mastery:88},
		{name:'HTML5, CSS3, Bootstrap', mastery:85},
		{name:'JavaScript, jQuery, AngularJS, KnockoutJS', mastery:75},
		{name:'AJAX, PostgreSQL, SQLAlchemy', mastery:72},
		{name:'Linux, Apache, SSH', mastery:70}
	];
	$scope.projects = [
		{
			name:'Linux Server Configuration',
			date:'November 2016',
			description:'Installed and configured all required software to turn a baseline Ubuntu Amazon Web Services server into a fully functional web application server, including Apache Web Server and PostgreSQL database server.',
			link:'https://github.com/thuynh8/udacity-linux-server-configuration-project'
		},
		{
			name:'Neighborhood Map',
			date:'November 2016',
			description:'Developed a full-page Google map that loads with points of interest in Orange County, CA.',
			link:'https://github.com/thuynh8/udacity-neighborhoodmap-project'
		},
		{
			name:'Item Catalog',
			date:'October 2016',
			description:'Developed a web application that provides a list of items within a variety of categories and integrate third party user registration and authentication.',
			link:'https://github.com/thuynh8/udacity-catalog-project'
		},
		{
			name:'Swiss-System Tournament',
			date:'August 2016',
			description:'Built a PostgreSQL relational database scheme to store the results of a game tournament. Also provided a number of queries to efficiently report the results of the tournament and determine the winner.',
			link:'https://github.com/thuynh8/udacity-swiss-tournament-project'
		}
	];
	$scope.work = [
		{
			name:'Develing International - Logistics Coordinator',
			date:'July 2016 - Present',
			description:'Prepare shipping documentation and develop relations with shipping agents. Interact with suppliers/customers with respect to delivery schedules maintaining client database. Participate in administration of internal sales order records and procedures.',
			link:'http://www.develinginternational.com/'
		}
	];
	$scope.education = [
		{
			name:'Udacity',
			date:'July 2016 - November 2016',
			degree:'Full Stack Web Developer Nanodegree',
			link:'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004'
		},
		{
			name:'California State University of Long Beach, Long Beach',
			date:'June 2013 - June 2016',
			degree:'Information Systems, B.S., magna cum laude',
			link: 'https://www.csulb.edu/'
		}
	];
});