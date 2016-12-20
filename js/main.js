$(function(){

	auth.onAuthStateChanged(function(user) {
		if(user) {
			// $.mobile.changePage("#main-page", { transition: "pop"});
			// var userName = user.providerData[0].displayName;
			// var photoURL = user.providerData[0].photoURL || "img/user.png";
		}else {
			// $.mobile.changePage("#login-page");
			$.mobile.changePage("#main-page", { transition: "pop"});
		}
	});

  	$(".email-btn").click(function(){
  		$(".login-content").slideToggle("fast");
  	});

  	$(".login-btn").click(function(){
  		var email = $("input[name=\"email\"]").val();
		var password = $("input[name=\"psw\"]").val();
		auth.signInWithEmailAndPassword(email,password).catch(function(e){
			alert(e.message);
		});
  	})

  	$(".facebook-btn").click(function(){
  		var provider = new firebase.auth.FacebookAuthProvider();
		auth.signInWithPopup(provider).catch(function(e){
			alert(e.message);
		});
  	})

  	$(".google-btn").click(function(){
  		var provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider).catch(function(e){
			alert(e.message);
		});
  	})

  	$(".sign-btn").click(function(){
  		signupPop.init();
  	});
  	
})