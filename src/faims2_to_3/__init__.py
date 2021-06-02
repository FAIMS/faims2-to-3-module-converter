from argparse import ArgumentParser
from pathlib import Path
from sys import argv as sys_argv

from .json_writer import write_ui_spec

from ._version import get_versions
__version__ = get_versions()['version']
del get_versions


def main(argv=None):
    if argv is None:
        argv = sys_argv[1:]

    parser = ArgumentParser()
    parser.add_argument(
        '--version', action='version', version='%(prog)s ' + __version__
    )

    parser.add_argument(
        "module_dir", type=Path,
        help="This needs to point to a directory holding data_schema.xml and "
        "ui_schema.xml"
    )
    parser.add_argument(
        "out_dir", type=Path,
        help="the directory where to save the output files"
    )
    args = parser.parse_args(argv)
    return write_ui_spec(module_path=args.module_dir, output_path=args.out_dir)


def upload(argv=None):
    if argv is None:
        argv = sys_argv[1:]

    parser = ArgumentParser()
    parser.add_argument(
        '--version', action='version', version='%(prog)s ' + __version__
    )

    parser.add_argument(
        "url", help="the couchdb server access url for the project"
    )
    parser.add_argument(
        "out_dir", type=Path,
        help="the directory where the converted files were generated"
    )
    args = parser.parse_args(argv)
    return upload_files(output_path=args.out_dir, url=args.url)
