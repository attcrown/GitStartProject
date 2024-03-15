schema "myproject" {}
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
  column "active" {
    type = boolean
    null = false
  }
  primary_key {
    columns = [column.id]
  }
}