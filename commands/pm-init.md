# /pm init

Initialize CCPM (Claude Code Project Management) in the current project.

This command sets up the necessary directory structure, configuration files, and Git integration for CCPM to work properly.

---

🚀 Initializing CCPM in project...

## 1. Creating project structure

<!-- Create necessary directories -->
```bash
mkdir -p ccpm specs worktrees
```

✅ Created directory structure

## 2. Setting up configuration

<!-- Create main configuration file if it doesn't exist -->
```bash
if [ ! -f "ccpm.config.json" ]; then
  cat > ccpm.config.json << 'EOF'
{
  "project": {
    "name": "$(basename $(pwd))",
    "description": "CCPM managed project",
    "repository": {
      "url": "$(git config --get remote.origin.url 2>/dev/null || echo '')",
      "defaultBranch": "main"
    }
  },
  "directories": {
    "ccpm": "ccpm",
    "specs": "specs",
    "worktrees": "worktrees"
  },
  "github": {
    "enabled": true,
    "issueLabels": [
      "epic",
      "feature",
      "bug",
      "enhancement",
      "documentation",
      "testing",
      "infrastructure"
    ],
    "priorities": ["low", "medium", "high", "critical"],
    "statuses": ["backlog", "in-progress", "review", "done"]
  },
  "workflow": {
    "branchNaming": {
      "epic": "epic/{name}",
      "feature": "feature/{name}",
      "bugfix": "bugfix/{name}",
      "hotfix": "hotfix/{name}"
    },
    "autoAssignIssues": true,
    "requireReviewForMerge": true
  },
  "ai": {
    "maxConcurrentAgents": 3,
    "defaultAgentModel": "sonnet-4-5",
    "timeoutMinutes": 30
  },
  "created": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "lastUpdated": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
EOF
  echo "✅ Created ccpm.config.json"
else
  echo "✅ ccpm.config.json already exists"
fi
```

<!-- Create state file -->
```bash
if [ ! -f "ccpm/state.json" ]; then
  cat > ccpm/state.json << 'EOF'
{
  "project": {
    "status": "initialized",
    "currentEpic": null,
    "activeIssues": [],
    "activeWorktrees": []
  },
  "prs": {
    "active": [],
    "draft": [],
    "completed": []
  },
  "agents": {
    "running": [],
    "completed": []
  },
  "github": {
    "lastSync": null,
    "syncEnabled": true
  },
  "stats": {
    "totalEpics": 0,
    "completedEpics": 0,
    "totalIssues": 0,
    "completedIssues": 0
  },
  "initializedAt": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "lastActivity": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
EOF
  echo "✅ Created ccpm/state.json"
else
  echo "✅ ccpm/state.json already exists"
fi
```

