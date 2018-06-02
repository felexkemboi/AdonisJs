'use strict'

const Model = use('Model')

class Tweet extends Model {
}
replies() {
    return this.hasMany('App/Models/Reply')
}
favorites() {
    return this.hasMany('App/Models/Favorite')
}
tweet () {
    return this.belongsTo('App/Models/Tweet')
}

module.exports = Tweet
