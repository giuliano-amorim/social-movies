import React from 'react';

export const NewsListItem = ({news}) => {
    let image = news.multimedia.filter(attr => attr.format === 'superJumbo');
    let imageSrc = '';
    if (image[0]) {
        imageSrc = image[0].url;
    } else {
        imageSrc = 'https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg';
    }

    let date = new Date(news.published_date).toLocaleDateString();
    return (
        <div className='list-group-item'>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <img className="img-responsive" src={imageSrc} width="300" height="200"/>
                </div>
                <div className="col-lg-9 col-md-8 col-sm-6">
                    <a href={news.url} target="_blank"><h3>{news.title}</h3></a>
                    <p>{news.abstract}</p>
                    <h6>{date}</h6>
                    <p>{news.byline}</p>
                </div>
            </div>
        </div>
    )
}