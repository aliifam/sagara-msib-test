import ShirtRepository from "../repositories/shirt.repository.js";

class ShirtService {
  async createShirt(data) {
    return await ShirtRepository.create(data);
  }

  async getAllShirts() {
    return await ShirtRepository.findAll();
  }

  async getAvailableShirts() {
    return await ShirtRepository.find({ stock: { gt: 0 } });
  }

  async searchShirts(color, size) {
    return await ShirtRepository.find({ color, size });
  }

  async updateStock(id, amount) {
    const shirt = await ShirtRepository.find({ id });
    if (shirt) {
      if (amount < 0 && shirt[0].stock < Math.abs(amount)) {
        throw new Error("Stock can't be negative");
      }
      shirt[0].stock += amount;
      return await ShirtRepository.update(id, { stock: shirt[0].stock });
    }
    throw new Error("Shirt not found");
  }

  async editShirt(id, data) {
    return await ShirtRepository.update(id, data);
  }

  async deleteShirt(id) {
    return await ShirtRepository.delete(id);
  }

  async getOutOfStockShirts() {
    return await ShirtRepository.find({ stock: 0 });
  }

  async getLowStockShirts() {
    return await ShirtRepository.find({ stock: { lt: 5 } });
  }
}

export default new ShirtService();
