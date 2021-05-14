var attempt = 3
function validater() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ((username == "sakshhamtg@gmail.com" && password == "password@2020") ||( username=="heermithu@gmail.com" && password=="heeranaya1")){
        alert('You have logined as '+ username) // Redirecting to other page.
        return true;
    } else {

        alert("You have left attempt;");
        attempt = attempt - 1;
        // Disabling fields after 3 attempts.
        // if( attempt == 0){
        // document.getElementById("username").disabled = true;
        // document.getElementById("password").disabled = true;
        // document.getElementById("submit").disabled = true;
        // alert('account blocked plz reload')
        return false;
    }
}
// }
var abc = 1