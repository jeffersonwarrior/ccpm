# Claude Code Plugin Installation

## Method 1: Install from GitHub Marketplace (Recommended)

```bash
# Add the marketplace
/plugin marketplace add https://github.com/jeffersonwarrior/ccpm

# Install the plugin
/plugin install @jeffersonwarrior/ccpm
```

## Method 2: Manual Installation

```bash
# Clone the repository
git clone https://github.com/jeffersonwarrior/ccpm.git
cd ccpm

# Run the installer
node install-plugin.js install

# Or install directly
/plugin install .
```

## Method 3: Local Development Setup

```bash
# Create local marketplace
mkdir -p ~/.claude/plugins/local-marketplace
cd ~/.claude/plugins/local-marketplace

# Clone plugin
git clone https://github.com/jeffersonwarrior/ccpm.git

# Add local marketplace
/plugin marketplace add ~/.claude/plugins/local-marketplace

# Install plugin
/plugin install @jeffersonwarrior/ccpm
```

## After Installation

Once installed, you can use CCPM commands:

```bash
/pm init        # Initialize CCPM in your project
/pm help        # Show all available commands
/pm status      # Show current project status
/pm epic-list   # List all epics
/pm issue-start # Start working on an issue
```

## Troubleshooting

If you encounter "Marketplace file not found" errors:

1. Ensure the repository has a `.claude-plugin/marketplace.json` file
2. Try using the manual installation method
3. Check that you have Claude Code v1.0.0 or later

## Support

- **Issues**: [GitHub Issues](https://github.com/jeffersonwarrior/ccpm/issues)
- **Author**: [Jefferson Nunn](https://jeffersonnunn.com)