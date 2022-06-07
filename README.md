# Travel Site

**Summary**
| Field | Detail |
|-------|--------|
| Project Name | Unit-3-Final-Project|
| Description | {One sentence summarizing what is the app and why it matters} |
| Developers | Kelly Luu, Cheryl Weigel, Fernando Galvan |
| Live Website | {website of deployed application} |
| Front-end Repo | https://github.com/kellyluuu/Project_3_Frontend |
| Back-end Repo | {Link to git repository} |

## Intentions of the site

Have a user explore different activities within Florence while exploring reviews about that attraction, restaurant, etc.

## User Stories

List of stories users should experience when using your application.

- Users should be able to see the site on desktop and mobile
- Users login
- Users can view all the attractions
- Users can click each attraction
- Users can see all reviews
- Users can create review
- User can edit review they submitted
- User can delete review left on page

## Route Tables

| Endpoint | Response | Other |
| -------- | -------- | ----- |
| / | Index Page | Going to show thumbmails of rattractions |
| /show | Index Page | Going to show thumbmails of rattractions |
| /edit | Index Page | Going to show thumbmails of rattractions |

## Libraries

 - Nodemon
 - Express
 - dotenv
 - mongoose
 - morgan
 - cors

## Schema 

```
    Reviews

    {
        name: { type: String, required: true },
        emailId: String,
        reviewTitle: String,
        rateNumber: Number,
        reviewDesc: String
    }

    Activities

    {
        type: String,
        name: String, 
        desc: String,
        price: Number,
        imgFull: String,
        imgThumb: String,
        url: String,
    }


