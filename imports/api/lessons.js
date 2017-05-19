import {Mongo} from 'meteor/mongo';
import './methods';

export const Lessons = new Mongo.Collection('lessons');


if (Meteor.isServer) {
	Meteor.publish('myLessons',function(){
		let lessons = Lessons.find({});
		return lessons
	})
}