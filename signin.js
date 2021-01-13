function initApp(){
    var user_email = document.getElementById('email');
    var user_password = document.getElementById('pwd');
    var btnSignin = document.getElementById('btnLogin');
    var btngoogle = document.getElementById('btngoogle');
    //var btnSignUp = document.getElementById('btnSignUp');
    var btnforgot = document.getElementById('btnforgot');


    btngoogle.addEventListener('click',function(){ //用google登錄
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            alerts("success","");
            window.location = "search.html";
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            alerts("error",errorMessage);
          });
    })
    btnSignin.addEventListener('click',function(){ //用email登錄
        var email = user_email.value;
        var password = user_password.value;
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(success){
            alerts("success",success.message);
            window.location = "search.html";
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode= error.code;
            var errorMessage= error.message;
            alerts("error",error.message);
            
        });
    })
    btnforgot.addEventListener('click',function(){ //傳送忘記密碼信
        var auth = firebase.auth();
        var emailAddress = user_email.value;
        auth.sendPasswordResetEmail(emailAddress).then(function() {
        //這裡提醒使用者信已經寄出
            alerts("info","");
        // Email sent.
        }).catch(function(error) {
            alerts("error",error.message);
        // An error happened.
        });
    })

    function alerts(type,message){
        var alert_messages = document.getElementById('alert_messages');
        if(type=="success"){
            alert_messages.innerHTML = "<div class='alert alert-success alert-dismissible fade show' role='alert'><strong>Success! </strong>"+message+"<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
        }
        else if(type=="error"){
            alert_messages.innerHTML = "<div class='alert alert-danger alert-dismissible fade show' role='alert'><strong>Error! </strong>"+message+"<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
        }
        else if(type=="info"){
            alert_messages.innerHTML = "<div class='alert alert-info alert-dismissible fade show' role='alert'><strong>Info! </strong> The password reset email had been sent to your email address.</div>";
        }
    }

}
    

window.onload = function(){
    initApp();
};
