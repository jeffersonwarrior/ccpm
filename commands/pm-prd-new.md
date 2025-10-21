# /pm prd-new

Create a new Product Requirements Document (PRD).

This command guides you through creating a comprehensive PRD that can be parsed into GitHub issues and development epics.

## What it helps you create:

### 📋 PRD Structure
1. **Project Overview**
   - Product name and description
   - Target users and use cases
   - Success metrics

2. **Feature Requirements**
   - User stories and acceptance criteria
   - Technical requirements
   - Design specifications

3. **Implementation Plan**
   - Priority ranking
   - Dependencies
   - Timeline estimates

4. **Success Metrics**
   - KPIs and OKRs
   - Performance criteria
   - Quality standards

## Usage:

```bash
/pm prd-new                # Interactive PRD creation
/pm prd-new --template     # Use PRD template
/pm prd-new --name "My Feature"  # Create with specific name
```

## Interactive prompts:

The command will guide you through:
- Product name and description
- Target audience and user personas
- Core features and user stories
- Technical requirements and constraints
- Success criteria and metrics
- Timeline and milestones

## Example:

```bash
/pm prd-new
```

Output:
```
📝 Creating new PRD...

🏷️  Product name: User Authentication System
📝 Description: Secure user login and registration
👥 Target users: End users, administrators
⭐ Key features: OAuth, 2FA, password reset
🎯 Success metrics: 99.9% uptime, <2s login time

✅ PRD created: specs/user-authentication-system.md
📊 Next steps:
   /pm prd-edit user-authentication-system  # Edit details
   /pm prd-parse                            # Parse into issues
```