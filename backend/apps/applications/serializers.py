from apps.students.serializers import StudentOptionSerializer
from apps.users.serializers import UserOptionSerializer
from .models import Application
from django.db import models
from rest_framework import serializers
from config.constants import *
from django.utils import timezone

# class ChoiceField(serializers.ChoiceField):

#     def to_representation(self, obj):
#         if obj == '' and self.allow_blank:
#             return obj
#         return self._choices[obj]

#     def to_internal_value(self, data):
#         # To support inserts with the value
#         if data == '' and self.allow_blank:
#             return ''

#         for key, val in self._choices.items():
#             if val == data:
#                 return key
#         self.fail('invalid_choice', input=data)

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'
        
class ApplicationUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Application
        fields = [
            'student',
            'user',
            'applied_by',
            'status',
            'company_name',
            'position',
            'job_description',
            'job_post_url',
            'state',
            'note',
            'job_portal',  
        ]

    def update(self, instance, validated_data):
        validated_data['updated_by'] = self.context['request'].login_user
        validated_data['updated_at'] = timezone.now()
        return super().update(instance, validated_data)

class ApplicationListSerializer(serializers.ModelSerializer):
    student = StudentOptionSerializer()
    user = UserOptionSerializer()
    updated_by = UserOptionSerializer()
    created_by = UserOptionSerializer()
    class Meta:
        model = Application
        fields = '__all__'

class ApplicationOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('id','company_name', 'position')