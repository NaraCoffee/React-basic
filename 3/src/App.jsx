// import PostItem from './component/PostItem'
import Button from './component/Button'

export default function App() {
  /* const posts = [
    { id: 1, title: 'React 시작하기', author: '홍길동' },
    { id: 2, title: 'JS 문법 정리', author: '김철수' },
    { id: 3, title: 'CSS 레이아웃', author: '이영희' },
  ] */

  return (
    <div>
      <Button text="메일" color="red" />
      <Button text="카페" color="blue">
        <span>자식요소 blue</span>
      </Button>
      <Button text="블로그" color="green">
        <span>자식요소 green</span>
      </Button>
      <Button text="블로그" />
      {/* <h1>게시글</h1>
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))} */}
    </div>
  )
}

// 이전 검색 예제
// import InputCard from './component/InputCard'
// const inputInfo = { title: '검색', placeholder: '검색어를 입력하세요' }
// <InputCard {...inputInfo} />

// 이전 메뉴 예제
// import MenuButton from './component/MenuButton'
// const menus = [
//   { id: 1, label: '메일', color: 'red' },
//   { id: 2, label: '카페', color: 'blue' },
//   { id: 3, label: '블로그', color: 'green' },
// ]
// <h1>메뉴</h1>
// {menus.map((menu) => <MenuButton key={menu.id} {...menu} />)}

// 이전 컴포넌트 예제
/*
import './App.css'
import Button from './component/Button'
import Main from './component/Main'
import MenuButton from './component/MenuButton'

function App() {
  return (
    <div>
      <Main content="메인 영역입니다" bgColor="lightblue" />
      <MenuButton />
      <Button text="메일" color="red" />
      <Button text="카페" color="blue">
        <span>자식요소 blue</span>
      </Button>
      <Button text="블로그" color="green">
        <span>자식요소 green</span>
      </Button>
      <Button text="블로그" />

      <h1>hello react</h1>
    </div>
  )
}

export default App
*/
