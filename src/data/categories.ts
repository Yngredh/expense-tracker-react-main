import { Category } from '../types/Category';

export const categories: Category = {
    food: { title: 'Alimentação', color: 'blue', expense: true },
    rent: { title: 'Fixos', color: 'gray', expense: true },
    salary: { title: 'Salário', color: 'green', expense: false },
    entertainment: { title: 'Entretenimento', color: 'pink', expense: true },
}