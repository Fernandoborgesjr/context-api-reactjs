import { useTheme } from "./hooks/useTheme";
import Switch from "react-switch";

function App() {
  const {theme, toggleTheme, toggleStatus} = useTheme();
  
  const style = {
    textAlign: 'center',
    backgroundColor: theme.primary,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: theme.secondary,
  }

  return (
    <div style={style}>
      <Switch onChange={toggleTheme} checked={toggleStatus} />
    </div>
  );
}



export default App;
