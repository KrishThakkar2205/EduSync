from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import course
from django.core.exceptions import ValidationError

# Create your views here.
@api_view(['POST'])
def get_course(request):
    data = request.data
    id = data.get('id')
    courses = course.objects.filter(createdby=id)
    print(courses)
    listCourse = []
    for i in courses:
        listCourse.append(
            {
                'name':i.name
            }
        )
    if courses:
        print("Data Sent")
        return Response({'message':listCourse})

    else:
        print("Data Not sent")
        return Response({'message':'No Courses Found'})
    

@api_view(['POST'])
def add_course(request):
    data = request.data 
    name = data.get('name')
    createdby = data.get('id')
    c = course(
        name = name,
        createdby = createdby
    )
    try:
        c.save()
        return Response({'message': 'Course Added'})
    except ValidationError as e:
            return Response({'error': e.message_dict})