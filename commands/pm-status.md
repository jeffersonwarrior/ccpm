# /pm status

Show current project status and overview.

This command displays the current state of your CCPM project, including active epics, issues, PRDs, and overall progress.

---

📊 **CCPM Project Status**

<!-- Check if CCPM is initialized -->
```bash
if [ ! -f "ccpm.config.json" ]; then
  echo "❌ CCPM not initialized in this project"
  echo "💡 Run '/pm init' to get started"
  exit 1
fi
```

<!-- Load configuration and show project overview -->
```bash
echo "🏗️ Project: $(python3 -c "import json; print(json.load(open('ccpm.config.json'))['project']['name'])" 2>/dev/null || echo 'Unknown')"

# Get repository info
REPO_URL=$(python3 -c "import json; data=json.load(open('ccpm.config.json')); print(data['project']['repository']['url'] if data['project'].get('repository') and data['project']['repository'].get('url') else 'Not configured')" 2>/dev/null || echo 'Not configured')
if [ "$REPO_URL" != "Not configured" ]; then
  echo "📍 Repository: $REPO_URL"
else
  echo "📍 Repository: Not configured"
fi

# Check GitHub integration
if [ -f "ccpm/github.json" ]; then
  GITHUB_ENABLED=$(python3 -c "import json; print(json.load(open('ccpm/github.json')).get('integration', {}).get('enabled', False))" 2>/dev/null || echo "False")
  if [ "$GITHUB_ENABLED" = "True" ]; then
    echo "🔗 GitHub: ✅ Connected"
  else
    echo "🔗 GitHub: ⚠️ Not configured"
  fi
else
  echo "🔗 GitHub: ❌ Not set up"
fi
```

<!-- Show project statistics -->
```bash
if [ -f "ccpm/state.json" ]; then
  echo ""
  echo "📈 Project Statistics:"

  # Read stats from state file
  python3 -c "
import json
try:
    data = json.load(open('ccpm/state.json'))
    stats = data.get('stats', {})
    print(f'   📋 Total Epics: {stats.get("totalEpics", 0)}')
    print(f'   ✅ Completed Epics: {stats.get("completedEpics", 0)}')
    print(f'   🎫 Total Issues: {stats.get("totalIssues", 0)}')
    print(f'   ✅ Completed Issues: {stats.get("completedIssues", 0)}')

    # Calculate progress
    total = stats.get('totalEpics', 0)
    completed = stats.get('completedEpics', 0)
    if total > 0:
        progress = int((completed / total) * 100)
        print(f'   📊 Progress: {progress}% complete')
    else:
        print(f'   📊 Progress: Not started')

    # Show current status
    project_status = data.get('project', {}).get('status', 'unknown')
    print(f'   🎯 Status: {project_status}')

except Exception as e:
    print(f'   ⚠️ Could not read statistics: {e}')
"
else
  echo "⚠️ State file not found"
fi
```

<!-- Show active worktrees -->
```bash
echo ""
echo "🌳 Git Status:"

# Current branch
CURRENT_BRANCH=$(git branch --show-current 2>/dev/null || echo "Not in git repository")
echo "   📍 Current Branch: $CURRENT_BRANCH"

# Git status
if git rev-parse --git-dir >/dev/null 2>&1; then
  if [ -z "$(git status --porcelain)" ]; then
    echo "   ✅ Working Directory: Clean"
  else
    CHANGED_FILES=$(git status --porcelain | wc -l | tr -d ' ')
    echo "   🔄 Working Directory: $CHANGED_FILES files changed"
  fi
else
  echo "   ⚠️ Not a git repository"
fi

# Worktrees
if [ -d "worktrees" ]; then
  WORKTREE_COUNT=$(find worktrees -maxdepth 1 -type d 2>/dev/null | wc -l | tr -d ' ')
  WORKTREE_COUNT=$((WORKTREE_COUNT - 1)) # Subtract 1 for the worktrees directory itself
  if [ $WORKTREE_COUNT -gt 0 ]; then
    echo "   🌲 Active Worktrees: $WORKTREE_COUNT"
  else
    echo "   🌲 Active Worktrees: None"
  fi
else
  echo "   🌲 Active Worktrees: Directory not found"
fi
```

<!-- Show directory structure -->
```bash
echo ""
echo "📁 CCPM Directory Structure:"

for dir in ccpm specs worktrees; do
  if [ -d "$dir" ]; then
    ITEM_COUNT=$(find "$dir" -type f 2>/dev/null | wc -l | tr -d ' ')
    echo "   ✅ $dir/ ($ITEM_COUNT files)"
  else
    echo "   ❌ $dir/ (missing)"
  fi
done
```

<!-- Show configuration files status -->
```bash
echo ""
echo "⚙️ Configuration Files:"

for config_file in ccpm.config.json ccpm/state.json ccpm/github.json; do
  if [ -f "$config_file" ]; then
    if python3 -m json.tool "$config_file" >/dev/null 2>&1; then
      echo "   ✅ $config_file (valid JSON)"
    else
      echo "   ⚠️ $config_file (invalid JSON)"
    fi
  else
    echo "   ❌ $config_file (missing)"
  fi
done
```

<!-- Show recent activity -->
```bash
echo ""
echo "🕐 Recent Activity:"

if [ -f "ccpm/state.json" ]; then
  LAST_ACTIVITY=$(python3 -c "
import json
try:
    data = json.load(open('ccpm/state.json'))
    last_activity = data.get('lastActivity', '')
    if last_activity:
        print(last_activity)
    else:
        print('No activity recorded')
except:
    print('Could not read activity')
" 2>/dev/null || echo "Unknown")

  echo "   📅 Last Activity: $LAST_ACTIVITY"
else
  echo "   📅 Last Activity: Unknown"
fi

# Show current time
echo "   🕐 Current Time: $(date)"
```

---

💡 **Quick Actions:**
```bash
/pm prd-new          # Create a new PRD
/pm epic-start <name> # Start working on an epic
/pm help             # Show all available commands
```