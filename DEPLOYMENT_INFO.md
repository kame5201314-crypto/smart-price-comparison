# 🚀 智能商品比價系統 - 部署資訊

## 📦 GitHub 倉庫

**倉庫地址**: https://github.com/kame5201314-crypto/smart-price-comparison

### 倉庫資訊
- **名稱**: smart-price-comparison
- **描述**: 智能商品比價系統 - 支持關鍵字/網址/圖片搜尋，自動比較蝦皮、PChome、momo等電商平台價格
- **可見性**: Public (公開)
- **分支**: master

---

## 🌐 線上網站

**生產環境**: https://ecommerce-marketing-77s41311b-kaweis-projects.vercel.app

### 部署平台
- **平台**: Vercel
- **專案名稱**: ecommerce-marketing-ai
- **狀態**: ✅ 已部署

### 部署指令
```bash
# 重新部署
vercel --prod

# 查看部署日誌
vercel inspect ecommerce-marketing-77s41311b-kaweis-projects.vercel.app --logs

# 重新部署指定版本
vercel redeploy ecommerce-marketing-77s41311b-kaweis-projects.vercel.app
```

---

## 🔧 環境變數設置

### Vercel Dashboard 設置
1. 登入 [Vercel Dashboard](https://vercel.com/dashboard)
2. 選擇專案 `ecommerce-marketing-ai`
3. 進入 **Settings** → **Environment Variables**
4. 添加以下變數：

```env
# Supabase (必需)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key

# AI Services (圖片搜尋功能)
VITE_OPENROUTER_API_KEY=your_openrouter_key
```

5. 保存後重新部署

---

## 📝 更新流程

### 本地開發
```bash
# 1. 修改代碼
# 2. 測試
npm run dev

# 3. 構建測試
npm run build

# 4. 提交到 Git
git add .
git commit -m "描述更改內容"

# 5. 推送到 GitHub
git push origin master

# 6. Vercel 自動部署
# (或手動執行 vercel --prod)
```

### 自動部署
- 每次推送到 `master` 分支，Vercel 會自動部署
- 部署時間：約 1-2 分鐘
- 可在 Vercel Dashboard 查看部署狀態

---

## 📊 網站狀態監控

### Vercel Dashboard
- **網址**: https://vercel.com/kaweis-projects/ecommerce-marketing-ai
- **功能**:
  - 查看部署歷史
  - 監控流量與性能
  - 查看錯誤日誌
  - 設置環境變數
  - 配置自訂網域

### 部署歷史
```bash
# 查看部署列表
vercel list

# 查看特定部署
vercel inspect [deployment-url]
```

---

## 🔗 快速連結

- 🌐 **線上網站**: https://ecommerce-marketing-77s41311b-kaweis-projects.vercel.app
- 📦 **GitHub**: https://github.com/kame5201314-crypto/smart-price-comparison
- ⚙️ **Vercel Dashboard**: https://vercel.com/kaweis-projects/ecommerce-marketing-ai

---

## 📚 相關文檔

- [README](./README.md) - 專案簡介
- [快速啟動](./QUICK_START_COMPARISON.md) - 本地開發指南
- [使用說明](./HOW_TO_USE.md) - 功能使用教學
- [完整文檔](./PRICE_COMPARISON_README.md) - 詳細技術文檔

---

## 🎉 成功部署！

您的智能商品比價系統已成功部署到：
- ✅ GitHub 倉庫 (代碼託管)
- ✅ Vercel 生產環境 (網站託管)

**最後更新**: 2025-11-20
