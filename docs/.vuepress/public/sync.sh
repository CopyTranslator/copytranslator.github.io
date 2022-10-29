cd `dirname $0`
git remote add gitee https://gitee.com/CopyTranslator/CopyTranslator.git
cp -r ../dist/* .
git add *
git commit -m $1
git push origin master -f 
git push gitee master -f