function initApp(){
    var user_email = document.getElementById('email');
    var user_password = document.getElementById('pwd');
    //var btnSignin = document.getElementById('btnLogin');
    //var btngoogle = document.getElementById('btngoogle');
    var btnSignUp = document.getElementById('btnSignUp');
    //var btnforgot = document.getElementById('btnforgot');


    btnSignUp.addEventListener('click',function(){ //使用者註冊
        var email = user_email.value;
        var password = user_password.value;
        firebase.auth().createUserWithEmailAndPassword(email,password).then(function(success){
            alerts("success","");
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode= error.code;
            var errorMessage= error.message;
            alerts("error",errorMessage);
            
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

    //Remember me
    /*if(document.getElementById('remember').checked == true){
        var email = user_email.value;
        var password = user_password.value;
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(function() {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // ...
            // New sign-in will be persisted with session persistence.
            return firebase.auth().signInWithEmailAndPassword(email, password);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }*/
}
    

window.onload = function(){
    initApp();
};
