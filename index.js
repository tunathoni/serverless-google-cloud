'use strict';

exports.http = (request, response) => {
  response.status(200).send(`Hello Thoni, you're awesome!`);
};

exports.event = (event, callback) => {
  callback();
};
