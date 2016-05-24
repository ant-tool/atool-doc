module.exports = {
  '/something': function(req, res) {
    setTimeout(function() {
      res.json({
        success: true,
        result: 'this message is load by proxy.'
      });
    }, 500)
  }
}
