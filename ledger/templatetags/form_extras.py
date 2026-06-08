from django import template

register = template.Library()


@register.filter(name="add_class")
def add_class(field, css):
    """Render a bound form field with extra CSS classes merged in.

    Usage in templates:  {{ form.email|add_class:"input" }}
    Lets the shared design-system classes be applied to Django-rendered
    widgets without editing every form definition.
    """
    try:
        existing = field.field.widget.attrs.get("class", "")
        merged = (existing + " " + css).strip()
        return field.as_widget(attrs={**field.field.widget.attrs, "class": merged})
    except AttributeError:
        # Not a bound field (e.g. already-rendered string) — return unchanged.
        return field


@register.filter(name="split")
def split(value, sep=","):
    """Split a string into a list: {{ "a,b,c"|split:"," }}"""
    return str(value).split(sep)


@register.filter(name="add_attr")
def add_attr(field, arg):
    """Add a single attribute: {{ form.email|add_attr:"placeholder:Email" }}"""
    try:
        key, _, val = arg.partition(":")
        return field.as_widget(attrs={**field.field.widget.attrs, key: val})
    except AttributeError:
        return field
