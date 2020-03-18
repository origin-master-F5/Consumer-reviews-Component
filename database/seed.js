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
    purchasedDate: new Date('March 12, 2020 12:15:30'),
    comments: [{
        user: 'Blake',
        body: 'dude, you are much cooler than the last guy i commented on'
    }]
}

let average = {
    title: 'Mostly meh',
    rating: 3,
    user: 'Joe',
    body: 'I thought the game was fine.  Not great but not terrible either. Not as awesome as the rest of the games in my collection',
    pics: [{url: 'https://i.ytimg.com/vi/rNMDQuRHUkE/maxresdefault.jpg'}, {url: 'https://i.pinimg.com/564x/bb/19/72/bb1972cbb87dbd0171be319d983ca438.jpg'}],
    recommended: false,
    verified: true,
    purchasedDate: new Date('June 11, 2019 05:25:43'),
    comments: []
}

let eager = {
    title: 'Not purchased but i love it!',
    rating: 5,
    user: 'Billy',
    body: 'Instant classic and one of the best games of all time.  I have not bought it yet but i cannot wait!!!',
    pics: [{url: 'https://i.ytimg.com/vi/rNMDQuRHUkE/maxresdefault.jpg'}, {url: 'https://i.pinimg.com/564x/bb/19/72/bb1972cbb87dbd0171be319d983ca438.jpg'}],
    recommended: true,
    verified: false,
    comments: [{
        user: 'Tommy',
        body: 'Can you talk about a game you do not own??'
    }]
}

const samples = [unhappy, happy, average, eager];

const insertSamples = function() {
    Review.create(samples)
      .then(() => db.disconnect());
  };
  
  insertSamples();