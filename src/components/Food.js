import React, { Component } from 'react';

import api  from '../api';
import {apiRoute} from "../route";

export default class Food extends Component {
 
        state = {
            data: [],
            filter: ""

        };
   

    componentDidMount() {
        api.endpoint(apiRoute.search).getAll()
            .then(response => this.setState({ data: response.data.recipes }))
    }
      // }
      handleChange =  (event) =>{ 
        this.setState({ filter: event.target.value });

      }
    
    render() {
      const { filter, data } = this.state;
      const lowercasedFilter = filter.toLowerCase();
      const filteredData = data.filter(item => {
        return Object.keys(item).some(key =>
          item[key].toLowerCase().includes(lowercasedFilter)
        );
      });
        console.log(data)
        return (
          <div className="container">
           <input type="text" className="input"  onChange={this.handleChange} placeholder="Search..." />

            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h2>Todo List</h2>
                {filteredData && filteredData.map((d, index) => (
                   <div key={index}>
                    <h4>{d.title}</h4>
                    <img src={d.image_url} width="300px" alt="" />
                  </div>
                  
                ))}
                {/* <div key={index}>
                    <h4>{d.title}</h4>  
                    <img src={d.image_url} width="300px" alt="" />
                  </div> */}
              </div>
            </div>
          </div>
        );
    }
}
 