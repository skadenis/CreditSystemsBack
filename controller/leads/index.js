"use strict";
let DataBase = require("../common/database");
const GAED = require("../GAED");

let DB_Table_Name = "leads";

module.exports = class leads {
  constructor(lead_id) {
    this.lead_id = lead_id;
  }

  async get_all() {
    return await new DataBase(DB_Table_Name).DB_query(
      "SELECT * FROM leads WHERE archived = false"
    );
  }

  async get() {
    return await new GAED(DB_Table_Name, this.lead_id).get();
  }

  async get_deleted() {
    return await new DataBase(DB_Table_Name).DB_query("SELECT * FROM leads");
  }

  async get_filtered(data) {
    return await new DataBase(DB_Table_Name).DB_query(
      "SELECT * FROM leads WHERE archived = false AND credit_target = $1 AND desired_amount BETWEEN $2 AND $3 AND term BETWEEN $4 AND $5",
      [
        data.type,
        data.min_amount,
        data.max_amount,
        data.min_term,
        data.max_term,
      ]
    );
  }

  async add(data) {
    return await new GAED(DB_Table_Name, this.lead_id).add(data);
  }

  async edit(data) {
    return await new GAED(DB_Table_Name, this.lead_id).edit(data);
  }

  async delete(data) {
    return await new GAED(DB_Table_Name, this.lead_id).delete(data);
  }

  async restore(data) {
    return await new GAED(DB_Table_Name, this.lead_id).restore(data);
  }
};
