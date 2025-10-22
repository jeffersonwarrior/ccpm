#!/usr/bin/env node

/**
 * /pm status - Show current project status
 */

const fs = require('fs');
const path = require('path');

console.log('📊 CCPM Plugin Status:');

const ccpmDir = path.join(process.cwd(), 'ccpm');
console.log(`   Version: 1.0.5`);
console.log(`   Installation: ${fs.existsSync(ccpmDir) ? '✅ Installed' : '❌ Not found'}`);
console.log(`   Path: ${ccpmDir}`);

if (fs.existsSync(ccpmDir)) {
  const configPath = path.join(ccpmDir, 'ccpm.config.json');
  console.log(`   Config: ${fs.existsSync(configPath) ? '✅ Found' : '⚠️  Not configured'}`);

  // Check if GitHub is configured
  if (fs.existsSync(configPath)) {
    try {
      const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      console.log(`   GitHub: ${config.github.enabled ? '✅ Configured' : '⚠️  Not configured'}`);
      if (config.github.enabled) {
        console.log(`   Repository: ${config.github.owner}/${config.github.repo}`);
      }
    } catch (error) {
      console.log(`   Config: ⚠️  Error reading config`);
    }
  }

  // Check specs directory
  const specsDir = path.join(process.cwd(), 'specs');
  console.log(`   Specs: ${fs.existsSync(specsDir) ? '✅ Found' : '⚠️  Not found'}`);

  // Check worktrees directory
  const worktreesDir = path.join(process.cwd(), 'worktrees');
  console.log(`   Worktrees: ${fs.existsSync(worktreesDir) ? '✅ Found' : '⚠️  Not found'}`);

  // Check for PRDs
  if (fs.existsSync(specsDir)) {
    try {
      const prdFiles = fs.readdirSync(specsDir).filter(file => file.endsWith('.md'));
      console.log(`   PRDs: ${prdFiles.length} found`);
    } catch (error) {
      console.log(`   PRDs: ⚠️  Error reading specs`);
    }
  }
}

console.log('\n🎯 Quick Start:');
console.log('   /pm help - Show all available commands');
console.log('   /pm prd-new - Create your first PRD');
console.log('   /pm epic-list - List all epics');