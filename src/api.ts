import axios from 'axios';

export const fakeSearch = async (keyword: string | undefined) => {
  // return fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
  //   .then((res) => res.json())
  //   .then((data) => data.items);
  return axios
    .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
    .then((res) => res.data.items);
};

export class FakeYoutube {
  async search(keyword: string) {
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
  }
  async #searchByKeyword() {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item: any) => ({ ...item, id: item.id.videoId }))
      );
  }
  async #mostPopular() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
  async channelImgURL() {
    return axios
      .get(`/videos/channel.json`)
      .then((res: any) => res.data.items[0].snippet.thumbnails.default.url);
  }
  async relatedVideos() {
    return axios.get(`/videos/related.json`);
  }
}
export class Youtube {
  httpClient: any;
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }
  async search(keyword: string) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword: string) {
    return this.httpClient
      .get('search', {
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res: any) => res.data.items)
      .then((items: any) =>
        items.map((item: any) => ({ ...item, id: item.id.videoId }))
      );
  }
  async #mostPopular() {
    return axios
      .get('videos', {
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  }
  async channelImgURL(id: string) {
    return this.httpClient
      .get('channels', {
        params: {
          part: 'snippet,contentDetails,statistics',
          id,
        },
      })
      .then((res: any) => res.data.items[0].snippet.thumbnails.default.url);
  }
  async relatedVideos(id: string) {
    return this.httpClient.get('search', {
      params: {
        part: 'snippet',
        relatedToVideoId: id,
        type: 'video',
        maxResults: 25,
      },
    });
  }
}
