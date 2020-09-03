const express = require("express");
const app = express();

const APP_ID = "5"; // "1" to "5"

app.listen(3000, () => {
  console.log("Server is running on port 3000");

  app.get("/api/v1/hestia/:encoded_app_id", (req, res, next) => {
    const apps = require("./apps/list.json");

    res.json({
      data: apps,
      extra: {
        total: apps.length,
      },
    });
  });

  app.get("/api/v1/hestia/:encoded_app_id/:mini_app_code", (req, res, next) => {
    const manifest = require(`./apps/rn-manifest-${APP_ID}.json`);
    res.json({
      data: manifest,
    });
  });

  app.get("/assets", (req, res, next) => {
    const assets = require(`./assets/assets${APP_ID}.json`);
    res.json({
      data: assets,
      extra: {
        total: assets.length,
      },
    });
  });
});
