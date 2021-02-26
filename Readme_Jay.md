## ตั้งค่า Git to Github
* git branch develop
* git checkout develop
* git branch --all
* git branch --delete develop
>การสร้าง Branch feature
* git checkout -b develop
* git branch feature/signout
* git push origin feature/signout
* git branch --all
* git checkout feature/signout
>การสร้าง merge Branch feature TO Branch develop.
เมื่อเราทำงานส่วนของ feature แต่ละตัวเรียบร้อยแล้วถึงขั้นตอน merge code 
ขั้นตอนนนี้ก็ไม่ยาก ก่อนอื่นอย่าลืม git commit , git push ให้เรียบร้อยก่อนนะ
* git checkout develop
git merge --no-ff feature/graphql-jobit
* git push origin develop
* git push origin --delete feature/signout
* git branch --delete feature/signout

<|===============================================**ใช้ประจำ**===============================================|>
> เริ่มงาน
* git branch --all
* git checkout --track origin/develop
* git checkout --track origin/feature/signout
> ดึง Code from Github Branch origin/feature/signout มาไว้ในเครื่องเรา
* git pull
* git pull origin feature/graphql-jobit
>ก่อนทำการ Merge และ ทำการ push to Github
* git status
* git add .
* git status
* git commit -m ""
* git push
* git push origin feature/singout
* git checkout develop
* git merge feature/profile_management
* git checkout master
* git merge develop
<|=================================================**end**=================================================|>
>รวม branch master กับ branch feature แบบ fast forward
* git checkout feature/profile_management
* git merge master
* git merge develop
* git push

>merge แบบ ปกติ
* git checkout master
* git merge develop
* git merge feature/profile_management

>New
* git remote -v
* git branch --all
* git branch --delete <Branch Name>
* git diff

>การ Push Branch to Github
* git push origin feature/singout
* git push --delete origin feature/singout

>reset
git reset --hard <>
git reset --soft <>
git reset --mixed <>

>log
git log
git log --oneline --graph --decorate --all



## Branch
* 1. master <---- เป็น branch ที่มีอยู่ก่อนหน้านี้อยู่แล้ว
* 2. develop
* 3. feature
* 4. release
* 5. hotfix