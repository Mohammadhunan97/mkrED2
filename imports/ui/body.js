import './home.html';
import './lessonForm.html';
import '../api/methods';
import {Lessons} from '../api/lessons';
const c = console.log;

Template.body.onCreated(function(){
	Meteor.subscribe('myLessons'); //string name of our publications
});



Template.body.helpers({
	loggedIn(){
		return Meteor.userId();
	},
	lessons(){
		let templessons = []
		let myLessons = Lessons.find({});
		myLessons.forEach(function(lesson){
			lesson.userId == Meteor.userId()? templessons.push(lesson):''
		})
		return templessons
	}
})

// return Lessons.find({})
Template.body.events({
	'submit .lesson-plan'(e){
		e.preventDefault();
		let title = e.target.title.value;
		let content = e.target.content.value;



		Meteor.call('insertLesson',Meteor.userId(),title,content);
	}

});