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
	canvas.innerHTML = `<p class='flip-scale-up-hor'>${content}</p>`;

	$('flip-scale-up-hor').attr('class','');
	setTimeout(function(){
		$('flip-scale-up-hor').attr('class','a');
	},3000);
	$.get('http://api.giphy.com/v1/gifs/search?q='+title+'&api_key=dc6zaTOxFJmzC',function(result){
		c(result)
		c(result.data[0].url)
	})
		document.getElementsByClassName('mylessons')[0].style.display = 'block';
		document.getElementsByClassName('lf')[0].style.display = 'none';



	},
	'click .create'(){
		document.getElementsByClassName('lf')[0].style.display = 'block';
		document.getElementsByClassName('create')[0].style.display = 'none';
		document.getElementsByClassName('mylessons')[0].style.display = 'none';
	},
	'click .viewMyLessons'(){
		document.getElementsByClassName('mylessons')[0].style.display = 'block';
		document.getElementsByClassName('lf')[0].style.display = 'none';
	}

});


Template.canvas.onRendered(function() {

})


