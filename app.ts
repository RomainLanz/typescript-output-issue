import { DateTime } from "luxon";
import { column } from "@adonisjs/lucid/orm";

class User {
  @column.dateTime()
  declare createdAt: DateTime;
}
