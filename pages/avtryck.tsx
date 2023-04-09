import { MuiBottomNavBar } from '@/p-components/MuiBottomNavBar'
import { NextPage } from 'next'
import Link from 'next/link'
import styles from "../styles/Avtryck.module.css"
import Image from "next/image"

interface Props {}

const Avtryck: NextPage<Props> = ({}) => {
  return (
  
    <div>
    


    <div>

 

  {/*
    <Link href="/">
      <object data="returnbutton.sv" type="image/svg+xml">
        <button></button>
      </object>
    </Link>
  */}


  


    </div>

    <div>
  <Image src={'/oatly-havre.svg'} alt={'#'} width={"200"}
          height={"200"} className={styles.Image}></Image>

</div>


<div className={styles.titleContainer}>

<h3 className= {styles.title}> Oatly havremjölk  </h3>

</div>

<div className={styles.infoContainer}>

<Image src={'/Klimatavtryck HAVRE.svg'} alt={'#'}  width={"200"}
          height={"200"} className={styles.imageInfo}
          ></Image>

</div>


<div className={styles.buttonContainer}>
<button className={styles.button}>

<Link href="/Search" className={styles.buttonlink}>Jämför liknande produkt</Link>

</button>
</div>


 



<div className={styles.navdiv}>
  
<MuiBottomNavBar/>
</div>

</div>
  )
}

export default Avtryck