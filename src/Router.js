import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmploeeCreate';

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
          rightTitle={'Add'}
          onRight={() => { Actions.employeeCreate(); }}
          initial
        />
        <Scene
          key={'employeeCreate'}
          component={EmployeeCreate}
          title='Create Employee'
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
