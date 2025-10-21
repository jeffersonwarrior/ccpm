# /pm status

Show current project status and overview.

This command displays the current state of your CCPM project, including active epics, issues, PRDs, and overall progress.

## What it shows:

### 📊 Project Overview
- Project name and repository
- Total number of epics, issues, and PRDs
- Overall completion percentage

### 🏗️ Active Epics
- Currently running epics
- Progress for each epic
- Assigned team members

### 📋 Recent Issues
- Recently created or updated issues
- Issue status and assignments
- GitHub sync status

### 📄 PRD Status
- Number of PRDs in various states
- Last parsing activity
- Integration status

### 🌳 Git Worktrees
- Active worktrees
- Current branch
- Clean/dirty status

### 🤖 AI Agents
- Running agents
- Recent activity
- Resource usage

## Usage:

```bash
/pm status                 # Show full project status
/pm status --brief         # Show concise overview
/pm status --epics         # Show only epic status
/pm status --issues        # Show only issue status
```

## Example output:

```
📊 CCPM Project Status

🏗️ Project: my-awesome-project
📍 Repository: github.com/user/my-awesome-project
📈 Progress: 45% complete (9/20 epics)

🏗️ Active Epics (3):
   ✅ user-authentication (85% complete)
   🔄 dashboard-ui (60% complete)
   📝 payment-integration (25% complete)

📋 Recent Issues (12):
   🆕 #142 Add user profile settings (assigned to @alice)
   🔄 #141 Fix login validation (in progress)
   ✅ #140 Implement OAuth2 (completed)

📄 PRDs: 3 total, 2 parsed, 1 pending
🌳 Worktrees: 2 active, 1 clean
🤖 Agents: 1 running (code-review)
```