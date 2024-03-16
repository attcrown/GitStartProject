schema "myproject" {}
table "detail_user" {
  schema = schema.myproject
  column "id" {
    type = varchar(100)
    null = false
  }
  column "first_name" {
    type = varchar(50)
    null = false
  }
  column "last_name" {
    type = varchar(50)
    null = false
  }
  column "date" {
    type = date
    null = false
  }
  column "created_at" {
    type    = timestamptz
    default = sql("now()")
  }
  column "updated_at" {
    type    = timestamptz
    default = sql("now()")
  }
  column "deleted_at" {
    type = timestamptz
    null = true
  }
  primary_key {
    columns = [column.id]
  }
}
table "type_items" {
  schema = schema.myproject
  column "id" {
    null    = false
    type    = uuid
    default = sql("gen_random_uuid()")
  }
  column "seq_no" {
    null = false
    type = int
  }
  column "name" {
    null = true
    type = varchar(100)
  }
  column "created_at" {
    type    = timestamptz
    default = sql("now()")
  }
  column "updated_at" {
    type    = timestamptz
    default = sql("now()")
  }
  column "deleted_at" {
    type = timestamptz
    null = true
  }
  primary_key {
    columns = [column.id]
  }
}
table "items_store" {
  schema = schema.myproject
  column "id" {
    null    = false
    type    = uuid
    default = sql("gen_random_uuid()")
  }
  column "type_id" {
    type = uuid
    null = true
  }
  column "name" {
    type = varchar(100)
    null = false
  }
  column "price" {
    type = float
    null = false
  }
  column "unit" {
    type = int
    null = false
  }
  column "description" {
    type = varchar(255)
    null = true
  }
  column "uid_created" {
    type = varchar(100)
    null = false
  }
  column "created_at" {
    type    = timestamptz
    default = sql("now()")
  }
  column "updated_at" {
    type    = timestamptz
    default = sql("now()")
  }
  column "deleted_at" {
    type = timestamptz
    null = true
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "type_itemsId_fk" {
    columns     = [column.type_id]
    ref_columns = [table.type_items.column.id]
  }
  foreign_key "uid_created_fk" {
    columns     = [column.uid_created]
    ref_columns = [table.detail_user.column.id]
  }
}