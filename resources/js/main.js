import '../styles/main.css';
import QRCodeStyling from "qr-code-styling";

const formUrl = 'https://tracx.me/kiqigo';

function getUrl() {
  const { location, hostname } = screenly.metadata;
  const queryParams = {
    src: 'screenly',
    loc: encodeURIComponent(location),
    placement: encodeURIComponent(hostname),
  };

  const queryString = Object.entries(queryParams).map(([key, value]) => {
    return `${key}=${value}`;
  }).join('&');

  return `${formUrl}?${queryString}`;
}

console.log(getUrl());

const qrCode = new QRCodeStyling({
  width: 450,
  height: 450,
  type: "svg",
  shape: "circle",
  data: getUrl(),
  dotsOptions: {
    color: "#fff"
  },
  backgroundOptions: {
    color: "#00cd00",
  }
});

qrCode.append(document.getElementById("qr-code-container"));