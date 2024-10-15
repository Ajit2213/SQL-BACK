const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'apna_app',
    password:"Ajit123#"
  });







//single data how to store

let q="insert into final (id,username,gmail,password) VALUES (?,?,?,?)";
let data=["22","amansingh","ani@gmail.com","1234"];
try{
connection.query(q,data,(err,result)=>{
    if(err)throw(err);
    console.log(result);
})
}catch(err){
    console.log(err);
}










//   try{
   
//     connection.query("show tables",(err,result)=>{
//         if(err)throw(err)
//             console.log(result);
//     })
// }catch(err){
//     console.log(err);
// }

//bulk data how to store

// let q="insert into customer (id,username,gmial,password) VALUES ?";
// let uses=[
//     ["15","RATHOR","RATn@gmail.com","956uin"],
//     ["12d","mohansingh","mohan432@gmail.com","586uin"],
// ];

// try{
//     connection.query(q,[uses],(err,result)=>{
//         if(err)throw(err)
//             console.log(result);

//     })
// }catch(err){
//     console.log(err);
// }



// note:-bulk data how to store

// let data=[];
  createRandomUser=()=> {
    return [
      faker.string.uuid(),
       faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
   
    ];
  }


//   for(let i=1;i<=100;i++){
//     let reset=createRandomUser();
//     data.push(reset);
//   }


//   let q="insert into customer (id,username,gmial,password) VALUES ?";
 


// try{
//     connection.query(q,[data],(err,result)=>{
//         if(err)throw(err)
//             console.log(result);
//     })
// }catch(err){
//     console.log(err);
// }

//how to insert bulk data in the databases it concept - 

let fini=[];
for(let i=1;i<=100;i++){
    let hisab=createRandomUser();
    fini.push(hisab);
}


let q1="Insert into final (id,username,gmail,password) VALUES ?";

try{
    connection.query(q1,[fini],(err,result)=>{
        if(err)throw(err)
            console.log(result);
    })
}catch(err){
    console.log(err);
}

