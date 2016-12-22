$(function(){

	auth.onAuthStateChanged(function(user) {
		if(user) {
			console.log(user);
			$.mobile.changePage("#main-page");
			var userName = user.providerData[0].displayName;
			var userEmail = user.providerData[0].email;
			var photoURL = user.providerData[0].photoURL || "img/user.png";
			$(".user-info-area").find(".user-name").text(userName);
			$(".user-info-area").find(".user-email").text(userEmail);
			$(".user-info-area").find(".uesr-avatar").attr("src",photoURL);
		}else {
			$.mobile.changePage("#login-page");
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

  	$(".user-info-area").click(function(){
  		$(".user-area-r").find("img").toggle();
  		systemMenuPop.init();
  	});
  	
})