import React, { Component } from "react";
import api from "../../api";
import {apiRoute} from "../../route";

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
            .then(response => this.setState({food:response.data.recipe}));
    }

    render() {
        const { food } = this.state;
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-8 offset-lg-2">
                        <h6> {food.title}  </h6>
                        <img src={food.image_url} width="300px" alt=""/>
                        {
                            food.ingredients
                            && food.ingredients.map((f,i)=>
                             <li key={i}>{f}</li>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}