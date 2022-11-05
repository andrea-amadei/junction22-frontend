import React, { Component } from "react";
import EntryDisplay from "./EntryDisplay";
import AudioComponent from './AudioComponent';

import { Grid } from '@mui/material';


class InputForm extends Component {
    state = {
      content: "",
      date: "",
      title: "",
      mood: "",
    };
    
    componentDidMount() {
        this.setState({ date: this._getToday() });
      }
    
    onDateChange = e => {
        this.setState({ date: e.target.value });
      };
    
    onTextareaChange = e => {
        this.setState({ content: e.target.value });
      };
    

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
          content: "",
          date: this._getToday(),
          title: "",
          mood: ""
        });
      };
    
      _getToday() {
        const local = new Date();
        local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
        return local.toJSON().slice(0, 10);
      }
    
      render() {
        const { content, date, title, mood } = this.state;

        const button ={ color: "green", disabled: false, text: "submit" }
        
        return (
            <div
              className="ui centered segment"
              style={{ maxWidth: "62em", margin: "0 auto" }}
            >
            
            <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="three fields">
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <label>Subject:</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        autoComplete="off"
                        onChange={e => this.setState({ title: e.target.value })}
                    />
                </Grid>
                <Grid item xs={6} md={2}>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={date}
                        onChange={this.onDateChange}
                    />
                </Grid>
                <Grid item xs={6} md={2}>
                    <label>Mood:</label>
                    <select
                        className="ui fluid dropdown"
                        onChange={e => this.setState({ mood: e.target.value })}
                        value={mood}
                    >
                        <option value="">--Select One--</option>
                        <option value="😁">😁</option>
                        <option value="😅">😅</option>
                        <option value="🥲">🥲</option>
                        <option value="😥">😥</option>
                        <option value="😡">😡</option>
                        <option value="😭">😭</option>
                        <option value="😐">😐</option>
                    </select>
                </Grid>
                <Grid item md={12}>
                    <label>Entry:</label>
                    <textarea value={content} onChange={this.onTextareaChange} />  
                </Grid>
                <Grid item md={12}>
                    <AudioComponent />
                </Grid>
                </Grid>
          </div>
          <button
            className={`ui ${button.color} button`}
            disabled={button.disabled}
            type="submit"
          >
            {button.text}
          </button>
        </form>
        <div className="ui horizontal divider">Preview</div>
        <EntryDisplay
          text={content}
          date={date}
          mood={mood}
          title={title}
          key={1}
        />
      </div>
    );
    }
}

export default InputForm;