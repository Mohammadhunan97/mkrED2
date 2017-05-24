import './home.html';
import './lessonForm.html';
import './yourlessons.html';
import '../api/methods';
import {Lessons} from '../api/lessons';
const c = console.log;

window.onload = function(){
	responsiveVoice.cancel();
	console.log('loaded...');
}
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
		return templessons;
	}
})

Template.yourlessons.helpers({
		lessons(){
		let templessons = []
		let myLessons = Lessons.find({});
		myLessons.forEach(function(lesson){
			lesson.userId == Meteor.userId()? templessons.push(lesson):''
		})
		return templessons;
	}
})


// return Lessons.find({})
Template.body.events({
	'submit .lesson-plan'(e){
		e.preventDefault();
		let title = e.target.title.value;
		let content = e.target.content.value;
		Meteor.call('insertLesson',Meteor.userId(),title,content);
		document.getElementsByClassName('create')[0].style.display = 'inline-block';
		document.getElementsByClassName('lf')[0].style.display = 'none';
		document.getElementsByClassName('mylessons')[0].style.display = 'inline-block';
		console.log('bat');
	},
	'click .create'(){
		document.getElementsByClassName('lf')[0].style.display = 'inline-block';
		document.getElementsByClassName('create')[0].style.display = 'none';
		document.getElementsByClassName('mylessons')[0].style.display = 'none';
		document.getElementsByClassName('title')[0].value = '';
		document.getElementsByClassName('content2')[0].value ='';
		document.getElementsByTagName('body')[0].className = 'mediabody';
		responsiveVoice.cancel();
	},
	'click .viewMyLessons'(){
		document.getElementsByClassName('mylessons')[0].style.display = 'inline-block';
		document.getElementsByClassName('create')[0].style.display = 'inline-block';
		document.getElementsByClassName('lf')[0].style.display = 'none';
		document.getElementsByTagName('body')[0].className = 'mediabody';
		responsiveVoice.cancel();
	},
	'click .delete'(e){
		Meteor.call('deleteLesson',this._id);
		responsiveVoice.cancel();
	},
	'click .update'(e){
		document.getElementsByClassName('mylessons')[0].style.display = 'none';
		document.getElementsByClassName('lf')[0].style.display = 'inline-block';
		document.getElementsByClassName('title')[0].value = this.title;
		document.getElementsByClassName('content2')[0].value = this.content;
		Meteor.call('deleteLesson',this._id);
		responsiveVoice.cancel();
	},
	'click	.play'(){
		title = this.title;
		content = this.content;;
		responsiveVoice.speak(title, "UK English Male");
		responsiveVoice.speak('hm', "UK English Male");
		responsiveVoice.speak(content, "UK English Male")
	},
	'click .pause'(){
		responsiveVoice.pause();
		document.getElementsByClassName('continue')[0].style.display = 'inline-block';
		document.getElementsByClassName('pause')[0].style.display = 'none';
	},
	'click .continue'(){
		responsiveVoice.resume();
		document.getElementsByClassName('pause')[0].style.display = 'inline-block';
		document.getElementsByClassName('continue')[0].style.display = 'none';
	}
});







