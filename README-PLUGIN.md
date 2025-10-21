# @jeffersonwarrior/ccpm

This converts the CCPM (Claude Code Project Management) system into a proper plugin that can be easily installed, managed, and updated.

## Quick Start

### Install the Plugin
```bash
# Using the plugin installer
node install-plugin.js install

# Or using npm (if published)
npm install @jeffersonwarrior/ccpm
```

### Initialize CCPM in Your Project
```bash
# After plugin installation, run
/pm init
```

## Plugin Commands

### Plugin Management
```bash
# Install CCPM plugin
node install-plugin.js install

# Update CCPM plugin
node install-plugin.js update

# Uninstall CCPM plugin
node install-plugin.js uninstall

# Check plugin status
node install-plugin.js status

# Show help
node install-plugin.js help
```

### CCPM Workflow Commands
Once installed, you get access to all CCPM commands:

```bash
# Project management
/pm init                    # Initialize CCPM in project
/pm status                  # Show project status
/pm help                    # Show all commands

# Epic management
/pm epic-list              # List all epics
/pm epic-start <name>      # Start working on an epic
/pm epic-status            # Show epic status

# Issue management
/pm issue-start <number>   # Start working on issue
/pm issue-status           # Show issue status

# PRD management
/pm prd-new                # Create new PRD
/pm prd-list               # List PRDs
/pm prd-parse              # Parse PRD into issues
```

## Plugin Architecture

The plugin provides:

- **Automatic Installation**: Clones CCPM repository and sets up structure
- **Configuration Management**: Handles config backups and restoration
- **Update Management**: Safe updates with configuration preservation
- **Clean Uninstallation**: Removes plugin while preserving user data
- **Status Monitoring**: Shows installation and configuration status

## Directory Structure

```
@jeffersonwarrior/ccpm/
├── package.json           # Plugin metadata
├── plugin.js             # Main plugin class
├── install-plugin.js     # CLI installer
├── README-PLUGIN.md      # This file
└── ccpm/                 # CCPM installation (created after install)
    ├── commands/         # All CCPM commands
    ├── agents/           # AI agent definitions
    ├── scripts/          # Utility scripts
    ├── rules/            # Processing rules
    └── ccpm.config       # Configuration file
```

## Integration with Claude Code

The plugin integrates seamlessly with Claude Code by:

1. **Slash Commands**: All CCPM commands available as `/pm/*`
2. **File Operations**: Manages project files and directories
3. **Git Integration**: Handles worktrees and branch management
4. **GitHub Integration**: Manages issues and pull requests
5. **AI Agents**: Provides parallel execution capabilities

## Configuration

After installation, configure CCPM by editing `ccpm/ccpm.config`:

```json
{
  "github": {
    "owner": "your-username",
    "repo": "your-repo"
  },
  "worktree": {
    "base-dir": "../worktrees"
  },
  "agents": {
    "max-parallel": 3
  }
}
```

## Migration from Manual Installation

If you previously manually installed CCPM:

1. Backup your current `ccpm.config` file
2. Run `node install-plugin.js install`
3. Restore your configuration to the new location
4. Delete the old manual installation

## Support

- **Issues**: [GitHub Issues](https://github.com/jeffersonwarrior/ccpm/issues)
- **Documentation**: [CCPM README](https://github.com/jeffersonwarrior/ccpm)
- **Author**: [Jefferson Nunn](https://jeffersonnunn.com)

## License

MIT License - see [LICENSE](https://github.com/jeffersonwarrior/ccpm/blob/main/LICENSE) for details.