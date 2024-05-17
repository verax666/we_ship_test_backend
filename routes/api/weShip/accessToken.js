var axios = require("axios");

exports.authentication = async () => {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${process.env.API_RUL}/auth/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      email: process.env.USER,
      password: process.env.PASS,
    }),
  };
  try {
    const request = await axios(config);
    return request.data;
  } catch (error) {
    console.log(error);
  }
};
