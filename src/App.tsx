import { CreateSheet, css } from "packages/aphrodite"

const App: React.FC = () => {
  const onContactClick = () => {
    const a = document.createElement("a")
    a.href = "mailto:contact@wookez.com"
    a.click()
  }

  return (
    <div className={css(Styles.container)}>
      <div className={css(Styles.content)}>
        <img className={css(Styles.chapelle)} src='/modern-problems-chapelle.gif' />
        <button onClick={onContactClick}>Text me</button>
      </div>
    </div>
  )
}

export default App

const Styles = CreateSheet({
  container: {
    minWidth: "100vw",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  chapelle: {
    "@media(max-width: 500px)": {
      width: 300,
    }
  }
})
