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

**生產環境**: https://ecommerce-marketing-2zuwzmka1-kaweis-projects.vercel.app

### 部署平台
- **平台**: Vercel
- **專案名稱**: ecommerce-marketing-ai
- **狀態**: ✅ 已部署並正常運行

### 部署歷史
- ✅ 初始部署 (v1.0.0)
- ✅ 修復空白頁面問題 (2025-11-20)
- ✅ 更新標題與 SEO

---

## 🔧 環境變數設置

### ⚠️ 重要：配置 Supabase

網站目前可以訪問，但需要配置環境變數才能使用搜尋功能。

### Vercel Dashboard 設置
1. 登入 [Vercel Dashboard](https://vercel.com/dashboard)
2. 選擇專案 `ecommerce-marketing-ai`
3. 進入 **Settings** → **Environment Variables**
4. 添加以下變數：

```env
# Supabase (必需 - 數據庫功能)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key

# AI Services (可選 - 圖片搜尋功能)
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
```

### 手動部署
```bash
# 立即部署到生產環境
vercel --prod

# 查看部署日誌
vercel logs <deployment-url>
```

---

## ✅ 問題已修復

### 修復內容
- ✅ 移除不存在的 `envCheck` 導入
- ✅ 更新頁面標題為中文
- ✅ 添加 SEO meta 描述
- ✅ 修復空白頁面問題

### 當前狀態
- ✅ 網站可正常訪問
- ✅ UI 正常顯示
- ⚠️ 需要配置環境變數才能使用搜尋功能

---

## 🔗 快速連結

- 🌐 **線上網站**: https://ecommerce-marketing-2zuwzmka1-kaweis-projects.vercel.app
- 📦 **GitHub**: https://github.com/kame5201314-crypto/smart-price-comparison
- ⚙️ **Vercel Dashboard**: https://vercel.com/kaweis-projects/ecommerce-marketing-ai

---

## 📚 後續步驟

1. ✅ 訪問網站確認正常運行
2. ⏳ 設置 Supabase 環境變數
3. ⏳ 執行數據庫 Schema
4. ⏳ 配置 AI API（圖片搜尋）
5. ⏳ 測試所有搜尋功能

---

**最後更新**: 2025-11-20  
**狀態**: ✅ 網站運行正常，等待環境配置
