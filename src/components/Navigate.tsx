import React from 'react';
import { INavigate } from '../medels/Navigate';

interface NavigateProps {
  navigate: INavigate
}

function Navigate(props: NavigateProps) {

    return (
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <nav className="navbar navbar-expand-lg bg-light px-4 shadow mt-1 mb-2">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">{props.navigate.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Переключатель навигации">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    {props.navigate.items.map((items) => (
                    <li className="nav-item">
                    <a className="nav-link" href={items.link}>{items.title}</a>
                    </li>
                    ))}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      );
    }

export default Navigate
