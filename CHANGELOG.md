# Changelog

All notable changes to the CCPM (Claude Code Project Management) plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.6] - 2025-10-22

### 🐛 Fixed
- **pm-help Command**: Fixed pm-help command to execute JavaScript instead of displaying markdown documentation
- **Command Symlinks**: Updated symlinks in .claude/commands/ to point to executable files instead of .md files
- **Command Discovery**: Resolved issues where commands showed file content instead of executing functionality

### 🚀 Added
- **Executable Command Files**: Created JavaScript implementations for core commands (pm-help.js, pm-init.js, pm-status.js)
- **Dynamic Help System**: Enhanced help command with automatic command discovery and categorization
- **Command Descriptions**: Support for extracting descriptions from both .md and .js command files
- **Docker Testing**: Comprehensive testing in containerized environment to verify command functionality

### 🔧 Improved
- **Command Execution**: All commands now execute properly instead of showing static documentation
- **Error Handling**: Better error messages and fallback mechanisms for command execution
- **Command Organization**: Commands are now properly categorized and displayed in help system
- **Version Consistency**: Updated version references in code and configuration files

### 📋 Context
- This release addresses the core issue where /pm-help was displaying documentation rather than executing commands
- Users were experiencing broken command functionality due to symlinks pointing to markdown files instead of executables
- The fix ensures that all CCPM commands execute properly and provide expected functionality
- Tested and verified in both local and Docker environments

---

## [1.0.5] - 2025-10-21

### 🐛 Fixed
- **Skills Display**: Fixed skills display in /pm-help command
- **Directory Structure**: Added missing skills directory structure for CCPM plugin

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