from django.urls import path
from . import views

urlpatterns = [
    path("", views.StudentStatusList.as_view(), name="StudentStatusList"),
    # path("name/", views.StudentNameView.as_view()),
    # path('add/', views.StudentStatusAdd.as_view(), name='StudentStatusAdd'),
]
