const postService = require('../services/post.services');

exports.create = async (req,res) => {
    const data = req.body;
    console.log("Insert post ", data.title);


    try{
        const result = await postService.create(data);
        res.status(200).json({status: true, data: result});
        console.log("Success in saving post", data.id);


    }catch(error){
            res.status(400).json({status:false, data:error})
            console.log("Error with saving post")
    }
}

exports.findAll = async(req,res) => {
    console.log("Find All posts");

    try{
        const result = await postService.findAll();
        res.status(200).json({status:true, data: result})
        console.log("Succes in find all post")

    }catch(err){
        res.status(400).json({status:false, data:error})
            console.log("Error with saving post");
    }
}

exports.findOne = async (req,res) => {

    const id = req.params.id;
    console.log("Find post with id", id);

    try{
        const result = await postService.findOne(id);
        res.status(200).json({status:true, data: result})
        console.log("Succes in find a post")

    }catch(err){
        res.status(400).json({status:false, data:error})
            console.log("Error with find a post");
    }
}

exports.update = async (req,res) => {
    const id = req.params.id
    console.log("Update post with id",id);

    try{
        const result = await postService.update(req.body);
        res.status(200).json({status:true, data: result})
        console.log("Succes in update a post")

    }catch(err){
        res.status(400).json({status:false, data:error})
            console.log("Error with updating a post");
    }
}

exports.updateCtegory = async (req,res) => {
    const id = req.params.id

    console.log("Update post Category")

    
    try{
        const result = await postService.updateCategory(req.body);
        res.status(200).json({status:true, data: result})
        console.log("Success in update a post Category")

    }catch(err){
        res.status(400).json({status:false, data:error})
            console.log("Error with updating a post category");
    }
}


exports.deletePost = async (req,res) => {
    const id = req.params.id

    console.log("Delte post ")

    
    try{
        const result = await postService.deletePost(id);
        res.status(200).json({status:true, data: result})
        console.log("Success in deleting a post ")

    }catch(err){
        res.status(400).json({status:false, data:error})
            console.log("Error with deleting a post ");
    }
}
exports.deleteCategories = async (req,res) => {
    const id = req.params.id

    console.log("removing post Category")

    
    try{
        const result = await postService.deleteCategories(req.body);
        res.status(200).json({status:true, data: result})
        console.log("Success in removin  a post Category")

    }catch(err){
        res.status(400).json({status:false, data:error})
            console.log("Error with removing categories");
    }
}