function Section() {
  const boardList = [
    { id: 1, title: '공지사항', content: '사이트 점검 안내' },
    { id: 2, title: '이벤트', content: '신규 가입 이벤트 진행 중' },
    { id: 3, title: '업데이트', content: '버전 2.0 출시' },
  ]

  return (
    <section className="section">
      <h2 className="section-title">Section</h2>
      <ul className="board-list">
        {boardList.map((board) => (
          <li key={board.id} className="board-item">
            <h2 className="board-title">
              {board.id} : {board.title}
            </h2>
            <p className="board-content">{board.content}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Section
