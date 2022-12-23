# Props Drilling

- React 에서 state 변수, setState() 함수를 정의하고 사용할때, 컴포넌트가 계층적으로 구성된 경우 중간의 컴포넌트들은 실제 state 변수나, setState() 함수를 사용할 필요가 없음에도 불구고하고 하위 컴포넌트에게 전달하기 위하여 상위 컴포넌트에서 props 로 받고, 다시 하위 컴포넌트에 전달하는 현상
- TodoMain 에서 정의된 state TodoItem 에서 사용하고자 할때, 중간에 TodoList 가 props 로 받아 단순히 Toss 만 하는 역할을 수행하는데 이것을 props drilling 이라고 한다.
- 컴포넌트가 계층구조가 복잡하고 깊어지는 경우 drilling 현상은 더욱 심화되고 프로젝트 모듈을 관리하기가 어려워 진다.

## props Drilling 을 해결하기 위한 방법

- React 에서는 Redux, mobx 와 같은 외부 3rd party 라이브러리를 사용하여 해결을 햇는데, Redux 나 mobx 는 그 자체가 학습곡선이 다소 높다.
- Redux 나 mobx 는 단순히 Drilling 을 해결하는 용도로는 과한 라이브러리 이다.
- React 에서 한가지 방법으로 `ContextProvider` 라는 개념을 도입하여, Drilling 을 해결하고 있다.

## ContextProvider

- state 변수와 setState() 함수를 보관하는 `store` 역할을 수행
- state 변수와 setState() 함수를 한곳에 모아두고, 필요한 곳에서 즉시 사용할수 있도록 해 주는 역할을 수행한다.
