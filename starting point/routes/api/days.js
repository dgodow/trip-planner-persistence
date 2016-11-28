var Sequelize = require('sequelize');
var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day');

var db = require('../../models')
// var DayRestaurant = db.model('DayRestaurant') //db.models.DayRestaurant

//get all the days
router.get('/', function(req, res, next) {
	Day.findAll()
		.then(function(days) {
			res.json(days)
		})
		.catch(next);
});

//get hotel for each day
router.get('/:dayId', function(req, res, next) {
	Day.findOne({
		where: {
			number: req.params.dayId
		}
	})
	.then(function(day) {
		res.json(day);
	})
	.catch(next);
})

//get restaurant for each day
router.get('/dayrestaurant/:dayId', function(req, res, next) {
	console.log(day);
	// DayRestaurant.findAll({
	// 	where: {
	// 		dayId: req.params.dayId
	// 	}
	// })	
	// .then(function(restaurants) {
	// 	res.json(restaurants);
	// })
	// .catch(next);
})


//get activity for each day
router.get('/dayactivity/:dayId', function(req, res, next) {
	DayActivity.findAll({
		where: {
			dayId: req.params.dayId
		}
	})	
	.then(function(activities) {
		res.json(activites);
	})
	.catch(next);
})

//create new day
router.post('/', function(req, res, next) {
	Day.create()
	.then(function() {
		res.redirect('/');
	})
	.catch(next);
})

//post new restaurants

router.post('/:id/restaurants', function(req, res, next) {
	DayRestaurant.create({
		dayId: {
			type: Sequelize.INTEGER,
			defaultValue: null
		}
	})
	.then()
})


//post new activities


//delete a day
router.delete('/:dayId', function(req, res, next) {
	Day.destroy({
		where: {
			id: req.params.dayId
		}
	})
	.then(function() {
		res.redirect('/')
	})
	.catch(next);
})

module.exports = router;





