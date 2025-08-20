from django.urls import path
from . import views

urlpatterns =[
    path('function', views.hello_strumpet),
    path('class', views.HelloStrumpet.as_view()),
]