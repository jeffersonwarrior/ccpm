# /pm init

Initialize CCPM (Claude Code Project Management) in the current project.

This command sets up the necessary directory structure, configuration files, and Git integration for CCPM to work properly.

## What it does:

1. **Creates project structure**:
   - `ccpm/` directory for local CCPM files
   - `specs/` directory for PRDs and specifications
   - `worktrees/` directory for Git worktrees

2. **Sets up configuration**:
   - Creates `ccpm.config` file with project settings
   - Configures GitHub repository integration
   - Sets up issue tracking templates

3. **Initializes Git integration**:
   - Checks for Git repository
   - Sets up branch naming conventions
   - Configures worktree support

4. **Validates environment**:
   - Checks for required tools (git, gh CLI)
   - Validates GitHub authentication
   - Verifies repository permissions

## Usage:

```bash
/pm init
```

## Configuration options:

The command will prompt for:
- GitHub repository URL
- Default branch name
- Issue labels and milestones
- Team member usernames

## Example output:

```
🚀 Initializing CCPM in project...

✅ Created project structure
✅ Generated configuration file
✅ Set up GitHub integration
✅ Validated environment

📊 Project initialized successfully!
🎯 Next steps:
   /pm prd-new    # Create your first PRD
   /pm status     # Check project status
```