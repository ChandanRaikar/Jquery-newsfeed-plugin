(function(){
    $.ajax({
    url:'articles.json',
    type:'GET',
    success:function(data){
      var news = data.articles;
      for(var i=0;i<news.length;i++){
        var news_title = news[i].title;
        var news_desc = news[i].description;
        $('.headlines').
        append("<a href="+news[i].url+"><div class='newsfeed'>"
        +"<div class='newsblock'><span class='title'>"+news_title+"</span>"
        +"</div></a>");
      }
    },
    error:function(){
      console.log("not worked")
    }
  });
})(window);
