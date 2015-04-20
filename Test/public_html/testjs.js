/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
          myFirebaseRef.set({
             tittle:"hello world!",
             author:"Firebase",
             location:{
                 city:"lkpg",
                 
             }
          });
          myFirebaseRef.child("location/city").on("value", function(snapshot){
             alert(snapshot.val()); 
          });

