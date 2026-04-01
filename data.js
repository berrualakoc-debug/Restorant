var APP_DATA = {
  "scenes": [
    {
      "id": "0-mutfak",
      "name": "Mutfak",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.013130274767881644,
        "pitch": 0.10526638229896434,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.642627790239878,
          "pitch": 0.559927604302775,
          "rotation": 0,
          "target": "1-kahvalt-salonu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kahvalt-salonu",
      "name": "Kahvaltı Salonu",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.17319168527745177,
        "pitch": 0.07894978672422326,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.19083986017434285,
          "pitch": 0.29025758571379967,
          "rotation": 12.566370614359176,
          "target": "2-kahvalt-salonu-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kahvalt-salonu-",
      "name": "Kahvaltı Salonu .",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.33590558338911,
        "pitch": 0.14295493906661605,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.8386775384745206,
          "pitch": 0.25010513266408196,
          "rotation": 0.7853981633974483,
          "target": "0-mutfak"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
