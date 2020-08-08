var playlist = {blackEyePeas: "Boom Boom Pow"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}
