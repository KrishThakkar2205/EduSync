from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Institute
from django.core.exceptions import ValidationError


@api_view(['GET', 'POST'])
def create_institute(request):
    if request.method == 'GET':
        return Response({'message': 'Hello From Django GET'})
    else:
        data = request.data
        institute = Institute(
            name=data.get('name'),
            email=data.get('email'),
            password=data.get('password'),
        )
        try:
            # Validate data
            
            # Save to the database
            institute.save()
            return Response({'message': 'Data Received', 'id': institute.unique_id, 'instituteName': institute.name})
        except ValidationError as e:
            # Handle and format validation error messages
            return Response({'error': e.message_dict})


@api_view(['POST'])
def login_institute(request):
    data = request.data
    email = data.get('email')
    password = data.get('password')
    institute = Institute.objects.filter(email=email,password=password)
    if institute:
        return Response({'message':"Founded",'id': institute[0].unique_id, 'instituteName': institute[0].name})
    else:
        return Response({"message":"not Founded"})


@api_view(['POST'])
def profile(request):
    data = request.data
    id = data.get("id")
    institute = Institute.objects.filter(unique_id=id)
    return Response({'email':institute[0].email})


@api_view(['POST'])
def isUserLoggedInOrNot(request):
    data = request.data
    id = data.get('id')
    name = data.get('instituteName')

    # Use .exists() for efficient check
    fetchInstitute = Institute.objects.filter(unique_id=id, name=name).exists()
    
    if fetchInstitute:
        return Response({"Message": "Found In Database"})
    else:
        return Response({'Message': "Not Found In Database"})
