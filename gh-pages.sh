#! /bin/sh

# 终止一个错误
set -e

# 构建
npm run docs:build

# 进入生成的构建文件夹
cd ./docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://<USERNAME>.github.io
git push -f https://github.com/zehuichan/resume.git master:gh-pages

echo "✅ Publish completed"

exit 0
