
import styles from './page.module.css'
import Image from 'next/image'
const Blogpost =() => {
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>heading title</h1>
            <p className={styles.desc}>description</p>
          </div>
          <div className={styles.author}>
            <Image 
              src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <sapn className={styles.username}>test name</sapn>
          </div>

          <div className={styles.imageContent}>
            <Image 
              src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
              alt=""
              fill={true}
              className={styles.image}
            />
         </div>
        </div>
        <div className={styles.content}>
        <p className={styles.text}>
          Text conten
        </p>
        </div>
      </div>
    );
  };
  
  export default Blogpost
  
