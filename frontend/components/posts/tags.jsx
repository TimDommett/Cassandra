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
            suggestions: [
                { id: 'Software Development', text: 'Software Development' },
                { id: 'Mathemtics', text: 'Mathemtics' },
                { id: 'Coding', text: 'Coding' },
                { id: 'Ruby', text: 'Ruby' },
                { id: 'Economics', text: 'Economics' }
             ]
        };

    }

   

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
