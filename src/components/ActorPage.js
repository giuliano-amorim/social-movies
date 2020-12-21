import React from 'react'
import {Link} from 'react-router-dom';

const ActorPage = ({username, description}) => {
    return (
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <div className="container-fluid w-75">
                <h1 className="display-4">Perfil de {username}: </h1>
                {description !== undefined
                    ? <p className="lead">{description}</p>
                    : <p className="lead">Todas as coisas que você tem feito na Social Movies.</p>}
                <div className="card text-center shadow p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                        <h5 className="card-title">Eventos promocionais</h5>
                        <p className="card-text">Criar novos eventos e promover seus filmes!</p>
                        <Link className="btn btn-outline-primary"
                              to="/my-page-actor/create-event">
                            Manage events
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ActorPage;