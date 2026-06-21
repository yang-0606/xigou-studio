# xigou-studio RPG Bot 完整安裝指南

## 前置需求

- **Node.js 18.0.0 或更高版本**（檢查：`node --version`）
- **npm 8 或更高版本**（檢查：`npm --version`）
- 一個 Discord 伺服器（你有管理員權限）
- 一個 Discord 開發者帳號

---

## 步驟 1：建立 Discord Bot

### 1.1 打開 Discord Developer Portal
前往：https://discord.com/developers/applications

### 1.2 建立新應用程式
- 點擊 **New Application**
- 輸入名稱（例如：`xigou-rpg-bot`）
- 點擊 **Create**

### 1.3 新增 Bot
- 在左側選單點 **Bot**
- 點擊 **Add Bot**

### 1.4 複製 Bot Token
- 在 **TOKEN** 部分點 **Copy**
- **妥善保管**，不要分享給任何人
- 待會要貼進 `config.json`

### 1.5 啟用 Intents（重要！）
往下滑找到 **GATEWAY INTENTS** 區段，開啟：
- ✅ **MESSAGE CONTENT INTENT**
- ✅ **SERVER MEMBERS INTENT**（選項，但建議開）
- 點 **Save Changes**

---

## 步驟 2：邀請 Bot 到你的伺服器

### 2.1 取得邀請連結
- 在 Developer Portal 選 **OAuth2** > **URL Generator**
- 在 **SCOPES** 勾選：
  - ✅ `bot`
  - ✅ `applications.commands`
- 在 **PERMISSIONS** 勾選：
  - ✅ Send Messages
  - ✅ Embed Links
  - ✅ Use Slash Commands
  - ✅ Read Message History
  - ✅ View Channels
  - ✅ Manage Messages（可選，用於清理訊息）

### 2.2 邀請 Bot
- 複製 **GENERATED URL**
- 用瀏覽器開啟，選擇你要邀請的伺服器
- 完成授權

---

## 步驟 3：取得需要的 ID

### 3.1 啟用開發者模式（Discord App）
- 開啟 Discord App
- 設定 > **進階** > 開啟 **開發者模式**

### 3.2 取得 Guild ID（伺服器 ID）
- 在你的伺服器名稱上 **右鍵**
- 點 **複製伺服器 ID**
- 記下這個 ID

### 3.3 取得 Client ID（應用程式 ID）
- 回到 Developer Portal
- **General Information** 頁面
- 複製 **Application ID**
- 記下這個 ID

---

## 步驟 4：設定專案

### 4.1 編輯 `config.json`

用文字編輯器（VS Code、Notepad++、記事本都可以）打開專案根目錄的 `config.json`：

```json
{
  "token": "你在步驟1.4複製的BotToken",
  "clientId": "你在步驟3.3複製的ApplicationID",
  "guildId": "你在步驟3.2複製的ServerID"
}
```

**例如：**
```json
{
  "token": "MTk4NjIyNDgzNDUyMTgzODcyAB.CvFAFQ.ZIWUi0NLlMMD5STt",
  "clientId": "123456789012345678",
  "guildId": "987654321098765432"
}
```

**⚠️ 重要：**
- 不要分享這個檔案給任何人
- 建議在 `.gitignore` 加入 `config.json`（不要上傳到 GitHub）

---

## 步驟 5：安裝依賴

在專案根目錄打開終端機（Terminal / CMD）：

```bash
npm install
```

等待安裝完成（會看到 `added XX packages`）。

---

## 步驟 6：部署指令

部署 `/rpg` 斜線指令到你的伺服器：

```bash
npm run deploy
```

或：
```bash
node deploy-commands.js
```

**預期輸出：**
```
開始註冊斜線指令...
成功註冊斜線指令！
```

---

## 步驟 7：啟動 Bot

```bash
npm start
```

或：
```bash
node main.js
```

**預期輸出：**
```
已登入為 xigou-rpg-bot#1234!
已註冊斜線指令！
已自動保存玩家資料！
```

---

## 步驟 8：在 Discord 中測試

1. 打開你的 Discord 伺服器
2. 任何頻道輸入：`/rpg`
3. 按 Enter
4. 應該會看到遊戲菜單

🎉 **恭喜！Bot 已成功運行！**

---

## 常見問題

### Q1: 輸入 `/rpg` 但看不到指令

**A:** 檢查：
1. Bot 是否有 `Use Slash Commands` 權限
2. 是否已跑過 `npm run deploy`
3. 嘗試重啟 Discord App

### Q2: 看到 `Invalid token` 錯誤

**A:** 
1. 檢查 `config.json` 的 token 是否正確複製
2. 確認沒有多餘空格或換行

### Q3: 看到 `Unknown application` 或 `INVALID_APPLICATION_ID`

**A:**
1. 檢查 `config.json` 的 `clientId` 和 `guildId` 是否正確
2. 確認是從對應的應用程式和伺服器複製

### Q4: 我想把 Bot 部署到雲端（讓它 24/7 運行）

**A:** 你可以用：
- **Heroku**（免費層已停止）
- **Railway.app**（推薦，$5/月額度）
- **Replit**（有睡眠時間限制）
- **Render**
- 自己的 VPS 或家用電腦

---

## 啟動指令速查表

| 用途 | 指令 |
|------|------|
| 安裝依賴 | `npm install` |
| 部署指令 | `npm run deploy` |
| 啟動 Bot | `npm start` |
| 手動啟動 | `node main.js` |
| 停止 Bot | `Ctrl + C` |

---

## 檔案說明

- **config.json** - Bot 設定檔（token、ID 等）
- **package.json** - 專案依賴管理
- **main.js** - Bot 主程式入口
- **deploy-commands.js** - 指令部署腳本
- **modules/** - 功能模組目錄
  - `data.js` - 玩家資料存取
  - `commands.js` - 指令處理
  - `character.js` - 角色系統
  - `exploration.js` - 探索系統
  - `battle.js` - 戰鬥系統
  - 等等...

---

## 下一步

- 編輯 `modules/items.js` 自訂物品
- 編輯 `modules/mobs.js` 自訂怪物
- 在 `modules/exploration.js` 新增地區
- 調整遊戲參數和平衡性

祝你遊戲開發愉快！🎮
