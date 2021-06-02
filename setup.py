import setuptools

import versioneer

setuptools.setup(
    name = "faims2_to_3",
    version = versioneer.get_version(),
    packages = setuptools.find_packages('src'),
    package_dir = {'': 'src'},
    install_requires = [
        "attrs",
    ],
    python_requires = '>=3.5',
    cmdclass=versioneer.get_cmdclass(),
    entry_points = {
        'console_scripts': [
            "faims2-to-3 = faims2_to_3:main",
            "faims2-to-3-upload = faims2_to_3:upload",
        ],
    },
)
