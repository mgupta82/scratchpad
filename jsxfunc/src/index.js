import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail avatar={faker.image.avatar()} author="Tony" time="1 min ago" comment="Rock on"/>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Sam" time="2 min ago" comment="Awesome"/>
            </ApprovalCard>
            <ApprovalCard>
                Are you Sure?
            </ApprovalCard>
            
            
        </div>
    );
};

ReactDOM.render(<App/>,document.querySelector('#root'));