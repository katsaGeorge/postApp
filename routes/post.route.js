const express = require('express')
const router = express.Router();

const {body, param, validationResult} = require('express-validator');
const postController = require('../controllers/post.controller');

    const text_and_title_validator = () =>{
        return [
            body('title').not().isEmpty().withMessage('The field is required'),
            body('title').isString().withMessage('Enter only letters'),
            body('text').not().isEmpty().withMessage('The field is required'),
            body('text').isString().withMessage('Enter only letters')
        ]
    }
       
router.post('/', text_and_title_validator(), (req,res,next)=>{
        const errors = validationResult(req)

        if(!erroes.isEmpty()){
            return res.status(400).json({
                status: false,
                data:erroes.array()
            });
        }
        next();
},
 postController.create);


router.get('/', postController.findAll);
router.get('/:id', postController.findOne);
router.patch('/:id',postController.update);
router.patch ('/:id/category', postController.updateCtegory);
router.delete('/:id', postController.deletePost);
router.delete('/:id/categories', postController.deleteCategories);

module.exports = router;