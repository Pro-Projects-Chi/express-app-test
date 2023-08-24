# express-app-test

## Process

so when dealing with AWS the thing is realizing what access you want to give yourself. you want to go to IAM > users > create New User(if they are not already in a group) > permissions and add permissions as a admin to cover all your basis

## Access Keys and super secret keys.

under users you should have create access key and available for give apps and apis access to you credentials on aws click that to give your machine access to the aws console and all its uses that I'm still figuring out as I write this. 

> - sideNote:
 you only get one time to look at the key and password after that its in the void so make sure you save or download it its a feature as of when I write this.(08/23/23)

## add the the yml workflows 
 
 now that all that is done you need to add the keys to you github environment variable with keys you got form the previous steps

 ![deployed](./Screenshot%202023-08-23%20232255.png)