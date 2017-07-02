import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 60 }}>
      <Scene key={'auth'}>
        <Scene
          key={'login'}
          component={LoginForm}
          title='Login'
        />
      </Scene>
      <Scene key={'main'}>
        <Scene
          key={'employeeList'}
          component={EmployeeList}
          title='Employees'
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
