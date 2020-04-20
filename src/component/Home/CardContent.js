import React from 'react';
import  { getAllPeople } from './../../services/getPeopleData';
import './style.scss';

const Content = () => {
    const people = getAllPeople();

    return (
        <div className="card_content">
            <div>
                <span className="card_content_subtitle">
                    Previous Rulings
                </span>
            </div>

            <br/>

            { 
                people.map((item, index) => {
                    return (
                        <div className={item.id%2 !== 0 ? 'card card-left' : 'card card-item card-right'}>

                            <div className='card-item-img'>
                                <img src={ require(`../../data/img/${item.img}.png`) } alt={item.name}/>
                            </div>

                            <div className="card-item">
                                <div>
                                    <span className="card-item-title" >{ item.name }</span>
                                    <br/>
                                    <span>{ item.description }</span>
                                </div>

                                <div className="card-item-opt">
                                    <button className="card-item-opt-viewBtn" >View Full Report</button>
                                    <div className="card-item-opt-items" >
                                        <span>{ item.long } month</span>
                                        <br/>
                                        <span>{ item.business }</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) 
            }

        </div>
    );
};

export default Content;