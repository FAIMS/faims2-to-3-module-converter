from collections import defaultdict


def get_archents(data_schema):
    archents = defaultdict(dict)
    for entity in data_schema:
        # We're going to ignore relns for now. The FAIMS 1-2 implementation never panned out the way I wanted.
        if entity.tag == "ArchaeologicalElement":
            archent = entity.attrib["name"]
            archents[archent]["properties"] = {}
            archents[archent]["name"] = archent
            for element in entity:
                if element.tag == "description" and element.text:
                    archents[archent]["description"] = element.text
                elif element.tag == "property":
                    element_name = element.attrib["name"]
                    archents[archent]["properties"][element_name] = {
                        "name": element_name,
                        "type": element.attrib["type"],
                        "isIdentifier": element.attrib.get("isIdentifier", False),
                    }
                    archents[archent]["properties"][element_name][
                        "description"
                    ] = element.find("description").text
                    archents[archent]["properties"][element_name][
                        "formatString"
                    ] = element.find("formatString").text
                    archents[archent]["properties"][element_name][
                        "appendCharacterString"
                    ] = (
                        element.find("appendCharacterString").text
                        if element.find("appendCharacterString") is not None
                        else None
                    )
                    if lookup := element.find("lookup"):
                        archents[archent]["properties"][element_name]["vocab"] = []
                        for vocab in lookup:

                            archents[archent]["properties"][element_name][
                                "vocab"
                            ].append(
                                {
                                    "term": vocab.text.strip(),
                                    "desc": vocab.find("description").text.strip(),
                                    "pictureURL": vocab.get("pictureUrl", None),
                                }
                            )
    # pprint(archents, indent=1, compact=True, width=200)
    return archents
