"""
URL configuration for money_log project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from django.urls import include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView
from accounts.views import RecaptchaLoginView


urlpatterns = [
    path("admin/", admin.site.urls),

    path("login/", RecaptchaLoginView.as_view(), name="login"),
    path("accounts/", include("accounts.urls")),

    # Design-system reference page (internal).
    path(
        "styleguide/",
        login_required(
            TemplateView.as_view(
                template_name="styleguide.html",
                extra_context={"active_page": "styleguide", "hide_whatif": True},
            )
        ),
        name="styleguide",
    ),

    path("", include("dashboard.urls")),
    path("ledger/", include("ledger.urls")),
    path("notes/", include("notes.urls")),
    path("savings/", include("savings.urls")),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
