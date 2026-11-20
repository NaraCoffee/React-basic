import './App.css'
import Header from './component/Header'
import Visual from './component/Visual'
import Menu from './component/Menu'
import Footer from './component/Footer'

function App() {

  return (
    <main className='container'>
      <Header logo={'🥐 bread day'} />
      <Visual 
        sub={'매일 아침 7시, 갓 구운 빵'}
        title={'오늘도 따뜻한 빵 한 조각'}
      />
      <Menu />
      <Footer 
        address={'서울시 중랑구 상봉동 빵굽는길'}
        hours={'07:00~20:00 (월요일은 휴무)'}
      />
    </main>
  )
}

export default App
