# ContextProvider

- Props Drilling 문제를 극복하기 위한 React 의 새로운 도구
- 기존의 Redux mobx 등을 사용하던 것을 state, setState() 함수만을 위한 도구
- 일부에서는 ContextProvider 를 사용하므로써 성능상 이슈가 있다고 하지만, 크게 문제를 일으키지 않는다
- React 가 버전업이 되면서 많은 문제들이 해결되어 실무에서 사용해도 큰 문제가 없다.

## ContextProvider 만들기

- `createContext()` 함수를 사용하여 `Context`를 만든다
- 생성된 Context 의 Provider 속성인 `Context.Provider` 를 사용하여 확장 컴포넌트를 만든다. => 일종의 컴포넌트 인데, state 등을 관리하는 주 목적으로 만든다.
- useContext() hook 을 재 정의하여 store 로 부터 데이터를 공급받는데 사용하는 함수를 만든다
