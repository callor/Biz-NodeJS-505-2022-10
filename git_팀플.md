# callor 팀프로젝트 참여

1. 팀장이 REAMD.md 와 .gitignore 를 포함하는 원격 Repository 생성
2. 각 팀원을 `settings/Collaborator` 에서 추가하기
3. 각 팀원은 각자의 git 화면에서 승인 하기
4. 원격 Repository 를 자신의 컴퓨터로 클론 :`git clone [원격주소] [로컬폴더]`
5. branch 만들고 checkout 하기
6. 자신의 branch 에서 코드 작업하기
7. `git add .`, `git commit -m [주저리]`, `git push origin [branch명]`
8. `pull request` 요청하기
9. 팀장은 각 request 를 확인하여 `merge pull request` 실행하기
10. 로컬에서 master 로 checkout 하기
11. `git pull` : 원격 master 를 다운로드 하기
12. `git checkout [branch명]` : 자신의 branch 전환하기
13. `git merge master` : master 내용을 자신의 branch 와 병합(sync)

## branch 만들기와 checkout 하기

- branch 새로 만들기 : `git branch [branch명]`
- branch 로 작업영역 변환하기 : `git checkout [branch명]`
