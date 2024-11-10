const AdminAuthorsList = ({ authors, onAuthorSelected }) => {

    return (
        <div className='admin-list-wrapper'>
            <div>
                <ul className='admin-list'>
                    {
                        authors.map((author, i) => {
                            return (
                                <li
                                    className='pointer flex'
                                    key={`author-${i}`}
                                    onClick={() => onAuthorSelected(author)}>

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