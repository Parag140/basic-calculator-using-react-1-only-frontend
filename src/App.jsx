import styles from "./App.module.css";
import Button from "./components/ButtonsContainer.jsx";
import Display from "./components/Display.jsx";
function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <Button></Button>
    </div>
  );
}
export default App;
