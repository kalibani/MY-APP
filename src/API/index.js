import axios from 'axios';

const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
const storyUrl = `${baseUrl}item`;
const storiesUrl = `${baseUrl}topstories.json`;
const newStoriesUrl = `${baseUrl}newstories.json`;
const bestStoriesUrl = `${baseUrl}beststories.json`;

// id top story
export const getIds = (query) => axios.get(`${storiesUrl}?${query}`);
// id new story
export const getIdsNewStories = (query) => axios.get(`${newStoriesUrl}?${query}`);
// id best story
export const getIdsBestStories = (query) => axios.get(`${bestStoriesUrl}?${query}`);
// get story
export const getStories = (id) => axios.get(`${storyUrl}/${id}.json`);
// get comments
export const getComments = (id) => axios.get(`${storyUrl}/${id}.json`);
