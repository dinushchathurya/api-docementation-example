const Note = require('../models/note');

// Create and Save a new Note

/**
* @api {post} /notes post a new note
* @apiVersion 1.0.0
* @apiName CreateNotes
* @apiGroup Note
* @apiParam {String} title Test title
* @apiParam {String} content Test content
* @apiParamExample {json} Input
*    {
*      "title": "Test title"
*      "content": "Test content"
*    }
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "type": "success",
*       "message": {
*          data : {
*             _id : 948754j54lkj54l5j4,
*             title: "Title One",
*             content: "Content One",
*             created_at: "2021-07-18T15:46:51.778Z"
*           }
*        }
*     }
*
* @apiErrorExample {json} List error
* @apiExample {curl} create new note:
* curl -i http://localhost:3000/notes
*/
exports.createNote = async(req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const note = await new Note({
        title: req.body.title || "Untitled Note",
        content: req.body.content
    });

    // Save Note in the database
    note.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};

// Retrieve all notes from the database

/**
  * @api {get} /notes get all notes
  * @apiVersion 1.0.0
  * @apiName GetNotes
  * @apiGroup Note
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "type": "success",
  *       "message": {
  *          data : [
  *           {
  *              _id : 948754j54lkj54l5j4,
  *              title: "Title One",
  *              content: "Content One",
  *              created_at: "2021-07-18T15:46:51.778Z"
  *            }
  *          ]
  *        }
  *     }
  *
  * @apiExample {curl} get all notes:
  * curl -i http://localhost:3000/notes
  */
exports.getAllNotes = async(req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json({ 
            success: true, 
            message: {
                'data': notes
            }
        });
    } catch (err) {
        res.status(400).json({ 
            success: false,
            message: err.message || "Some error occurred while retrieving notes."
        });
    }
};

//Retrieve single note

/**
 * @api {get} /notes/:id get single note
 * @apiVersion 1.0.0
 * @apiName GetSingleNote
 * @apiGroup Note
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "type": "success",
 *       "message": {
 *          data : {
 *              _id: "60f3e4b1aaac23374c2e5e1c",
 *              title: "Test Title",
 *              content: "This test content",
 *              createdAt: "2021-07-18T08:22:09.101Z",
 *           }
 *        }
 *     }
 */
exports.getSingleNote = async(req, res) =>{
    try {
        const note = await Note.findById(req.params.id)

        if (!note) {
            return res.status(400).json({ 
                success: false 
            });
        }

        res.status(200).json({ 
            sucess: true, 
            data: note 
        })
    } catch (err) {
        res.status(400).json({ 
            success: false 
        });
    }
}

//Update single note

/**
 * @api {put} /notes/:id update single note
 * @apiVersion 1.0.0
 * @apiName UpdateSingleNote
 * @apiGroup Note
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "type": "success",
 *       "message": {
 *          data : {
 *              _id: "60f3e4b1aaac23374c2e5e1c",
 *              title: "Test Title",
 *              content: "This test content",
 *              createdAt: "2021-07-18T08:22:09.101Z",
 *           }
 *        }
 *     }
 */
exports.updateSingleNote = async (req, res, next) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body);

        if (!note) {
            return res.status(400).json({ 
                success: false
            });
        }
        res.status(200).json({ 
            sucess: true, 
            data: note
        });

    } catch (err) {
        res.status(400).json({ 
            success: false 
        });
    }
};

//Delete single note

/**
 * @api {delete} /notes/:id delete single note
 * @apiVersion 1.0.0
 * @apiName DeleteSingleNote
 * @apiGroup Note
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "type": "success",
 *       "message": {
 *          data : {
 *              _id: "60f3e4b1aaac23374c2e5e1c",
 *              title: "Test Title",
 *              content: "This test content",
 *              createdAt: "2021-07-18T08:22:09.101Z",
 *           }
 *        }
 *     }
 */
exports.deleteSingleNote = async (req, res, next) => {
    try {
        const note = await Note.findOneAndUpdate(req.params.id);

        if (!note) {
            return res.status(400).json({ 
                success: false 
            });
        }
        res.status(200).json({ 
            sucess: true, 
            data: note
        });

    } catch (err) {
        res.status(400).json({ 
            success: false 
        });
    }
};

