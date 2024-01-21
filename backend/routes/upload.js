import express from 'express';
import multer from 'multer';

const router = new express.Router();
const upload = multer({dest: 'uploads/'});


router.get('/', (request, response, next) => {
	return response.render(
        'fileupload',
        {
            title:'File Upload in Node JS Express using Multer',
            message : request.flash('success')
        }
    );
});

router.post('/', upload.single('file'), (req, res) => {
	console.log('file received', req.file);
    // if (!req.file) {
	// 	console.log("No file received");
	// 	return res.send({
	// 	  success: false
	// 	});
	
	//   } else {
	// 	return res.send({
	// 	  success: true
	// 	})
	//   }
	res.send("🤗")
});

export default router;
