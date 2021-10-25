onSubmit=()=>{
    let p1 = $("#password")[0].value;
    let p2 = $("#password2")[0].value;
    if(p1!==p2){
        $("#error").html("Les 2 mots de passe sont différents");
        return false;
    }
    return true;
};