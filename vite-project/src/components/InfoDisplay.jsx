import React, { Component } from 'react'

export default class InfoDisplay extends Component {

    
    render() {
        return (
            <div>
                {<img src={this.props.item.img} alt="Book Cover" style={{width:'180px', height:'250px'}}/>}<br/>
                <b>Book Name:</b> {this.props.item.book}<br/>
                <b>Author:</b> {this.props.item.author}<br/>
                <b>Dedcription:</b> <br/>
                  <textarea rows="4" cols="50">{this.props.item.description}</textarea>

                
            </div>
        )
    }
}
