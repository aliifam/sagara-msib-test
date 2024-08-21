import ShirtService from "../services/shirt.service.js";

class ShirtController {
  async create(req, res) {
    try {
      const shirt = await ShirtService.createShirt(req.body);
      res.status(201).json(shirt);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const shirts = await ShirtService.getAllShirts();
      res.status(200).json(shirts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAvailable(req, res) {
    try {
      const shirts = await ShirtService.getAvailableShirts();
      res.status(200).json(shirts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async search(req, res) {
    try {
      const { color, size } = req.query;
      const shirts = await ShirtService.searchShirts(color, size);
      res.status(200).json(shirts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateStock(req, res) {
    try {
      const { id } = req.params;
      const { amount } = req.body;
      console.log(id, amount);
      const shirt = await ShirtService.updateStock(id, amount);
      res.status(200).json(shirt);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      await ShirtService.deleteShirt(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getOutOfStock(req, res) {
    try {
      const shirts = await ShirtService.getOutOfStockShirts();
      res.status(200).json(shirts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getLowStock(req, res) {
    try {
      const shirts = await ShirtService.getLowStockShirts();
      res.status(200).json(shirts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new ShirtController();
