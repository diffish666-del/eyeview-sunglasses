# 🚀 Vercel 自动部署指南

## ⚡ 快速部署（5 分钟完成）

### Step 1: 访问 Vercel

打开：https://vercel.com

### Step 2: 登录/注册

**推荐方式**: 使用 GitHub 账号登录
- 点击 **"Continue with GitHub"**
- 授权 Vercel 访问您的 GitHub

### Step 3: 导入项目

1. 点击 **"Add New..."** → **"Project"**
2. 在 **"Import Git Repository"** 页面
3. 找到并选择：**diffish666-del/eyeview-sunglasses**
4. 点击 **"Import"**

### Step 4: 配置项目

Vercel 会自动检测 Next.js 项目，配置如下：

```
Framework Preset: Next.js (自动检测) ✅
Root Directory: ./ (默认) ✅
Build Command: npm run build ✅
Output Directory: out ✅
Install Command: npm install ✅
```

**无需修改任何设置**，直接点击 **"Deploy"**

### Step 5: 等待部署

部署过程：
- ⏳ 准备环境：30 秒
- ⏳ 安装依赖：1 分钟
- ⏳ 构建项目：2 分钟
- ⏳ 部署完成：30 秒

**总时间**: 约 4-5 分钟

### Step 6: 获取域名

部署完成后，您会看到：
- ✅ **Congratulations!** 页面
- ✅ 项目域名：`https://eyeview-sunglasses-[random].vercel.app`

### Step 7: 绑定自定义域名

1. 在 Vercel 项目页面，点击 **"Settings"**
2. 点击 **"Domains"**
3. 点击 **"Add"**
4. 输入：`eyeviewsunglasses.com`
5. 点击 **"Add"**

### Step 8: 更新 DNS

Vercel 会显示 DNS 配置信息：

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

**在 GoDaddy 更新 DNS**:

1. 访问：https://www.godaddy.com
2. 登录账号
3. 找到 `eyeviewsunglasses.com`
4. 点击 **"DNS"** 或 **"Manage DNS"**
5. 添加/更新记录：

**保留腾讯企业邮箱 MX 记录**:
```
类型    主机    优先级    记录值                TTL
MX      @       5         mxbiz1.qq.com         3600
MX      @       10        mxbiz2.qq.com         3600
TXT     @       -         v=spf1 include:spf.mail.qq.com -all  3600
```

**添加 Vercel 网站记录**:
```
类型    主机    记录值                    TTL
A       @       76.76.21.21               3600
CNAME   www     cname.vercel-dns.com      3600
```

⚠️ **重要**: 不要删除 MX 记录，否则企业邮箱无法收信！

### Step 9: 等待 DNS 生效

- DNS 生效时间：30 分钟 - 48 小时
- 通常 1-2 小时即可访问

### Step 10: 验证部署

访问：https://eyeviewsunglasses.com/contact/

**检查联系信息**:
- ✅ 邮箱：jacky@eyeviewsunglasses.com (可点击)
- ✅ WhatsApp: +86-18850281211 (可点击)
- ✅ 微信：已删除

---

## 📋 Vercel 优势

相比 Netlify，Vercel 有以下优势：

1. ✅ **Next.js 原生支持** - Vercel 是 Next.js 开发者创建的
2. ✅ **自动检测配置** - 无需手动配置
3. ✅ **更快的部署** - 通常 2-3 分钟完成
4. ✅ **更好的缓存管理** - 自动处理缓存
5. ✅ **免费 HTTPS** - 自动 SSL 证书
6. ✅ **免费域名** - 提供 .vercel.app 域名
7. ✅ **自动预览** - 每次 push 自动部署预览

---

## 🆘 常见问题

### Q1: 部署失败？
**A**: 查看 Vercel 部署日志，点击 "Functions" → 查看错误信息

### Q2: 域名不生效？
**A**: 等待 DNS 生效（最多 48 小时），或清除本地 DNS 缓存

### Q3: 还是显示旧版本？
**A**: 
1. 按 Ctrl+F5 强制刷新
2. 清除浏览器缓存
3. 使用隐私模式访问

### Q4: 企业邮箱无法收信？
**A**: 检查 MX 记录是否保留，参考 TENCENT-EMAIL-FIX.md

---

## 📊 部署状态

### GitHub
- ✅ 代码已推送
- ✅ vercel.json 已添加
- ✅ Commit: 60abecd

### Vercel
- ⏳ 等待导入项目
- ⏳ 等待首次部署

### 域名
- ⏳ 等待 DNS 配置
- ⏳ 等待生效

---

## ✅ 完成清单

- [ ] Vercel 账号已登录
- [ ] 项目已导入
- [ ] 首次部署成功
- [ ] 自定义域名已添加
- [ ] DNS 已更新
- [ ] 网站可访问
- [ ] 联系信息已更新
- [ ] 企业邮箱正常

---

**立即访问 https://vercel.com 开始部署！** 🚀
