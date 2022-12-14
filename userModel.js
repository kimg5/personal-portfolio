const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  portrait: {
    type: String,
    required: true,
  },
  messages: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
  ],
  experience: {
    title: 'What Skills I Have',
    subtitle: 'My Experience',

    items: [
      {
        title: 'Frontend Development',
        key: 'frontend',
        css: 'experience__frontend',
        skills: [
          {
            skill: {
              type: String,
              required: true,
            },
            level: {
              type: String,
              required: true,
            },
          },
        ],
      },
      {
        title: 'Backend Development',
        css: 'experience__backend',
        key: 'backend',
        skills: [
          {
            skill: {
              type: String,
              required: true,
            },
            level: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
  },

  education: {
    title: 'My Education',

    items: [
      {
        id: {
          type: Number,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        major: {
          type: String,
          required: true,
        },
        school: {
          type: String,
          required: true,
        },
        datePeriod: {
          type: String,
          required: true,
        },
      },
    ],
  },

  projects: {
    title: 'My Projects',

    items: [
      {
        id: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        github: {
          type: String,
          required: true,
        },
        demo: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

// Mongoose will assume there is a collection called the plural of this name (i.e., 'users' in this case).
const User = mongoose.model('User', UserSchema);
module.exports = User;
