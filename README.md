<!-- อัพเดต PG Docker -->
docker compose down 
หรือ
docker compose down -v //อันตรายข้อมูลหาย

docker run --rm --network myproject_default -i -v $(pwd -W)/atlas:/migrations arigaio/atlas schema apply --url "postgres://postgres@db:5432/postgres?sslmode=disable" --to "file://migrations/shop_online.hcl"

docker compose up