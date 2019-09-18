import React, {Component} from 'react';
import api from '../../api';
import {apiRoute} from "../../route";
import styles from "./Food.module.css";

export default class Food extends Component {
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
        const searchTermData = data  && data.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()));

        return (
            <div className="container">
                <div className={styles.search}>
                    <input type="text"  className="form-control col-12"
                           onChange={this.handleChange} placeholder="Search..."/>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h2>Food2Fork</h2>
                        {searchTermData && searchTermData.map((d, index) => (
                            <div key={index}>
                                <h4>{d.title}</h4>
                                <img src={d.image_url} width="300px" alt={d.title}/>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        );
    }
}
 