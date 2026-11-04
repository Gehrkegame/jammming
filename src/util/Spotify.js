let accessToken;

const fakeLibrary = [
  {id: 1, name: "Toes", artist: "Zack Brown Band", album: "Toes", uri:"spotify:track:1"},
    {id: 2, name: "Shake it off", artist: "Talor Swift", album: "1989", uri:"spotify:track:2"},
    {id: 3, name: "Take a Drunk Girl Home", artist: "Chris Janson", album: "Everybody", uri:"spotify:track:3"},
     { id: 4, name: "Rockstar", artist: "Nickelback", album: "All the Right Reasons", uri: "spotify:track:4" },
  { id: 5, name: "Stronger", artist: "GeeJay", album: "Single", uri: "spotify:track:5" },
  { id: 6, name: "Get Ur Freak On", artist: "Missy Elliott", album: "So Addictive", uri: "spotify:track:6" },
  { id: 7, name: "Still D.R.E.", artist: "Dr. Dre ft. Snoop Dogg", album: "The Chronic", uri: "spotify:track:7" },
  { id: 8, name: "Starboy", artist: "The Weeknd ft. Daft Punk", album: "Starboy", uri: "spotify:track:8" },
  { id: 9, name: "So Fresh, So Clean", artist: "Outkast", album: "Stankonia", uri: "spotify:track:9" },
  { id: 10, name: "On & On", artist: "Erykah Badu", album: "Fat Boys", uri: "spotify:track:10" },
];

const Spotify = {
  getAccessToken() {
    if (accessToken) {
        return accessToken;
    }
    accessToken = '123abc';
    const expiresIn = 3600;
    setTimeout(() => accessToken = '', expiresIn * 1000)
    return accessToken;
  },
  search(term) {
  return fakeLibrary.filter(track => track.name.toLowerCase().includes(term.toLowerCase()) ||
track.artist.toLowerCase().includes(term.toLowerCase())
);
}
};

export default Spotify;