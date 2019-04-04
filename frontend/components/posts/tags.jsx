import React from 'react';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class Tags extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // tags: this.props.tags,
            suggestions: [
                { id: 'Software Development', text: 'Software Development' },
                { id: 'Mathemtics', text: 'Mathemtics' },
                { id: 'Coding', text: 'Coding' },
                { id: 'Ruby', text: 'Ruby' },
                { id: 'Economics', text: 'Economics' }
             ]
        };
        // this.handleDelete = this.handleDelete.bind(this);
        // this.handleAddition = this.handleAddition.bind(this);
        // this.handleDrag = this.handleDrag.bind(this);
    }

    // handleDelete(i) {
    //     const { tags } = this.state;
    //     this.setState({
    //      tags: tags.filter((tag, index) => index !== i),
    //     });
    // }

    // handleAddition(tag) {
    //     this.setState(state => ({ tags: [...state.tags, tag] }));
    //     // this.props.update(tags)
    // }

    // handleDrag(tag, currPos, newPos) {
    //     const tags = [...this.state.tags];
    //     const newTags = tags.slice();

    //     newTags.splice(currPos, 1);
    //     newTags.splice(newPos, 0, tag);

    //     // re-render
    //     this.setState({ tags: newTags });
    // }

    render() {
        const { tags, suggestions } = this.state;
        return (
          <div>
            <ReactTags
              tags={this.props.tags}
              suggestions={suggestions}
              handleDelete={this.props.handleDelete}
              handleAddition={this.props.handleAddition}
              handleDrag={this.props.handleDrag}
              delimiters={delimiters}
            />
          </div>
        );
    }
};

export default Tags;
