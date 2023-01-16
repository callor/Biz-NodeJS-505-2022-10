# JS 의 모듈

- JS 코드를 다른 파일에 모아서 분리하고, 사용할때 import 하여 사용할수 있도록 하는 기능

## 모듈코드

- 모듈은 변수, 함수, 클래스 등을 한개의 파일로 작성한 후 다른 모듈에서 import 를 하여 사용할 수 있도록 만드는 코드이다
- 모듈에서는 생성한 변수, 함수, 클래스 등을 export 를 해주어야 한다.
- 모든 모듈에는 `export default` 항목이 있어야 한다.
- 변수, 함수, 클래스를 객체로 묶어 `export` 할수 있다
- 최근 작성되는 모듈에는 `export default` 와 개별 변수, 함수, 클래스를 객체로 묶어 `export` 하는 코드를 같이 사용한다

## export 변수 함수 선언

- 변수와 함수를 선언하면서 개별적인 이름으로 export 하기
- import 하는 곳에서는 이 코드를 정해진 이름으로 구조문해 하여 import 한다

### export 하기

```js
export const 변수 = 값;
export const 함수 = () => {};
```

### Import 하기

- 반드시 `export` 한 이름으로 `import`를 해야 한다
- 필요한 변수, 함수만 개별적으로 `import` 할수 있다.

```js
import { 변수, 함수 } from "모듈.js";
```

## export default 하기

- 모듈에서 선언한 변수, 함수, 객체를 모아서 한번에 export 하기

### 모아서 한번에 export 하기

```js
export default { 변수1, 변수2, 함수1, 함수2 };
```

### 한번에 import 하여 사용하기

- 이때 import 하는 이름은 import 하는 곳에서 임의로 작성할수 있다

```js
import 내맘대로 from "모듈.js";
```

### `import` 한 모듈의 변수, 함수 `구조분해` 하기

- 필요에 따라 사용할 변수, 함수 등만 `구조분해` 한다

```js
const { 변수1, 변수2, 함수2, 함수1 } = 내맘대로;
```
