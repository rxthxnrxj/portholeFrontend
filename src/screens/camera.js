import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const camera = (function () {
  let width = 0;
  let height = 0;

  const createObjects = function () {
    const video = document.createElement("video");
    video.id = "video";
    video.width = width;
    video.width = height;
    video.autoplay = true;
    document.body.appendChild(video);

    const canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.width = width;
    canvas.width = height;
    document.body.appendChild(canvas);
  };

  return {
    video: null,
    context: null,
    canvas: null,

    startCamera: function (w = 1280, h = 720) {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        width = w;
        height = h;

        createObjects();

        this.video = document.getElementById("video");
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");

        (function (video) {
          navigator.mediaDevices
            .getUserMedia({ video: true })
            .then(function (stream) {
              video.srcObject = stream;
              video.play();
            });
        })(this.video);
      }
    },

    takeSnapshot: function () {
      this.context.drawImage(this.video, 0, 0, 1280, 1280);
    },
  };
})();

export default camera;
