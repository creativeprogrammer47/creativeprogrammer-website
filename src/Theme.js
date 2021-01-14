import React from 'react'
import './theme.css'
function Theme() {

    const [darkMode, setDarkMode] = React.useState(false)
  return (
    <div>
      <div className="toggle-container" >
        <label className="toggle">
          <input type="checkbox" onClick={() => setDarkMode(prevMode => !prevMode)} />
          <span className="slider round material-icons"></span>
        </label>
      </div>
    </div>
  );
}

export default Theme
