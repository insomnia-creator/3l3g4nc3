const checkIfFirstLaunch = () => {
  const item = localStorage.getItem('first_run');
  if (!item) {
    const resultsEl = document.querySelector('.result')!;
    resultsEl.innerHTML = 'It\'s your first time using 3l3g4nc3. \n Press <kbd>TAB</kbd> on your keyboard to jump to search <br> You can run commands by prefixing them with / <br> For a list of available commands run /commands';
    localStorage.setItem('first_run', 'false');
  }
};

export default checkIfFirstLaunch;
