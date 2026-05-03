# 🔧 Google 工具设置指南

## 第 1 周必须完成的任务

---

## 1️⃣ Google Search Console 设置

### 作用
- 监控网站在 Google 搜索的表现
- 提交 Sitemap
- 查看索引状态
- 发现 SEO 问题
- 查看关键词排名

### 设置步骤

#### 步骤 1：访问 Google Search Console
```
https://search.google.com/search-console
```

#### 步骤 2：添加属性
1. 点击左上角 "添加属性"
2. 选择 **域名**（推荐）或 **URL 前缀**
3. 输入：`eyeviewsunglasses.com`
4. 点击 "继续"

#### 步骤 3：验证所有权

**方法 A：DNS 记录验证（推荐，验证整个域名）**

1. 选择 "DNS 记录"
2. 复制 TXT 记录值（类似：`google-site-verification=xxxxxxxxxx`）
3. 登录 GoDaddy
4. 找到 `eyeviewsunglasses.com` → DNS 设置
5. 添加新记录：
   - 类型：`TXT`
   - 主机：`@`
   - 值：粘贴 Google 提供的验证代码
   - TTL：默认
6. 保存后回到 Search Console 点击 "验证"
7. 等待 DNS 生效（通常几分钟到几小时）

**方法 B：HTML 文件验证**

1. 选择 "HTML 文件"
2. 下载验证文件（类似 `googlexxxxxxxxxxxx.html`）
3. 上传到 Netlify：
   - 在 Netlify 后台 → Site settings → Publish directory
   - 上传文件到 `public` 文件夹
4. 重新部署网站
5. 回到 Search Console 点击 "验证"

#### 步骤 4：提交 Sitemap

1. 验证成功后，在左侧菜单点击 "站点地图"
2. 输入：`sitemap.xml`
3. 完整 URL：`https://eyeviewsunglasses.com/sitemap.xml`
4. 点击 "提交"
5. 状态应显示 "成功"

---

## 2️⃣ Google Analytics 4 设置

### 作用
- 跟踪网站流量
- 分析用户行为
- 监控转化率
- 了解流量来源

### 设置步骤

#### 步骤 1：创建 Google Analytics 账户
```
https://analytics.google.com
```

1. 用 diffish666@gmail.com 登录
2. 点击 "开始衡量"
3. 创建账户：
   - 账户名称：`EyeView Sunglasses`
   - 勾选所有数据共享选项
4. 点击 "下一步"

#### 步骤 2：创建媒体资源

1. 媒体属性名称：`EyeView Sunglasses Website`
2. 报告时区：`United States`（目标市场）
3. 货币：`US Dollar`
4. 点击 "下一步"

#### 步骤 3：业务信息

1. 行业类别：`Shopping` 或 `Retail`
2. 业务规模：根据实际情况选择
3. 使用场景：全选
4. 点击 "创建"

#### 步骤 4：获取 Measurement ID

1. 创建成功后，进入 "数据流"
2. 点击 "添加流" → "Web"
3. 网站 URL：`https://eyeviewsunglasses.com`
4. 流名称：`EyeView Main Website`
5. 点击 "创建流"
6. 复制 **Measurement ID**（格式：`G-XXXXXXXXXX`）

#### 步骤 5：添加到网站

**方法 A：直接添加到代码（推荐）**

打开 `/home/admin/.openclaw/workspace/eyeview-sunglasses-site/app/layout.tsx`

在 `<head>` 标签内添加：

```tsx
<head>
  {/* Google Analytics */}
  <script
    async
    src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  />
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      `,
    }}
  />
</head>
```

**替换 `G-XXXXXXXXXX` 为你的实际 Measurement ID**

**方法 B：使用 Google Tag Manager**

1. 访问 https://tagmanager.google.com
2. 创建账户和容器
3. 获取容器代码
4. 添加到网站

---

## 3️⃣ 验证安装

### 验证 Search Console

1. 访问 https://search.google.com/search-console
2. 查看属性状态应为 "已验证"
3. 检查 Sitemap 状态应为 "成功"

### 验证 Analytics

1. 安装 Google Analytics Debugger 浏览器扩展
2. 访问 eyeviewsunglasses.com
3. 打开浏览器控制台（F12）
4. 查看是否有 `gtag` 相关日志
5. 在 Analytics 后台查看 "实时" 报告，应能看到自己的访问

### 使用在线工具验证

**Schema Markup 验证：**
```
https://search.google.com/test/rich-results
```
输入网址，检查结构化数据是否正确

**Mobile-Friendly 测试：**
```
https://search.google.com/test/mobile-friendly
```

**PageSpeed 测试：**
```
https://pagespeed.web.dev/
```

---

## 4️⃣ 后续监控

### 每天查看（前 2 周）
- [ ] Search Console 索引状态
- [ ] Analytics 实时流量

### 每周查看
- [ ] 搜索表现（点击、展示、CTR）
- [ ] 关键词排名
- [ ] 流量来源分析
- [ ] 页面表现

### 每月查看
- [ ] 整体流量趋势
- [ ] 转化率分析
- [ ] 内容表现排名
- [ ] 竞争对手对比

---

## 📋 完成检查清单

- [ ] Search Console 账户创建
- [ ] 域名验证完成
- [ ] Sitemap 提交成功
- [ ] Analytics 账户创建
- [ ] Measurement ID 获取
- [ ] 代码添加到网站
- [ ] 重新部署到 Netlify
- [ ] 验证工具确认安装成功

---

## 🆘 常见问题

### Q: DNS 验证一直失败？
A: 等待 DNS 生效（最长 48 小时），检查 TXT 记录是否正确

### Q: Sitemap 提交后显示错误？
A: 确保 sitemap.xml 可以访问：https://eyeviewsunglasses.com/sitemap.xml

### Q: Analytics 没有数据？
A: 数据延迟 24-48 小时，先检查实时报告

### Q: Schema Markup 不显示？
A: Google 需要时间抓取，通常 1-2 周

---

## 📞 需要帮助？

完成设置后，告诉我验证代码和 Measurement ID，我可以帮你更新到代码中。

**下一步：** 完成这些设置后，继续执行第 2 周的内容优化任务。
