from pathlib import Path
import xml.etree.ElementTree as ET


def get_module_files(module_dir):
    """Loads module files into memory"""
    module_path = Path(module_dir)
    data_schema = ET.parse(module_path / "data_schema.xml").getroot()
    ui_schema = ET.parse(module_path / "ui_schema.xml").getroot()
    for file in module_path.glob("*.0.properties"):
        # We don't know what the arch16n label will be, but there's only one foo.0.properties
        arch16n = file

    return (data_schema, ui_schema, arch16n)
