# 📌 WAI-ARIA란? 

- HTML의 접근성 문제를 해결하기 위한 W3C의 기술 명세
- WAI : Web Accessibility Initiative의 약자로 W3C에서 웹 접근성을 담당하는 조직
- ARIA :  ‘Accessible Rich Internet Applications’의 약자로 리치 인터넷을 위한 W3C 접근성 명세
<br/>

# 📌 WAI-ARIA 등장 배경 

### 🤔  만약, 페이지를 새로고침하지 않고 콘텐츠를 Ajax 방식으로 갱신한다면? ⚠️
❗️ 비장애인 : 화면에 등장하는 툴팁을 보면서 비밀번호를 바르게 입력
❓ 시각 장애인 : 잘못된 비밀번호를 계속해서 입력 
<br/>

### 💡 HTML의 접근성 문제를 해결하자!
1. 웹 개발자들은 클라이언트 사이드 스크립트를 사용하여, 웹 서버의 도움없이도 페이지 일부를 업데이트 할 수 있는, 사용자 인터페이스 컨트롤을 만들게 됨(리치 인터넷 애플리케이션)
2. 이러한 사용자 인터페이스 컨트롤과 콘텐츠 업데이트는 장애가 있는 사용자들, 특히 스크린 리더 사용자, 마우스를 사용할 수 없는 사용자들의 접근을 어렵게 함
3. HTML의 접근성 문제를 해결하기 위해 역할, 속성, 상태 정보를 웹 애플리케이션에 추가하여, 사용자 인터페이스 컨트롤과 동적인 콘텐츠를 더 잘 접근할 수 있는 방식이 고안
<br/>

# 📌 ARIA란? 
- 리치 인터넷을 위한 W3C 접근성 명세, 즉 쉽게 말해 새로운 기술에 대응하기 위한 접근성 명세
<br/>

# 📌 AIRA의 목적 
- 마크업에 1️⃣역할(Role) 2️⃣속성(Property) 3️⃣상태(State) 정보를 추가하여 스크린 리더 및 보조기기 등에서 접근성 및 상호 운용성을 향상 시키고 보다 나은 사용자 경험(UX)를 제공
<br/>


## 1️⃣ 역할(Role)
- 특정 요소의 역할을 정의
- 역할을 부여하여 사용자에게 정보를 제공
- 부여된  역할은 동적으로 변경 불가

```html
<div class="btn_01" role="button"...>
<div class="header" role="banner"...>
```

![button@2x](https://user-images.githubusercontent.com/48905932/128862166-a4889ffc-167c-4c66-b9c5-68e2110616f7.png)


- 두 버튼 모두 <div\>를 사용했으나 오른쪽 버튼에는 역할(role)을 지정
- voice over 기능을 이용하여 버튼 클릭 시, 왼쪽 버튼은 '한국어'만 재생되어 요소의 용도를 파악하기 어려움
- 오른쪽 버튼은 '한국어 버튼'으로 재생되어 사용자가 요소의 용도를 쉽게 파악 가능
  
<br/>

##  2️⃣ 속성(Property) 
- 요소가 기본적으로 갖고 있는 특징이나 상황
- 속성과 상태는 "aria-" 접두어를 가짐
- 상태는 요소의 상황을 나타내므로 애플리케이션이 실행되는 동안 자주 바뀌는 반면, 속성은 상대적으로 자주 바뀌지 않음

## 📍 2.1 필수 항목 속성  aria-required
```html
<input type="checkbox" aria-required="true">
```
![필수@2x](https://user-images.githubusercontent.com/48905932/128883230-c99b2060-4a94-4280-b222-05eb46df3385.png)


## 📍 2.2 그룹 제목 속성 aria - label
```html
<div role="group" aria-label="그룹제목">
```
- aria-label : 텍스트 레이블이 화면에 표시되지 않을 때, 현재 요소에 레이블을 정의하기 위해 사용
- aria-labelledby : 화면에 현재 요소를 설명할 텍스트가 있을 경우에 해당 텍스트 영역과 현재 요소를 연결할 때 사용

![ㅇㅇ@2x](https://user-images.githubusercontent.com/48905932/128885013-935179d2-fe46-447e-8d1e-9e4a83224122.png)


## 📍 2.3 추가 설명 속성 aria-describedby
```html
<input type="text" aria-describedby="reference">
 <div id="reference">추가설명</div>
```
![그룹 33@2x](https://user-images.githubusercontent.com/48905932/128885894-226e3631-d6e6-4435-9e35-fb89a9cd6f9d.png)
<br/>

## 3️⃣ 상태(States)

## 📍 3.1 오류가 발생한 상태의 입력상자 aria-invalid="true"
```html
<input type="text" aria-invalid="true">
````
![kkk@2x](https://user-images.githubusercontent.com/48905932/128889894-a4be6fe8-0300-4c11-8dd9-d2d73d11f6ca.png)


## 📍 3.2 선택된 상태의 토글 버튼 aria-pressed="true"
```html
<button aria-pressed="true">
````
![toggle@2x](https://user-images.githubusercontent.com/48905932/128889196-92f1b830-6b44-41d6-8fd0-b3b748a031c0.png)
 

## 📍 3.3 확장된 상태의 탭 패널 aria-expanded="true"
```html
<div role="tabpanel" aria-expanded="true">
```
![그룹 333@2x](https://user-images.githubusercontent.com/48905932/128887207-0a9491ed-e456-40d2-a3fd-f4b17290087f.png)

## 📍 3.4 선택된 상태의 탭  aria-selected="true"
```html
<div role="tabl" aria-selected="true">
```
![dsf@2x](https://user-images.githubusercontent.com/48905932/128887707-affd2419-9a27-4cc6-8661-0f074de5c129.png)
<br/>

# 📌 AIRA 사용 관련 주의 사항
##  ❌ 1. HTML 요소의 기능 변경 제한
```html
<h1 role="button">버튼</h1>
<button role="heading">버튼</button>
```
- 위와 같이 button의 역할을 하는 태그에 heading이라는 역할을 주거나 제목을 나타내는 h1태그에 버튼 역할을 지정할 경우, 접근성에 치명적인 오류 발생.

##  ❌ 2. 키보드 사용 보장
```html
<div role="button">주문</div>
<span role="button" tabindex="0">버튼</span>
```
- case1: button 역할을 부여하더라도, 일반 button 처럼 키보드 포커싱X, 키보드로 접근 불가
- case2: tabindex 속성을 설정 
- 따라서, <a>, <button> 태그와 같이 역할, 의미에 맞는 태그를 사용하는 것이 best


##  ❌ 3. 태그 의미 중복 X
```html
<button role="button">버튼</button>
<fieldset role="group">...</fieldset>
```
- HTML 태그의 기본 속성에 덧붙여 role을 중복 정의할 필요 없음
<br/>

# 👀 참고자료
- WAI-ARIA Overview https://www.w3.org/WAI/standards-guidelines/aria/
- HTML의 태그 별 role 확인  www.w3.org/TR/html-aria/#docconformance
- role 별 필수 속성 및 지원 기능 확인 https://www.w3.org/TR/html-aria/#case-sensitivity 
- WAI-ARIA 예제 모음 https://github.com/niawa/ARIA 
- - Aria 예제 체험 : https://www.w3.org/TR/wai-aria-practices-1.1/
- 레진 코믹스 WAI-ARIA 가이드라인 https://github.com/lezhin/accessibility/blob/master/aria/README.md