import { MapContainer, MapContainerProps, TileLayer } from "react-leaflet";
import { LatLngExpression, LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const center: LatLngExpression = new LatLng(-32.9457752341875, -60.63851957252213);

export default function Map(props: MapContainerProps) {
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="h-full z-0" {...props}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
