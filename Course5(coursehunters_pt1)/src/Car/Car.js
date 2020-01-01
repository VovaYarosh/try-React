import React from 'react';
import classes from'./Car.css';
import PropTypes from 'prop-types'
import withClass from '../hoc/withClass'

class Car extends React.Component{

    constructor(props){
        super(props)

        this.inputRef = React.createRef()
    }

    componentDidMount(){
        if(this.props.index===1){
            this.inputRef.current.focus();
        }
    }

    render(){
        console.log('Car render');

        const inputClasses = ['input'];

        if(this.props.name !== ''){
            inputClasses.push('green');
        }else{
            inputClasses.push('red');
        }

        if(this.props.name.length > 4){
            inputClasses.push('bold')
        }

        return (
            <React.Fragment>
                <h2>Car name: {this.props.name}</h2>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input ref={this.inputRef}
                       type="text"
                       onChange={this.props.onChangeName}
                       value= {this.props.name}
                       className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}

Car.propTypes = {
   name: PropTypes.string,
   year: PropTypes.number,
   index: PropTypes.number,
   onChange: PropTypes.func,
   onDelete:PropTypes.func,
};


export default withClass(Car, classes.Car)

