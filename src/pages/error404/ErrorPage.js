import React from 'react'
import WeatherContainer from '../../containers/WeatherContainer';
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div className="errorBackground">
      <WeatherContainer>
        <h1 className="error404Title">{`Página no encontrada ):`} 
        <br/> 
          Error 404
        </h1>
      </WeatherContainer>
    </div>
  );
}


export default ErrorPage
