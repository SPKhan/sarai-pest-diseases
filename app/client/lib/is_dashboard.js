isDashboard = function() {
  if (Router.current().route) return Router.current().route.path(this)=="/dashboard"
  else return false
}