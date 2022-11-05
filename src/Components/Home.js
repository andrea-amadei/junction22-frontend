import React, {Component} from 'react';
import InputForm from './InputForm';
import axios from 'axios';
import EntryDisplay from './EntryDisplay';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { entries: [] };
    
        this.onInputFormSubmit = this.onInputFormSubmit.bind(this);
      }

    componentWillMount() {
        this.loadEntries();
    }

    async loadEntries() {
        const response = await axios.get("/api/entries");
        this.setState({ entries: response.data });
      }
    

    async onInputFormSubmit({ content, date, mood, title }) {
        const newEntry = { content: content, date, mood, title };
        const res = await axios.post("/api/entries", newEntry);
        this.setState({ entries: [...this.state.entries, res.data] });
    }
    
    render(){

        const entryCards = this.state.entries
            .slice(0)
            .reverse()
            .map((b, i) => (
                <EntryDisplay
                text={b.content}
                date={b.date}
                mood={b.mood}
                title={b.title}
                key={b._id}
                />
            ));

    return (
        <div style={{ marginTop: "4em" }}>
        <h4>
          <i className="edit outline icon" />
        </h4>
        <InputForm onSubmit={this.onInputFormSubmit} />
        <h4>
          <i className="newspaper outline icon" />
        </h4>
        {entryCards}
      </div>
    )
    }
}

export default Home;