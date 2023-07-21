//"use client";
import styles from './footer.module.css';
import Image from 'next/image';
const Footer =() => {
  //console.log('hello');
    return (
      <div className={styles.container}>
          <div>@2023, R B Sharma. All rights reserved</div>
          <div className={styles.social}>
            {/* <img src="" alt="RBSharma" /> */}
            
            <Image src="/1.png" width={15} height={15} alt="Facebook" className={styles.icon} />
            <Image src="/2.png" width={15} height={15} alt="Insta" className={styles.icon} />
            <Image src="/3.png" width={15} height={15} alt="Twiteer" className={styles.icon}  />
            <Image src="/4.png" width={15} height={15} alt="Youtube" className={styles.icon} />

            {/* <div className={styles.imgContainer}>
              <Image src="/1.png" fill={true} alt="RBsharma" />
            </div> */}
            
          </div>
        
        </div>
    )
  }
  
  export default Footer
  
