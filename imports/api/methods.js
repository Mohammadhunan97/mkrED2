import {Lessons} from '../api/lessons';
import {check} from 'meteor/check';

Meteor.methods({
	insertLesson: function(userId,title,content){
		check(title, String);
		check(content, String);
		let date = new Date();
		let current = Lessons.insert({
			title,
			content,
			userId,
			date
		})		
	},
	deleteLesson: function(lessonId){
		Lessons.remove(lessonId)
	}
});