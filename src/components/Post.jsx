import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/86138078?v=4' />
                    <div className={styles.authorInfo}>
                        <strong>Thiago Amim </strong>
                        <span>Web Developer</span>
                    </div>
                </div>


                <time title='20 de Fevereiro ás 14:43' dateTime='2024-02-20'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉<a href=""> jane.design/doctorcare </a></p>

                <p>
                    <a href="">novoprojet</a>{' '}
                    <a href=''> #nlw</a>{' '}
                    <a href=''>#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'/>
                <footer>
                <button type='submit'>Publicar</button>
                </footer>
            </form>
        </article>
    )
}