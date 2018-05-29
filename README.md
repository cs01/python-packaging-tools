A summary of package management tools in the Python ecosystem

|                                                                        | poetry | pipenv | pip | virtualenv | setup.py | twine | pyenv | pipsi |
|------------------------------------------------------------------------|--------|--------|-----|------------|----------|-------|-------|-------|
| installs abstract dependencies                                         | ✔️      | ✔️      | ✔️   | ✖️          | ✔️        | ✖️     | ✖️     | ✖️     |
| installs concrete dependencies                                         | ✔️      | ✔️      | ✔️   | ✖️          | ✖️        | ✖️     | ✖️     | ✖️     |
| isolates Python environments                                           | ✔️      | ✔️      | ✖️   | ✔️          | ✖️        | ✖️     | ✖️     | ✔️     |
| captures packaging metadata (name, version, author, etc)               | ✔️      | ✖️      | ✖️   | ✖️          | ✔️        | ✖️     | ✖️     | ✖️     |
| file format based on a PEP                                             | ✔️      | ✖️      | ✖️   | ✖️          | ✔️        | ✖️     | ✖️     | ✖️     |
| automatically creates virtual environments                              | ✔️      | ✔️      | ✖️   | ✖️          | ✖️        | ✖️     | ✖️     | ✖️     |
| generates concrete dependencies from abstract dependencies (requirements.txt or lock file) | ✔️      | ✔️      | ✔️   | ✖️          | ✖️        | ✖️     | ✖️     | ✖️     |
| can generate lock file with hashes                                     | ✔️      | ✔️      | ✖️   | ✖️          | ✖️        | ✖️     | ✖️     | ✖️     |
| builds packages suitable for distribution on PyPI                       | ✔️      | ✖️      | ✖️   | ✖️          | ✔️        | ✖️     | ✖️     | ✖️     |
| publishes packages to PyPI                                               | ✔️      | ✖️      | ✖️   | ✖️          | ✖️        | ✔️     | ✖️     | ✖️     |
| can enter shell for virtual environment                                | ✖️      | ✔️      | ✖️   | ✔️          | ✖️        | ✖️     | ✖️     | ✖️     |
| installs specific Python versions to system                            | ✖️      | ✔️      | ✖️   | ✖️          | ✖️        | ✖️     | ✔️     | ✖️     |
| globally installs and sandboxes Python packages that have command-line entry points | ✖️      | ✖️      | ✖️   | ✖️          | ✖️        | ✖️     | ✖️     | ✔️     |

Disclaimer: I did not author or maintain any of these tools and strive to keep this list as impartial as possible.

This information is accurate to the best of my knowledge. If anything is incorrect or missing please submit a pull request or create an issue.
