# 👾 디버깅 핵심 원리

## 문제 명확히 파악하기

- 작성한 코드에 기대한 원래의 동작은 무엇인가?
- 기대한 것과 다르게 어떤 동작이 발생했는가?

## 다양한 가정 생각해보기

디버깅을 하기 전 문제를 발생할 수 있는 다양한 가정을 먼저 생각해 본다. 이는 문제를 찾거나 해결하는 시간을 줄일 수 있게 해준다.
> 
- 올바른 API를 사용하고 있는가?(올바른 개체, 함수, 메서드, 속성 등)
- API를 올바르게 사용하고 있는가?
- 오타는 없는가?
- 코드를 바꾸거나 예상하고 있는 문제와 관련없는 가정을 했는가?
- 실제로 발생하는 것과 다른 특정 값을 포함하는 객체와 변수를 예측했는가?
- 직접 작성한 코드가 아닐 경우 코드의 의도를 파악하고 있는가?

코드를 작성할 때 작고 작동하는 코드부터 시작하자. 목표의 코어가 되는 작은 부분부터 시작하여 크고 복잡한 부분을 수정하는 것이 쉽다. 그러고 나서 코드를 점진적으로 수정하거나 추가하고, 각 부분의 오류를 테스트하자.

## 디버깅 모드에서 코드를 단계별로 실행하기

- 디버깅 모드는 디버거가 프로그램이 실행될 때 발생하는 모든 것을 능동적으로 모니터링한다는 것을 의미한다.
- 디버깅 모드를 사용해 일시 중지를 하고 코드를 한 줄 씩 단계별로 실행하여 발생하는 모든 세부 사항을 관찰할 수 있다.

> [완전 초보자를 위한 코드 디버깅 - Visual Studio (Windows)](https://docs.microsoft.com/ko-kr/visualstudio/debugger/debugging-absolute-beginners?view=vs-2019&tabs=csharp)

# 📌 디버깅 개념
## breakpoints
- 중단점
- `debugger`이나 크롬에서는 `코드라인 왼쪽클릭`, `f9`등의 방법으로 설정할 수 있다.
- 디버깅하면 중단점에서 진행이 멈추게 되고 멈춘 상황의 local, global various, call stack등을 확일할 수 있다.

## watch
- 애플리케이션 내에서 변수를 관찰하기 위해 사용된다.
- 표현식을 추가해 주고 변하는 값을 확인할 수 있다.

> **ex)**
```javascript
function fibonacci(n) {
  if (n < 2) return n;
  const result = fibonacci(n - 1) + fibonacci(n - 2);
  return result;
}
```
watch에 `result === 5`를 추가하면 `result===5 : false` 에서 `result === 5`가 될 때 `result===5 : true` 로 바뀐다. 원하는 변수값을 표현식에 입력해도 변수 값이 나온다. [출처](https://velog.io/@proshy/VScode-%EB%94%94%EB%B2%84%EA%B9%85-breakpoints-watch-step)

**watch 사용법**
- 크롬
[[Chrome Developers]Watch variables in Sources](https://developer.chrome.com/docs/devtools/javascript/watch-variables/)


- vs code
![](https://images.velog.io/images/moon-yerim/post/a97a9e7d-5f28-4db9-8ed5-1f699e321d70/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB-%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8-2021-11-06-%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE-11.43.35.gif)

## call stack
- 어떤 함수가 현재 실행되고 있고 어떤 함수 안에서 어떤 함수가 호출되고 있는지 추적할 수 있게 해준다.

## Step over / Step into / Step out
- continue (resume)
다음 `breakpoint`로 이동

- Step over
함수 단위로 실행

- Step into
라인 단위로 실행

- Step out
현재 함수의 나머지 부분을 실행, 리턴에서 멈춤
`step into`로 함수로 들어간 뒤 바로 return으로 넘어가고싶을 때 사용하면 유용

# 📒 node.js 환경에서 디버깅 모드 실행하기

## 크롬 개발자도구 사용하기

### `--inspect` 와 `--inspect-brk`

Node.js 8.0.0부터는 v8-inspector을 완전히 지원하기 시작해서 기존에 사용하던 `—-debug`가 폐기되고 `—-inspect`로 통일되면서 node-inspect가 Node.js에 통합되었다.

- 디버거를 실행하는 명령어
- `--inspect-brk`를 사용하면 코드의 첫 줄에서 멈추므로 처음부터 디버깅해야 할 때 유용하다.

```bash
Debugger listening on ws://127.0.0.1:9229/a8048a6b-7ce5-4ae1-8432-67883b3c5225
For help, see: https://nodejs.org/en/docs/inspector
Welcome to Node.js v14.17.6.
Type ".help" for more information.
```

디버거가 실행되었다면 `chrome://inspect/#devices`에 접속해서 `Remote Target`부분의 Target에서 방금 실행한 Express 애플리케이션을 볼 수 있다.

![](https://images.velog.io/images/moon-yerim/post/f73ff113-c25f-44b2-93d4-10c1b817ddbd/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-11-02%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.32.24.png)

`inspect` 를 클릭하면 크롬 개발자 도구가 실행되고 흔히 디버깅 하던 방법과 동일하게 디버깅을 할 수 있다.

![](https://images.velog.io/images/moon-yerim/post/ff18d009-e163-4730-86d0-a8947aa5bd8d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-11-02%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.47.51.png)

```bash
Type ".help" for more information.
> Debugger attached.
```

## node-inspect 사용하기

### `node inspect 파일명`

node-inspect는 Node.js에 내장된 디버거이다. `node inspect 파일명` 로 시작한다.( `--inspect` 가 아니다.)

```bash
< Debugger listening on ws://127.0.0.1:9229/60eb6a35-a0cf-4805-aee7-406295daf995
< For help, see: https://nodejs.org/en/docs/inspector
< 
connecting to 127.0.0.1:9229 ... ok
< Debugger attached.
< 
Break on start in week-1-mon/getArea.js:1
> 1 const App = () => {
  2     const figureLog = [];
  3     const resultLog = [];
debug>
```

커맨드 라인에서 명령어를 통해 디버깅을 할 수 있다.
> **실행 명령어**
- `cont`, `c` - 계속 실행한다.
- `next`, `n` - 다음 단계로 이동
- `step`, `s` - 단계 안으로 이동
- `out`, `o` - 단계 밖으로 이동
- `run`, `restart` - 다시 실행
- `repl` - 현 위치에서 코드 실행, 변수 출력

`debugger;` 을 입력하면 브레이크 포인트로 사용할 수 있다. cont입력 시 중단점에서 걸리게 된다.

> [Node.js의 v8-inpector 디버깅 :: Outsider's Dev Story](https://blog.outsider.ne.kr/1307)

## vscode에서 디버깅 실행하기
### `실행 > 디버깅 시작 / F5`
디버깅을 실행하고 launch.json 환경 파일이 없다면 화면 상단에 환경 선택 창이 뜬다. 목록에서 Node.js를 선택해주면 실행된다.

- `launch.json`파일 만들기
이 부분은 f5를 누르면 실행되는데 왜 사용하는지 아직 잘 모르겠다.

> **실행 단축키**
  -  계속/일시중지 : F5
  -  단위실행 : F10
  -  단계정보 : F11
  -  단계출력 : Shift + F11
  -  다시시작 : Ctrl + Shift + F5
  -  중지 : Shift + F5

> [Visual Studio Code(VSCode) NodeJS 디버그 모드 사용하기](https://notstop.co.kr/927/)
