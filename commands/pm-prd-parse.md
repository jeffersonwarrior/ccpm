# /pm prd-parse

Parse a PRD (Product Requirements Document) into GitHub issues and development epics.

This command analyzes your PRD file and automatically creates structured GitHub issues organized by epics, complete with user stories, acceptance criteria, and implementation details.

## What it does:

### 📊 PRD Analysis
- Parses PRD structure and content
- Identifies features and user stories
- Extracts acceptance criteria and requirements

### 🏗️ Epic Generation
- Creates epics based on major features
- Organizes issues under appropriate epics
- Sets up milestones and dependencies

### 🎫 Issue Creation
- Creates detailed GitHub issues
- Includes user stories and acceptance criteria
- Assigns labels, priorities, and estimates
- Sets up issue dependencies

### 🔄 GitHub Integration
- Creates issues in GitHub repository
- Links related issues and epics
- Updates project boards if configured

## Usage:

```bash
/pm prd-parse                           # Parse latest PRD
/pm prd-parse --name <prd-name>         # Parse specific PRD
/pm prd-parse --dry-run                 # Show what would be created
/pm prd-parse --force                   # Re-parse existing PRD
```

## Example:

```bash
/pm prd-parse
```

Output:
```
📊 Parsing PRD: user-authentication-system.md

✅ Found 3 major features
✅ Extracted 12 user stories
✅ Generated 15 issues

🏗️ Epics created:
   ✅ user-authentication (8 issues)
   ✅ user-profile (4 issues)
   ✅ security-features (3 issues)

🎫 Issues created on GitHub:
   #145 Create login form UI
   #146 Implement OAuth2 integration
   #147 Add user registration flow
   ...

📊 Summary:
   3 epics, 15 issues created
   Estimated effort: 3 weeks
   Ready for development with: /pm epic-start user-authentication
```