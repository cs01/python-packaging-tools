import { Tool } from './Types';

const zipAppDescription =
  'Makes "python executables", which are files that can be run directly, but require a python interpreter available on the system. This is part of a group of tools that utilize the zipapp feature of the standard library.';

const _initialToolData: Tool[] = [
  {
    features: ['install cli apps', 'install libraries'],
    name: 'pip',
    useCases: ['Install libraries', 'Install CLI tools'],
    dependsOn: [],
    toolDescription:
      'pip is the package installer for Python. You can use pip to install packages from the Python Package Index (PyPI) and other indexes.',
  },
  {
    features: ['install cli apps', 'virtual environment management'],
    name: 'pipx',
    toolDescription:
      'pipx runs and installs cli tools in virtual environments. It focuses and improves on a specific use case handled by pip.',
    useCases: ['Install cli tools to isolated environment'],
    dependsOn: ['pip', 'venv'],
  },
  {
    features: ['build packages', 'publish packages', 'PEP-517', 'PEP-518'],
    name: 'flit',
    toolDescription:
      'Flit is a simple way to put pure Python packages and modules on PyPI.',
    useCases: [],
    dependsOn: ['pip', 'venv'],
  },
  {
    features: ['package manager', 'ecosystem'],
    name: 'conda',
    toolDescription:
      'Conda is a cross-platform, language-agnostic binary package manager. It is the package manager used by Anaconda installations, but it may be used for other systems as well. Conda makes environments first-class citizens, making it easy to create independent environments even for C libraries.',
    useCases: [],
    dependsOn: [],
  },
  {
    features: [
      'build packages',
      'PEP-517',
      'PEP-582',
      'dependency resolver',
      'install cli apps',
    ],
    name: 'pdm',
    toolDescription:
      'Helps you declare, manage, and install dependencies of Python projects. ' +
      'It does not use virtual environments at all. ' +
      'Instead it installs packages to a local directory called __pypackages__ (PEP-582).',
    useCases: [],
    dependsOn: [],
  },
  {
    features: [
      'virtual environment management',
      'build packages',
      'publish packages',
      'dependency resolver',
      'PEP-517',
      'PEP-582',
    ],
    name: 'pyflow',
    toolDescription:
      'Pyflow streamlines working with Python projects and files. ' +
      "It's an easy-to-use CLI app with a minimalist API. " +
      'Never worry about having the right version of Python or dependencies. ' +
      'Instead of using virtual environments, it installs packages to a local ' +
      'directory named __pypackages__ (PEP-582)',
    useCases: [],
    dependsOn: [],
  },
  {
    features: ['dependency resolver'],
    name: 'pip-tools',
    toolDescription:
      'pip-tools takes abstract dependencies and outputs concrete dependencies to a lock file.',
    useCases: ['Separate abstract dependencies from fully resolved lock file'],
    dependsOn: ['pip'],
  },
  {
    features: [
      'publish packages',
      'build packages',
      'dependency resolver',
      'application deployment',
      'task automation',
      'virtual environment management',
    ],
    toolDescription: `Poetry helps you declare, manage and install dependencies of Python projects. It also can publish packages to PyPI.`,
    useCases: [],
    dependsOn: ['pip', 'virtualenv'],
    name: 'poetry',
  },
  {
    features: [
      'publish packages',
      'build packages',
      'application deployment',
      'task automation',
      'virtual environment management',
    ],
    toolDescription: `Hatch is a tool for managing the entire lifecycle of a project including creation, versioning, building, environment management, and publishing. Its plugin system allows for easily extending functionality.`,
    useCases: [],
    dependsOn: ['pip', 'virtualenv'],
    name: 'hatch',
  },
  {
    features: [
      'virtual environment management',
      'dependency resolver',
      'task automation',
      'application deployment',
    ],
    name: 'pipenv',
    toolDescription:
      'pipenv automatically creates and manages a virtualenv for your projects, as well as adds/removes packages from a Pipfile as you install/uninstall packages. It also generates Pipfile.lock, which is used to produce deterministic builds.',
    useCases: [],
    dependsOn: ['pip', 'virtualenv', 'venv'],
  },
  {
    features: ['PEP-517', 'PEP-660', 'build packages'],
    name: 'build',
    toolDescription:
      'build will invoke the PEP 517 hooks to build a distribution package. ' +
      'It is a simple build tool and does not perform any dependency management.',
    useCases: [],
    dependsOn: [],
  },
  {
    features: ['PEP-517', 'build packages', 'core utilities'],
    name: 'pep517',
    toolDescription:
      'Given source code and a build backend (as specified by PEP-518), ' +
      '`pep517` provides access to various backend "hooks" such as building a binary distribution. ' +
      'You are responsible for ensuring build requirements are available.',
    useCases: [],
    dependsOn: [],
  },
  {
    features: [
      'virtual environment management',
      'application deployment',
      'task automation',
    ],
    name: 'tox',
    toolDescription:
      'Command line driven CI frontend and development task automation tool',
    useCases: [],
    createdAt: '2010-09-13T00:00:00Z',
    dependsOn: ['pip', 'virtualenv', 'venv'],
  },
  {
    features: [
      'virtual environment management',
      'application deployment',
      'task automation',
    ],
    name: 'nox',
    toolDescription:
      'nox is a command-line tool that automates task running, application deployment, and testing in multiple Python environments, similar to tox. Unlike tox, Nox uses a standard Python file for configuration.',
    useCases: [],
    dependsOn: ['pip', 'virtualenv', 'venv'],
  },
  {
    features: ['manual virtual environment creation'],
    name: 'virtualenv',
    toolDescription:
      'A tool for creating isolated virtual Python environments. This is a predecessor of the Python 3.5+ standard library venv module, with improvements such as vastly faster virtualenv creation added in subsequent versions.',
    useCases: [],
    dependsOn: [],
  },
  {
    features: ['install Python interpreter'],
    name: 'pyenv',
    toolDescription:
      'pyenv lets you switch between multiple versions of Python on your machine',
    useCases: [],
    dependsOn: [],
  },
  {
    features: ['publish packages'],
    name: 'twine',
    toolDescription:
      'Twine is a utility for publishing Python packages on PyPI. Twine only publishes built packages; it does not build them itself.',
    useCases: [],
    dependsOn: [],
  },
  {
    features: ['build packages'],
    toolDescription:
      "Setuptools is a fully-featured, actively-maintained, and stable library to build redistributable packages from source, but does not publish them to PyPI. It provides the function that is called in the setup.py files you've probably seen before.",
    useCases: [],
    dependsOn: [],
    name: 'setuptools',
  },
  {
    name: 'pex',
    features: ['builds executable'],
    toolDescription: zipAppDescription,
    useCases: [],
    dependsOn: ['zipapp'],
  },
  {
    name: 'zipapp',
    features: ['builds executable', 'standard library'],
    toolDescription: zipAppDescription,
    useCases: [],
    dependsOn: [],
  },
  {
    name: 'shiv',
    features: ['builds executable'],
    toolDescription: zipAppDescription,
    useCases: [],
    dependsOn: [],
  },
  {
    name: 'PyOxidizer',
    features: ['builds executable'],
    toolDescription:
      'PyOxidizer is a [Rust] application for streamlining the creation of distributable Python applications. ' +
      'Binaries produced with PyOxidizer are portable. PyOxidizer generate binaries embedding a Python interpreter and a custom Python application. ',
    useCases: [],
    dependsOn: [],
  },
  {
    name: 'pyinstaller',
    features: ['builds executable'],
    toolDescription:
      'PyInstaller bundles a Python application and all its dependencies into a single package. ' +
      'The user can run the packaged app without installing a Python interpreter or any modules. ' +
      'PyInstaller supports Python 3.7 and newer, and correctly bundles many major Python packages ' +
      'such as numpy, matplotlib, PyQt, wxPython, and others.',
    useCases: [],
    dependsOn: [],
  },
  {
    name: 'xar',
    features: ['builds executable'],
    toolDescription:
      'Similar to a zipapp, but contents do not have to be extracted to run. ' +
      'A .xar file is a read-only file system image which looks like a regular directory to user-space programs. ' +
      'This can replace virtualenvs and PEX files with a system that is faster, has less overhead, ' +
      'is more compatible, and achieves better compression. This requires a one-time installation of a ' +
      'driver for this file system (SquashFS).',
    useCases: [],
    dependsOn: ['FUSE filesystem', 'linux/mac'],
  },
  {
    name: 'venv',
    features: ['manual virtual environment creation', 'standard library'],
    toolDescription:
      "The venv module provides support for creating lightweight “virtual environments” with their own site directories, optionally isolated from system site directories. Each virtual environment has its own Python binary (which matches the version of the binary that was used to create this environment) and can have its own independent set of installed Python packages in its site directories. venv was introduced in Python 3.5 to adopt the 3rd party library virtualenv into CPython's standard library.",
    useCases: [],
    dependsOn: [],
    createdAt: '2015-09-13T00:00:00Z',
    primaryLanguage: { name: 'Python' },
    url: 'https://docs.python.org/3/library/venv.html',
  },
  {
    name: 'Nuitka',
    features: ['builds executable'],
    toolDescription:
      'Nuitka can compile Python programs to single executables. ' +
      'And the emphasis is on compile: Nuitka actually converts Python ' +
      'to C and compiles that. Nuitka is effectively an alternate Python interpreter.',
    useCases: [],
    dependsOn: [],
  },
  {
    name: 'packaging',
    features: ['core utilities', 'PEP-440', 'PEP-425'],
    toolDescription:
      'Reusable core utilities for various Python Packaging interoperability specifications. ' +
      'This library provides utilities that implement the interoperability specifications which have clearly one correct behaviour ' +
      '(eg: PEP 440) or benefit greatly from having a single shared implementation (eg: PEP 425). ' +
      'The packaging project includes the following: version handling, specifiers, markers, requirements, tags, utilities. ',
    useCases: [],
    dependsOn: [],
  },
  {
    name: 'PyO3',
    features: ['language bindings'],
    toolDescription:
      'Rust bindings for Python, including tools for creating native Python ' +
      'extension modules. Running and interacting with Python code from a Rust binary is also supported.',
    useCases: [],
    dependsOn: [],
  },
  {
    name: 'pybind11',
    features: ['language bindings'],
    toolDescription:
      'pybind11 is a lightweight header-only library that exposes C++ types in ' +
      'Python and vice versa, mainly to create Python bindings of existing C++ code.',
    useCases: [],
    dependsOn: [],
  },
];
_initialToolData.sort((a, b) => {
  return a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1;
});
export const initialToolData = _initialToolData;
