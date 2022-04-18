from django.shortcuts import render, HttpResponse
from homepage.models import contact
from datetime import datetime
from django.contrib import messages
# Create your views here.
def index(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('msg')
        con = contact(name=name,email=email,message=message,date=datetime.today())
        con.save()
    return render(request,'index.html')
