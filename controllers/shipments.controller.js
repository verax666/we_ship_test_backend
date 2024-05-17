var axios = require("axios");
const { authentication } = require("../routes/api/weShip/accessToken");

exports.findAll = async (req, res) => {
  const token = await authentication();
  const query = req.query;
  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.API_RUL}/shipment/list`,
    headers: {
      "Weship-API-Version": "1.0",
      Authorization: `Bearer ${token.accessToken}`,
    },
    params: query,
  };
  axios(config)
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
      res.send({ success: false, error: error });
    });
};

exports.findOne = async (req, res) => {};
