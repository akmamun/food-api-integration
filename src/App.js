import React, {Component, Suspense} from 'react';
import {Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar';


const FoodList = React.lazy(() => import('./components/Food/FoodList'));
const Food = React.lazy(() => import('./components/Food/Food'));

class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/" component={FoodList} exact/>
                        <Route path="/food/:id" component={Food} exact/>
                    </Switch>
                </Suspense>
            </>
        );
    }
}

export default App;
