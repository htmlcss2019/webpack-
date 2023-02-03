import React, {Component} from 'react';
import PropTypes from "prop-types"
import Img1 from '@/img/2.jpg'
class Child extends Component {
    render() {
        return (
            <div>
                <h3>Child组件</h3>
                {console.log(this.props)}
                <p>补助发放:{this.props.x+1000}</p>
                <img src={Img1}/>
            </div>
        );
    }
}

export default Child;
Child.propTypes={
    x:PropTypes.number.isRequired
}