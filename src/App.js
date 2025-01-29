import './App.css';
import About from './components/About';
import Classes from './components/Classes';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import {
  Route,
  Routes
} from "react-router-dom";
import Teachers from './components/Teachers';
import Login from './components/Login';
import LoginForm from './components/LoginBoth';
import Home1 from './components/Home1';
import InstituteProfile from './Profile/ProfileIn';
import StudentProfile from './Profile/StudentProfile';
import StudentList from './components/StudentList';
import Examination from './components/Examination';
import AddStudent from './components/AddStudent'
import AddCourse from './components/AddCourse'
// import StudentList from './components/StudentList'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Home />}></Route> */}
        <Route path='/' element={<Home1 />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>
        {/* <Route exact path='/login' element={<Login />}></Route> */}
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/teachers' element={<Teachers />}></Route>
        <Route exact path='/class' element={<Classes />}></Route>
        <Route exact path='/login' element={<LoginForm />}></Route>
        <Route exact path='/profile' element={<InstituteProfile />}></Route>
        <Route exact path='/studentProfile' element={<StudentProfile />}></Route>
        <Route exact path='/studentList' element={<StudentList />}></Route>
        <Route exact path='/exams' element={<Examination />}></Route>
        <Route exact path='/addstudent' element={<AddStudent/>}></Route>
        <Route exact path='/addcourse' element={<AddCourse/>}></Route>
        <Route exact path='/students' element={<StudentList/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
