// //var storage = sessionStorage;
// $(document).ready(function(){
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyDOznm-gIP5vZ_sNN-tWPfBXLxWQ1eIsPM",
//     authDomain: "two-tier-94521.firebaseapp.com",
//     databaseURL: "https://two-tier-94521.firebaseio.com",
//     storageBucket: "two-tier-94521.appspot.com",
//     messagingSenderId: "865797111777"
//   };
//   firebase.initializeApp(config);
  
// // var dbStuId = firebase.database().ref().child('stu_id');
// // var dbStuAns = firebase.database().ref().child('stu_Ans');
// //=============================================================
 
//   var classnum = '811';
//   var dbRef = firebase.database().ref().child(classnum);
//   // var storageRef = firebase.storage().ref();
//   var $id = $('#stu_id');
//   const $btncheck =$('#btncheck');
  
// //要改成監聽btn class
//   const $btn_A =$('#btn_A');
//   const $btn_B =$('#btn_B');
  

// $btncheck.click(function(e){
//     var student_id = $id.val();
//   //  var dbRef = firebase.database().ref().child(classnum).child(student_id);
//     var dbRefID = firebase.database().ref().child(classnum).child(student_id);
//    // //存入storage
//    //  if(storage['std_id'] == null){
//    //       storage.std_id ==='';  //storage.setItem('std_id','');
//    //   }
//    //  storage.setItem(student,std_id); 
//    //  storage['std_id'] += std_id+',';
//    // }


// //    const auth = firebase.auth();
//     alert('aaaaaa'); 
//     dbRef.push({Ans:''});

// //=====================  
//     // const promise = auth.createUserWithEmailAndPassword(student_id);
       
//        //抓取值傳到下一頁
//        //   promise.catch(function(e){
//        //    console.log(e.message);
//        // // $signInfo.html(e.message);
//        //  }); 
//        //      promise.then(function(e){
//        //      window.location.href = "./profile.html";
//        //      });     
// //===================== 
//  });

// //   firebase.auth().onAuthStateChanged(function(user){
// //     if(student_id) {
// //       console.log(user);
// //       $signInfo.html(user.email+" is login...");
// //       });
// //     } else {
// //       console.log("not logged in");
// //     }
// //   });

// //==================================
//   //data的ID
// //   var dbRef = firebase.database().ref().child('object');
// //   //== '#' 抓html中物件的id==
// //   var $id = $('#stu_id');
// //   const $btncheck =$('#btncheck');
// //   const $btn_A =$('#btn_A');
// //   const $btn_B =$('#btn_B');
 

// // //btn監聽事件 讀取輸入資料
// //  $btncheck.click(function(e){
// //     var student_id = $id.val();
// //       //寫入資料庫
// //       dbRef.push({ID:student_id});
// //        alert('aaaaaa');
// //       //$id.val('');       
// //     });


// // //==================================
// $btn_A.click(function(e){
//     var student_id = storage.getItem(student);
//     var dbRef = firebase.database().ref().child(classnum).child(student_id);
//     var ans_Q1_I = $btn_A.val();
//       //寫入資料庫
//       dbRef.updateChildren(ans_Q1_I);
//          alert('aa');  
//     });
// $btn_B.click(function(e){
//     var ans_Q1_I = $btn_B.val();
//       //寫入資料庫
//       dbRef.push({Q1_I:ans_Q1_I});
//     alert('bbbb'); 
//     });

// $btn_C.click(function(e){
//     var ans_Q1_I = $btn_C.val();
//     dbRef.push({Q1_I:ans_Q1_I});
//     alert('ccc'); 
//     });

// //==================================


// //==================================
//   //==監聽==
//   // dbRef.on('value', function(snap){
//   //   $title.html(snap.val());
//   // });
//   //==================================

//   //Time
//   // function get_time(t){
//   //   var vartime = new Data(),
//   //       varHours = vartime.getHours(),
//   //       varMinutes = vartime.getMinutes(),
//   //       varSeconds = vartime.getSeconds();
//   //   var varHow;
//   // }

// //======================================================

// });

// var cookieName="cookieEx1";
// function setCookie(name,value)
// {

//   document.cookie = name + "=" + escape(value) 
//             +((expire == null) ? "" : (";expire" +expire.toGMTString()));
// }

// function set_cookie(form){

//   var cookieValue = form.cookie.value;

// }

//輸入id
  function idsave(){
    if(stuform.stu_id.value==""){
      alert("未輸入座號");
    }else if (stuform.classnum.value==""){
       alert("未輸入班級");
    }else{   
//      window.location="https://www.facebook.com/"
      document.cookie = "aa=1";   
      alert(document.cookie);
      stuform.submit();
 //     window.location="Scratch.html"
      
    } 
  }

// //下一題
//   function nextquestion(n,ans){       
//     if(ans == 1){
//       if(n == 5){
//         window.location ="TheEnd.html"
//       }else{ //跳回第一層
//         n=n+1;
//         window.location="Q0"+n+".html"
//       }
//     }else{//跳回饋
//       window.location ="F0"+n+"-C.html"
//     }
//   }

function nextpage(n){
  var num = n;
  if(num == 1 || num == 3){
    顯示2選項
    document.getElementById('TetstText')._______=false;
  }else{

      顯示3選項
      document.getElementById('TetstText')._______=false;
  }


}

function selections(n){
  //changeSrc
  document.getElementById("Image").src="aaa.gif";
  document.getElementById("Image").src="aaa.gif";
  document.getElementById("Image").src="aaa.png";
  document.getElementById("Image").src="aaa.png";
  //changtext
  document.getElementById("StringFont").innerHTM ="Q"+n;
  document.getElementById("Q_num").innerHTM = n+1;
}

function SetCookie(n,ans){

  if(ans == 1){
    document.cookie ="'n'= A";
  }else if(ans == 2){
    document.cookie ="'n'=B";
  }else if(ans == 3){
    document.cookie ="'n'=C";
  }else if(ans == 0){
    document.cookie ="'n'=R";
  }
}