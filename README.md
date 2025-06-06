# 반응형 웹 페이지 스터디

## git, github

- git: 형상관리도구(버전관리도구)(https://git-scm.com/)
- gitHub: 저장소 ex: 클라우드 개념으로 생각하면 됨

### git 설치 및 버전 확인

- git --version

### mac과 window 엔터(줄내림) 키 처리

- git config --global core.autocrlf true

### VSCode 터미널 설정(Git Bash)

- 설정 > terminal default profile 검색 > Git Bash 선택
- 목록에 Git Bash 없을 시, VsCode 재시작 후 설정 탐색
- 터미널 열기, Ctrl + ` 또는 Ctrl + j 또는 마우스 오른쪽 클릭 통합터미널 열기

### Global Git 사용자 설정

- gitHub 가입시 설정한 "이메일", "아이디" 사용
- 아이디, 이메일 설정
- git config --global user.name "깃허브 가입시 아이디"
- git config --global user.email "깃허브 가입시 이메일"

- 참고: 터미널 청소 (입력 내역 전체 삭제)
  명령어 clear

------------------- 위 내용은 최초 한 번만 설정-------------

### GitHub repository 생성하기

- repository 이름은 폴더명과 똑같이 설정하는 것을 추천(권장)
- git 초기화 하기(폴더별로 최초 한번 설정) - git init
- 파일 추가 - git add .
  (.은 전체 파일이라는 뜻)
- 수정 내용 커밋 하기
- git commit -m "반응형 웹페이지 실습 프로젝트 최초 생성"
- gitHub repository에 최초 업로드
- gitHub status
- gitHub repository 업데이트
- git add .
- git commit -m "커밋 내용"
- git push origin main

### 레포지토리 클론하기

- 레포지토리와 같은 이름의 폴더 생성
- git clone "본인 레포지토리 주소"

### 최종 코드로 업데이트 하기

- git fetch
- git merge origin/main

*

## 파일명 이름 다른 경우 다시 연결할때

바탕화면에 새폴더 생성
github 내 코드 -> https 주소 복사
터미널 오픈

- git clone [복사한 주소]
- git add .
- git commit -m "커밋 내용"
- git push origin main
  /
