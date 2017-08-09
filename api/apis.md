# APIS

## What Are APIs?

Have you ever wondered how Google stores all of that data and how you can access that data so quickly? Have you ever wondered how Yelp stores all of that information on those establishments they list?

For this lesson we will be using TVMaze's API, which is a public API. Most companies will make their APIs public and available for developers to utilize and experiment with, but much of them require signup and information to give you a unique key to use in order to access that information (think of it as your unique password created by the company).

We will be using the [TVMaze API](http://www.tvmaze.com/api) since there is no signup required nor an API key required to use, so you can dive right into using it just by using the API URL. 

Other great APIs to experiment with are:
    - [OpenWeather API](https://openweathermap.org/api)
    - [GIPHY API](https://developers.giphy.com/)
    - [Hacker News](https://github.com/HackerNews/API)
    - [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page)
    - [Twitter API](https://dev.twitter.com/overview/api)
    - [Google Maps API](https://developers.google.com/maps/)
    - [OMDB API](https://www.omdbapi.com/)

***

## JSON

JSON or JavaScript Object Notation is a popular method of organizing data for APIs due to it's text makeup. When exchanging data between a browser and server, the data can only be text, making JSON a perfect way to send over large quantities of data without sacrificing speed. 

JSON's syntax is very similar to JavaScript's Object notation, however with more nuanced details, they are not the same. But that is another advantage of JSON, we can handle data while still working with JavaScript.

In programming, Objects are a way of binding data together and containing it under one name, IE organizing a database like IMDB for actors/actresses information. JSON is incredible readable and very easy to organize data. A very popular non-relational database called MongoDB is built around JSON, and it is often touted for it's ease of use and flexibility. 

```
// example JavaScript Object
var exampleJavaScriptObj = {
    firstName: "Hannibal",
    lastName: "Buress",
    occupation: "comedian",
    filmography: ["Eric Andre Show", "Spiderman: Homecoming", "Broad City"]
}

// example JSON
// note the quotations wrapping the key
var exampleJSON = {
    "firstName": "Ilana",
    "lastName": "Glazer",
    "occupation": "comedian",
    "filmography" : ["Broad City", "Rough Night", "Lucas Bros Moving Co"]
}


console.log(exampleJavaScriptObj.firstName) // logs Hannibal
```

JSON is more strict than JavaScript Object literals. Quotation marks are required to wrap the keys and functions are not allowed to be stored as values.

***

## READ THE DOCS
Documentation is important everywhere, instruction manuals, textbook, journalism, etc. The same goes with programming. Although it is not impossible to use a library with little to no documentation, it will be difficult. Thankfully there are great libraries with great documentation, making it easy for all to use. 

At first learning to read documentation is daunting and difficult to get around, but through repetition and figuring out how to get what you need, reading through documentation will be a breeze.

Libraries We'll Use:
- [Bulma CSS](http://bulma.io/documentation)
- [jQuery](https://api.jquery.com)
- [TVMaze API](http://www.tvmaze.com/api)
- [CORS-now](https://cors.now.sh/)

***

## How APIs Work

Try this link in your browser:  
`http://api.tvmaze.com/search/shows?q=girls`

You will see all of the data that TVMaze has on the show ***Girls*** in their database. Everything is organized in JSON with strings, numbers, arrays, or nested objects. You can harness this data and render this to your webpage. You can use AJAX through the jQuery library and make asynchronous API calls to TVMaze. 

For a nice explainer of AJAX here are a few links:
- [What is Ajax and Where is it Used in Technology?](http://www.seguetech.com/ajax-technology/)  
- [QUORA: What is AJAX](https://www.quora.com/What-is-AJAX)
- [YOUTUBE: JSON and AJAX with Real Examples](https://www.youtube.com/watch?v=rJesac0_Ftw)
- [YOUTUBE: Working With APIs](https://www.youtube.com/watch?v=ecT42O6I_WI)

Good Tutorials To Make Other Applications:
- [YOUTUBE: Make A Weather App]()https://www.youtube.com/watch?v=eLK28VPJvCE
- [YOUTUBE: Google Maps API](https://www.youtube.com/watch?v=Zxf1mnP5zcw)
- [YOUTUBE: JSON and AJAX with Real Examples](https://www.youtube.com/watch?v=rJesac0_Ftw)