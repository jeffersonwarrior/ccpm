#!/usr/bin/env node

/**
 * /pm init - Initialize CCPM in current project
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Initializing CCPM Plugin...');

try {
  // Check if ccpm directory already exists
  const ccpmDir = path.join(process.cwd(), 'ccpm');
  if (fs.existsSync(ccpmDir)) {
    console.log('✅ CCPM already installed');
    showStatus();
    return;
  }

  // Create directory structure
  console.log('📁 Creating CCPM directory structure...');
  fs.mkdirSync(path.join(process.cwd(), 'ccpm'), { recursive: true });
  fs.mkdirSync(path.join(process.cwd(), 'specs'), { recursive: true });
  fs.mkdirSync(path.join(process.cwd(), 'worktrees'), { recursive: true });

  // Create configuration file
  const config = {
    version: '1.0.5',
    createdAt: new Date().toISOString(),
    github: {
      enabled: false,
      repo: '',
      owner: ''
    },
    workflow: {
      epicBranchPrefix: 'epic',
      featureBranchPrefix: 'feature',
      defaultLabels: ['epic', 'feature']
    }
  };

  fs.writeFileSync(path.join(ccpmDir, 'ccpm.config'), JSON.stringify(config, null, 2));
  fs.writeFileSync(path.join(ccpmDir, 'state.json'), JSON.stringify({ initialized: true }, null, 2));

  console.log('✅ CCPM Plugin initialized successfully!');
  showStatus();

} catch (error) {
  console.error('❌ Failed to initialize CCPM Plugin:', error.message);
  process.exit(1);
}

function showStatus() {
  const ccpmDir = path.join(process.cwd(), 'ccpm');
  console.log('\n📊 CCPM Plugin Status:');
  console.log(`   Version: 1.0.5`);
  console.log(`   Installation: ✅ Installed`);
  console.log(`   Path: ${ccpmDir}`);
  console.log(`   Config: ✅ Found`);

  console.log('\n🎯 Quick Start:');
  console.log('   /pm help - Show all available commands');
  console.log('   /pm status - Show current project status');
  console.log('   /pm prd-new - Create your first PRD');
}