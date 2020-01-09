# chapter05. ref: naming to DOM

- 일반 HTML에서 DOM 요소에 이름을 달 때는 id를 사용합니다.

```html
<div id="my-element"></div>
```

- 특정 DOM요소에 어떤 작업을 해야 할 때 이렇게 요소에 id를 달면 CSS에서 특정 id에 특정 스타일을 적용하거나 자바스크립트에서 해당 id를 가진 요소를 찾아서 작업할 수 있습니다.

> public/index.html에도 id가 root인 div가 있습니다.
>
> 또한 src/index.js에 id가 root인 요소에 리액트 컴포넌트를 렌더링하는 코드가 있습니다.

- 이렇게 HTML에 id를 사용하여 DOM에 이름을 다는 것처럼 리액트 프로젝트 내부에 DOM에 이름을 다는 것을 `ref`라고 부릅니다.

#### Note

- 리액트 컴포넌트 안에서도 id를 사용할 수 있습니다. 이는 JSX 안에서 DOM에 id를 달면 해당 DOM을 렌더링 할 때 그대로 전달됩니다.

- 하지만 특수한 경우가 아니라면 사용을 권장하지 않으며 이는 중복 id를 가진 DOM이 생성됨을 방지하기 위함입니다.

- 이를 위해서 ref는 전역적으로 작동하지 않고 각 컴포넌트 내부에서만 작동합니다.

## 5.1 ref는 어떤 상황에서 사용해야 할까?

- ref는 **DOM을 반드시 직접적으로 건드려야 할 때** 사용합니다.

  - 다음 예시는 일반 HTML로 input을 검증하는 방법입니다.

```html
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=devide-width">
    <title>Example</title>
    <style>
        .success {
            background-color: green;
        }
        .failure {
            background-color: red;
        }
    </style>
    <script>
        function validate() {
            var input = document.getElementById('password');

            input.className = '';
            if (input.value === '0000' ) {
                input.className = 'success';
            } else {
                input.classNanme = 'failure';
            }
        }
    </script>
</head>
<body>
    <input type="password" id="password"></input>
    <button onClick="validate()">validate</button>
</body>
</html>
```

- 하지만 리액트는 굳이 DOM에 접근하지 않아도 state로 구현할 수 있습니다.

  - 이 장에서는 클래스형 컴포넌트에서 ref를 사용하는 방법을 알아볼 것입니다.

  > 함수형 컴포넌트의 경우 Hooks를 배우고 난 뒤 알아볼 것입니다.

### 5.1.1 예제 컴포넌트 생성

> src/ValidationSample.css, ValidationSample.js를 확인하세요.

### 5.1.2 App 컴포넌트에서 예제 컴포넌트 렌더링

> src/App.js를 확인하세요.

### 5.1.3 DOM을 꼭 사용해야 하는 상황

- 다음과 같은 상황에서 DOM 조작은 다음과 같습니다.

  - 특정 input에 포커스 주기

  - 스크롤 박스 조작하기

  - Canvas 요소에 그림 그리기 등

> 이럴 때 바로 ref를 사용합니다.

## 5.2 ref 사용

### 5.2.1 콜백 함수를 통한 ref 설정

- 이는 ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달하면 됩니다.

  - 이 함수는 ref 값을 파라미터로 전달받고 함수 내부에서 파라미터로 받은 ref을 컴포넌트의 멤버 변수로 설정합니다.

```javascript
<input
  ref={ref => {
    this.input = ref;
  }}
/>
```

> this.input은 input 요소의 DOM을 가르키며 이 이름은 원하는대로 지을 수 있습니다.

### 5.2.2 createRef를 통한 ref 설정

> src/RefSample.js를 확인하세요.

### 5.2.3 적용

> src/ValidationSample.js를 확인하세요.

#### 5.2.3.1 input에 ref 달기

#### 5.2.3.2 버튼 onClick 이벤트 코드 수정

## 5.3 컴포넌트에 ref 달기

- 리액트에서는 컴포넌트에서 ref를 달 수 있고 이는 주로 컴포넌트 내부에 있는 DOM을 외부에서 쓸 때 사용합니다.

### 5.3.1 사용법

```javascript
<MyComponent
  ref={ref => {
    this.myComponent = ref;
  }}
/>
```

- 위와 같이 작성하면 MyComponent 내부의 메서드 및 멤버 변수에도 접ㅂ근할 수 있습니다.

### 5.3.2 컴포넌트 초기 설정

> src/ScrollBox.js를 확인하세요.

#### 5.3.2.1 컴포넌트 파일 생성

#### 5.3.2.2 App 컴포넌트에서 스크롤 박스 컴포넌트 렌더링

### 5.3.3 컴포넌트에 메서드 생성

> src/ScrollBox.js를 확인하세요.

### 5.3.4 컴포넌트에 ref 달고 내부 메서드 사용

> src/App.js를 확인하세요.

## 5.4 정리

- 컴포넌트 내부에서 DOM에 접근해야 할 때 ref를 사용합니다.

  - 먼저 ref를 사용하지 않고도 구현 가능하다면 사용할 필요는 없습니다.

- 다만 컴포넌트끼리 데이터를 교류할 때 ref를 사용하는 것은 잘못된 것입니다.

  - ref는 부모-자식간의 컴포넌트에만 유용합니다.

  > 다른 컴포넌트끼리 데이터 교류는 redux, context API 등을 사용합니다.

- 한편 함수형 컴포넌트는 `useRef`라는 Hook의 함수를 사용합니다.
