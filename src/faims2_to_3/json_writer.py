from pprint import pprint
import json

from .find_module import get_module_files
from .parse_data_schema import get_archents
from .parse_ui_schema import get_ui_layout
from . import models


def parse_options(database_entry_doc):
    return models.OptionList(*[
        models.Option(value=vocab["term"], label=vocab["term"])
        for vocab in database_entry_doc["vocab"]
    ])


def parse_field(field):
    field_name = field["element_name"]
    database_entry_doc = field["database_entry"]
    if not database_entry_doc:
        return models.UnknownField(
            field_name=field_name, helper_text="No database entry",
        )
    database_entry_type = database_entry_doc.get("type")
    if database_entry_type is None:
        return models.UnknownField(
            field_name=field_name, helper_text="No entry type",
        )
    if database_entry_type == "measure":
        # TODO: Ideally we would work out what form element should be used, but
        # we're going to treat everything as a string for now :(
        return models.StringField(
            field_name=field_name,
            helper_text=database_entry_doc["description"],
            label=database_entry_doc["name"],
        )
    if database_entry_type == "vocab":
        # TODO: Ideally we would work out what form element should be used, but
        # we're going to treat everything as a select for now :(
        return models.SelectField(
            field_name=field_name,
            helper_text=database_entry_doc["description"],
            label=database_entry_doc["name"],
            options=parse_options(database_entry_doc)
        )
    return models.UnknownField(
        field_name=field_name,
        helper_text="Unknown entry type {}".format(database_entry_type),
    )


def build_ui_spec(ui_data):
    ui_spec = models.UISpecification()
    for tabgroup_key, tabgroup in ui_data.items():
        # pprint(tabgroup.keys())
        for tab_key, tab in tabgroup["tabs"].items():
            view = models.View(view_name=tab["display_name"])
            # pprint(tab.keys())
            for field_key, field in tab["fields"].items():
                view.append(parse_field(field))
                # add to view
            ui_spec.append(view)
    return ui_spec


def write_ui_spec(*, module_path, output_path):
    data_schema, ui_schema = get_module_files(module_path)

    parsed_data_schema = get_archents(data_schema)

    parsed_ui_schema = get_ui_layout(ui_schema, parsed_data_schema)

    json_string = json.dumps(build_ui_spec(parsed_ui_schema).render())
    with open(output_path / "ui-specification.json") as f:
        f.write(json_string)
