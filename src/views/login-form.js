export default Backbone.View.extend({

  events: {
    submit(ev) {
      ev.preventDefault();

      var username = this.$el.find('#username').val();
      var password = this.$el.find('#password').val();

      var userOptions =
        [
          {user: 'aaron@theironyard.com', password: 'password123'},
          {user: 'admin@google.com', password: 'pandas'},
          {user: 'jeremyglover33@gmail.com', password: 'honeycrisp'}
        ];

      var foundMatch = userOptions.reduce(function(carry, curr) {
          if (curr.username === user && curr.password === password) {
            return true;
          }
          return carry;
        }, false);

      if (foundMatch === true) {
        alert('You have successfully logged into Ironyard');
        window.location = 'http://theironyard.com';
      } else {
        alert('Login Attempt Fail: Did not match username and/or password');
      }
    },
  },
});
