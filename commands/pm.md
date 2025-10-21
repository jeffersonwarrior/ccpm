# CCPM - Claude Code Project Management

Complete project management workflow for spec-driven development, GitHub issues, Git worktrees, and parallel AI agents.

## Quick Start

1. Initialize CCPM in your project:
   ```bash
   /pm init
   ```

2. Create your first PRD:
   ```bash
   /pm prd-new
   ```

3. Parse PRD into issues:
   ```bash
   /pm prd-parse
   ```

4. Start working:
   ```bash
   /pm epic-start <epic-name>
   ```

## Available Commands

### 🔧 Setup & Configuration
- `/pm init` - Initialize CCPM in current project
- `/pm help` - Show all available commands
- `/pm status` - Show current project status
- `/pm validate` - Validate project configuration
- `/pm sync` - Sync with GitHub issues

### 📄 PRD (Product Requirements Document) Management
- `/pm prd-new` - Create new PRD
- `/pm prd-list` - List all PRDs
- `/pm prd-status` - Show PRD status
- `/pm prd-edit <name>` - Edit existing PRD
- `/pm prd-parse` - Parse PRD into GitHub issues

### 🏗️ Epic Management
- `/pm epic-list` - List all epics
- `/pm epic-show <name>` - Show epic details
- `/pm epic-start <name>` - Start working on epic
- `/pm epic-start-worktree <name>` - Start epic in Git worktree
- `/pm epic-status` - Show epic status
- `/pm epic-edit <name>` - Edit epic details
- `/pm epic-decompose <name>` - Decompose epic into issues
- `/pm epic-merge <name>` - Merge completed epic
- `/pm epic-close <name>` - Close epic
- `/pm epic-oneshot <name>` - Complete epic in one go
- `/pm epic-refresh <name>` - Refresh epic with latest changes
- `/pm epic-sync` - Sync all epics with GitHub

### 🎫 Issue Management
- `/pm issue-list` - List all issues (filtered by status)
- `/pm issue-show <number>` - Show issue details
- `/pm issue-create` - Create new issue
- `/pm issue-edit <number>` - Edit existing issue
- `/pm issue-assign <number> <user>` - Assign issue to user
- `/pm issue-close <number>` - Close issue
- `/pm issue-sync` - Sync issues with GitHub

### 🌳 Git Worktree Management
- `/pm worktree-create <branch>` - Create new Git worktree
- `/pm worktree-list` - List all worktrees
- `/pm worktree-remove <branch>` - Remove Git worktree
- `/pm worktree-switch <branch>` - Switch to worktree

### 🤖 AI Agent Management
- `/pm agent-start <task>` - Start AI agent for task
- `/pm agent-list` - List running agents
- `/pm agent-stop <id>` - Stop running agent
- `/pm agent-status` - Show agent status

Use `/pm help <command>` for detailed help on any specific command.