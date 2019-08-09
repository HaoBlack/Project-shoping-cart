import ListOfTasks from "./listOfTasks";
import Task from "./task";
import TaskData from "./taskData";

let listOfTasks = new ListOfTasks();

for (let task of TaskData) {
  let id = task.id;
  let sku = task.sku;
  let title = task.title;
  let description = task.description;
  let availableSizes = task.availableSizes;
  let style = task.style;
  let price = task.price;
  let installments = task.installments;
  let currencyId = task.currencyId;
  let currencyFormat = task.currencyFormat;
  let isFreeShipping = task.isFreeShipping;

  let newTask = new Task(
    id,
    sku,
    title,
    description,
    availableSizes,
    style,
    price,
    installments,
    currencyId,
    currencyFormat,
    isFreeShipping
  );
  listOfTasks.addTask(newTask);
}
export default listOfTasks;
