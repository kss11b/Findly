from django.conf.urls import url, include
from . import views
urlpatterns = [
    url(r'^$',views.index),
    url(r'^searchTerm$', views.searchTerm),
    # url(r'^create$', views.create),
    # url(r'^login$', views.login)
]
