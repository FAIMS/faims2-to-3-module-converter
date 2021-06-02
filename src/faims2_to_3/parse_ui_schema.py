XML_NAMESPACES = {
    "h": "http://www.w3.org/1999/xhtml",
    "x": "http://www.w3.org/2002/xforms"
}

def get_ui_layout(ui_schema, archent_data):
    decimal_bindings = []
    for binder in ui_schema.findall("././h:head/x:model/x:bind", XML_NAMESPACES):
        decimal_bindings.append(
            {"path": binder.get("nodeset"), "type": binder.get("type")}
        )
    # print(decimal_bindings)
    tabgroups = {}
    for group in ui_schema.findall("././h:body/x:group", XML_NAMESPACES):

        ref = group.get("ref")
        aent_link = group.get("faims_archent_type")

        if aent_link:
            # print(ET.tostring(group))

            tabgroups[ref] = {
                "view_name": ref,
                "display_name": group.find("./x:label", XML_NAMESPACES).text.strip(),
                "data_schema": aent_link,
                "tabs": {},
            }
            for tab in group.findall("./x:group", XML_NAMESPACES):
                tabref = tab.get("ref")
                tabgroups[ref]["tabs"][tabref] = {
                    "view_name": tabref,
                    "display_name": tab.find("./x:label", XML_NAMESPACES).text.strip(),
                    "fields": {},
                }
                for field in tab.findall(".//x:input", XML_NAMESPACES) + tab.findall(
                    ".//x:select1", XML_NAMESPACES
                ):

                    field_ref = field.get("ref")
                    field_type = field.tag
                    database_entry_name = field.get("faims_attribute_name")
                    field_path = f"{ref}/{tabref}/{field_ref}"  # Need to deal with binding elements... later
                    # print(aent_link, database_entry_name)
                    tabgroups[ref]["tabs"][tabref]["fields"][field_ref] = {
                        "element_name": field_ref,
                        "display_name": field.find("./x:label", XML_NAMESPACES).text.strip(),
                        "attribute_name": database_entry_name,
                        "attribute_type": field.get("faims_attribute_type"),
                        "database_entry": archent_data[aent_link]["properties"].get(
                            database_entry_name
                        ),
                    }

    return tabgroups
