var Pinput=Pinput||{};Pinput.authToken="",Pinput.isAuthenticated=!1,Pinput.Util={split:function(a){return a.split(/ \s*/)},extractLast:function(a){return this.split(a).pop()},serializeArray:function(a){var b=[];return a=a||{},Object.keys(a).forEach(function(c){b.push(c+"="+a[c])}),b}},Pinput.StorageKey={APIToken:"pinput_APIToken",isAuthenticated:"pinput_isAuthenticated"},Pinput.API={addPost:function(a,b,c,d,e,f){var g=Pinput.Util.serializeArray({format:"json",auth_token:Pinput.authToken,url:encodeURIComponent(a),description:encodeURIComponent(b),extended:encodeURIComponent(c),tags:encodeURIComponent(d),shared:e,toread:f,_:Date.now()});return $.getJSON("https://api.pinboard.in/v1/posts/add?"+g.join("&"))},getPost:function(a){var b=Pinput.Util.serializeArray({format:"json",auth_token:Pinput.authToken,url:a?encodeURIComponent(a):"",_:Date.now()});return $.getJSON("https://api.pinboard.in/v1/posts/get?"+b.join("&"))},suggestPost:function(a){var b=Pinput.Util.serializeArray({format:"json",auth_token:Pinput.authToken,url:encodeURIComponent(a),_:Date.now()});return $.getJSON("https://api.pinboard.in/v1/posts/suggest?"+b.join("&"))},getTags:function(){var a=Pinput.Util.serializeArray({format:"json",auth_token:Pinput.authToken,_:Date.now()});return $.getJSON("https://api.pinboard.in/v1/tags/get?"+a.join("&"))}};