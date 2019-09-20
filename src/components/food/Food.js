import React, {Component} from "react";
import api from "../../api";
import {apiRoute, localRoute} from "../../route";
import {Link} from "react-router-dom";
import styles from "./FoodList.module.css";

export default class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: [],
            suggestion: []
        };
    }

    async componentDidMount() {
        await this.getFood();
        await this.getSuggestion();
    }

    getFood = async () => {
        const id = this.props.match.params.id;
        const response = await api.endpoint(apiRoute.recipe).getOne(id);
        this.setState({food: response.data.recipe || []});
    };

    getSuggestion = async () => {
        const {food} = this.state;
        const firstWord = food.title && food.title.split(" ")[0];
        const response = await api.endpoint(apiRoute.suggestion + firstWord).getAll();
        this.setState({suggestion: response.data.recipes || []})
    };

    render() {
        const {food, suggestion} = this.state;
        return (
            <div className="container">
                <Link to={localRoute.home}> &#8701; Back </Link>
                <div className="col-lg-7 offset-lg-3">
                    <div className="card">
                        <div className="card-body">
                            <h5> {food.title}  </h5>
                            <img src={food.image_url} width="400px"
                                 className="img-fluid" alt=""/>
                            <div>
                                <h6 className="mt-3">ingredients</h6>
                                {food.ingredients && food.ingredients.map((f, i) =>
                                    <li className="list-unstyled ml-4" key={i}>
                                        {f}
                                    </li>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <h6 className="mt-5">You May Also Like </h6>
                <div className="row">
                    {suggestion && suggestion.slice(0, 8).map((s, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className={`card ${styles.customCard}`}>
                                <div className="card-body">
                                    <Link to={`${localRoute.food}/${s.recipe_id}`} target="_blank"
                                          className={styles.product}>
                                        <img src={s.image_url}
                                             className={styles.productImage}
                                             alt={s.title}/>
                                        <h6>{s.title}</h6>
                                        <span>{s.publisher}</span>
                                        <span className={`badge ${styles.customBadge}`}>{parseInt(s.social_rank)}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}