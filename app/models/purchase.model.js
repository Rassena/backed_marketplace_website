const sql = require("./db.js");

// constructor
const Purchase = function(purchase) {
  this.Date = purchase.Date;
  this.Id = purchase.Id;
  this.UserId = purchase.UserId;
  this.AdId = purchase.AdId;
  this.Paid = purchase.Paid;

};

Purchase.create = (newPurchase, result) => {
  sql.query("INSERT INTO purchase SET ?", newPurchase, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created purchase: ", { id: res.insertId, ...newPurchase });
    result(null, { id: res.insertId, ...newPurchase });
  });
};

Purchase.findById = (purchaseId, result) => {
  sql.query(`SELECT * FROM purchase WHERE id = ${purchaseId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found purchase: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Purchase with the id
    result({ kind: "not_found" }, null);
  });
};

Purchase.getAll = result => {
  sql.query("SELECT * FROM purchase", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("purchases: ", res);
    result(null, res);
  });
};

Purchase.updateById = (id, purchase, result) => {
  sql.query(
    "UPDATE purchase SET Date = ?, UserId = ?,  AdId = ?, Paid = ? WHERE id = ?",
    [purchase.Date, purchase.UserId, purchase.AdId, purchase.Paid,  parseInt(id)],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Purchase with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated purchase: ", { id: id, ...purchase });
      result(null, { id: id, ...purchase });
    }
  );
};

Purchase.pay = (id, result) => {
  sql.query(
    "UPDATE purchase SET Paid = 1 WHERE id = ?",
    [id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Purchase with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("successful paid for purchase: ", {id: id});
      result(null,{id: id });
    }
  );
};

Purchase.remove = (id, result) => {
  sql.query("DELETE FROM purchase WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Purchase with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted purchase with id: ", id);
    result(null, res);
  });
};

Purchase.removeAll = result => {
  sql.query("DELETE FROM purchase", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} purchases`);
    result(null, res);
  });
};


// select * from purchase, user where purchase.userId = user.Id AND purchase.UserId = 1;

Purchase.findByUser = (userId, result) => {
  sql.query(`SELECT * FROM purchase WHERE userId = ${userId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found purchase: ", res);
      result(null, res);
      return;
    }

    // not found Purchase with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = Purchase;