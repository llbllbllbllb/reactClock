import React from 'react';
import './App.css';
import Clock from './component/Clock';
import LoginControl from './component/LoginControl';
import MailBox from './component/MailBox';
import WarningPage from './component/WarningPage';
import NameForm from './component/NameForm';

const m = ['a','b','c'];
const m1 = [];

const numbers = [1,2,3,4,5];
const num_list = numbers.map((number) => <li key={number.toString()}>{number}</li>);
console.log(num_list);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <LoginControl isLoggedIn={true} />
        <MailBox unreadMessages={m}/>
        <WarningPage />
        <ul>{num_list}</ul>

        <NameForm />
      </header>
    </div>
  );
}

export default App;
