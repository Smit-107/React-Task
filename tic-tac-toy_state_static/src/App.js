import './App.css';
import { useState } from 'react'


function App() {


  let [v1, setv1] = useState('');
  let [v2, setv2] = useState('');
  let [v3, setv3] = useState('');
  let [v4, setv4] = useState('');
  let [v5, setv5] = useState('');
  let [v6, setv6] = useState('');
  let [v7, setv7] = useState('');
  let [v8, setv8] = useState('');
  let [v9, setv9] = useState('');
  let [reset, setreset] = useState('');
  let [cnt, setcnt] = useState(1);


  let test = (e) => {

    if (eval(`v${e}`) == "") {

      if (cnt % 2 == 0) {
        let arr =[setv1,setv2,setv3,setv4,setv5,setv6,setv7,setv8,setv9];
        // eval(`setv${e}('X')`)
        arr[e-1]('X')
      }

      else {
        // eval(`setv${e}('O')`)
        let arr =[setv1,setv2,setv3,setv4,setv5,setv6,setv7,setv8,setv9];
        arr[e-1]('O')
      }

      if (!winner() && cnt == 9) {
        setreset('Math Draw')
      }

      setcnt(cnt + 1);

    }
  };



  let winner = () => {
    if (v1 == 'X' && v2 == 'X' && v3 == 'X' ||
    v1 == 'X' && v4 == 'X' && v7 == 'X' ||  
    v7 == 'X' && v8 == 'X' && v9 == 'X' || 
    v3 == 'X' && v6 == 'X' && v9 == 'X' || 
    v2 == 'X' && v5 == 'X' && v8 == 'X' || 
    v4 == 'X' && v5 == 'X' && v6 == 'X' || 
    v1 == 'X' && v5 == 'X' && v9 == 'X' || 
    v3 == 'X' && v5 == 'X' && v7 == 'X' ) {
      setreset('X is Winner')
      return true;
    }

    if (v1 == 'O' && v2 == 'O' && v3 == 'O' ||
    v1 == 'O' && v4 == 'O' && v7 == 'O' ||
    v7 == 'O' && v8 == 'O' && v9 == 'O' ||
    v3 == 'O' && v6 == 'O' && v9 == 'O' ||
    v2 == 'O' && v5 == 'O' && v8 == 'O' ||
    v4 == 'O' && v5 == 'O' && v6 == 'O' ||
    v1 == 'O' && v5 == 'O' && v9 == 'O' ||
    v3 == 'O' && v5 == 'O' && v7 == 'O' ) {
      setreset('O is Winner')
      return true;
    }
  }

  const resetGame = () => {
    setv1('');
    setv2('');
    setv3('');
    setv4('');
    setv5('');
    setv6('');
    setv7('');
    setv8('');
    setv9('');
    setcnt(1);
    setreset('')
  };


  // let [btn,setbtn]=useState(['','','','','','','','','']);
  // let [x,setx]=useState('X');

  // let test = (i) => {

  //     if(btn[i] === '')
  //     {
  //         let newBtn=[...btn];
  //         newBtn[i]=x;
  //         setbtn(newBtn);
  //         setx(x === 'X' ? 'O' : 'X'); 
  //     }

  // }
  


  return (
    <div>
      <table>
        <tbody>

          <tr>
            <td><input type="button" value={v1} onClick={() => { test(1)}} className="i1" /></td>

            <td><input type="button" value={v2} onClick={() => { test(2) }} className="i1" /></td>

            <td><input type="button" value={v3} onClick={() => { test(3) }} className="i1" /></td>

          </tr>


          <tr>
            <td><input type="button" value={v4} onClick={() => { test(4) }} className="i1" /></td>

            <td><input type="button" value={v5} onClick={() => { test(5) }} className="i1" /></td>

            <td><input type="button" value={v6} onClick={() => { test(6) }} className="i1" /></td>

          </tr>


          <tr>
            <td><input type="button" value={v7} onClick={() => { test(7) }} className="i1" /></td>

            <td><input type="button" value={v8} onClick={() => { test(8) }} className="i1" /></td>

            <td><input type="button" value={v9} onClick={() => { test(9) }} className="i1" /></td>

          </tr>


          <tr>
            <td colSpan={3} id='winner'>{reset}</td>
          </tr>


          <tr>
            <td colSpan={3} id="reset_back"><button onClick={resetGame} id="reset">Reset All</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
