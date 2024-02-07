import './App.css';
import MainUl from './Main_ul';

let know_us_arr = {
  about:'about us',
  about_succes:'success stories',
  about_placement:'placement partners',
}
let activity = ['gallery','event']
let student_login=["Student Login","Showcase"];

let cor=[
  {Course:'DEVELOPMENT COURSES',
  CourseName:['Master In Flutter Development','Master In Android Development','Master In Game Development','Master In Full Stack Development','Master In Web Development','Master In React Native','Master In Data Science','Master In ASP.net development','Master In Data Analytics']},

  {Course:'CIVIL-MECH. ENGINEERING',
  CourseName:['AutoCAD Civil','3Ds Max','Google SketchUp','Lumion','Revit Architecture','Interior & Exterior Design','AutoCAD Mechanical','SolidWorks','Creo Parametrics 2.0']},

  {Course:'DESIGN COURSES',
  CourseName:['Master In Web Design','Master in UI/UX Design','Master In 2D/3D Animation','Master In VFX','Advance Graphics Design','Video Editing','2D/3D Game Design','Maya Pro | 3Ds Max Pro','Blender 3D Design']},

  {Course:'BUSINESS DEVELOPMENT',
  CourseName:['Digital Marketing','Personality Development','Entrepreneurship Development','Corporate English','Social Media Marketing']},

  {Course:'PROGRAMMING IT',
  CourseName:['C Programming','C++ Programming','Java Programming','IOS','Advance PHP','Laravel','Wordpress','CodeIgniter']},

  {Course:'SHORT TERM COURSES',
  CourseName:['Adobe Illustrator','Adobe XD','Tally Accounting','CCC- Basic Computer Course','Photoshop','CorelDraw']},

  {Course:'TRENDY COURSES',
  CourseName:['Node JS','Master In Blockchain','Angular JS','React JS','Ethical Hacking','Unity 3D','Python','React Native','Desktop App Development']}
]

function App() {
  return (
   
    <>
      <MainUl send={student_login} send_know={know_us_arr} send_activity={activity} send_course={cor}/>
    </>

  );
}

export default App;
