---
title: Git使用教程
date: 2026-08-16 21:05:09
categories:
  - 开发工具
tags:
  - Git
  - 版本控制
---

# Git 使用教程

Git 是目前最流行的分布式版本控制系统，用于跟踪代码变更、协作开发。本文从安装到进阶使用，带你快速上手。

## 一、安装与配置

### 1. 安装 Git

- **Windows**：从 [git-scm.com](https://git-scm.com/) 下载安装包，一路下一步即可
- **macOS**：`brew install git`
- **Linux (Debian/Ubuntu)**：`sudo apt install git`

验证安装：

```bash
git --version
```

### 2. 配置用户信息

首次使用需要配置用户名和邮箱，这些信息会记录在每次提交中：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

查看当前配置：

```bash
git config --global --list
```

## 二、基本操作

### 1. 初始化仓库

```bash
git init
```

### 2. 添加与提交

工作流：**工作区 → 暂存区 → 版本库**。

```bash
git add .                # 将所有改动加入暂存区
git commit -m "提交说明"  # 提交到版本库
```

> 提交说明建议遵循 [Conventional Commits](https://www.conventionalcommits.org/)，如 `feat: 新增功能`、`fix: 修复 bug`。

### 3. 查看状态与历史

```bash
git status     # 查看工作区状态
git log --oneline   # 简洁查看提交历史
git diff       # 查看未暂存的改动
```

## 三、分支管理

分支让你可以在独立线路上开发，互不影响。

```bash
git branch <分支名>       # 创建分支
git checkout <分支名>      # 切换分支
git checkout -b <分支名>   # 创建并切换分支
git branch -a             # 查看所有分支
git branch -d <分支名>     # 删除分支
```

合并分支：

```bash
git checkout main          # 先切换到目标分支
git merge <功能分支>        # 将功能分支合并进来
```

## 四、远程仓库

### 1. 关联远程仓库

```bash
git remote add origin git@github.com:用户名/仓库名.git
git remote -v    # 查看远程仓库
```

### 2. 推送与拉取

```bash
git push -u origin main    # 首次推送并建立关联
git push                   # 后续推送
git pull                   # 拉取远程更新
```

### 3. 克隆仓库

```bash
git clone git@github.com:用户名/仓库名.git
```

## 五、常用技巧

### 1. 撤销操作

```bash
git restore <文件>         # 丢弃工作区改动
git restore --staged <文件> # 取消暂存
git reset --soft HEAD~1    # 撤销上一次提交，保留改动
git reset --hard HEAD~1    # 彻底回退（慎用！）
```

### 2. 暂存工作区

临时切分支时可用 stash 保存当前改动：

```bash
git stash          # 保存
git stash list     # 查看
git stash pop      # 恢复
```

### 3. .gitignore 忽略文件

创建 `.gitignore` 文件，忽略不需要提交的内容：

```gitignore
node_modules/
public/
*.log
```

### 4. 查看远程分支与删除远程分支

```bash
git branch -r                    # 查看远程分支
git push origin --delete <分支名>  # 删除远程分支
```

## 六、SSH 配置

推荐使用 SSH 方式连接 GitHub：

```bash
# 1. 生成密钥（一路回车即可）
ssh-keygen -t ed25519 -C "你的邮箱"

# 2. 查看公钥并复制
cat ~/.ssh/id_ed25519.pub

# 3. 粘贴到 GitHub → Settings → SSH and GPG keys
```

测试连接：

```bash
ssh -T git@github.com
# 输出 "Hi 用户名!" 即表示成功
```

## 七、总结

| 场景 | 常用命令 |
| --- | --- |
| 初始化 | `git init` |
| 提交 | `git add` + `git commit` |
| 分支 | `git branch` / `git checkout` / `git merge` |
| 远程 | `git push` / `git pull` / `git clone` |
| 撤销 | `git restore` / `git reset` |
| 临时保存 | `git stash` |

掌握以上命令即可满足日常开发需求，更多进阶内容可查看 [Git 官方文档](https://git-scm.com/doc)。
