import { Car } from '../interfaces/car.interface';
import ItemModel from '../models/item'

export const getItems = async () => {
  const response  = await ItemModel.find({})
  return response
}

export const insertItem = async (item: Car) => {
  const response = await ItemModel.create(item)
  return response
}

export const getItem = async (id: string) => {
  const response = await ItemModel.findById(id) 
  return response
}

export const updateItem = async (id: string, data: Car) => {
  const response = await ItemModel.findByIdAndUpdate(id, data, {new: true}) 
  return response
}

export const deleteItem = async (id: string) => {
  const response  = await ItemModel.findByIdAndRemove(id)
  return response
}