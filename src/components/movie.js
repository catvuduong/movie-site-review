import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Movie extends Component {
    render() {
        let { movie } = this.props;
        return (
            <div className="col-sm-3">
                <div className="card movie-card text-center mt-2">
                    <div className="card-body">
                        <img className="img-fluid movie-img" src={movie.thumbnail} alt="" />
                        <h5 className="mt-3">{movie.name}</h5>
                    </div>
                    <div className="card-footer">
                        <NavLink
                            className="btn btn-success"
                            to={`/detail-movie/${movie.id}`}
                        >
                            Chi tiết
            </NavLink>
                    </div>
                </div>
            </div>

        )
    }
}
