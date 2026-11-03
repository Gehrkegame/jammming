let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
        return accessToken;
    }
    accessToken = '123abc';
    const expiresIn = 3600;
    setTimeout(() => accessToken = '', expiresIn * 1000)
    return accessToken;
  }
};

export default Spotify;