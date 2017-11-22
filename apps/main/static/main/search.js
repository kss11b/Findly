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
    $(this).addClass('disabled')
    console.log('fired')
    setTimeout(() => {$(this).removeClass('disabled')}, 5000)
    // $('.search-button').addClass('disabled')
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
        },
        success: function(data){
          if(data.count !== 0){
            $('.count-container').append(
              '<div class="col s6 m4 l3 ">' +
                '<div class="card indigo darken-1 count-card">' +
                  '<div class="card-content white-text">' +
                  '<div class=card-title flow-text>'+ data.title +'</div>' +
                    '<span class=""><p class="count-card-header">' + data.count + '</p></span>' +
                    '<p class="count-text">Times this word appeared</p>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>')
            console.log('success', data)
          }
        }

      })
      // .done(() => { if(i <= articleSources.length - 1){$('.search-button').removeClass('disabled')}})

    }
    // setTimeout(5000, () => {$('.search-button').removeClass('disabled')})

  }
$('.search-button').click(activateSearch)

})
