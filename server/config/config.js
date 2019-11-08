//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri: 'mongodb+srv://new_user:myPassWord17@cluster0-sgsfr.mongodb.net/test?retryWrites=true&w=majority' //place the URI of your mongo database here.
  },
  openCage: {
    key: '338bb6fc3ba64cc5b9689ba64c67d072' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};
