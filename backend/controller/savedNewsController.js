const asyncHandler = require("express-async-handler");
const saveNews = require("../model/savedNewsModel");


//get all the news

const getNews = asyncHandler(async(req,res) =>{
    const news = await saveNews.find({user:req.user._id});
    res.json(news);
})


//saved news
const savedNews = asyncHandler(async(req,res) =>{
    const {title,description,imageUrl,newsUrl,author} = req.body;

    const savedN = new saveNews({user:req.user._id,title,description,imageUrl,newsUrl,author});
     const savenews = await savedN.save();

     res.status(201).json(savenews);

});


//delete news


const DeleteNews = asyncHandler(async(req,res) =>{
     const news = await saveNews.findById(req.params.id);

     if(news.user.toString() !== req.user._id.toString()){
            throw new Error("You can't perform this action");
        }
    
        if(news){
            await news.remove();
            res.json({message:"News Removed Successfully"});
        }else{
             res.status(404);
            throw new Error("News not Found");
 
        }

})


module.exports = {savedNews,getNews,DeleteNews}