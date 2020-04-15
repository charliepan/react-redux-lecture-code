import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addAvenger} from '../redux/reducer';

class Avengers extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameInput: ''
        }
    }

    handleInput = (val) => {
        this.setState({nameInput: val})
    }

    handleAdd = () => {
        //bring in redux action here
        const newAvenger = {
            // grab the last object and add 1 to id to get new id
            id: this.props.avengers[this.props.avengers.length - 1].id + 1,
            name: this.state.nameInput
        }
        // Now pass newAvenger to action
        this.props.addAvenger(newAvenger);
    }

    render(){
        // console.log(this.props)
        const mappedAvengers = this.props.avengers.map((avenger,i)=>(
            <p key={i}>{avenger.name}</p>
        ))
        // console.log(this.props)
        return (
            <div>
                <h1>Avengers</h1>
                <input 
                    value={this.state.nameInput}
                    placeholder='Avenger Name'
                    onChange={(e) => this.handleInput(e.target.value)}/>
                <button onClick={this.handleAdd}>Add Avenger</button>
                {mappedAvengers}
            </div>
        )
    }
}

// Subcribing the all states from all reducers 
// const mapStateToProps = reduxState => reduxState;

// in this case all of avengers from the reducer
const mapStateToProps = reduxState =>{
    // dot notation to get the specific reducer
    const {avengers} = reduxState.reducer;
    return{
        avengers:avengers
    }
}

// An object to pass reducer
// const mapDispatchToProps = {
//     addAvenger: addAvenger
// }

// To subscribe to a dispatcher (reducer action) reference as following parameters
export default connect(mapStateToProps, {addAvenger})(Avengers);