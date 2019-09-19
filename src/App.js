import React, {Component, Suspense} from 'react';
import {Switch, Route} from "react-router-dom";
import {localRoute} from "./route";
import Navbar from './components/Navbar';

const FoodList = React.lazy(() => import('./components/food/FoodList'));
const Food = React.lazy(() => import('./components/food/Food'));

class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path={localRoute.home} component={FoodList} exact/>
                        <Route path={`${localRoute.food}/:id`} component={Food} exact/>
                    </Switch>
                </Suspense>
            </>
        );
    }
}

export default App;
