import React,{Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component {
  fetchPlaces(mapProps, map) {
    console.log({mapProps,map})
    // const {google} = mapProps;
    // const service = new google.maps.places.PlacesService(map);
    // ...
  }
   render() {
      return (
         <Map google={this.props.google} zoom={14}>
             <Marker 
                  initialCenter={{
                    lat: 6.465422,
                    lng: 3.406448
                  }}
                  onReady={this.fetchPlaces}
                  zoom={15}
                  onClick={this.onMapClicked}
             />
             {/* <InfoWindow onClose={this.onInfoWindowClose}>                             
                <div>
                  <h1>naiger</h1> 
                </div>
             </InfoWindow> */}
          </Map>
      );
   }
}
export default GoogleApiWrapper({
       apiKey: process.env.REACT_APP_API_KEY
})(MapContainer)