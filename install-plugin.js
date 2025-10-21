#!/usr/bin/env node

/**
 * CCPM Plugin Installer
 *
 * This script converts the CCPM installation into a proper plugin
 * that can be installed, updated, and managed as a unit.
 */

const CCPMPlugin = require('./plugin');

async function main() {
  const plugin = new CCPMPlugin();
  const command = process.argv[2] || 'install';

  try {
    switch (command.toLowerCase()) {
      case 'install':
      case 'init':
        await plugin.init();
        break;

      case 'update':
      case 'upgrade':
        await plugin.update();
        break;

      case 'uninstall':
      case 'remove':
        await plugin.uninstall();
        break;

      case 'status':
      case 'info':
        const info = plugin.getInfo();
        console.log(JSON.stringify(info, null, 2));
        break;

      case 'help':
        console.log(`
CCPM Plugin Manager

Usage: node install-plugin.js [command]

Commands:
  install, init     Install the CCPM plugin
  update, upgrade   Update the CCPM plugin
  uninstall, remove Uninstall the CCPM plugin
  status, info      Show plugin information
  help              Show this help message

Examples:
  node install-plugin.js install
  node install-plugin.js update
  node install-plugin.js status
        `);
        break;

      default:
        console.error(`❌ Unknown command: ${command}`);
        console.log('Use "help" to see available commands');
        process.exit(1);
    }

  } catch (error) {
    console.error('❌ Operation failed:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { CCPMPlugin };