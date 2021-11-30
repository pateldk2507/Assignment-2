function ckeckForEmptyFields(){
    
    if (!$('#user-name').val()) {
        $('#msg').html('Name field cannot be empty');
    }else if(!$('#user-mobile').val()){
        $('#msg').html('Mobile field cannot be empty');
    }else if(!$('#user-email').val()){
        $('#msg').html('Email field cannot be empty');
    }else if(!$('#user-password').val()){
        $('#msg').html('Password field cannot be empty');
    }else{
        $('#msg').html('All good your registration is in process....');
    }
}
