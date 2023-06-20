# Furation_Project
This is The Project where CRUD operations performed by JWT 

# LOCALS Set-UP
   1. clone the project.
   2. run command-- npm install
   3. set-up your own MngoDB link -----> Since, I gave it as procees.env.mongodbURL 
   4. Set your own .env variables
        a. port
        b. environment
        c. secretKey
        d. secretKey
   5. After that pass command ---- node index.js to run app
# Technologies Used
   1. Node.js - for providing server side run time environment of javaScript
   2. Express Server ---for setting server
   3. MongoDb -- As a dataBAse
   4. mongoose -- for establish communication of server with dataBase
   5. dotenv -- for creating environment variables
   6. jsonwebtoken -- for generating token while sign-in
   7. winston -- for creating error-logger
# Creating User ---TEST APIs in POSTMAN
  1. Create[SIGN-UP] ---> http://localhost:9500/user/sign-up ----> POST Request
      ![image](https://github.com/vaidyahimanshu502/Furation_Project/assets/76218691/aae25096-ff06-40f5-bd9e-a83eb5baeb07)
  2. Sign_in ----->  http://localhost:9500/user/sign-in ----> POST Request
     ![image](https://github.com/vaidyahimanshu502/Furation_Project/assets/76218691/3aae6bbe-05a3-4ecb-9ff2-de8b69043c33)
# Performing CRUD Operations wit JWT Authentication
  1. Create-Item -----> http://localhost:9500/api/items ----> POST Request
     ![image](https://github.com/vaidyahimanshu502/Furation_Project/assets/76218691/ec98cd48-5fd1-4f64-a570-79fdaa0877e8)
  2. Get-All-Items ------> http://localhost:9500/api/items ----> GET Request [Applying Pagination]
     ![image](https://github.com/vaidyahimanshu502/Furation_Project/assets/76218691/06a84ea6-e605-4baa-bfb2-5b6557cad385)
  3. Get-Specific-Item ----> http://localhost:9500/api/items/64905c72673c0215e073c3b9 --> GET Request
     ![image](https://github.com/vaidyahimanshu502/Furation_Project/assets/76218691/0de594fa-6f34-4a70-919b-8dbb76302b05)
  4. Update-Item ----> http://localhost:9500/api/items/64905c72673c0215e073c3b9 ----> PUT Request
     ![image](https://github.com/vaidyahimanshu502/Furation_Project/assets/76218691/cdf9d775-07c4-4ff7-980b-dd4eb2448ccf)
  5. Delete-Item ----> http://localhost:9500/api/items/64905c72673c0215e073c3b9 ---> DELETE Request
     ![image](https://github.com/vaidyahimanshu502/Furation_Project/assets/76218691/95800614-6f99-42a8-bb52-1433cac0d9d5)







