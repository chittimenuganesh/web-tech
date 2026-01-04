import './nav.css'
import menuIcon from './assets/menu_bar_black.png';
import { useState } from 'react';

function Nav() {
  const [click, setClick] = useState(false);

  return (
    <div className="container">
      <h1 className="card">Welcome.., Track Your Tasks</h1>

      <div className="card options">
        <img
          src={menuIcon}
          alt="menu"
          onClick={() => setClick((prev) => !prev)}
        />

        {click && (
          <div className="menu">
            <button disabled>coming soon</button>
          </div>
        )}
      </div>
    </div>
  );
}


export default Nav; 