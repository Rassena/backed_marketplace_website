//current in work

const sql = require("./db.js");

// constructor
const Ad = function(analytic) {
  this.Header = analytic.Header;
  this.Description = analytic.Description;
  this.Price = analytic.Price;
  this.Negotiable = analytic.Negotiable;
  this.PostDate = analytic.PostDate;
  this.DueDate = analytic.DueDate;
  this.Id = analytic.Id;
  this.UserId = analytic.UserId;
  this.SubCategoryName = analytic.SubCategoryName;

};

Ad.create = (newAd, result) => {
  sql.query("INSERT INTO ad SET ?", newAd, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created ad: ", { id: res.insertId, ...newAd });
    result(null, { id: res.insertId, ...newAd });
  });
};

Ad.findById = (adId, result) => {
  sql.query(`SELECT * FROM ad WHERE id = ${adId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found ad: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Ad with the id
    result({ kind: "not_found" }, null);
  });
};

Ad.findByDates = (adId, result) => {
  sql.query(`SELECT * FROM ad WHERE id = ${adId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found ad: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Ad with the id
    result({ kind: "not_found" }, null);
  });
};



Ad.getAll = result => {
  sql.query("SELECT * FROM ad", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("ads: ", res);
    result(null, res);
  });
};

Ad.getPage = (page,result) => {
  onPage = 5;
  sql.query(
    "SELECT * FROM ad LIMIT ? OFFSET ?",
    [onPage, onPage*(parseInt(page)-1)],
   (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("ads: ", res);
    result(null, res);
  });
};


Ad.updateById = (id, ad, result) => {
  sql.query(
    "UPDATE ad SET Header = ?,  Description = ?, Price = ?, Negotiable = ?,  PostDate = ?, DueDate = ?, UserId = ?, subCategoryName = ? WHERE id = ?",
    [ad.Header, ad.Description, ad.Price, ad.Negotiable, ad.PostDate, ad.DueDate, ad.UserId, ad.SubCategoryName, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Ad with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated ad: ", { id: id, ...ad });
      result(null, { id: id, ...ad });
    }
  );
};

Ad.remove = (id, result) => {
  sql.query("DELETE FROM ad WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Ad with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted ad with id: ", id);
    result(null, res);
  });
};

Ad.removeAll = result => {
  sql.query("DELETE FROM ad", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} ads`);
    result(null, res);
  });
};

module.exports = Ad;