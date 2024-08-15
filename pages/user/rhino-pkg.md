# Rhino Pkg Documentation

Rhino Pkg (command: `rhino-pkg`) is our custom meta-package manager. It was designed with simplicity and ease of use in mind. It will allow for you to search, install, remove and upgrade packages from all of our supported package manager repositories.

- We strongly urge users to utilise Rhino Pkg instead of each package manager individually.

**Rhino Pkg can be invoked with both `rhino-pkg` and `rpk`**.

## Supported repositories:
- Ubuntu Repositories (devel)
- Pacstall
- Flatpak (**Flatpak must be installed first.**)
- Snapcraft (**Snapd must be installed first.**)

⚠️ Rhino Pkg currently does not support Nix Packages. **This is being worked on.**

⚠️ There are some known issues when installing "Classic" snaps through Rhino Pkg, please use `sudo snap install` to install Classic Snaps for the moment.

⚠️ Rhino Linux **does not** support PPAs, please use Pacstall packages instead.

## Commands

| Command | Usage |
|---------|-------|
| `rhino-pkg update` | This command will upgrade all packages. |
| `rhino-pkg install [input]` | This command will search all available repositories and display a list of packages for you to install. |
| `rhino-pkg remove [input]` | This command will search through your installed apps, and allow for you to uninstall them. |
| `rhino-pkg cleanup` | This command will attempt to repair broken dependencies as well as remove unused packages for all repositories on your system. |

## Flags

| Flag | Usage |
| `--help / -h` | Pass this flag to show the help page. *Can also be done by calling the utility with no inputs or functions*
| `--description / -d` | By default Rhino Pkg will only display packages that contain the provided input within their name. Use this flag to increase the search range and display packages with the provided input and their description |
| `-y` | Pass this flag to skip through confirmation prompts. This will only work with `rhino-pkg update` and `rhino-pkg cleanup` |