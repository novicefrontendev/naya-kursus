3 local environment + remote git :
- working directory
git add
- staging area
git commit
- localrepo : oyr computer
git push
- remote repo : github 

git pull
- dari remote repo ke local repo

git fetch : sync branch
git pull : langsung ke merge, rawan conflict

git log akan menampilkan tanggal ketika commit

paling aman pake remote ssh

clone 
- cd directory
- git clone
- open file
- git remote 
- git remote -v : bisa ada 2 origin
- git checkout -b development
- git branch
- git status
- modify
- commit seperti biasa

sebelum pull request
- fork -> duplikat repo ke github kita
- clone 
- edit file
- git add
- git commit
- git push origin development
- git remote -v ; ada upstream selain origin

pull request, main (langsung di merge)
- create pulll request

Edit 
- git pull origin development
- git add
- git commit
- git push ke branch repo sendiri

Sync branch main sendiri dengan upstream
- git pull upstream main
- git push origin main
- git checkout development
- git merge main
- git push origin development

Merge conflict -> perubahan ada di line sama dilakukan oleh 2 orang
- git pull file tujuan
- edit
- git push origin main
Edit
- git add .
- git commit
- sync upstream
- git checkout main
- git pull upstream main
- git checkout development
merge conflict
- git merge main -> error
- complete merge
- git commit
- git push origin development
- open pull request
- create pull request
- merge request
- sync main
- git checkout main
- git pull upstream main
- git push origin main
- git checkout development
- git merge main
- git push origin development

clone
buka file
edit
push ke repository fork milik kita
buka upstream sumber fork
compare across fork
new pull request
create pull request
