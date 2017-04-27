
var express = require('express'),
cors = require('cors');
var app = express();

app.use(cors());


var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/rajat';

app.post('/on_loc',function(req,res){

  var you_on_this_location=on_a_location();
 
  setTimeout(function(){

    res.send(you_on_this_location);

  },4000);
 
});

app.post('/off_loc',function(req,res){

 var you_off_this_location=off_a_location();  

  setTimeout(function() 
  {

    res.send(you_off_this_location);

  },4000);
 
});

app.post('/find_time',function(req,res){

  var time_distance;

  


});

var updated_location_array;

app.post('/upd_ever',function(req,res){

  update_everything();


  setTimeout(function() 
  {
/*    console.log(updated_location_array);
*/
    res.send(updated_location_array);

  },4000);

});




app.listen(3000);

function update_everything()
{

            var updated_location=[];


            var location_that_are_on=function(db,callback){

              var cursor =db.collection('rajjo').find({"state":"on"});

             cursor.each(function(err, doc) {

                assert.equal(err, null);
                if (doc != null) {
                  updated_location.push(doc);
                } else {
                   callback();
                }

             });

          }

            MongoClient.connect(url, function(err, db) {

            assert.equal(null, err);

            location_that_are_on(db, function() {
                db.close();
            });
            
           });


            setTimeout(function() 
            {  
              console.log(updated_location);

                 updated_location_array = updated_location;

            }, 1000);


}


function on_a_location()
  {
  
          var turned_off=[];

          // for mongo

          var find_location_turned_off=function(db,callback){

              var cursor =db.collection('rajjo').find({"state":"off"});

             cursor.each(function(err, doc) {

                assert.equal(err, null);
                if (doc != null) {
                  turned_off.push(doc);
                } else {
                   callback();
                }

             });

          }

          MongoClient.connect(url, function(err, db) {

            assert.equal(null, err);

            find_location_turned_off(db, function() {
                db.close();
            });
            
           });

          console.log(find_location_turned_off);
          

          if(find_location_turned_off.length!=0)
          {
     

          setTimeout(function() 
            {
                
                  var user_location_current_on=  turned_off[Math.floor(Math.random()*turned_off.length)];

                  // tell mongo to change the location state;

                 var tell_mongo_to_turn_on_location=function(db,callback){

                      db.collection('rajjo').update({'id':user_location_current_on.id},{$set:{'state':'on'}});;            

                  };

                  MongoClient.connect(url, function(err, db) {

                    assert.equal(null, err);

                    tell_mongo_to_turn_on_location(db, function() {
                        db.close();
                    });      

                   });

                  return user_location_current_on;

            }, 1000);


          }
          else
          {
            return 0;
          }




          // taking random value to turn on a location

  };


  function off_a_location()
  {

         var turned_on=[];

          // for mongo finding those location which are already on 

          var find_location_turned_on=function(db, callback) {

             var cursor =db.collection('rajjo').find({"state":"on"});

             cursor.each(function(err, doc) {
                assert.equal(err, null);
                if (doc != null) {
                  turned_on.push(doc);
                } else {
                   callback();
                }

             });


          };

          console.log(turned_on);


          MongoClient.connect(url, function(err, db) {

            assert.equal(null, err);

            find_location_turned_on(db, function() {
                db.close();
            });
            
           });


          setTimeout(function() 
            {

             var user_location_current_off= turned_on[Math.floor(Math.random()*turned_on.length)]; 

          // tell mongo to change the location state;

             var tell_mongo_to_turn_off_location=function(db,callback){

                  db.collection('rajjo').update({'id':user_location_current_off.id},{$set:{'state':'off'}});;            

              };

              MongoClient.connect(url, function(err, db) {

                assert.equal(null, err);

                tell_mongo_to_turn_off_location(db, function() {
                    db.close();
                });      

               });

              return user_location_current_off;                   

                }, 1000);


          // taking random value to turn off a location

     
  };
  







