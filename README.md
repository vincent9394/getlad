Cohort 12 TW Group1 Project
正式啟動
Vincent ok



upload to heroku host
1. setup heroku ac and login in the browser
2. git link to the local project 
3. type command
    heroku run:bash 
   will access the heroku cloud
4. git add. git commit git push the whole folder to the heroku cloud 


Database
1. install postqresql in heroku cloud in the browser
2. back to the local project, type command
    heroku pg:psql
   then you will access the database, then you have to type sql by yourself 
   (can't run typescript in the heroku cloud)
3. in the psql, 
    create the schema from database.sql(ignore 1. CREATE DATABASE getlad; 2. \c getlad;) 
    create the seed from copy the ExcelTables/GetLad.xlsx (copy the rightest column of the insert sql)

Typescript
Difference from the origin source file,
1. package.json
     "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
2. create index.js with two scripts
    require ('ts-node/register');
    require ('./server.ts');
3. change db.ts 
    export let client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl:  {
    rejectUnauthorized: false
  }
    });
4. change server.ts
    let port = process.env.PORT || 8080;

Congrats!!! it should be all done! Enjoy.
