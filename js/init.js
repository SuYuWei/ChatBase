// Initialize Firebase
var config = {
	apiKey: "AIzaSyBUwXemwSCzCwNbbRECeQj6cRyH_27_Sig",
    authDomain: "chatbase-a2e5f.firebaseapp.com",
    databaseURL: "https://chatbase-a2e5f.firebaseio.com",
    storageBucket: "chatbase-a2e5f.appspot.com",
    messagingSenderId: "833250071701"
};

	firebase.initializeApp(config);

var auth = firebase.auth(),
	database = firebase.database(),
	storage = firebase.storage(),
	databaseRef = database.ref(),
	storageRef = storage.ref();
	
var signupPop = {
  		html: '<div class="popup">'+
				'<div class="signup-content animate">'+
					'<h4 class="text-center">Sign Up<span class="close">&times;</span></h4>'+
					'<div>Username :</div>'+
					'<input type="text" placeholder="Username" name="username" data-role="none" required>'+
					'<div>Email :</div>'+
					'<input type="email" placeholder="Email Address" name="email" data-role="none" required>'+
					'<div>Password :</div>'+
			      	'<input type="password" placeholder="Password" name="psw" data-role="none" required>'+
			      	'<div>Password Again :</div>'+
			      	'<input type="password" placeholder="Confirm Password" name="conpsw" data-role="none" required>'+
			      	'<button class="btn btn-primary btn-block signup-btn" data-role="none">Sign up</button>'+
				'</div>'+
			'</div>',
		init: function(){
			var signupPop = $(this.html);
			$("body").append(signupPop);
			signupPop.find(".close").click(function(){
				signupPop.remove();
		  	});
		  	signupPop.find(".signup-btn").click(function(){
				signupPop.remove();
		  	});
		}
  	}