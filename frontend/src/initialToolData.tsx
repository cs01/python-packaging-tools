import { Tool } from './Types';
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
      'virtual environment management',
      'install cli apps',
      'dependency resolver',
      'install libraries',
      'build packages',
      'convert between lockfile formats',
    ],
    name: 'dephell',
    toolDescription:
      'dephell includes numerous project management functions: Manage packages: convert between formats, lock, install, resolve, isolate, test, build graph, show outdated, audit. Manage venvs, build package, bump version.',
    useCases: [],
    dependsOn: ['venv', 'virtualenv', 'pip'],
  },
  {
    features: ['build packages', 'PEP-517'],
    name: 'python-build',
    toolDescription:
      'A simple, correct PEP517 package builder. python-build will invoke the PEP 517 hooks to build a distribution package. It is a simple build tool, it does no dependency management.',
    useCases: [],
    dependsOn: [],
  },
  {
    features: [
      'build packages',
      'PEP-517',
      'dependency resolver',
      'install cli apps',
    ],
    name: 'pdm',
    toolDescription:
      "PDM is meant to be a next generation Python package management tool. It was originally built for personal use. If you feel you are going well with Pipenv or Poetry and don't want to introduce another package manager, just stick to it. But if you are missing something that is not present in those tools, you can probably find some goodness in pdm.",
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
    ],
    name: 'pyflow',
    toolDescription:
      "Pyflow streamlines working with Python projects and files. It's an easy-to-use CLI app with a minimalist API. Never worry about having the right version of Python or dependencies.",
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
    features: ['manual virtual environment creation', 'standard library'],
    toolDescription:
      "The venv module provides support for creating lightweight “virtual environments” with their own site directories, optionally isolated from system site directories. Each virtual environment has its own Python binary (which matches the version of the binary that was used to create this environment) and can have its own independent set of installed Python packages in its site directories. venv was introduced in Python 3.5 to adopt the 3rd party library virtualenv into CPython's standard library.",
    useCases: [],
    dependsOn: [],
    createdAt: '2015-09-13T00:00:00Z',
    primaryLanguage: { name: 'Python' },
    name: 'venv',
    url: 'https://docs.python.org/3/library/venv.html',
  },
];
_initialToolData.sort((a, b) => {
  return a.name < b.name ? -1 : 1;
});
export const initialToolData = _initialToolData;
