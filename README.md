# Local Data Platform

**A zero-setup, local-only data storage platform that runs on USB, your PC, or anywhere.**

> No external providers | No internet required | All data stays local | Works offline

## 🚀 Quick Start

### Windows Users:
```
Double-click → run.bat → Done!
```

### Mac/Linux Users:
```bash
node server.js
```

Then open: `http://localhost:3000`

## ✨ Features

- 📝 **Add, Edit, Delete** data entries
- 💾 **Local Storage** - all data saved on your device
- 📤 **Export/Import** - backup and restore data anytime
- 🌍 **Bilingual** - English & Traditional Chinese
- 🔒 **Private** - no accounts, no tracking
- 📱 **Responsive** - works on desktop and mobile
- ⚡ **Fast** - lightweight and instant
- 🔌 **Offline-First** - works without internet

## 📋 Requirements

- **Node.js** (download from [nodejs.org](https://nodejs.org/))
  - LTS version recommended
  - Includes npm automatically
- **Any modern browser** (Chrome, Firefox, Safari, Edge)

## 📖 Detailed Usage

See **[USAGE_GUIDE.md](USAGE_GUIDE.md)** for:
- Step-by-step instructions
- Troubleshooting
- Tips and tricks
- Keyboard shortcuts

Available in:
- **English** 🇬🇧
- **Traditional Chinese** 🇹🇼 (繁體中文)

## 📁 What's Included

```
project/
├── index.html          # Web interface (open this in browser)
├── server.js           # Local Node.js server (runs on localhost)
├── run.bat             # One-click launcher (Windows only)
├── package.json        # Project configuration
├── README.md           # This file
└── USAGE_GUIDE.md      # Detailed bilingual guide
```

## 🎯 Use Cases

✅ Personal note-taking
✅ Contact management
✅ Data collection & surveys
✅ USB-based portable apps
✅ Offline environments
✅ No-setup installations

## ⚙️ System Requirements

| Requirement | Details |
|-------------|---------|
| **OS** | Windows, Mac, or Linux |
| **Memory** | ~50MB |
| **Disk Space** | ~5MB |
| **Internet** | Not required |
| **Installation** | None - just extract and run |

## 🔧 Installation

### Method 1: Using run.bat (Windows, Easiest)
1. Extract the folder
2. Double-click `run.bat`
3. Browser opens automatically

### Method 2: Using Terminal
```bash
# Navigate to project folder
cd /path/to/project

# Start server
node server.js

# Open browser to http://localhost:3000
```

### Method 3: On USB Drive
1. Copy entire folder to USB
2. Use the same methods above on any PC with Node.js installed

## 💡 Tips

- **Regular Backups**: Export your data weekly
- **Multiple PCs**: Use Export/Import to move data between computers
- **Different Browsers**: Each browser has its own storage (Chrome ≠ Firefox)
- **Clear Browser Cache Warning**: Clearing cache will erase local data!
- **Portable**: Copy the whole folder anywhere - USB, cloud sync, etc.

## 🆘 Common Issues

| Issue | Solution |
|-------|----------|
| Browser doesn't open | Manually visit http://localhost:3000 |
| "Node.js not found" | Install from nodejs.org then retry |
| "Port 3000 in use" | Close other apps using that port |
| Data disappeared | Did you clear browser cache? Use Export to backup! |

## 📊 Storage Capacity

- **Limit**: Usually 5-10MB per browser
- **Equivalent to**: ~5,000 text entries
- **Increases with**: Attached files or large content

## 🔐 Privacy & Security

✅ **No cloud sync** - data never leaves your computer
✅ **No accounts** - no personal information collected
✅ **No tracking** - complete privacy
✅ **Local only** - perfect for sensitive data
✅ **No external APIs** - 100% offline capable

## 📝 File Structure

All files work together:
- `index.html` - Frontend UI with all logic embedded
- `server.js` - Lightweight HTTP server
- `run.bat` - Windows batch launcher (auto-opens browser)
- `package.json` - Metadata and scripts

## 🚪 Accessing the App

**Default URL**: `http://localhost:3000`

You can access from:
- Same computer
- Mobile device on same WiFi (change `localhost` to computer IP)
- USB drive on any PC

## 🌐 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| IE11 | ⚠️ Limited |

## 📜 License

MIT - Feel free to use, modify, and share

## 📞 Support

For detailed help and troubleshooting, see **USAGE_GUIDE.md**

---

**Version**: 1.0.0  
**Last Updated**: 2026-06-30  
**Made with ❤️ for local-first computing**
