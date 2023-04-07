from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.password_validation import validate_password
from .models import User


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # for any additional fields you'd like to add to the JWT sent back in response
        # add below using the token["field name"] = user.name_of_property
        # token["is_student"] = user.is_student

        token["username"] = user.username
        token["first_name"] = user.first_name
        token["last_name"] = user.last_name
        token["email"] = user.email
        token["superviser_email"] = user.superviser_email
        token["pharmacy_buyer_email"] = user.pharmacy_buyer_email
        token["pyxis_manager_email"] = user.pyxis_manager_email
        return token


class RegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, validators=[
                                   UniqueValidator(queryset=User.objects.all())])
    

    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])

    class Meta:
        model = User
        # If added new columns through the User model, add them in the fields
        # list as seen below
        fields = ('username', 'password', 'email',
                  'first_name', 'last_name', 'superviser_email', 'pharmacy_buyer_email', 'pyxis_manager_email')

    def create(self, validated_data):

        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            superviser_email=validated_data['superviser_email'],
            pharmacy_buyer_email=validated_data['pharmacy_buyer_email'],
            pyxis_manager_email=validated_data['pyxis_manager_email']


            # If added new columns through the User model, add them in this
            # create method. Example below:

            # is_student=validated_data['is_student']
        )
        user.set_password(validated_data['password'])
        user.save()

        return user
