import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './frontend/clock'
import Tab from './frontend/tab'

const tabs = [
  {title: 'TP', content: 'The losing pod'},
  {title: 'FW', content: 'I am the First'},
  {title: 'Mn St', content: 'I am the last'},
];

function Root() {
  return (
    <div>
      <h1 class="clock">

        <Clock />
      </h1>
      <h1 class="tab">
      <Tab panes={tabs} />

      </h1>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root/>, root);
 

});