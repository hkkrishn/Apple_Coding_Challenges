# Apple_Coding_Challenges
A set of coding challenges 

The url_shorten "shortens" the link provided by the user. My approach was the following:
1. I assumed that the user would want to be able to shorten their links in a relative quick time, this and the limitations of space in regards to cost
of the MongoDB database are what motivated hashing, by saving the hash of urls that have already been introduced once we can enhance runtime and lower the
amount of hashes stored and thus reduce costs associated with storage. In addition, the react frontend communicates directly with the MongoDB, Node.js backend
by submitting data to two separate endpoints. Firstly, data from the user is directed to the shorten API which generates a hash, this hash is then stored within mongoDB,
upon storing or finding the hash of an exisitng url, the redirect API grabs the hash and then appends it to the our local host session for example
 if we input http:// apple.com our app returns http://localhost:9000/sdfsdfdff if we were to follow that link we would get our original url which is apple.com
 
 usage:
 All dependencies are present in the package.json file so running npm install should install all necessary dependencies.
 To run the script use: npm run dev 
 
 To expand on this project a feature that needs to be added is the automatic rerouting of the shortened link, an approach that could be used is 
 using the react router library when we retrieve the url that is shortened we can create a new route for that url and redirect the user. In addition, since we used uniqID library 
 as our hash function, it would be efficient to customize our hash function based on our user so as to lower collisions and space complexity, say for example
 our user only visits news websites then we could make our hash function and could better distribute those urls.
 

The navigator project contains the minimalist website,

to start simply run the command npm start when you are within the navigator directory.
We did not use any third party libraries we simply used React,JSX and CSS.
In order to retrieve the time dependent on the location I was going to use the Google TimeZOne API, altough I was not able to complete this.
