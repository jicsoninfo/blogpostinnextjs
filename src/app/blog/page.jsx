import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Blog =() => {
    return (
      <div className={styles.Maincontainer}>
        <Link href="/blog/testId" className={styles.container}>
          <div className={styles.imageContainer}>
            <Image 
              className={styles.image}
              src = "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              width={400}
              height={250}
            />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>Heading title</h1>
            <p className={styles.desc}>description</p>
          </div>
        </Link>

        <Link href="/blog/testId" className={styles.container}>
          <div className={styles.imageContainer}>
            <Image 
              className={styles.image}
              src = "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              width={400}
              height={250}
            />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>Heading title</h1>
            <p className={styles.desc}>description</p>
          </div>
        </Link>

      </div>
    )
  }
  
  export default Blog
  
