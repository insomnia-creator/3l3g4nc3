const checkIfFirstLaunch = () => {
  const item = localStorage.getItem('first_run');
  if(!item){
    const resultsEl = document.querySelector('.result')!;
    resultsEl.innerHTML = 'It\'s your first time using 3l3g4nc3. \n Press <TAB> key on your keyboard to jump to search';
    localStorage.setItem('first_run', 'false');
  }
};

export default checkIfFirstLaunch;
