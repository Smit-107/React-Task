import './App.css';
import { useState } from 'react'


function App() {

  let [btn, setbtn] = useState(['', '', '', '', '', '', '', '', '']);
  let [winn, setwinn] = useState('');
  let [cnt, setcnt] = useState(1);

  var test = (i) => {
    if (winn === "") {
      if (btn[i] === '') {
        btn[i] = "X"
        setbtn([...btn])
        setcnt(cnt + 1);

        auto()

        win(0, 1, 2, "X");
        win(3, 4, 5, "X");
        win(6, 7, 8, "X");
        win(0, 3, 6, "X");
        win(1, 4, 7, "X");
        win(2, 5, 8, "X");
        win(2, 4, 6, "X");
        win(0, 4, 8, "X");

        win(0, 1, 2, "O");
        win(3, 4, 5, "O");
        win(6, 7, 8, "O");
        win(0, 3, 6, "O");
        win(1, 4, 7, "O");
        win(2, 5, 8, "O");
        win(2, 4, 6, "O");
        win(0, 4, 8, "O");
      }
    }
  }

  var auto = () => {
    if (cnt < 5) {
      while (true) {
        let a = Math.floor(Math.random() * 9)
        if (btn[a] === '') {
          btn[a] = "O"
          setbtn([...btn])
          break;
        }
      }
    }
    else if (cnt === 5 && winn === '') {
      setwinn('Draw');
    }
  }

  function win(p1, p2, p3, si) {
    if (btn[p1] === si && btn[p2] === si && btn[p3] === si) {
      setwinn(`${si} is win`);
    }
  }

  function reset() {
    cnt = 1;
    setcnt(1)
    // alert(cnt);
    setbtn(['', '', '', '', '', '', '', '', ''])
    setwinn('')
  }

  return (
    <div>
      <table>
        <tbody>

          <tr>
            <td><input type="button" value={btn[0]} onClick={() => { test(0) }} className="i1" /></td>

            <td><input type="button" value={btn[1]} onClick={() => { test(1) }} className="i1" /></td>

            <td><input type="button" value={btn[2]} onClick={() => { test(2) }} className="i1" /></td>

          </tr>

          <tr>
            <td><input type="button" value={btn[3]} onClick={() => { test(3) }} className="i1" /></td>

            <td><input type="button" value={btn[4]} onClick={() => { test(4) }} className="i1" /></td>

            <td><input type="button" value={btn[5]} onClick={() => { test(5) }} className="i1" /></td>

          </tr>

          <tr>
            <td><input type="button" value={btn[6]} onClick={() => { test(6) }} className="i1" /></td>

            <td><input type="button" value={btn[7]} onClick={() => { test(7) }} className="i1" /></td>

            <td><input type="button" value={btn[8]} onClick={() => { test(8) }} className="i1" /></td>

          </tr>

          <tr>
            <td colSpan={3} id='winner'>{winn}</td>
          </tr>

          <tr>
            <td colSpan={3} id="reset_back"><button id="reset" onClick={reset}>Reset All</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
