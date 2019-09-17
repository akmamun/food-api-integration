import React, { Component } from 'react';

import api  from '../../route';
 
class TodoList extends Component {
 
        state = {
            data: []
        };
   

    componentDidMount() {
        api.endpoint().getAll()
        .then(response => this.setState({ data: response.data.recipes }))
    }

    render() {
        const { data } = this.state; 
        return (
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h2>Todo List</h2>
                {data && data.map((d, index) => (
                  <div key={index}>
                    <h4>{d.title}</h4>  
                    <img src={d.image_url} width="300px" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
}

export default TodoList;
