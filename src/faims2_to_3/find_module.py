from pathlib import Path
import xml.etree.ElementTree as ET


def get_module_files(module_dir):
    """Loads module files into memory"""
    module_path = Path(module_dir)
    data_schema = ET.parse(module_path / "data_schema.xml").getroot()
    ui_schema = ET.parse(module_path / "ui_schema.xml").getroot()
    return (data_schema, ui_schema)
