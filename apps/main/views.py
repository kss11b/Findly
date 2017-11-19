from django.shortcuts import render, redirect, HttpResponse
import urllib2, re, ast, requests, json

def index(request):
    return render(request, 'main/index.html')

def searchTerm(request):
    articleWordCount = 0


    articleData = requests.get(request.POST['link']).json()
    articleTitle = articleData['articles'][0]['source']['name']

    articles = articleData['articles']
    for article in articles:
        # print (article['title'], type(article['title']))


        rgx = re.compile("(\w[\w']*\w|\w)")

        matches = rgx.findall(article['title'])

        # print(matches, 'matches')
        for match in matches:

            if request.POST['searchTerm'].lower() == match.lower():
                articleWordCount += 1
    print(articleWordCount)
    returnData = json.dumps( {
    'title': articleTitle,
    'count': articleWordCount
    })
    return HttpResponse(returnData, content_type='application/json')
