from django.http import HttpResponse
from django.shortcuts import render
from .models import Kids

# Create your views here.
# Home blade
def index(request):
    kids = Kids.objects.all() # SELECT * FROM kids
    ordered_score = Kids.objects.order_by('-score')
    return render(request, 'scorelist/index.html', { 'kids': kids, 'ordered_score': ordered_score })