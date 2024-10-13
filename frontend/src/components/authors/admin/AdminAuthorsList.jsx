const AdminAuthorsList = ({ authors, selectedAuthor }) => {

    return (
        <div className='admin-authors-list-wrapper'>
            <div>
                <ul className='admin-authors-list'>
                    {
                        authors.map((author, i) => {
                            return (
                                <li
                                    className='pointer flex'
                                    key={`author-${i}`}
                                    onClick={() => selectedAuthor(author)}>

                                    <div>
                                        <strong>
                                            {author.firstName} {author.lastName}
                                        </strong>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}


export default AdminAuthorsList