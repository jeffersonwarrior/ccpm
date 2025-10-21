# @jeffersonwarrior/ccpm

Claude Code PM - Complete project management workflow for spec-driven development, GitHub issues, Git worktrees, and parallel AI agents.

This plugin turns PRDs into epics, then issues, then code - with full traceability and parallel execution through multiple AI agents.

## 🚀 Installation

### Method 1: Claude Code Marketplace (Recommended)
```bash
# Add the marketplace
/plugin marketplace add https://github.com/jeffersonwarrior/ccpm

# Install the plugin
/plugin install ccpm
```

### Method 2: Direct Repository Install
```bash
# Install directly from GitHub
/plugin install https://github.com/jeffersonwarrior/ccpm.git
```

### Method 3: Manual Installation
```bash
# Clone the repository
git clone https://github.com/jeffersonwarrior/ccpm.git
cd ccpm

# Run the installer
node install-plugin.js install

# Then install in Claude Code
/plugin install .
```

### Method 4: npm Package (Future)
```bash
npm install @jeffersonwarrior/ccpm
```

## 🎯 Quick Start

1. **Install the plugin** using one of the methods above
2. **Initialize CCPM** in your project:
   ```bash
   /pm init
   ```
3. **Create your first PRD**:
   ```bash
   /pm prd-new
   ```
4. **Parse PRD into issues**:
   ```bash
   /pm prd-parse
   ```
5. **Start working**:
   ```bash
   /pm epic-start <epic-name>
   ```

## 📋 Complete Command Reference

### 🔧 Setup & Configuration
```bash
/pm init                    # Initialize CCPM in current project
/pm help                    # Show all available commands
/pm status                  # Show current project status
/pm validate                # Validate project configuration
/pm sync                    # Sync with GitHub issues
```

### 📄 PRD (Product Requirements Document) Management
```bash
/pm prd-new                 # Create new PRD
/pm prd-list                # List all PRDs
/pm prd-status              # Show PRD status
/pm prd-edit <name>         # Edit existing PRD
/pm prd-parse               # Parse PRD into GitHub issues
```

### 🏗️ Epic Management
```bash
/pm epic-list               # List all epics
/pm epic-show <name>        # Show epic details
/pm epic-start <name>       # Start working on epic
/pm epic-start-worktree <name>  # Start epic in Git worktree
/pm epic-status             # Show epic status
/pm epic-edit <name>        # Edit epic details
/pm epic-decompose <name>   # Decompose epic into issues
/pm epic-merge <name>       # Merge completed epic
/pm epic-close <name>       # Close epic
/pm epic-oneshot <name>     # Complete epic in one go
/pm epic-refresh <name>     # Refresh epic with latest changes
/pm epic-sync               # Sync all epics with GitHub
```

### 🎫 Issue Management
```bash
/pm issue-list              # List all issues (filtered by status)
/pm issue-show <number>     # Show issue details
/pm issue-start <number>    # Start working on issue
/pm issue-status            # Show issue status
/pm issue-edit <number>     # Edit issue details
/pm issue-close <number>    # Close issue
/pm issue-reopen <number>   # Reopen closed issue
/pm issue-analyze <number>  # Analyze issue requirements
/pm issue-sync              # Sync issues with GitHub
```

### 📊 Project Management
```bash
/pm standup                 # Generate daily standup report
/pm next                    # Show next task to work on
/pm blocked                 # Show blocked tasks
/pm in-progress             # Show tasks in progress
/pm search <query>          # Search across issues, epics, PRDs
/pm clean                   # Clean up old data
```

### 🧪 Testing & Quality
```bash
/testing:prime              # Configure testing setup
/testing:run [target]       # Execute tests intelligently
/pm test-reference-update   # Update test references
```

### 📝 Context Management
```bash
/context:create             # Create initial project documentation
/context:update             # Refresh context with changes
/context:prime              # Load context into conversation
```

### 🔀 Git & GitHub Integration
```bash
/pm import                  # Import existing GitHub issues
/code-rabbit                # Process CodeRabbit comments intelligently
```

## 🔄 Typical Workflow

### 1. Project Setup
```bash
/pm init                    # Initialize CCPM
```

### 2. Product Planning
```bash
/pm prd-new                 # Create PRD
/pm prd-parse               # Parse into issues
```

### 3. Development Workflow
```bash
/pm epic-decompose <name>   # Break down epic
/pm epic-start <name>       # Start epic
/pm issue-start <number>    # Work on specific issue
```

### 4. Daily Operations
```bash
/pm standup                 # Daily status
/pm next                    # What to work on next
/pm status                  # Overall project status
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
