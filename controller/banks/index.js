"use strict";
let DataBase = require("../common/database");
const GAED = require("../GAED");

let DB_Table_Name = "banks";

module.exports = class banks {
  constructor(bank_id) {
    this.bank_id = bank_id;
  }

  async get_all() {
    return await new DataBase(DB_Table_Name).DB_query(
      "SELECT * FROM banks WHERE archived = false"
    );
  }

  async get() {
    return await new GAED(DB_Table_Name, this.bank_id).get();
  }

  async add(data) {
    return await new GAED(DB_Table_Name, this.bank_id).add(data);
  }

  async edit(data) {
    return await new GAED(DB_Table_Name, this.bank_id).edit(data);
  }

  async delete(data) {
    return await new GAED(DB_Table_Name, this.bank_id).delete(data);
  }
};
