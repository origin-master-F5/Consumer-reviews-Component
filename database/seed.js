// example data for reviews
const db = require('./index.js');
const Review = require('./schemas.js');

let samples = [{
        "sku": 1,
        "title": "Underwhelming tbh",
        "rating": 2,
        "user": "Portia",
        "body": "i thought this game was going to be amazing but it really was not.  Nice job making a game we have already seen before.  Sheesh, if i wanted to play an old dumb game, i would have played tag with the homies.  Do not buy if you enjoy originality!!!",
        "pics": [{
            "url": "https://pisces.bbystatic.com/image2/BestBuy_US/ugc/photos/thumbnail/fb57e3b34cab99f9c2dcfb56d545c8a5.jpg"
        }],
        "recommended": false,
        "helpfulCount": 58,
        "unhelpfulCount": 68,
        "verified": false,
        "purchasedDate": "2019-08-20T06:15:30.000Z",
        "comments": [{
                "user": "Blake",
                "body": "dude, like, get over it man"
            },
            {
                "user": "Karen",
                "body": "I agree.  We should report them"
            }
        ]
    },
    {
        "sku": 1,
        "title": "Pretty great",
        "rating": 5,
        "user": "Libby",
        "body": "Easily one of the best games i have played in a while.  You should all buy it!!!! pls!",
        "pics": [{
                "url": "https://pisces.bbystatic.com/image2/BestBuy_US/ugc/photos/thumbnail/a5e778d2eb3032ed2547a0972a235803.jpg"
            },
            {
                "url": "https://pisces.bbystatic.com/image2/BestBuy_US/ugc/photos/thumbnail/72a72bd4b1abfd0e25f08d8212d8cb48.jpg"
            }
        ],
        "recommended": true,
        "helpfulCount": 121,
        "unhelpfulCount": 2,
        "verified": true,
        "purchasedDate": "2020-03-12T19:15:30.000Z",
        "comments": [{
            "user": "Blake",
            "body": "dude, you are much cooler than the last guy i commented on"
        }]
    },
    {
        "sku": 1,
        "title": "Mostly meh",
        "rating": 3,
        "user": "Eaton",
        "body": "I thought the game was fine.  Not great but not terrible either. Not as awesome as the rest of the games in my collection",
        "pics": [{
                "url": "https://i.ytimg.com/vi/rNMDQuRHUkE/maxresdefault.jpg;maxHeight=140;maxWidth=140"
            },
            {
                "url": "https://pisces.bbystatic.com/image2/BestBuy_US/ugc/photos/thumbnail/befe834333cfafb0038de4fb770868fb.jpg"
            },
            {
                "url": "https://pisces.bbystatic.com/image2/BestBuy_US/ugc/photos/thumbnail/a00a0b05314a14acd9ebefc487410096.jpg"
            }
        ],
        "recommended": false,
        "verified": true,
        "purchasedDate": "2019-06-11T12:25:43.000Z",
        "comments": []
    },
    {
        "sku": 1,
        "title": "Not purchased but i love it!",
        "rating": 5,
        "user": "Moses",
        "body": "Instant classic and one of the best games of all time.  I have not bought it yet but i cannot wait!!!",
        "pics": [{
                "url": "https://i.ytimg.com/vi/rNMDQuRHUkE/maxresdefault.jpg;maxHeight=140;maxWidth=140"
            },
            {
                "url": "https://pisces.bbystatic.com/image2/BestBuy_US/ugc/photos/thumbnail/befe834333cfafb0038de4fb770868fb.jpg;maxHeight=140;maxWidth=140"
            },
            {
                "url": "https://pisces.bbystatic.com/image2/BestBuy_US/ugc/photos/thumbnail/7f2f6d39d97765efa9f31b9a3b0c9edc.jpg"
            }
        ],
        "recommended": true,
        "unhelpfulCount": 43,
        "verified": false,
        "comments": [{
            "user": "Tommy",
            "body": "Can you talk about a game you do not own??"
        }]
    }
]

const generateData = (generations) => {
        //generate data
    }
    //////////////////////////////////////////////////////////
    //   NEED TO CREATE FUNCTION TO CREATE UNIQUE REVIEWS   //
    //////////////////////////////////////////////////////////
const insertSamples = () => {
    Review.deleteMany({})
        .then(Review.create(samples))
        .then(() => console.log('ready to close mongo!'))
}

insertSamples();