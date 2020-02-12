module.exports = (req, res, next) => {
  let user = req.session.user
  req.logout();

  console.log("logged out");

  res.send({});
};