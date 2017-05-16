import {Lessons} from '../api/lessons';
import {check} from 'meteor/check';
Meteor.methods({
	insertLesson: function(title,content){
		check(title, String);
		check(content, String);
		console.log('pre submitted!!!')

		let current = Lessons.insert({
			title,
			content
		})
		console.log(current)		
	}
});