import prisma from "../src/config/database.js";
import { faker } from "@faker-js/faker";

async function main() {
  const shirtsData = Array.from({ length: 100 }, () => ({
    // name: `Baju ${faker.commerce.productName()}`,
    color: faker.color.human(),
    size: faker.helpers.arrayElement(["S", "M", "L", "XL"]),
    price: faker.datatype.number({ min: 10000, max: 1000000 }),
    stock: faker.datatype.number({ min: 1, max: 100 }),
  }));

  for (const shirt of shirtsData) {
    await prisma.shirt.create({
      data: shirt,
    });
  }

  console.log("Seed data has been added");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
