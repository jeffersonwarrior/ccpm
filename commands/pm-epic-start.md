# /pm epic-start

Start working on an epic by creating a dedicated development environment.

This command sets up everything you need to start developing an epic: Git worktree, task list, and optionally AI agents to help with the work.

## What it does:

### 🌳 Environment Setup
- Creates dedicated Git worktree for the epic
- Switches to epic-specific branch
- Sets up development environment

### 📋 Task Preparation
- Lists all issues in the epic
- Organizes tasks by priority and dependencies
- Creates task tracking structure

### 🤖 AI Agent Setup (optional)
- Creates specialized AI agents for the epic
- Sets up parallel development agents
- Configures code review and testing agents

### 📊 Progress Tracking
- Initializes epic progress tracking
- Sets up milestones and checkpoints
- Creates status reporting

## Usage:

```bash
/pm epic-start <epic-name>                    # Start epic with default setup
/pm epic-start <epic-name> --worktree         # Create Git worktree
/pm epic-start <epic-name> --agents           # Setup AI agents
/pm epic-start <epic-name> --solo             # Single developer mode
```

## Example:

```bash
/pm epic-start user-authentication
```

Output:
```
🚀 Starting epic: user-authentication

🌳 Creating development environment...
   ✅ Created worktree: worktrees/user-authentication
   ✅ Switched to branch: epic/user-authentication
   ✅ Set up development tools

📋 Epic tasks (8 issues):
   🔄 #145 Create login form UI (in progress)
   ⏳ #146 Implement OAuth2 integration
   ⏳ #147 Add user registration flow
   ⏳ #148 Password reset functionality
   ⏳ #149 User profile management
   ⏳ #150 Session handling
   ⏳ #151 Security validation
   ⏳ #152 Unit and integration tests

🤖 AI agents ready:
   🎨 UI/UX designer agent
   💻 Backend developer agent
   🔍 Code reviewer agent
   🧪 QA tester agent

📊 Progress tracking initialized
🎯 Ready to start development!
   Next step: Start working on issue #145
```