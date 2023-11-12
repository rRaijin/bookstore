import React, { useState } from 'react';

import { trimText } from '../../utils';


const CommentItem = (props) => { 
    const { comment, authors, notes, parentCb } = props;
    const owner = authors.find(a => a.email === comment.email);
    const alreadyFetchedNotes = notes.find(note => note.authorId === owner.id);
    const hasNotes = alreadyFetchedNotes && alreadyFetchedNotes.todos.length > 0; // есть записи

    const [showFullText, setShowFullText] = useState(false);

    const toggleShowFullText = () => setShowFullText(!showFullText);

    const getTodos = (userId) => {
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`, {
            method: "GET",
        })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .then((data) => {
            if (data && data !== undefined && data !== "undefined") {
                const slicedData = data.slice(0, 5);
                parentCb(userId, slicedData);
            } else {
                console.log("NO TODOS DATA!");
            }
        });
    };

    return (
        <div className="comment" key={comment.id}>
            <p className="comment-title">{comment.name}</p>
            {showFullText ?
                <p>
                    <p className="comment-body">{comment.body}</p>
                    <span onClick={toggleShowFullText} style={{ color: 'blue', cursor: 'pointer' }}> less</span>
                </p> :
                <p>
                    {trimText(comment.body, 50)}
                    {comment.body.length > 50 && (
                        <span className="comment-more-link" onClick={toggleShowFullText} > more</span>
                    )}
                </p>
            }  
            
            {owner && (
                <div className="author-info">
                    <p className="comment-author">Author: {owner.name}</p>
                    <p>City: {owner.address.city}</p>
                    <p>Street: {owner.address.street}</p>
                    <p>Suite: {owner.address.suite}</p>
                    {
                        alreadyFetchedNotes ?
                        <div>
                            {
                                hasNotes ?
                                <ul className="flex flex-col comment-notes-list">
                                    {
                                        alreadyFetchedNotes.todos.map((note, i) => {
                                            return (
                                                <li className="comment-note">
                                                    <p className="text-green">{note.title}</p>
                                                    <p className="text-red">{note.completed ? 'V' : 'X'}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul> :
                                <p>No notes for this author.</p>
                            }
                        </div> :
                        <button className="button-get-todos" onClick={() => getTodos(owner.id)}>
                            Get todos
                        </button>
                    }
                </div>
            )}
        </div>
    )
};

export default CommentItem;
