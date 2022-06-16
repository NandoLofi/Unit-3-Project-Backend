# Travel Site

**Summary**
| Field | Detail |
|-------|--------|
| Project Name | Unit-3-Final-Project|
| Description | A travel website that allows you to explore activities and review them! |
| Developers | Kelly Luu, Cheryl Weigel, Fernando Galvan |
| Live Website | https://project-travel-site.herokuapp.com/ |
| Front-end Repo | https://github.com/kellyluuu/Project_3_Frontend |
| Back-end Repo | https://github.com/NandoLofi/Unit-3-Project-Backend |

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
| / | Index Page | Going to show thumbmails of attractions |
| /show | Going to show the details of the activity chosen |
| /edit | On show page but took different route to implement the edits |

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


