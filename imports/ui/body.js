import './home.html';
import './lessonForm.html';
import './canvas.html';
import './canvas'
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
		document.getElementsByClassName('create')[0].style.display = 'block';
		document.getElementsByClassName('lf')[0].style.display = 'none';

	responsiveVoice.speak(title, "UK English Male");
	responsiveVoice.speak('hm', "UK English Male");
	responsiveVoice.speak(content, "UK English Male")

	let canvas = document.getElementById('canvas');
	let ctx = canvas.getContext('2d');


	for(let i=0; i<=content.length;i++){
		ctx.clearRect(0,0,canvas.width,canvas.height)
		ctx.fillText(content,50,50)
	}

	
	ctx.fillText(content,50,50)
	console.log(canvas)








	},
	'click .create'(){
		document.getElementsByClassName('lf')[0].style.display = 'block';
		document.getElementsByClassName('create')[0].style.display = 'none';
	}	

});


Template.canvas.onRendered(function() {

})


