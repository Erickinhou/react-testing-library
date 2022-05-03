const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Leith",
          last: "Harvest",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/79.jpg",
        },
        login: "ThePhoneGoat",
      },
      {
        name: {
          first: "Leith",
          last: "Harvest",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/79.jpg",
        },
        login: "ThePhoneGoat",
      },
      {
        name: {
          first: "Leith",
          last: "Harvest",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/79.jpg",
        },
        login: "ThePhoneGoat",
      },
      {
        name: {
          first: "Leith",
          last: "Harvest",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/79.jpg",
        },
        login: "ThePhoneGoat",
      },
      {
        name: {
          first: "Leith",
          last: "Harvest",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/79.jpg",
        },
        login: "ThePhoneGoat",
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
