import Image from 'next/image';
import styles from './page.module.css';
import Hero from '../../public/hero.png';
import Button from '@/components/Button/Button';
export default function Home() {
  return (
    // <div>Home</div>
    <div className={styles.container}>
        <div className={styles.item}>
            <h1 className = {styles.title}>Better design for your digital products. </h1>
            <p className={styles.desc}>
              Turning your Idea into Reality. We bring together the teams from the global tech industry.
            </p>
            <Button url="/portfolio" text="Contact" />
            {/* <button className={styles.button}>See Our Workds </button> */}
        </div>
        <div className={styles.item}>
          <Image src={Hero} alt="" className={styles.img} />
        </div>
      {/* <Image src={Hero} alt="" className={styles.img} /> */}
      {/* <Image width={500} height={500} src="https://images.pexels.com/photos/17583913/pexels-photo-17583913/free-photo-of-nevado-callangate-cusco.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="No Image" /> */}
    </div>
  )
}
