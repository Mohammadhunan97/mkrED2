import {Lessons} from '../api/lessons';
import {check} from 'meteor/check';

Meteor.methods({
	insertLesson: function(userId,title,content){
		check(title, String);
		check(content, String);

		let current = Lessons.insert({
			title,
			content,
			userId
		})
		

		
	}
});