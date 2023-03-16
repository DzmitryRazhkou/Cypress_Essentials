/*
Sending Data to Server ---> JSON.stringify()
Serialization The JSON. stringify() method serializes objects, arrays,
and primitive values into a JSON data string
*/

// Object that will be serialized for sending to server --->
let mySendingObj = {city: "Los Angeles", state: "CA", name: "LAX", address: "500 World Way, Los Angeles"}
let myObjJSON = JSON.stringify(mySendingObj)
console.log("Serialized Javascript Object to JSON: " + myObjJSON)

/*
Receiving Data from Server ---> JSON.parse()
*/
// Received Data would be deserialized --->
let myReceivedJSON = '{"city": "Los Angeles", "state": "CA", "name": "LAX", "address": "500 World Way, Los Angeles"}'
let myJSON = JSON.parse(myReceivedJSON);
console.log(myJSON)


