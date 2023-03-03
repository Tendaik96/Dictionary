What is HTTP?
 HTTP - hyperText tranfer protocol

 What does it do?
 Enables communication between clients and servers over the internet. Allows the transferring of data in various formats i.e videos, images, JSON and fo course HTML

 how do we communicate?
 Requests/Responses

 Types of Requests
 - GET (Read)
 - POST (Create)
 - PUT (Update, whole)
 - PATCH (Update, partial)
 - DELETE (to delete)

you can send data using 
- Query parameters
- Body
- Request/Response Headers

Response
Most of the time responses will be JSON or HTML. 

Response status code
2XX(Good)
- 200 (ok)
- 206(Partial content)

3XX (cant help you, go here instead)
- 301 (moved permanently)
- 302 (moved permanently)

4XX (Not good, not our fault either)
- 400 (Bad request)
- 401 (Unauthoried)
- 403 (Forbidden)
- 404 (Not Found)
- 422 (Unable to process)

5XX (Not good, we messed up)
- 500 (Internal Server Error)


Need to download the following packages:
Nodemon, Express, dotenv
set port to 3000

npm init -y :
 creates a basic package.json - this is where we will install all our libraries 
