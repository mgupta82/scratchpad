import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import SearchWiki from './SearchWiki';

const App = () => {

    const items = [
        {
            title : "What is Question 1",
            content : "Answer 1"
        },
        {
            title : "What is Question 2",
            content : "Answer 2"
        },
        {
            title : "Whats is Question 3",
            content : "Answer 3"
        }
    ]

    return (
        <div className="ui container comments">
            <CommentDetail avatar={faker.image.avatar()} author="Tony" time="1 min ago" comment="Rock on"/>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Sam" time="2 min ago" comment="Awesome"/>
            </ApprovalCard>
            <ApprovalCard>
                Are you Sure?
            </ApprovalCard>
            <SearchWiki/>
        </div>
    );
};

ReactDOM.render(<App/>,document.querySelector('#root'));