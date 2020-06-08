import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

class User extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  
    render() {
        let {match, routes} = this.props;
        return (
            <div>
                <div className="content">
                    <div className="left">
                    
                        <Link to={`${match.url}`}>个人中心</Link>
                        <br/>
                        <Link to={`${match.url}/info`}>用户信息</Link>
                    </div>
                    <div className="right">
                    {
                       routes.map(({path, componentName, exact = true},key) => {
                            return <Route 
                                        exact={exact}
                                        key={key} 
                                        path={path} 
                                        component={componentName}
                                        />
                        })
                    }
                        
                    </div>
                
                </div>
                
            </div>
        );
    }
}

export default User;