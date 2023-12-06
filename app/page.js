import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="page-container">
    <div className={styles.main}>
    <section class="main-header">
            <article>
                <h1>NEWS TODAY</h1>
                <p>
Experience news like never before with our sleek and intuitive app. Stay informed with real-time updates tailored to your interests. From global affairs to entertainment, our app delivers the latest stories effortlessly. Download now for a personalized and seamless news experience.</p>
                <a href="./feed">Go to News Feed Page</a>
            </article>
        </section>
    </div>
  </div>
  )
}
