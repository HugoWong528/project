# Local Data Platform - Usage Guide

## English

### Quick Start (For Non-Technical Users)

#### On Windows:
1. **Extract** the project folder to your desired location (Desktop, USB drive, etc.)
2. **Double-click** `run.bat` (the batch file)
3. **Wait** 2-3 seconds - your browser will open automatically
4. **Start using** the platform!

#### On Mac/Linux:
1. **Open Terminal** in the project folder
2. **Type**: `node server.js`
3. **Open browser** and visit: `http://localhost:3000`

### Requirements

- **Node.js**: Install from [https://nodejs.org/](https://nodejs.org/)
  - Choose the LTS (Long Term Support) version
  - It includes npm (package manager) automatically
- **Browser**: Any modern browser (Chrome, Firefox, Safari, Edge)
- **No Internet**: This app works completely offline!

### Features

✅ **Add Data**: Store names, emails, and notes
✅ **Edit Data**: Click "Edit" button to modify any item
✅ **Delete Data**: Remove items you no longer need
✅ **Export**: Download all your data as a JSON file (backup)
✅ **Import**: Load previously exported data back
✅ **Bilingual**: Switch between English and Traditional Chinese anytime
✅ **Local Storage**: All data stays on your computer/USB
✅ **No Account**: No registration or login needed
✅ **Works Offline**: Perfect for USB drives or disconnected PCs

### Step-by-Step Usage

#### Adding an Item:
1. Fill in the **Name/Title** field (required)
2. Enter **Email** if you have one (optional)
3. Add **Content/Notes** (optional)
4. Click **"Add Item"** button
5. Item appears in the "Saved Items" section below

#### Editing an Item:
1. Find the item you want to modify
2. Click the **"Edit"** button
3. The item details fill the form above
4. Make your changes
5. Click **"Update Item"** button to save

#### Deleting an Item:
1. Find the item to delete
2. Click the **"Delete"** button
3. Confirm when asked

#### Exporting Data (Backup):
1. Click **"Export Data"** button
2. A JSON file downloads to your computer
3. Keep this file safe as a backup
4. File name: `data-export-[timestamp].json`

#### Importing Data (Restore):
1. Click **"Import Data"** button
2. Select a previously exported JSON file
3. Click "Open"
4. Your data is restored!

#### Switching Language:
1. Click the **"中文"** (Chinese) or **"English"** button in the top-right
2. The entire interface changes language immediately
3. Your preference is saved automatically

### Technical Details

- **Storage**: Browser's localStorage (usually 5-10MB limit)
- **Server**: Lightweight Node.js HTTP server
- **Port**: Runs on `localhost:3000`
- **Files Needed**:
  - `index.html` - The web interface
  - `server.js` - The backend server
  - `run.bat` - Windows launcher (Windows only)
  - `package.json` - Configuration file

### Troubleshooting

**Q: The browser doesn't open automatically**
- A: Manually type `http://localhost:3000` in your browser's address bar

**Q: "Node.js is not installed" error**
- A: Download and install Node.js from https://nodejs.org/ then run `run.bat` again

**Q: "Port 3000 is already in use" error**
- A: Close other applications using port 3000, or wait a moment and try again

**Q: My data is gone after restarting**
- A: Data is stored in browser storage, which persists. If cleared (browser cache), your data is lost. Use Export regularly to backup!

**Q: Can I move this to a USB drive?**
- A: Yes! The entire folder can be moved anywhere. Just make sure Node.js is installed on the PC where you run it.

**Q: Can I share this with others?**
- A: Yes! Each person gets their own local storage. Copy the entire folder to others.

**Q: How much data can I store?**
- A: Typically 5-10MB depending on browser, which is thousands of items.

### Keyboard Shortcuts

- **Tab**: Navigate between form fields
- **Enter**: Submit form (when focus is on Add button)
- **Esc**: Clear form (after clicking it)

### Tips & Best Practices

1. **Regular Backups**: Click "Export Data" weekly to backup important information
2. **Browser Storage**: Each browser has separate storage. Data in Chrome won't appear in Firefox
3. **Clear Cache Warning**: Don't clear browser data/cache unless you want to lose everything!
4. **Multiple PCs**: Use Export/Import to move data between computers
5. **File Names**: Keep exported JSON files organized with dates

### For Advanced Users

**Run without batch file:**
```bash
node server.js
```

**Change port (edit server.js):**
Look for `const PORT = 3000;` and change to your desired port

**Access from network:**
Change `localhost` to your computer's IP address in server.js

---

## 中文 (Traditional Chinese)

### 快速開始（適合非技術用戶）

#### Windows系統：
1. **解壓**項目文件夾到您想要的位置（桌面、USB驅動器等）
2. **雙擊** `run.bat`（批處理文件）
3. **等待** 2-3 秒 - 瀏覽器會自動打開
4. **開始使用**該平台！

#### Mac/Linux系統：
1. **打開終端**在項目文件夾中
2. **輸入**: `node server.js`
3. **打開瀏覽器**訪問: `http://localhost:3000`

### 要求

- **Node.js**: 從 [https://nodejs.org/](https://nodejs.org/) 安裝
  - 選擇 LTS（長期支持）版本
  - 它自動包含 npm（包管理器）
- **瀏覽器**: 任何現代瀏覽器（Chrome、Firefox、Safari、Edge）
- **無需互聯網**: 此應用程序完全離線工作！

### 功能特性

✅ **添加數據**: 存儲名稱、電子郵件和筆記
✅ **編輯數據**: 點擊"編輯"按鈕修改任何項目
✅ **刪除數據**: 移除您不需要的項目
✅ **導出**: 將所有數據下載為 JSON 文件（備份）
✅ **導入**: 加載之前導出的數據
✅ **雙語**: 隨時在英文和繁體中文之間切換
✅ **本地存儲**: 所有數據都保存在您的計算機/USB 上
✅ **無需帳戶**: 無需註冊或登錄
✅ **離線工作**: 非常適合 USB 驅動器或未連接互聯網的 PC

### 分步使用說明

#### 添加項目：
1. 填寫**名稱/標題**字段（必填）
2. 輸入**電子郵件**（可選）
3. 添加**內容/備註**（可選）
4. 點擊**"添加項目"**按鈕
5. 項目出現在下面的"已保存的項目"部分

#### 編輯項目：
1. 找到要修改的項目
2. 點擊**"編輯"**按鈕
3. 項目詳細信息填充上方的表單
4. 進行更改
5. 點擊**"更新項目"**按鈕保存

#### 刪除項目：
1. 找到要刪除的項目
2. 點擊**"刪除"**按鈕
3. 在詢問時確認

#### 導出數據（備份）：
1. 點擊**"匯出數據"**按鈕
2. JSON 文件下載到您的計算機
3. 安全地保存此文件作為備份
4. 文件名：`data-export-[時間戳].json`

#### 導入數據（還原）：
1. 點擊**"導入數據"**按鈕
2. 選擇之前導出的 JSON 文件
3. 點擊"打開"
4. 您的數據被還原！

#### 切換語言：
1. 點擊右上角的**"中文"**或**"English"**按鈕
2. 整個界面立即更改語言
3. 您的偏好會自動保存

### 技術詳情

- **存儲**: 瀏覽器的 localStorage（通常 5-10MB 限制）
- **服務器**: 輕量級 Node.js HTTP 服務器
- **端口**: 在 `localhost:3000` 上運行
- **所需文件**:
  - `index.html` - Web 界面
  - `server.js` - 後端服務器
  - `run.bat` - Windows 啟動器（僅 Windows）
  - `package.json` - 配置文件

### 故障排除

**Q: 瀏覽器不會自動打開**
- A: 在瀏覽器的地址欄中手動輸入 `http://localhost:3000`

**Q: "未安裝 Node.js"錯誤**
- A: 從 https://nodejs.org/ 下載並安裝 Node.js，然後再次運行 `run.bat`

**Q: "端口 3000 已在使用中"錯誤**
- A: 關閉其他使用端口 3000 的應用程序，或稍等片刻後重試

**Q: 重新啟動後我的數據消失了**
- A: 數據存儲在瀏覽器存儲中，可以保留。如果清除（瀏覽器緩存），數據會丟失。定期使用導出來備份！

**Q: 我可以將其移動到 USB 驅動器嗎？**
- A: 可以！整個文件夾可以移動到任何地方。只需確保在運行它的 PC 上安裝了 Node.js。

**Q: 我可以與他人共享嗎？**
- A: 可以！每個人都會獲得自己的本地存儲。將整個文件夾複製給他人。

**Q: 我能存儲多少數據？**
- A: 通常 5-10MB，取決於瀏覽器，可以存儲數千個項目。

### 鍵盤快捷鍵

- **Tab**: 在表單字段之間導航
- **Enter**: 提交表單（當焦點在"添加"按鈕上時）
- **Esc**: 清除表單（點擊後）

### 提示和最佳實踐

1. **定期備份**: 每週點擊"匯出數據"來備份重要信息
2. **瀏覽器存儲**: 每個瀏覽器都有單獨的存儲。Chrome 中的數據不會出現在 Firefox 中
3. **清除緩存警告**: 除非您想丟失所有內容，否則不要清除瀏覽器數據/緩存！
4. **多台 PC**: 使用導出/導入在計算機之間移動數據
5. **文件名**: 使用日期組織導出的 JSON 文件

### 對於高級用戶

**不使用批處理文件運行：**
```bash
node server.js
```

**更改端口（編輯 server.js）：**
查找 `const PORT = 3000;` 並更改為您想要的端口

**從網絡訪問：**
在 server.js 中將 `localhost` 更改為您的計算機 IP 地址

---

Last Updated: 2026-06-30
Version: 1.0.0
