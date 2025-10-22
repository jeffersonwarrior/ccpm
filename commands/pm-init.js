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
    project: {
      name: require('../package.json').name || path.basename(process.cwd()),
      description: '',
      version: '1.0.0',
      repository: {
        url: '',
        owner: '',
        name: '',
        defaultBranch: 'main'
      }
    },
    directories: {
      ccpm: 'ccpm',
      specs: 'specs',
      worktrees: 'worktrees'
    },
    github: {
      enabled: false,
      issueLabels: [
        'epic',
        'feature',
        'bug',
        'enhancement',
        'documentation',
        'testing',
        'infrastructure'
      ],
      priorities: ['low', 'medium', 'high', 'critical'],
      statuses: ['backlog', 'in-progress', 'review', 'done']
    },
    workflow: {
      branchNaming: {
        epic: 'epic/{name}',
        feature: 'feature/{name}',
        bugfix: 'bugfix/{name}',
        hotfix: 'hotfix/{name}'
      },
      autoAssignIssues: true,
      requireReviewForMerge: true
    },
    ai: {
      maxConcurrentAgents: 3,
      defaultAgentModel: 'sonnet-4-5',
      timeoutMinutes: 30
    },
    created: new Date().toISOString(),
    lastUpdated: new Date().toISOString()
  };

  const state = {
    project: {
      status: 'initialized',
      currentEpic: null,
      activeIssues: [],
      activeWorktrees: []
    },
    prs: {
      active: [],
      draft: [],
      completed: []
    },
    agents: {
      running: [],
      completed: []
    },
    github: {
      lastSync: null,
      syncEnabled: true
    },
    stats: {
      totalEpics: 0,
      completedEpics: 0,
      totalIssues: 0,
      completedIssues: 0
    },
    initializedAt: new Date().toISOString(),
    lastActivity: new Date().toISOString()
  };

  fs.writeFileSync(path.join(ccpmDir, 'ccpm.config.json'), JSON.stringify(config, null, 2));
  fs.writeFileSync(path.join(ccpmDir, 'state.json'), JSON.stringify(state, null, 2));

  console.log('✅ CCPM Plugin initialized successfully!');
  showStatus();

} catch (error) {
  console.error('❌ Failed to initialize CCPM Plugin:', error.message);
  process.exit(1);
}

function showStatus() {
  const ccpmDir = path.join(process.cwd(), 'ccpm');
  const configPath = path.join(ccpmDir, 'ccpm.config.json');

  console.log('\n📊 CCPM Plugin Status:');
  console.log(`   Version: ${require('../package.json').version || '1.0.6'}`);
  console.log(`   Installation: ✅ Installed`);
  console.log(`   Path: ${ccpmDir}`);
  console.log(`   Config: ${fs.existsSync(configPath) ? '✅ Found' : '❌ Missing'}`);

  console.log('\n🎯 Quick Start:');
  console.log('   /pm help - Show all available commands');
  console.log('   /pm status - Show current project status');
  console.log('   /pm prd-new - Create your first PRD');
}