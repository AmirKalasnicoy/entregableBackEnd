class Manager {
  constructor(model) {
    this.model = model;
  }
  create = async (data) => {
    try {
      const one = await this.model.create(data);
      return one;
    } catch (error) {
      throw error;
    }
  };
  read = async (filter) => {
    try {
      const all = await this.model.find(filter).lean();
      return all;
    } catch (error) {
      throw error;
    }
  };
  readById = async (id) => {
    try {
      const one = await this.model.findOne({ _id: id }).lean();
      return one;
    } catch (error) {
      throw error;
    }
  };
  updateById = async (id, data) => {
    try {
      const opts = { new: true };
      const one = await this.model.findOneAndUpdate({ _id: id }, data, opts);
      return one;
    } catch (error) {
      throw error;
    }
  };
  destroyById = async (id) => {
    try {
      const one = await this.model.findOneAndDelete({ _id: id });
      return one;
    } catch (error) {
      throw error;
    }
  };
  paginate = async (page, limit, filter) => {
    try {
      const all = await this.model.paginate(filter, { page, limit });
      return all;
    } catch (error) {
      throw error;
    }
  };
}

export default Manager;