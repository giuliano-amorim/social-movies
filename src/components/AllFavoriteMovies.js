import React from 'react';

class AllFavoriteMovies extends React.Component {

    constructor(props) {
        super(props);
        this.props.findAllFavoriteMovies();
    }

    renderMovies(movies, user) {
        return movies.map(movie => (<tr>
                    <td>{movie.title}</td>
                    <td>{user.username}</td>
                    <td>
                        <button type='btn'
                                className='btn btn-danger'
                                onClick={() => this.props.deleteFavoriteMovie(movie, user)}>
                            Remover
                        </button>
                    </td>
                </tr>
            )
        );
    }

    renderList(users) {
        return users.map(user => (
            this.renderMovies(user.favorites, user)
        )
        )
    }

    render() {
        return (
            <div className='container-fluid p-5'>
                <h3>Todos os filmes curtidos por todos os fãs:</h3>
                <table className='table table-hover'>
                    <thead>
                    <tr>
                        <th scope="col">Nome do filme</th>
                        <th scope="col">Username</th>
                        <th scope="col">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderList(this.props.allFavoriteMovies)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AllFavoriteMovies;