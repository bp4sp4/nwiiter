# React with Firebase 트위터 클론코딩

<h3>기간 : 23.09.06~</h3>

하는이유 :

- 리액트 아직 html/css 만큼 자유롭게 이럴때 이거 써야지 만큼 실력이 안됨
- 트위터 클론코딩 빠르게 공부하고 리액트 페이지 하나 만들어봐야함<br>

# nwitter 셋팅

- 프로젝트생성

```
npx create-react-app [프로젝트명]
```

- Firebase 설정
<pre>
npm i firebase@9.6.1
</pre>
- firebase.js

```
import { initializeApp } from "firebase/app";

const firebaseConfig = {
....
}

export const app = initializeApp(firebaseConfig);

```

index.js

```
import firebase from "firebase/compat/app";
```
