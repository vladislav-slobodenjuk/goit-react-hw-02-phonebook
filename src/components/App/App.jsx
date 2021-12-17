import logo from './logo.svg';
import s from './App.module.scss';

function App() {
  return (
    <div className={s.app}>
      <img src={logo} className={s.appLogo} alt="logo" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
