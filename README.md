# 계산기 만들기

데모 : https://hotteokbutler.github.io/calculator_js/
<br>
<br>

<img width="500" src="https://user-images.githubusercontent.com/90666180/158944699-c4308091-1534-40dc-9354-43e7f7b04954.gif">

<br>
<br>

## 소개

- 순수 Vanilla.Js로 간단한 사칙연산 계산기 구현
- calculator.js : class를 사용한 사칙연산 계산 및 styling 등 계산기 기능 구현
- app.js : calculator의 input 유효성 검사 후 연산자만으로 식이 구성되거나, 숫자나 사칙연산기호를 제외한 문자 입력시 경고창 출력 및 초기화

## 개선할점

- eval()함수는 문자열을받아 자바스크립트로 실행시키는 함수로, 이런점을 이용해 악의적인 실행을 할 수 있어 보안에 취약하다고 한다. eval을 쓰지않고 다시 구현할 예정이다!
