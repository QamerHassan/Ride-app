import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ridingapp.settings')  # folder name
application = get_wsgi_application()
