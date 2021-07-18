define({ "api": [
  {
    "type": "post",
    "url": "/notes",
    "title": "post a new note",
    "version": "1.0.0",
    "name": "CreateNotes",
    "group": "Note",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Test title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Test content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"title\": \"Test title\"\n  \"content\": \"Test content\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"type\": \"success\",\n  \"message\": {\n     data : {\n        _id : 948754j54lkj54l5j4,\n        title: \"Title One\",\n        content: \"Content One\",\n        created_at: \"2021-07-18T15:46:51.778Z\"\n      }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "get all notes:",
        "content": "curl -i http://localhost:3000/notes",
        "type": "curl"
      }
    ],
    "filename": "controllers/note.js",
    "groupTitle": "Note",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/notes"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/notes/:id",
    "title": "delete single note",
    "version": "1.0.0",
    "name": "DeleteSingleNote",
    "group": "Note",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"type\": \"success\",\n  \"message\": {\n     data : {\n         _id: \"60f3e4b1aaac23374c2e5e1c\",\n         title: \"Test Title\",\n         content: \"This test content\",\n         createdAt: \"2021-07-18T08:22:09.101Z\",\n      }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/note.js",
    "groupTitle": "Note",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/notes/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/notes",
    "title": "get all notes",
    "version": "1.0.0",
    "name": "GetNotes",
    "group": "Note",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"type\": \"success\",\n  \"message\": {\n     data : [\n      {\n         _id : 948754j54lkj54l5j4,\n         title: \"Title One\",\n         content: \"Content One\",\n         created_at: \"2021-07-18T15:46:51.778Z\"\n       }\n     ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "get all notes:",
        "content": "curl -i http://localhost:3000/notes",
        "type": "curl"
      }
    ],
    "filename": "controllers/note.js",
    "groupTitle": "Note",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/notes"
      }
    ]
  },
  {
    "type": "get",
    "url": "/notes/:id",
    "title": "get single note",
    "version": "1.0.0",
    "name": "GetSingleNote",
    "group": "Note",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"type\": \"success\",\n  \"message\": {\n     data : {\n         _id: \"60f3e4b1aaac23374c2e5e1c\",\n         title: \"Test Title\",\n         content: \"This test content\",\n         createdAt: \"2021-07-18T08:22:09.101Z\",\n      }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/note.js",
    "groupTitle": "Note",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/notes/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/notes/:id",
    "title": "update single note",
    "version": "1.0.0",
    "name": "UpdateSingleNote",
    "group": "Note",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"type\": \"success\",\n  \"message\": {\n     data : {\n         _id: \"60f3e4b1aaac23374c2e5e1c\",\n         title: \"Test Title\",\n         content: \"This test content\",\n         createdAt: \"2021-07-18T08:22:09.101Z\",\n      }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/note.js",
    "groupTitle": "Note",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/notes/:id"
      }
    ]
  }
] });
