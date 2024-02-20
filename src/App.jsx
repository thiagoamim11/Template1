import { Post } from "./components/Post"
import { Header } from "./components/Header"
import './global.css'
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";


function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>

        <main>
          <Post
            author="Thiago Amim"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ut nulla consectetur explicabo necessitatibus expedita dolorem? Inventore libero magnam porro molestiae doloremque, sint possimus voluptatem dolores aspernatur voluptates sunt fuga."
          />

          <Post
            author="Isela"
            content="Um novo post da Isela"
          />
        </main>

      </div>
    </div>

  )
}

export default App


