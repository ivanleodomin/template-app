import styles from "../../styles/Header.module.css";
import Image from "next/image";
import { useState } from "react";
import toggleStatus from "../../hooks/toggleState";


export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <header>
      <nav className={styles.menu}>
        <Image className={styles.logo} alt="icon header" src="/example.png" width={80} height={80} />
        <ul className={show? `${styles.menu_items} ${styles.show}` : styles.menu_items}>
          <li>Home</li>
          <li>Servicios</li>
          <li>Alquileres</li>
          <li>Ventas</li>
          <li>Contacto</li>
        </ul>
        <span className={styles.btn_menu}>
          <i>
            <Image
              onClick={() => toggleStatus(show, setShow)}
              alt="icon header"
              src="/hamburgermenu.png"
              width={80}
              height={80}
            />
          </i>
        </span>
      </nav>
    </header>
  );
}
