import './App.css';
import { useState } from 'react';

function App() {



  var [R, setR] = useState([]);

  for (var i = 0; i < 9;) {
    var p = Math.floor(Math.random() * 9 + 1)
    if (!R.includes(p)) {
      R.push(p);
      i++;
    }
  }

  R.map((val, ind) => {
    if (val === 9) {
      R[ind] = '';
    }
  })


 
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td colSpan="3"><center>Number Puzzle<br />Game</center></td>
          </tr>
          <tr>
            <td><input type="button" value={R[0]} id="b1" className="i1" /></td>
            <td><input type="button" value={R[1]} id="b2" className="i1" /></td>
            <td><input type="button" value={R[2]} id="b3" className="i1" /></td>
          </tr>
          <tr>
            <td><input type="button" value={R[3]} id="b4" className="i1" /></td>
            <td><input type="button" value={R[4]} id="b5" className="i1" /></td>
            <td><input type="button" value={R[5]} id="b6" className="i1" /></td>
          </tr>
          <tr>
            <td><input type="button" value={R[6]} id="b7" className="i1" /></td>
            <td><input type="button" value={R[7]} id="b8" className="i1" /></td>
            <td><input type="button" value={R[8]} id="b9" className="i1" /></td>
          </tr>
          <tr>
            <td colSpan="3"><div id="winner"></div></td>
          </tr>
          <tr>
            <td colSpan="3" id="reset_back"><button id="reset"  >Reset All</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
