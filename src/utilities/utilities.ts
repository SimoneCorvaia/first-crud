import { Product } from '../types/product.type';
import { User } from '../types/user.type';

//FUNZIONE PER GENERARE UN NUOVO ID UTENTE
export function generateNeWId({
    elements,
}: {
    elements: Product[] | User[];
}): number {
    return (
        elements.reduce((max, element) => {
            return Math.max(+element.id, max);
        }, 0) + 1
    );
}