import React from 'react'
import { Descriptions, Badge } from 'antd';

function MovieInfo(props) {

    const { movie } = props;
    
    return (
        <Descriptions title="Movie Info" bordered>
        <Descriptions.Item label="Title">{movie.original_title}</Descriptions.Item>
        <Descriptions.Item label="Release Date">{movie.release_date}</Descriptions.Item>
        <Descriptions.Item label="Revenue">{String("$ ") + Math.round(( (movie.revenue/1000000) + Number.EPSILON)*1000)/1000 + String(" mil")}</Descriptions.Item>
        <Descriptions.Item label="Runtime">{movie.runtime + " mins"}</Descriptions.Item>
        <Descriptions.Item label="Vote Average" span={2}>
        {movie.vote_average}
        </Descriptions.Item>
        
        <Descriptions.Item label="Status">{movie.status}</Descriptions.Item>
      </Descriptions>
    )
}

export default MovieInfo
