$(document).ready(function(){

  var apiKey = '&apiKey=f76904152bf944798a8a79a3be817402'
  var linkPreface = 'https://newsapi.org/v2/everything?sources='
  var articleSources = [
      'hacker-news',
      'abc-news',
      'ars-technica',
      'bbc-sport',
      'business-insider',
      'breitbart-news',
      'cbs-news',
      'cnn',
      'crypto-coins-news',
      'entertainment-weekly',
      'fox-news',
      'google-news',
      'ign',
      'independent',
      'nbc-news',
      'msnbc',
      'national-geographic',
      'newsweek',
      'reuters',
      'the-huffington-post',
      'the-hill',
      'time',
      'usa-today',
      'talksport'
  ]


  function activateSearch(){
    console.log('fired')
    var searchTerm = $('.word-input').val()
    $('.count-container').empty()
    for(var i = 0; i < articleSources.length; i++){
      var articleLink = linkPreface + articleSources[i] + apiKey
      console.log(articleLink)
      $.ajax({
        type : "POST",
        datatype: "json",
        url : "searchTerm",
        data : {
          csrfmiddlewaretoken: Cookies.get('csrftoken'),
          searchTerm : searchTerm,
          link: articleLink
          // link: 'https://newsapi.org/v1/articles?source=hacker-news&sortBy=latest&apiKey=f76904152bf944798a8a79a3be817402'
        },
        success: function(data){
          $('.count-container').append('<div class="row">' +
            '<div class="col s12 m8 l6 offset-m2 offset-l3">' +
              '<div class="card indigo darken-1">' +
                '<div class="card-content white-text">' +
                '<div class=card-title>'+ data.title +'</div>' +
                  '<span class=""><p class="count-card-header">' + data.count + '</p></span>' +
                  '<p class="count-text">Times this word appeared</p>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>')
          console.log('success', data)
        }
      })
    }
  }
  $('.search-button').click(activateSearch)

})
