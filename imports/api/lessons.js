import {Mongo} from 'meteor/mongo';
import './methods';
const mineLessons = Meteor.user.lessons = []
console.log(mineLessons)
export const Lessons = new Mongo.Collection('lessons');


if (Meteor.isServer) {
	Meteor.publish('myLessons',function(){
		let lessons = Lessons.find({}); //client side gets findOne server gets all
		//return Items.find({_id: "q6BpXoX4s5KL4KwbB"});
		return lessons
	})
}