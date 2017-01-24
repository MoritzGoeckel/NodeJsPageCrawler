//Including the library
var DownloadQueue = require('./DownloadQueue.js');

//Creating the queue object
//Setting the limit to 100 simultaneous connections
var queue = new DownloadQueue(100); 

//Generating some requests
for(var currentId = 0; currentId < 6000; currentId++)
    queue.enqueDownload(
        "http://sportunion.at/de/sportangebote/vereine/clubshow-"+ currentId +"?Page=1", //Url
        gotPageCallback //callback
    );

//The callback method
function gotPageCallback(url, error, response, html) 
{
    console.log("Got page: " + url + " " + queue.getQueueLength() + "Q " + queue.getOpenConnections() + "c's");
    //Todo: The actual scanning code goes here
}