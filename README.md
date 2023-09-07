# React with Firebase 트위터 클론코딩

<h3>기간 : 23.09.06~</h3>

하는이유 :

- 리액트 아직 html/css 만큼 자유롭게 이럴때 이거 써야지 만큼 실력이 안됨
- 트위터 클론코딩 빠르게 공부하고 리액트 페이지 하나 만들어봐야함<br>

# 2023.09.07

<h3>Auth.js 생성</h3>
<ul>
<li>계정생성까지만듬</li>
<li>내일 복습 다시 해봐야함 눈과손이 익어야함</li>
</ul>

<h3>Route</h3>
- 현재 URL 경로와 매치될 경우 보여줄 컴포넌트를 지정하는데 사용하는 컴포넌트<br>
- HTML a태그와 동일한 역할을 하는 컴포넌트

```
<Route path="/home> component={Home} />
```

Routes.js

```

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({ isLoggenIn }) => {
return (
// 로그인시
<Router>
<Switch>
{isLoggenIn ? (
<>
<Route exact path="/">
<Home />
</Route>
</>
) : (
// 비로그인시
<Route exact path="/">
<Auth />
</Route>
)}
</Switch>
</Router>
);
};

export default AppRouter;

```

# 2023.09.06

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

```

```
