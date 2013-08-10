App.Events = (function(lng, app){
	lng.dom('section#login-section article#login-article form a').tap(function(evt){
		if ($$('#login-usuario').val()==="") {
			lng.Notification.error(
			    "Error",                      //Title
			    "El usuario no puede estar Vacio",     //Description
			    "remove",                     //Icon
			    7,                            //Time on screen
			    afterNotification             //Callback function
			);
		}else if ($$('#contrasena-usuario').val()==="") {
			lng.Notification.error(
			    "Error",                      //Title
			    "El contraseña no puede estar Vacio",     //Description
			    "remove",                     //Icon
			    7,                            //Time on screen
			    afterNotification             //Callback function
			);
		}else{
			lng.Notification.success(
			    "Success",                  //Title
			    "Usuario Correcto",     //Description
			    "check",                    //Icon
			    7,                          //Time on screen
			    afterNotification           //Callback function
			);
		}
	});

	var afterNotification = function(){
		console.log('Despues del Error');
	};
	return{

	}
})(Lungo, App);