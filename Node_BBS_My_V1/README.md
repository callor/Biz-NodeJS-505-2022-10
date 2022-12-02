# Nodejs, Express, MySQL 을 사용한 이미지 겔러리

- 이미지 및 파일 업로드 기능을 포함한 게시판 프로젝트

## Dependencies

- 파일 업로드를 하기 위한 보조 도구 설치

```
npm install -save multer
npm install -save uuid
```

### multer

- 파일 업로드를 매우 쉽게 구현할 수 있도록 도와주는 보조도구
- middle Ware 형태로 사용한다

### uuid

- 범용 고유 식별자를 생성하는 보조 도구
