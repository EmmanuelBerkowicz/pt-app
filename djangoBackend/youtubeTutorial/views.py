from django.shortcuts import render
from django.http import HttpResponse
from django.views import View

def hello_strumpet(request):
    return HttpResponse("Hello Strumpet")

class HelloStrumpet(View):
    def get(self,request):
        return HttpResponse("G'day Strumpet!")
