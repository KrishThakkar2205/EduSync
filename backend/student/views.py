from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Student
from django.core.exceptions import ValidationError

# Create your views here.
@api_view(['POST'])
def addStudent(request):
    if request.method == 'POST':
        data = request.data
        password = data.get('name')[0:4] + data.get('rollno')
        student = Student(
            name=data.get('name'),
            email=data.get('email'),
            rollNo=data.get('rollno'),
            phoneNo=data.get('phoneno'),
            course=data.get('Course'),
            instituteName=data.get('Institutename'),
            password=password,
            createdby = data.get('id')
        )
        try:
            # student.full_clean()
            student.save()
            return Response({'message': 'Student Added Successfully'})
        except ValidationError as e:
            return Response({'error': e.message_dict})


@api_view(['POST'])
def login(request):
    data = request.data
    email = data.get('email')
    password = data.get('password')
    student = Student.objects.filter(email=email,password=password)
    if student:
        return Response({'message':"Founded","id":student[0].createdby,"name":student[0].name})
    else:
        print(student)
        return Response({"message":"not Founded"})

@api_view(['POST'])
def delete(request):
    if request.method == 'POST':
        data = request.data
        try:
            Student.delete(email=data.get('email'))
            return Response({'Message':'Deleted Successfully'}) 
        except Student.DoesNotExist as e:
            return Response({'error':'user donot exist'})
        

@api_view(['POST'])
def getStudent(request):
    data = request.data
    name = data.get('name')
    id = data.get('id')
    student = Student.objects.filter(name=name,createdby=id)
    if student:
        return Response({'message':"Founded","email":student[0].email,"course":student[0].course,'name':student[0].instituteName})
    else:
        print(student)
        return Response({"message":"not Founded"})
    

@api_view(['POST'])
def getAllStudents(request):
    data = request.data
    id = data.get('id')
    student = Student.objects.filter(createdby=id)
    studList = []
    for i in student:
        studList.append({
            "name":i.name,
            'email':i.email,
            'rollNo':i.rollNo,
            'phoneNo':i.phoneNo,
            'course':i.course,
            'password':i.password
        })
    print(student)
    if student:
        return Response({'message':studList})
    else:
        return Response({'message':"No student Found"})
