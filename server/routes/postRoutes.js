import express from 'express'
import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'

import Post from '../mongodb/models/post.js'

dotenv.config()

const router = express.Router()

cloudinary.config({
    cloud_name: 'dwwspuxdh',
    api_key: '575669369923216',
    api_secret: 'ilq005wcUPheFJW5J3ve0Kiz8lw'
})

// Get all post
router.route('/').get(async(req,res) => {
    try{
        const posts = await Post.find({})

        res.status(200).json({ succes: true, data: posts})
    }catch(err){
        res.status(500).json({ succes: false, message: err})
    }
})

// Create a post
router.route('/').post(async(req,res) => {
    try{
        const { name, prompt, photo } = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo)
    
        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url
        })
    
        res.status(201).json({ succes: true, data: newPost})
    }catch(err) {
        res.status(500).json({ succes: false, message: err})
    }
})

export default router;