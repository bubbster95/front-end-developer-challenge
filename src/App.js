import "./App.css";

import SkillTreePage from "./pages/SkillTree";

function App() {
  // Supress progress bar animation on window resize.
  // Solution from https://stackoverflow.com/a/55732883/16609168 
  window.addEventListener("resize", () => {
    let timer = 0;

    timer = setTimeout(() => {
      document.body.classList.remove("stop-transitions");
      timer = null;
    }, 100);

    if (timer) {
      clearTimeout(timer);
      timer = null;
    } else document.body.classList.add("stop-transitions");

  });

  return (
    <div className="App">
      <SkillTreePage></SkillTreePage>
    </div>
  );
}

export default App;
