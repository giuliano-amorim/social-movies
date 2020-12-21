import React from 'react'
import {Link} from 'react-router-dom';

const CriticPage = ({username, description}) => {
    return (
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <div className="container-fluid w-75">
                <h1 className="display-4">Profile of {username}: </h1>
                {description !== undefined
                    ? <p className="lead">{description}</p>
                    : <p className="lead">Todas as coisas boas que você tem feito na Social Movie.</p>}
                    <div className="card text-center shadow p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                    <h5 className="card-title">Seus filmes Repetidas</h5>
                    <p className="card-text">Veja e administre os filmes repetidos!</p>
                    <Link className="btn btn-outline-primary"
                    to="/my-page-critic/manage-reviews">
                    Administração dos Repetidos
                    </Link>
                    </div>
                    </div>
                    </div>
                    </div>
                    )
                    };

                export default CriticPage;