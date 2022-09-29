"use strict";
let DataBase = require("../common/database");
const GAED = require("../GAED");

let DB_Table_Name = "products";

module.exports = class products {
  constructor(product_id) {
    this.product_id = product_id;
  }

  async get_all() {
    return await new DataBase(DB_Table_Name).DB_query(
      "SELECT * FROM products WHERE archived = false"
    );
  }

  async get_banks_products(BankId) {
    return await new DataBase(DB_Table_Name).DB_query(
      "SELECT * FROM products WHERE bank_id = $1 AND archived = false",
      [BankId]
    );
  }

  async get() {
    return await new GAED(DB_Table_Name, this.product_id).get();
  }

  async get_filtered(data) {
    return await new DataBase(DB_Table_Name).DB_query(
      "SELECT * FROM products WHERE archived = false AND type = $1 AND min_amount <= $2 AND max_amount >= $2",
      [data.credit_target, data.desired_amount]
    );
  }

  async add(data) {
    return await new GAED(DB_Table_Name, this.product_id).add(data);
  }

  async edit(data) {
    return await new GAED(DB_Table_Name, this.product_id).edit(data);
  }

  async delete(data) {
    return await new GAED(DB_Table_Name, this.product_id).delete(data);
  }
};
