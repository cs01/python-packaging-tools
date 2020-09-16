import { Tool } from './Types';
export const initialToolData: Tool[] = [
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
    features: ['build packages', 'publish packages'],
    name: 'flit',
    toolDescription:
      'Flit is a simple way to put pure Python packages and modules on PyPI.',
    useCases: [],
    dependsOn: ['pip', 'venv'],
  },
  {
    features: ['build packages'],
    name: 'python-build',
    toolDescription:
      'A simple, correct PEP517 package builder. python-build will invoke the PEP 517 hooks to build a distribution package. It is a simple build tool, it does no dependency management.',
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
      'A tool for creating isolated virtual (isolated) python environments. This is essentially a 3rd party package that duplicates the standard libary venv module.',
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
      'Setuptools is a fully-featured, actively-maintained, and stable library designed to facilitate packaging Python projects. setuptools builds redistributable packages from source, but does not publish them to PyPI.',
    useCases: [],
    dependsOn: [],
    name: 'setuptools',
  },
  {
    features: ['manual virtual environment creation', 'standard library'],
    toolDescription:
      'The venv module provides support for creating lightweight “virtual environments” with their own site directories, optionally isolated from system site directories. Each virtual environment has its own Python binary (which matches the version of the binary that was used to create this environment) and can have its own independent set of installed Python packages in its site directories.',
    useCases: [],
    dependsOn: [],
    createdAt: '2015-09-13T00:00:00Z',
    primaryLanguage: { name: 'Python' },
    name: 'venv',
    url: 'https://docs.python.org/3/library/venv.html',
  },
];
