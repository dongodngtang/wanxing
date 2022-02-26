import styles from './index.less';
import {Login} from './login'

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
   <Login/>
    </div>
  );
}
