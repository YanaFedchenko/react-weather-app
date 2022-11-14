import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Yana Fedchenko and is{" "}
          <a
            href="https://github.com/YanaFedchenko/react-weather-app"
            target="_blank"
          >
            open-sourse on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

