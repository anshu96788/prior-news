const express = require("express");
const NewsModel = require("../models/news");
const app = express();
const mongoose = require('mongoose');

app.get("/news", async (request, response) => {
 // console.log("aa")
  const news = await NewsModel.find();

  try {
    response.send(news);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/news/:id", async (request, response) => {
  // console.log("aa")
   const news = await NewsModel.find({_id:request.params.id});

   try {
     response.send(news);
   } catch (error) {
     response.status(500).send(error);
   }
 });
app.post("/news", async (request, response) => {
    const news = new NewsModel(request.body);
  
    try {
      await news.save();
      response.send(news);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  app.patch("/news/:id", async (request, response) => {
    try {
      await NewsModel.findByIdAndUpdate(request.params.id, request.body);
      await NewsModel.save();
      response.send(news);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.delete("/news/:id", async (request, response) => {
    try {
      const news = await NewsModel.findByIdAndDelete(request.params.id);
  
      if (!news) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });
    

module.exports = app;