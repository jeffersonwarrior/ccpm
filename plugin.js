/**
 * CCPM Plugin - Claude Code Project Management
 *
 * This plugin provides a complete project management workflow for Claude Code,
 * including spec-driven development, GitHub issues integration, Git worktrees,
 * and parallel AI agent execution.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class CCPMPlugin {
  constructor() {
    this.name = '@jeffersonwarrior/ccpm';
    this.version = '1.0.2';
    this.description = 'Claude Code PM - Project management workflow plugin';
    this.repoUrl = 'https://github.com/jeffersonwarrior/ccpm.git';
    this.ccpmDir = path.join(process.cwd(), 'ccpm');
  }

  /**
   * Initialize the plugin
   */
  async init() {
    console.log('🚀 Initializing CCPM Plugin...');

    try {
      // Check if ccpm directory already exists
      if (fs.existsSync(this.ccpmDir)) {
        console.log('✅ CCPM already installed');
        return this.showStatus();
      }

      // Clone the repository
      console.log('📥 Cloning CCPM repository...');
      execSync(`git clone ${this.repoUrl} ccpm`, { stdio: 'inherit' });

      // Clean up git metadata
      console.log('🧹 Cleaning up installation...');
      const gitDir = path.join(this.ccpmDir, '.git');
      const installDir = path.join(this.ccpmDir, 'install');

      if (fs.existsSync(gitDir)) {
        fs.rmSync(gitDir, { recursive: true, force: true });
      }

      if (fs.existsSync(installDir)) {
        fs.rmSync(installDir, { recursive: true, force: true });
      }

      // Create plugin symlink in .claude/commands if it exists
      await this.createCommandSymlinks();

      console.log('✅ CCPM Plugin installed successfully!');
      return this.showStatus();

    } catch (error) {
      console.error('❌ Failed to install CCPM Plugin:', error.message);
      throw error;
    }
  }

  /**
   * Create symlinks for CCPM commands in .claude/commands
   */
  async createCommandSymlinks() {
    const claudeDir = path.join(process.cwd(), '.claude');
    const commandsDir = path.join(claudeDir, 'commands');

    // Create .claude/commands directory if it doesn't exist
    if (!fs.existsSync(commandsDir)) {
      fs.mkdirSync(commandsDir, { recursive: true });
      console.log('📁 Created .claude/commands directory');
    }

    const ccpmCommandsDir = path.join(process.cwd(), 'commands');
    if (fs.existsSync(ccpmCommandsDir)) {
      console.log('🔗 Setting up command symlinks...');

      // Get all command files from ccpm/commands
      const commandFiles = fs.readdirSync(ccpmCommandsDir);

      commandFiles.forEach(file => {
        const sourcePath = path.join(ccpmCommandsDir, file);
        const targetPath = path.join(commandsDir, file);

        // Remove existing file/symlink
        if (fs.existsSync(targetPath)) {
          fs.unlinkSync(targetPath);
        }

        // Create symlink
        fs.symlinkSync(sourcePath, targetPath);
        console.log(`   ✅ Linked: /${file.replace('.md', '')}`);
      });

      console.log(`✅ Created ${commandFiles.length} command symlinks`);
    } else {
      console.log('⚠️  CCPM commands directory not found');
    }
  }

  /**
   * Show installation status
   */
  showStatus() {
    console.log('\n📊 CCPM Plugin Status:');
    console.log(`   Version: ${this.version}`);
    console.log(`   Installation: ${fs.existsSync(this.ccpmDir) ? '✅ Installed' : '❌ Not found'}`);
    console.log(`   Path: ${this.ccpmDir}`);

    if (fs.existsSync(this.ccpmDir)) {
      const configPath = path.join(this.ccpmDir, 'ccpm.config');
      console.log(`   Config: ${fs.existsSync(configPath) ? '✅ Found' : '⚠️  Not configured'}`);
    }

    console.log('\n🎯 Quick Start:');
    console.log('   /pm init - Initialize CCPM in your project');
    console.log('   /pm help - Show all available commands');
    console.log('   /pm status - Show current project status');
  }

  /**
   * Update the plugin
   */
  async update() {
    console.log('🔄 Updating CCPM Plugin...');

    try {
      // Backup current configuration
      const configBackup = this.backupConfig();

      // Remove old installation
      if (fs.existsSync(this.ccpmDir)) {
        fs.rmSync(this.ccpmDir, { recursive: true, force: true });
      }

      // Reinstall
      await this.init();

      // Restore configuration
      if (configBackup) {
        this.restoreConfig(configBackup);
      }

      console.log('✅ CCPM Plugin updated successfully!');

    } catch (error) {
      console.error('❌ Failed to update CCPM Plugin:', error.message);
      throw error;
    }
  }

  /**
   * Uninstall the plugin
   */
  async uninstall() {
    console.log('🗑️  Uninstalling CCPM Plugin...');

    try {
      // Backup configuration before removal
      const configBackup = this.backupConfig();

      if (fs.existsSync(this.ccpmDir)) {
        fs.rmSync(this.ccpmDir, { recursive: true, force: true });
        console.log('✅ CCPM Plugin uninstalled successfully!');

        if (configBackup) {
          console.log(`💾 Configuration backed up to: ${configBackup}`);
        }
      } else {
        console.log('ℹ️  CCPM Plugin not found');
      }

    } catch (error) {
      console.error('❌ Failed to uninstall CCPM Plugin:', error.message);
      throw error;
    }
  }

  /**
   * Backup configuration file
   */
  backupConfig() {
    const configPath = path.join(this.ccpmDir, 'ccpm.config');
    if (fs.existsSync(configPath)) {
      const backupPath = path.join(process.cwd(), 'ccpm.config.backup');
      fs.copyFileSync(configPath, backupPath);
      return backupPath;
    }
    return null;
  }

  /**
   * Restore configuration file
   */
  restoreConfig(backupPath) {
    if (fs.existsSync(backupPath)) {
      const configPath = path.join(this.ccpmDir, 'ccpm.config');
      fs.copyFileSync(backupPath, configPath);
      console.log('✅ Configuration restored');
    }
  }

  /**
   * Get plugin information
   */
  getInfo() {
    return {
      name: this.name,
      version: this.version,
      description: this.description,
      repository: this.repoUrl,
      installed: fs.existsSync(this.ccpmDir),
      path: this.ccpmDir
    };
  }
}

module.exports = CCPMPlugin;