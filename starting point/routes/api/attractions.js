const express = require('express');
const api = express.Router();

const Hotel = require('../../models/hotel');
const Restaurant = require('../../models/restaurant');
const Activity = require('../../models/activity');
const Place = require('../../models/place');

api.get('/', function (req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .then(function (data) {
    res.json(data);
  })
  .catch(next);
})

api.get('/hotels', function (req, res, next) {
  Hotel.findAll()
  .then(function (hotels) {
    res.json(hotels);
  })
  .catch(next);
});

api.get('/restaurants', function (req, res, next) {
  Restaurant.findAll()
  .then(function (restaurants) {
    res.json(restaurants);
  })
  .catch(next);
});

api.get('/activities', function (req, res, next) {
  Activity.findAll()
  .then(function (activities) {
    res.json(activities);
  })
  .catch(next);
});

module.exports = api;
