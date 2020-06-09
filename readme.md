# API Documentation

**Find Times**
----
Returns a list of times, with associated car, track and user information.

* **URL:** `/times`

* **Method:**
   `GET`
  
*  **URL Params:**

   **Optional:**
    
   `uid=[alphanumeric]` - Specify a user ID to filter results based on user
   
   `tid=[alphanumeric]` - Specify a track ID to filter results based on track
   
   `cid=[alphanumeric]` - Specify a car ID to filter results based on car

* **Success Response:**

    **Code:** 200 <br />
    **Content:**
    ```json
    {
        "status": "success",
        "data": [
            {
                "_id": "5ede1c8a1f9bb2151f6087c0",
                "time": "00:59.867",
                "car": {
                    "_id": "5ede1c511f9bb2151f6087be",
                    "make": "BMW",
                    "model": "M3 GT2"
                },
                "track": {
                    "_id": "5ede1c3d1f9bb2151f6087bd",
                    "name": "Brandshatch GP"
                },
                "user": {
                    "_id": "5ede1c561f9bb2151f6087bf",
                    "name": "John Doe",
                    "email": "johndoe@example.com"
                }
            }
        ]
    }
    ```
 