<!-- Create GitHub integration config -->
```bash
if [ ! -f "ccpm/github.json" ]; then
  # Check if GitHub CLI is available and authenticated
  if command -v gh >/dev/null 2>&1 && gh auth status >/dev/null 2>&1; then
    GITHUB_USER=$(gh api user --jq '.login')
    REPO_URL=$(git config --get remote.origin.url 2>/dev/null || echo '')

    cat > ccpm/github.json << EOF
{
  "repository": {
    "owner": "$(echo $REPO_URL | sed -n 's/.*github.com[:/]\([^/]*\)\/.*/\1/p' || echo '$GITHUB_USER')",
    "name": "$(basename $(git rev-parse --show-toplevel 2>/dev/null || echo $(pwd)))",
    "url": "$REPO_URL",
    "defaultBranch": "main",
    "isPrivate": false
  },
  "authentication": {
    "cliInstalled": true,
    "authenticated": true,
    "user": "$GITHUB_USER",
    "tokenScopes": ["gist", "read:org", "repo"]
  },
  "integration": {
    "enabled": true,
    "autoSync": true,
    "createIssuesFromPRD": true,
    "linkIssuesToCommits": true
  },
  "labels": {
    "epic": {
      "name": "epic",
      "color": "FF6B6B",
      "description": "Large feature that spans multiple issues"
    },
    "feature": {
      "name": "feature",
      "color": "0079BF",
      "description": "New functionality or feature"
    },
    "bug": {
      "name": "bug",
      "color": "E11D21",
      "description": "Something isn't working"
    },
    "enhancement": {
      "name": "enhancement",
      "color": "84B6EB",
      "description": "Improvement to existing functionality"
    },
    "documentation": {
      "name": "documentation",
      "color": "FCE74C",
      "description": "Improvements to documentation"
    },
    "testing": {
      "name": "testing",
      "color": "5319E7",
      "description": "Test coverage and testing improvements"
    },
    "infrastructure": {
      "name": "infrastructure",
      "color": "6CC644",
      "description": "Infrastructure and deployment improvements"
    }
  },
  "lastSync": null,
  "configuredAt": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
EOF
    echo "✅ Created ccpm/github.json with GitHub integration"
  else
    echo "⚠️  GitHub CLI not available - creating basic GitHub config"
    cat > ccpm/github.json << 'EOF'
{
  "repository": {
    "owner": "",
    "name": "$(basename $(pwd))",
    "url": "",
    "defaultBranch": "main",
    "isPrivate": false
  },
  "authentication": {
    "cliInstalled": false,
    "authenticated": false
  },
  "integration": {
    "enabled": false,
    "autoSync": false
  },
  "configuredAt": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
EOF
    echo "✅ Created basic ccpm/github.json"
  fi
else
  echo "✅ ccpm/github.json already exists"
fi
```

## 3. Setting up documentation

<!-- Create specs README -->
```bash
if [ ! -f "specs/README.md" ]; then
  cat > specs/README.md << 'EOF'
# CCPM Specs Directory

This directory contains Product Requirements Documents (PRDs) and technical specifications for the project.

## Structure

- `prds/` - Product Requirements Documents
- `technical/` - Technical specifications
- `templates/` - Document templates

## Creating New PRDs

Use the CCPM command to create new PRDs:
\`\`\`bash
/pm prd-new
\`\`\`

## PRD Format

PRDs should follow the standard format:
- Executive Summary
- Problem Statement
- Success Metrics
- User Stories
- Technical Requirements
- Acceptance Criteria
EOF
  echo "✅ Created specs/README.md"
else
  echo "✅ specs/README.md already exists"
fi
```

## 4. Validating installation

<!-- Validate configuration files -->
```bash
echo "🔍 Validating installation..."

# Check if all files were created successfully
if [ -f "ccpm.config.json" ] && python3 -m json.tool ccpm.config.json >/dev/null 2>&1; then
  echo "✅ ccpm.config.json is valid JSON"
else
  echo "❌ ccpm.config.json is missing or invalid"
fi

if [ -f "ccpm/state.json" ] && python3 -m json.tool ccpm/state.json >/dev/null 2>&1; then
  echo "✅ state.json is valid JSON"
else
  echo "❌ state.json is missing or invalid"
fi

if [ -f "ccpm/github.json" ] && python3 -m json.tool ccpm/github.json >/dev/null 2>&1; then
  echo "✅ github.json is valid JSON"
else
  echo "❌ github.json is missing or invalid"
fi

# Check directories
for dir in ccpm specs worktrees; do
  if [ -d "$dir" ]; then
    echo "✅ Directory $dir/ exists"
  else
    echo "❌ Directory $dir/ missing"
  fi
done
```

---

📊 **Project initialized successfully!**

✅ **Created project structure**
- ccpm/ - Local CCPM configuration and state
- specs/ - Directory for PRDs and specifications
- worktrees/ - Directory for Git worktrees

✅ **Generated configuration files**
- ccpm.config.json - Main project configuration
- ccpm/github.json - GitHub integration settings
- ccpm/state.json - Current project state tracking

✅ **Set up GitHub integration**
- Repository detection and configuration
- GitHub CLI authentication check
- Issue labels and workflows

🎯 **Next steps:**
```bash
/pm prd-new    # Create your first PRD
/pm status     # Check project status
/pm help       # See all available commands
```