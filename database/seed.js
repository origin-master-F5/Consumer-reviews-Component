// example data for reviews
const db = require('./index.js');
const Review = require('./schemas.js');

let unhappy = {
    title: 'Underwhelming tbh',
    rating: 2,
    user: 'BigTymeG@m3r411',
    body: 'i thought this game was going to be amazing but it really was not.  Nice job making a game we have already seen before.  Sheesh, if i wanted to play an old dumb game, i would have played tag with the homies.  Do not buy if you enjoy originality!!!',
    pics: [],
    recommended: false,
    verified: false,
    purchasedDate: new Date('August 19, 2019 23:15:30'),
    comments: [{
        user: 'Blake',
        body: 'dude, like, get over it man'
    }, 
    {
        user: 'Karen',
        body: 'I agree.  We should report them'
    }]
}

let happy = {
    title: 'Pretty great',
    rating: 5,
    user: 'justAguy',
    body: 'Easily one of the best games i have played in a while.  You should all buy it!!!! pls!',
    pics: [{url: 'https://www.pokemon-sunmoon.com/media/uploads/og_images/facebook-share-image-usa.jpg'}],
    recommended: true,
    verified: true,
    purchasedDate: new Date('May 12, 2020 12:15:30'),
    comments: [{
        user: 'Blake',
        body: 'dude, you are much cooler than the last guy i commented on'
    }]
}

const samples = [unhappy, happy];

const insertSamples = function() {
    Review.create(samples)
      .then(() => db.disconnect());
  };
  
  insertSamples();