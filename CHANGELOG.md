# Changelog

All notable changes to the CCPM (Claude Code Project Management) plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.3] - 2025-10-21

### 🐛 Fixed
- **Hooks Issue**: Fixed permission-related hooks issues on some Claude Code sessions
- **Installation Errors**: Added comprehensive error handling for `.claude/commands` directory permission problems
- **Cross-Environment Compatibility**: Improved plugin installation across different user permission contexts

### 🔧 Improved
- **Error Messages**: Enhanced troubleshooting guidance with specific solutions for permission issues
- **Installation Robustness**: Better fallback mechanisms when directory creation fails
- **User Experience**: Clear error messages with actionable resolution steps

### 📋 Context
- This release addresses installation failures that occurred when the `.claude` directory has restrictive permissions
- Users experiencing "EACCES: permission denied" errors will now receive helpful guidance
- Tested and verified in multiple environment configurations including enterprise setups

---

## [1.0.2] - 2025-10-21

### 🚀 Added
- **Executable Commands**: Implemented fully functional slash commands as executable markdown files
- **Command Validation**: Added JSON syntax validation for all generated configuration files
- **GitHub Integration**: Automatic detection and configuration of GitHub repositories
- **Status Reporting**: Comprehensive project status display with statistics and activity tracking

### 🔧 Improved
- **Installation Process**: Complete rewrite of command installation mechanism
- **Symlink Handling**: Robust symlink creation with fallback to file copying
- **Configuration Generation**: Dynamic configuration based on project environment
- **Docker Testing**: Verified installation process via containerized testing environment

### 🐛 Fixed
- **Broken Symlinks**: Resolved issues with invalid symlink paths in plugin repository
- **Installation Failures**: Fixed EEXIST errors during command installation
- **Command Structure**: Converted documentation-only commands to fully executable implementations

---

## [1.0.1] - 2025-10-20

### 🔧 Added
- **Plugin Configuration**: Initial plugin structure and configuration files
- **Marketplace Setup**: Configured for Claude Code marketplace distribution
- **Command Framework**: Basic slash command structure and routing
- **Package Metadata**: Complete npm package configuration with dependencies

---

## [1.0.0] - 2025-10-15

### 🎉 Initial Release
- **Project Fork**: Forked from CCPM original codebase
- **Basic Structure**: Established core plugin architecture
- **Command Definitions**: Defined comprehensive project management command set
- **Documentation**: Initial README and installation instructions

### 📋 Features
- **PRD Management**: Product Requirements Document workflow
- **Epic Management**: Large feature tracking and decomposition
- **Issue Management**: GitHub issues integration
- **Git Worktree Support**: Parallel development workflow
- **AI Agent Management**: Parallel task execution capabilities

---

## Version Legend

- 🎉 **Major**: New features or breaking changes
- 🚀 **Added**: New functionality
- 🔧 **Improved**: Enhanced existing features
- 🐛 **Fixed**: Bug fixes and resolution of issues
- 📋 **Documentation**: Documentation updates and clarifications

## Support

For questions, issues, or feature requests:
- **GitHub Issues**: [Create an issue](https://github.com/jeffersonwarrior/ccpm/issues)
- **Documentation**: [CCPM README](https://github.com/jeffersonwarrior/ccpm)
- **Author**: [Jefferson Nunn](https://jeffersonnunn.com)