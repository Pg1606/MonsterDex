import { useState, useEffect } from 'react';  //used when working with functional Components

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  useEffect(() => {
    fetch('Monsters.json')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonster(newFilteredMonster);
  }, [monsters, searchField]);

  const OnSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  
  return (
    <div className="App">
        <h1 className='app-title'>MonsterDex</h1>

        <SearchBox
          onChange={OnSearchChange}
          placeholder="search monsters"
          className="monster-search-box"
        />
        <CardList monsters = {filteredMonster}/>
      </div>
  );
};
export default App;