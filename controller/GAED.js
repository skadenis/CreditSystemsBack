"use strict";
let DataBase = require("./common/database");

module.exports = class GetAddEdit {
  constructor(DB_Table_Name, id) {
    this.id = id;
    this.DB_Table_Name = DB_Table_Name;
  }

  async get() {
    let data = await new DataBase(this.DB_Table_Name).DB_query(
      "SELECT * FROM " + this.DB_Table_Name + " WHERE id = $1",
      [this.id]
    );
    return {
      status: data.length > 0 ? 200 : 404,
      data: data.length > 0 ? data[0] : {},
    };
  }

  async add(data) {
    let info = await new DataBase(this.DB_Table_Name).add(data);
    return {
      status: 200,
      data: info,
    };
  }

  async edit(data) {
    let result = await new DataBase(this.DB_Table_Name).edit(data);
    return {
      status: 200,
      data: result,
    };
  }

  async delete(data) {
    return await this.edit({
      id: data.id,
      archived: true,
      status: 4,
    });
  }

  async restore(data) {
    return await this.edit({
      id: data.id,
      archived: false,
      status: 1,
    });
  }
};
