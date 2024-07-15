const User = require("../models/customerSchema");
var moment = require('moment');

const user_index_get = (req, res) => {
    // result ==> array of objects
    User.find().then((result) => {
        res.render("index", { arr: result, moment: moment });
    }).catch((err) => {
        console.log(err);
    })

}
const user_add_get = (req, res) => {
    res.render("user/add")
}
const user_view_get = (req, res) => {
    res.redirect("/")
}
const user_edit_get = (req, res) => {
    res.redirect("/")
}
const user_viewbyid_get = (req, res) => {
    User.findById(req.params.id).then((result) => {
        res.render("user/view", { user: result, moment: moment })
    }).catch((err) => {
        console.log(err);
    })
}
const user_editbyid_get = (req, res) => {
    User.findById(req.params.id).then((result) => {
        res.render("user/edit", { user: result })
    }).catch((err) => {
        console.log(err);
    })
}
const user_add_post = (req, res) => {
    User.create(req.body).then(() => {
        res.redirect("/")
    }).catch((err) => {
        console.log(err)
    })
}
const user_search_post = (req, res) => {
    User.find({ $or: [{ fireName: { $regex: req.body.search.trim(), $options: "i" } }, { lastName: { $regex: req.body.search.trim(), $options: "i" } }] }).then((result) => {
        res.render("user/search", { arr: result, moment: moment })
    }).catch((err) => {
        console.log(err);
    })
}
const user_delete = (req, res) => {
    User.findByIdAndDelete(req.params.id).then(() => {
        res.redirect("/")
    }).catch((err) => {
        console.log(err)
    })
}
const user_put = (req, res) => {
    User.updateOne({ _id: req.params.id }, req.body)
        .then(() => {
            res.redirect("/")
        }).catch((err) => {
            console.log(err);
        })

}

module.exports = { user_index_get, user_add_get, user_view_get, user_edit_get, user_viewbyid_get, user_editbyid_get, user_add_post, user_search_post, user_delete, user_put };