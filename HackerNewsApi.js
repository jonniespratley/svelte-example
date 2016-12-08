'use strict';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"



const co = require('co');
const debug = require('debug');
const request = require('request');
const rb = require('request-promise');
const _ = require('lodash');
const log = debug('hacker-news:api');
require('request-debug')(rb);

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

/**
 * TO get all stories
 *
 *  https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
 */
function getStories() {
  return rb({
    baseUrl: BASE_URL,
    url: '/topstories.json',
    json: true
  }).then((resp) => {
    log(resp);
    return resp;
  });
}

/**
 * To get 1 story
 *
 * : https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
 */
function getStory(id) {
  return rb({
    baseUrl: BASE_URL,
    url: `/item/${id}.json`,
    json: true
  }).then((resp) => {
    log(resp);
    return resp;
  });
}



getStories().then((items) =>{
	for (var i = 0; i < 50; i++) {
		getStory(items[i]);
	}
});
