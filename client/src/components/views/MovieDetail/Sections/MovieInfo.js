import React from 'react'
import { Descriptions } from 'antd';

function MovieInfo(props) {

    const { movie } = props;
    console.log(movie)
    
    return (
        <Descriptions title="Informações do Filme" bordered>
        <Descriptions.Item label="Nome Original">{movie.original_title}</Descriptions.Item>
        <Descriptions.Item label="Nome traduzido">{movie.title}</Descriptions.Item>
        <Descriptions.Item label="Data de Lançamento">{movie.release_date}</Descriptions.Item>
        <Descriptions.Item label="Rendimento">{String("$ ") + Math.round(( (movie.revenue/1000000) + Number.EPSILON)*1000)/1000 + String(" mil")}</Descriptions.Item>
        <Descriptions.Item label="Tempo de filme">{movie.runtime + " mins"}</Descriptions.Item>
        <Descriptions.Item label="Nota de votos" span={2}>
        {movie.vote_average}
        </Descriptions.Item>
        
        <Descriptions.Item label="Status">{movie.status}</Descriptions.Item>
      </Descriptions>
    )
}

export default MovieInfo
