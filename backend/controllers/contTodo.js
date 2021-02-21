const todoModel = require("../model/todoModel");
const path = require("path");

exports.getTodo = async (req, res) => {
  const Tododata = await todoModel.find();
  res.send(Tododata);
};

exports.postTodo = (req, res) => {
  const Tododata = new todoModel({
    title: req.body.title,
    time: req.body.time,
  });

  Tododata.save().then((data) => {
    res.json(data);
  });
};

exports.deleteTodo = async (req, res) => {
  const Tododata = await todoModel.findOneAndDelete({ _id: req.params.id });
  res.send(JSON.stringify(Tododata));
};

exports.patchTodo = async (req, res) => {
  console.log(req.body.title)
  const Tododata = await todoModel.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { title: req.body.title } },
    {new: true}
  );

  res.send(JSON.stringify(Tododata));
};
