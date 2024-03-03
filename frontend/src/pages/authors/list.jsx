import { Component } from 'react';

import { MyContext } from '../../MyContext';
import authors from '../../mock/authors.json';
import books from '../../mock/books.json';
import AuthorPreview from '../../components/authors/AuthorPreview';


class AuthorsPage extends Component {
    // Используем контекст в классе, тут по-другому не через хук useContext
    static contextType = MyContext;
    
    render() {
        console.log('text: ', this.context)
        return (
            <div>
                <h1>Список авторов</h1>
                <ul className='author-flex-wrap'>
                    {authors.map((author, i) =>
                        <AuthorPreview
                            item={author}
                            key={`author_${i}`}
                            books={books}/>
                    )}
                </ul>
            </div>
        );
    }
}

export default AuthorsPage;
