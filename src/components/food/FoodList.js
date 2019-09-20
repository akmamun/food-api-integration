import React, {Component} from 'react';
import {Link} from "react-router-dom";
import api from '../../api';
import {apiRoute, localRoute} from "../../route";
import styles from "./FoodList.module.css";

export default class FoodList extends Component {
    state = {
        data: [],
        searchTerm: ""
    };

    async componentDidMount() {
        await this.getFoodData();
    }

    getFoodData = async () => {
        const response = await api.endpoint(apiRoute.search).getAll();
        this.setState({data: response.data.recipes})
    };

    handleChange = (event) => {
        this.setState({searchTerm: event.target.value});
    };

    render() {
        const {searchTerm, data} = this.state;
        const searchTermData = data && data.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()));

        return (
            <div className="container">
                <div className={styles.search}>
                    <input type="text" className="form-control col-12"
                           onChange={this.handleChange} placeholder="Search..."/>
                </div>
                <h2>Food2Fork</h2>
                <div className="row">
                    {searchTermData && searchTermData.map((d, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className={`card ${styles.customCard}`}>
                                <div className="card-body">
                                    <Link to={`${localRoute.food}/${d.recipe_id}`}
                                          className={styles.product}>
                                        <img src={d.image_url}
                                             className={styles.productImage}
                                             alt={d.title}/>
                                        <h6>{d.title}</h6>
                                        <span>{d.publisher}</span>
                                        <span className={`badge ${styles.customBadge}`}>{parseInt(d.social_rank)}</span>
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
 