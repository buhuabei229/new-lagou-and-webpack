import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import list from '../../../../../public/city';
class Citylist extends Component {
    constructor (props) {
         super(props);
         this.state = {
             city: ''
         }
    }
    render () {
        const propscity = this.props.location.state;
        return (
            <div className="find_city">
                {
                    list.map((ele, index) => {
                        return　(
                            <div key={index} className="city_list">
                                <p>{ele.nameStr}</p>
                                {
                                    ele.cityList.map((eles, index) => {
                                       return (
                                            <div key={index} className={propscity === eles ? 'bg': ''}>
                                               <NavLink to={{
                                                         pathname: `/hello/findx/find`,
                                                         state: eles
                                                        }}>{eles}
                                               </NavLink>
                                            </div>) 
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Citylist;