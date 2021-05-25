import {Tab, Nav, Row, Col } from 'react-bootstrap';
import MovieDashboard from './moviedashboard'
import NavDashboard from './navdashboard'
import User from './user'
import {FaFilm,FaUserCheck} from 'react-icons/fa'
import admin from '../img/admin.png'
import logo from '../img/logo.png'

const Dashboard = ({movie}) => {
return(
  <div className='dashboard'>
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}  className="panel">
      <div className="d-flex justify-content-center">
      < img src={logo} className="App-logo mt-1" alt="logo" />
      </div>
    <div className="admin-brand p-2 px-3 d-flex justify-content-around m-3 my-3">
     <img src={admin} className="admin-img" alt="admin-img" />
     <p className="my-auto">Med Amine Samet</p>
    </div>
   
      <Nav variant="pills" className="flex-column mt-4">
        <Nav.Item>
          <Nav.Link eventKey="first"><FaFilm className="mr-3"/><span className="dashboard-link">Movies</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second"><FaUserCheck className="mr-3"/><span className="dashboard-link">User profile</span></Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
           <MovieDashboard movie={movie}/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
            <User />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

  </div>
  
)}
export default Dashboard