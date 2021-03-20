import React, { Component } from 'react';
import MapGL from "react-map-gl";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";

export default class Search extends Component {
  state = {
    viewport: {
      latitude: 39.809860,
      longitude: -98.555183,
      zoom: 3
    },
    searchResultLayer: null
  }

  mapRef = React.createRef()

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }

  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  handleOnResult = event => {
    this.setState({
      searchResultLayer: new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    })
  }

  render() {
    const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    const { viewport, searchResultLayer } = this.state
    return (
      <div style={{ height: '100vh', marginTop: '50px' }}>
        <MapGL
          ref={this.mapRef}
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          width="100%"
          height="100%"
          onViewportChange={this.handleViewportChange}
          mapboxApiAccessToken={token}
        >
          <Geocoder
            mapRef={this.mapRef}
            onResult={this.handleOnResult}
            onViewportChange={this.handleGeocoderViewportChange}
            mapboxApiAccessToken={token}
            position='top-left'
          />
        </MapGL>
        <DeckGL {...viewport} layers={[searchResultLayer]} />
      </div>
    )
  }
}
