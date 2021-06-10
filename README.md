# FAIMS 2->3 converter

Apache 2 License


To get submodules
```
$ git submodule init
$ git pull --recurse-submodules
```

This is designed to work with a local python 3.9.5 environment.

* [Install direnv](https://direnv.net/docs/installation.html)
* [Install pyenv](https://github.com/pyenv/pyenv#installation)

If you're using direnv > 2.21.0, the local envrc should work

`$ pip install .` should then work.

invoke with ./convertAll.sh
