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
		document.getElementsByClassName('mylessons')[0].style.display = 'block';
		console.log('bat')


	responsiveVoice.speak(title, "UK English Male");
	responsiveVoice.speak('hm', "UK English Male");
	responsiveVoice.speak(content, "UK English Male")




	},
	'click .create'(){
		document.getElementsByClassName('lf')[0].style.display = 'block';
		document.getElementsByClassName('create')[0].style.display = 'none';
		document.getElementsByClassName('mylessons')[0].style.display = 'none';
		document.getElementsByClassName('title')[0].value = '';
		document.getElementsByClassName('content2')[0].value ='';
	},
	'click .viewMyLessons'(){
		document.getElementsByClassName('mylessons')[0].style.display = 'block';
		document.getElementsByClassName('create')[0].style.display = 'block';
		document.getElementsByClassName('lf')[0].style.display = 'none';
	},
	'click .delete'(e){
		Meteor.call('deleteLesson',this._id);
	},
	'click .update'(e){
		console.log(this)
		alert('edit your lesson');
		document.getElementsByClassName('mylessons')[0].style.display = 'none';
		document.getElementsByClassName('lf')[0].style.display = 'block';
		document.getElementsByClassName('title')[0].value = this.title;
		document.getElementsByClassName('content2')[0].value = this.content;
		Meteor.call('deleteLesson',this._id);
	}

});


Template.canvas.onRendered(function() {

})


