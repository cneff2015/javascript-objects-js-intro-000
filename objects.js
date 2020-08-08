var playlist = {blackEyePeas: "Boom Boom Pow"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

delete playlist.artisName;
