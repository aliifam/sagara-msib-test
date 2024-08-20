import prisma from "../config/database.js";

class ShirtRepository {
  async create(data) {
    return await prisma.shirt.create({ data });
  }

  async findAll() {
    return await prisma.shirt.findMany();
  }

  async find(query) {
    return await prisma.shirt.findMany({ where: query });
  }

  async update(id, data) {
    return await prisma.shirt.update({
      where: { id },
      data,
    });
  }

  async delete(id) {
    return await prisma.shirt.delete({
      where: { id },
    });
  }
}

export default new ShirtRepository();
