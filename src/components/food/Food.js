import React, {Component} from "react";
import api from "../../api";
import {apiRoute, localRoute} from "../../route";
import {Link} from "react-router-dom";

export default class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: []
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        api.endpoint(apiRoute.recipe).getOne(id)
            .then(response => this.setState({food: response.data.recipe || []}));
    }

    render() {
        const {food} = this.state;
        console.log(food)
        return (
            <div className="container">
                <Link to={localRoute.home}>Back</Link>
                <div className="col-lg-7 offset-lg-3">
                    <div className="card">
                        <div className="card-body">
                            <h5> {food.title}  </h5>
                            <img src={food.image_url} width="400px"
                                 className="img-fluid" alt=""/>
                            <div>
                                <h6 className="mt-3">ingredients</h6>
                                {food.ingredients
                                && food.ingredients.map((f, i) =>
                                    <li className="list-unstyled ml-4" key={i}>
                                        {f}
                                    </li>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}