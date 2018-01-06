#!/usr/bin/env python
from jinja2 import Environment, FileSystemLoader, select_autoescape
env = Environment(
    loader=FileSystemLoader('generate/templates'),
    autoescape=select_autoescape(['html', 'xml']),
    trim_blocks=True,
    lstrip_blocks=True,
)

def filter_func(x):
    return x.startswith('pages/')

for templateName in env.list_templates(filter_func=filter_func):
    template = env.get_template(templateName)
    newName = str.replace(templateName, 'pages/', '')
    template.stream().dump(newName)
