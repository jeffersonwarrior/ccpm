#!/usr/bin/env node

/**
 * /pm help - Show help for CCPM commands
 */

const fs = require('fs');
const path = require('path');

// Get all command files from the commands directory
const commandsDir = path.join(__dirname);
const commandFiles = fs.readdirSync(commandsDir)
  .filter(file => file.startsWith('pm-') && (file.endsWith('.md') || file.endsWith('.js')))
  .map(file => file.replace(/\.(md|js)$/, ''));

console.log('# CCPM - Claude Code Project Management\n');
console.log('Complete project management workflow for spec-driven development, GitHub issues, Git worktrees, and parallel AI agents.\n');

console.log('## Quick Start\n');
console.log('1. Initialize CCPM in your project:');
console.log('   ```bash');
console.log('   /pm init');
console.log('   ```\n');

console.log('2. Create your first PRD:');
console.log('   ```bash');
console.log('   /pm prd-new');
console.log('   ```\n');

console.log('3. Parse PRD into issues:');
console.log('   ```bash');
console.log('   /pm prd-parse');
console.log('   ```\n');

console.log('4. Start working:');
console.log('   ```bash');
console.log('   /pm epic-start <epic-name>');
console.log('   ```\n');

console.log('## Available Commands\n');

const categories = {
  'setup': '🔧 Setup & Configuration',
  'prd': '📄 PRD (Product Requirements Document) Management',
  'epic': '🏗️ Epic Management',
  'issue': '🎫 Issue Management',
  'worktree': '🌳 Git Worktree Management',
  'agent': '🤖 AI Agent Management',
  'skills': '🎯 Skills and AI Agent Management'
};

const commandCategories = {
  'init': 'setup',
  'help': 'setup',
  'status': 'setup',
  'validate': 'setup',
  'sync': 'setup',
  'prd-new': 'prd',
  'prd-list': 'prd',
  'prd-status': 'prd',
  'prd-edit': 'prd',
  'prd-parse': 'prd',
  'epic-list': 'epic',
  'epic-show': 'epic',
  'epic-start': 'epic',
  'epic-start-worktree': 'epic',
  'epic-status': 'epic',
  'epic-edit': 'epic',
  'epic-decompose': 'epic',
  'epic-merge': 'epic',
  'epic-close': 'epic',
  'epic-oneshot': 'epic',
  'epic-refresh': 'epic',
  'epic-sync': 'epic',
  'issue-list': 'issue',
  'issue-show': 'issue',
  'issue-create': 'issue',
  'issue-edit': 'issue',
  'issue-assign': 'issue',
  'issue-close': 'issue',
  'issue-reopen': 'issue',
  'issue-sync': 'issue',
  'worktree-create': 'worktree',
  'worktree-list': 'worktree',
  'worktree-remove': 'worktree',
  'worktree-switch': 'worktree',
  'agent-start': 'agent',
  'agent-list': 'agent',
  'agent-stop': 'agent',
  'agent-status': 'agent',
  'skills-list': 'skills'
};

// Group commands by category (remove duplicates)
const groupedCommands = {};
Object.keys(categories).forEach(category => {
  groupedCommands[category] = [];
});

const uniqueCommands = [...new Set(commandFiles)];
uniqueCommands.forEach(command => {
  const category = commandCategories[command] || 'setup';
  if (groupedCommands[category]) {
    groupedCommands[category].push(command);
  }
});

// Display commands by category
Object.keys(categories).forEach(category => {
  if (groupedCommands[category].length > 0) {
    console.log(`### ${categories[category]}`);
    groupedCommands[category].forEach(command => {
      const commandFile = path.join(commandsDir, `${command}.md`);
      let description = '';
      if (fs.existsSync(commandFile)) {
        const content = fs.readFileSync(commandFile, 'utf8');
        const firstLine = content.split('\n')[0];
        if (firstLine.startsWith('# ')) {
          description = firstLine.substring(2).trim();
        }
      } else {
        // Try to get description from JS file if no md file exists
        const jsCommandFile = path.join(commandsDir, `${command}.js`);
        if (fs.existsSync(jsCommandFile)) {
          const jsContent = fs.readFileSync(jsCommandFile, 'utf8');
          const jsComment = jsContent.split('\n')[1];
          if (jsComment && jsComment.trim().startsWith('*')) {
            description = jsComment.trim().replace(/^\*\s*/, '');
          }
        }
      }
      console.log(`- \`/pm ${command}\` - ${description || command}`);
    });
    console.log('');
  }
});

console.log('Use `/pm help <command>` for detailed help on any specific command.');