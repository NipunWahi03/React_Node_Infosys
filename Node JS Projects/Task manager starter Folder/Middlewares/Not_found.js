const not_found = (req, res) => {
  res
    .status(500)
    .send(
      "You have entered the wrong url, please enter the correct url and try again"
    );
};

module.exports = not_found;
