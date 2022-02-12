import React from 'react'

class Articel extends React.Component{

    render(){
        return(<div className={classes.A}>
            <img src={this.props.image} alt=""/>
            <h2>{this.props.headline}</h2>
            <h4>{this.props.story}</h4>
        </div>)
    }
}

export default Articel