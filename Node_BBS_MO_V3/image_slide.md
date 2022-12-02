# Image 슬라이드 구현 원리

## Box Layout : mask box 라고 한다.

- 한개의 이미지를 보여줄 box 를 정한다 : div.image.box
- 이 box 의 width와 height 를 한개의 이미지 크기와 일치시킨다.
- 이 box 내부에 이미지를 배치하고, display 속성을 flex 로 설정한다
- 이 box 의 크기와 관계없이 이미지 들은 자신의 크기를 유지하며 가로 방향으로 나열된다.
- 이 box 의 overflow 를 hidden 으로 하여 한개의 이미지만 보이도록 설정한다

## Slide 구현하기

- 이미지 한개의 width 만큼 오른쪽으로 계속해서 이동하기 애니메이션 구현
- 시작할때(0%) 처음 위치 `transform: translateX(0);`
- 종료될때(100%) `transform: translateX(calc(-200px * 5));`
- `calc()` 함수 : css 에서 px 값을 % 로 바꿔주는 함수
